import React from "react";

const PrivacyPolicy = () => {
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
        Privacy Policy
      </h1>
      <p style={{ textAlign: "center", marginBottom: "40px", color: "#888" }}>
        Last Updated: February 2026
      </p>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "1.5rem", color: "#333", marginBottom: "15px" }}>
          1. Introduction
        </h2>
        <p>
          At Trendify, we take your privacy seriously. This Privacy Policy
          outlines how we collect, use, and protect your personal information
          when you use our website and services.
        </p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "1.5rem", color: "#333", marginBottom: "15px" }}>
          2. Information We Collect
        </h2>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
          <li style={{ marginBottom: "10px" }}>
            <strong>Personal Information:</strong> Name, email address, shipping
            address, billing information, and phone number when you make a
            purchase or create an account.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Usage Data:</strong> Information about how you access and
            use our site, including device type, browser version, and pages
            visited.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "1.5rem", color: "#333", marginBottom: "15px" }}>
          3. How We Use Your Information
        </h2>
        <p>We use your data to:</p>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
          <li>Process and fulfill your orders.</li>
          <li>Communicate with you about order status and updates.</li>
          <li>Improve our website and customer service.</li>
          <li>Send promotional emails (you can opt-out at any time).</li>
        </ul>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "1.5rem", color: "#333", marginBottom: "15px" }}>
          4. Data Security
        </h2>
        <p>
          We implement industry-standard security measures to protect your
          personal information. However, no method of transmission over the
          internet is 100% secure.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: "1.5rem", color: "#333", marginBottom: "15px" }}>
          5. Contact Us
        </h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at privacy@trendify.com.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
