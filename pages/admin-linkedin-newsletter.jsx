import { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";

export default function AdminLinkedInNewsletter() {
  const [adminKey, setAdminKey] = useState("");
  const [linkedinPostUrl, setLinkedinPostUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);

  const apiUrl = process.env.NEXT_PUBLIC_BNI_NEWSLETTER_API_URL;
  const apiKey = process.env.NEXT_PUBLIC_BNI_NEWSLETTER_API_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setResult(null);

    if (!adminKey.trim()) {
      setMessage("Please enter admin access key.");
      return;
    }

    if (!linkedinPostUrl.trim()) {
      setMessage("Please enter LinkedIn post URL.");
      return;
    }

    if (!linkedinPostUrl.startsWith("https://www.linkedin.com/")) {
      setMessage("Please enter a valid LinkedIn post URL.");
      return;
    }

    if (!apiUrl || !apiKey) {
      setMessage("API configuration is missing.");
      return;
    }

    const confirmSend = window.confirm(
      "Are you sure you want to send this LinkedIn post to newsletter subscribers?"
    );

    if (!confirmSend) return;

    try {
      setLoading(true);

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
        body: JSON.stringify({
          adminKey: adminKey.trim(),
          linkedinPostUrl: linkedinPostUrl.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setMessage(data.message || "Failed to send newsletter.");
        setResult(data);
        return;
      }

      setMessage("Newsletter sent successfully.");
      setResult(data);
      setLinkedinPostUrl("");
    } catch (error) {
      setMessage("Something went wrong while sending newsletter.");
      setResult({
        error: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      

      <section className="inner-banner-wrapper who-we-are-banner">
        <div className="inner-banner-content">
          <h1>LinkedIn Newsletter Admin</h1>
          <div className="breadcrumb-wrapper">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active">Newsletter Admin</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="contact-form-wrapper" style={{ padding: "60px 0" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <div
                style={{
                  background: "#fff",
                  padding: "30px",
                  borderRadius: "12px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                }}
              >
                <h2 style={{ marginBottom: "10px" }}>
                  Send LinkedIn Post to Subscribers
                </h2>

                <p style={{ color: "#666", marginBottom: "25px" }}>
                  Paste the LinkedIn post URL below. This will send an email to
                  newsletter subscribers.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <label className="form-label">Admin Access Key</label>
                    <input
                      type="password"
                      className="form-control"
                      value={adminKey}
                      onChange={(e) => setAdminKey(e.target.value)}
                      placeholder="Enter admin access key"
                      autoComplete="off"
                    />
                  </div>

                  <div className="form-group mb-4">
                    <label className="form-label">LinkedIn Post URL</label>
                    <input
                      type="url"
                      className="form-control"
                      value={linkedinPostUrl}
                      onChange={(e) => setLinkedinPostUrl(e.target.value)}
                      placeholder="https://www.linkedin.com/posts/..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                    style={{
                      minWidth: "180px",
                      padding: "12px 20px",
                      borderRadius: "6px",
                    }}
                  >
                    {loading ? "Sending..." : "Send Newsletter"}
                  </button>
                </form>

                {message && (
                  <div
                    style={{
                      marginTop: "25px",
                      padding: "14px 16px",
                      borderRadius: "6px",
                      background: result?.success ? "#e9f8ef" : "#fff3f3",
                      color: result?.success ? "#137333" : "#b00020",
                    }}
                  >
                    {message}
                  </div>
                )}

                {result && (
                  <div
                    style={{
                      marginTop: "20px",
                      background: "#f8f9fa",
                      padding: "16px",
                      borderRadius: "6px",
                      fontSize: "14px",
                      overflowX: "auto",
                    }}
                  >
                    <strong>API Response:</strong>
                    <pre style={{ marginTop: "10px", whiteSpace: "pre-wrap" }}>
                      {JSON.stringify(result, null, 2)}
                    </pre>
                  </div>
                )}

                <p style={{ marginTop: "25px", fontSize: "13px", color: "#777" }}>
                  Note: This version does not store sent history. Please avoid
                  submitting the same LinkedIn post multiple times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}