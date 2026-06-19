import Head from "next/head";
import SummitHero from "../../components/leadership-summit/SummitHero";
import SummitAbout from "../../components/leadership-summit/SummitAbout";
import SummitSpeakers from "../../components/leadership-summit/SummitSpeakers";
import SummitSchedule from "../../components/leadership-summit/SummitSchedule";
import SummitExpectations from "../../components/leadership-summit/SummitExpectations";

export default function LeadershipSummitRegisterPage() {
  return (
    <>
      <Head>
        <title>2026 Business Needs Inc. Leadership Summit</title>
        <meta
          name="description"
          content="Register for 2026 Business Needs Inc. Leadership Summit"
        />
      </Head>

      <main>
        <SummitHero />
        <SummitAbout />
        <SummitSpeakers />
        <SummitSchedule />
        <SummitExpectations />
      </main>
    </>
  );
}