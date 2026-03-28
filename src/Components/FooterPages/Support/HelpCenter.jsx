import React from "react";

const HelpCenter = () => {
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
        Help Center
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          marginBottom: "60px",
        }}
      >
        <div
          style={{
            padding: "30px",
            border: "1px solid #eee",
            borderRadius: "8px",
            textAlign: "center",
            boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
          }}
        >
          <i
            className="fa-solid fa-box-open"
            style={{ fontSize: "2rem", color: "#1877F2", marginBottom: "20px" }}
          ></i>
          <h3 style={{ marginBottom: "15px" }}>Orders & Shipping</h3>
          <p style={{ color: "#666" }}>
            Track packages, edit orders, or view shipping rates.
          </p>
        </div>
        <div
          style={{
            padding: "30px",
            border: "1px solid #eee",
            borderRadius: "8px",
            textAlign: "center",
            boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
          }}
        >
          <i
            className="fa-solid fa-arrows-rotate"
            style={{ fontSize: "2rem", color: "#FD1D1D", marginBottom: "20px" }}
          ></i>
          <h3 style={{ marginBottom: "15px" }}>Returns & Refunds</h3>
          <p style={{ color: "#666" }}>
            Start a return, check status, or read our policy.
          </p>
        </div>
        <div
          style={{
            padding: "30px",
            border: "1px solid #eee",
            borderRadius: "8px",
            textAlign: "center",
            boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
          }}
        >
          <i
            className="fa-solid fa-user-gear"
            style={{ fontSize: "2rem", color: "#4A8F4", marginBottom: "20px" }}
          ></i>
          <h3 style={{ marginBottom: "15px" }}>Account Settings</h3>
          <p style={{ color: "#666" }}>
            Update email, change password, or manage payment methods.
          </p>
        </div>
      </div>

      <section>
        <h2 style={{ fontSize: "2rem", color: "#444", marginBottom: "30px" }}>
          Frequently Asked Questions
        </h2>

        <details
          style={{
            marginBottom: "15px",
            padding: "15px",
            backgroundColor: "#f9f9f9",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          <summary style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
            How long does shipping take?
          </summary>
          <p style={{ marginTop: "10px", color: "#666" }}>
            Standard shipping typically takes 3-5 business days. Express
            shipping options are available at checkout.
          </p>
        </details>

        <details
          style={{
            marginBottom: "15px",
            padding: "15px",
            backgroundColor: "#f9f9f9",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          <summary style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
            Can I modify my order after placing it?
          </summary>
          <p style={{ marginTop: "10px", color: "#666" }}>
            We process orders quickly, so you only have a 30-minute window to
            make changes. Please contact support immediately if you need
            assistance.
          </p>
        </details>

        <details
          style={{
            marginBottom: "15px",
            padding: "15px",
            backgroundColor: "#f9f9f9",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          <summary style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
            Do you ship internationally?
          </summary>
          <p style={{ marginTop: "10px", color: "#666" }}>
            Yes! We ship to over 50 countries worldwide. Shipping costs and
            times vary by location.
          </p>
        </details>
      </section>
    </div>
  );
};

export default HelpCenter;
