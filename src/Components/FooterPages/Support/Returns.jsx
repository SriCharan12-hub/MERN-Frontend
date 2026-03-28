import React from "react";

const Returns = () => {
  return (
    <div
      style={{
        padding: "80px 20px",
        maxWidth: "1000px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "3rem",
          marginBottom: "40px",
          color: "#333",
        }}
      >
        Returns & Refunds
      </h1>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "1.8rem", color: "#444", marginBottom: "20px" }}>
          Our Policy
        </h2>
        <p style={{ fontSize: "1.1rem", color: "#666", marginBottom: "15px" }}>
          We want you to love what you ordered! If you aren't 100% satisfied,
          you can return your items within{" "}
          <strong style={{ color: "#333" }}>30 days</strong> of delivery.
        </p>
        <p style={{ fontSize: "1.1rem", color: "#666" }}>
          Items must be unworn, unwashed, and have original tags attached. Final
          sale items cannot be returned.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "1.8rem", color: "#444", marginBottom: "20px" }}>
          How to Start a Return
        </h2>
        <ol style={{ paddingLeft: "20px", fontSize: "1.1rem", color: "#666" }}>
          <li style={{ marginBottom: "10px" }}>
            Log in to your account and go to "Order History".
          </li>
          <li style={{ marginBottom: "10px" }}>
            Select the order and items you wish to return.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Print the prepaid shipping label sent to your email.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Pack your items and drop off the package at any authorized shipping
            center.
          </li>
        </ol>
      </section>

      <div
        style={{
          padding: "20px",
          backgroundColor: "#eef2f5",
          borderRadius: "5px",
          borderLeft: "4px solid #1877F2",
        }}
      >
        <h3 style={{ margin: "0 0 10px 0", color: "#1877F2" }}>
          Refund Timeline
        </h3>
        <p style={{ margin: 0, color: "#555" }}>
          Once we receive your return, please allow 5-7 business days for us to
          process it. Your refund will be issued to your original payment
          method.
        </p>
      </div>
    </div>
  );
};

export default Returns;
