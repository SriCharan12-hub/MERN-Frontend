import React from "react";

const TermsOfService = () => {
  return (
    <div
      style={{
        padding: "80px 20px",
        maxWidth: "1000px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        color: "#444",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "40px", color: "#333" }}>
        Terms of Service
      </h1>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "1.5rem", color: "#333", marginBottom: "15px" }}>
          1. Acceptance of Terms
        </h2>
        <p>
          By accessing and using the Trendify website, you accept and agree to
          be bound by the terms and provisions of this agreement.
        </p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "1.5rem", color: "#333", marginBottom: "15px" }}>
          2. Use License
        </h2>
        <p>
          Permission is granted to temporarily download one copy of the
          materials (information or software) on Trendify's website for
          personal, non-commercial transitory viewing only.
        </p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "1.5rem", color: "#333", marginBottom: "15px" }}>
          3. User Account
        </h2>
        <p>
          You are responsible for maintaining the confidentiality of your
          account and password and for restricting access to your computer. You
          agree to accept responsibility for all activities that occur under
          your account or password.
        </p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "1.5rem", color: "#333", marginBottom: "15px" }}>
          4. Governing Law
        </h2>
        <p>
          Any claim relating to Trendify's website shall be governed by the laws
          of the State of New York without regard to its conflict of law
          provisions.
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;
