import { useState } from "react";
import styles from "../../styles/LeadershipSummitRegister.module.css";

const initialForm = {
  fullName: "",
  currentCompany: "",
  designation: "",
  email: "",
  summitExpectation: "",
};

export default function SummitRegisterForm() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [registrationId, setRegistrationId] = useState("");
  const [error, setError] = useState("");

  const apiUrl = process.env.NEXT_PUBLIC_EVENT_REGISTER_API_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
    setMessage("");
  };

  const validateForm = () => {
    if (!form.fullName.trim()) return "Please enter your full name.";
    if (!form.currentCompany.trim()) return "Please enter your current company.";
    if (!form.designation.trim()) return "Please enter your designation.";
    if (!form.email.trim()) return "Please enter your email address.";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email.trim())) {
      return "Please enter a valid email address.";
    }

    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    if (!apiUrl) {
      setError("Registration API URL is not configured.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setMessage("");
      setRegistrationId("");

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: form.fullName.trim(),
          currentCompany: form.currentCompany.trim(),
          designation: form.designation.trim(),
          email: form.email.trim(),
          summitExpectation: form.summitExpectation.trim(),
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setError(result.message || "Registration failed. Please try again.");
        return;
      }

      setMessage(result.message);
      setRegistrationId(result.registrationId || "");
      setForm(initialForm);
    } catch (err) {
      console.error("Registration submit error:", err);
      setError("Unable to submit registration. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (message) {
    return (
      <div className={styles.successBox}>
        <h3>Registration Confirmed</h3>
        <p>{message}</p>
        {registrationId ? (
          <p>
            <strong>Registration ID:</strong> {registrationId}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <form className={styles.registerForm} onSubmit={handleSubmit}>
      <div className={styles.formRow}>
        <label>Full Name</label>
        <input
          aria-label="Full Name"
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
        />
      </div>

      <div className={styles.formRow}>
        <label>Current Company</label>
        <input
          aria-label="Current Company"
          type="text"
          name="currentCompany"
          value={form.currentCompany}
          onChange={handleChange}
        />
      </div>

      <div className={styles.formRow}>
        <label>Designation</label>
        <input
          aria-label="Designation"
          type="text"
          name="designation"
          value={form.designation}
          onChange={handleChange}
        />
      </div>

      <div className={styles.formRow}>
        <label>Email</label>
        <input
          aria-label="Email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div className={styles.formRow}>
        <label>
          What would make
          <br />
          this summit
          <br />
          valuable for you?
        </label>
        <textarea
          aria-label="What would make this summit valuable for you?"
          name="summitExpectation"
          value={form.summitExpectation}
          onChange={handleChange}
        />
      </div>

      {error ? <div className={styles.errorBox}>{error}</div> : null}

      <button type="submit" disabled={loading}>
        {loading ? "REGISTERING..." : "REGISTER NOW!"}
      </button>
    </form>
  );
}