import React from "react";

const Press = () => {
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
        Newsroom
      </h1>

      <div style={{ display: "grid", gap: "30px" }}>
        <article
          style={{ borderBottom: "1px solid #eee", paddingBottom: "30px" }}
        >
          <span
            style={{
              fontSize: "0.9rem",
              color: "#888",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            February 1, 2026
          </span>
          <h2 style={{ fontSize: "2rem", color: "#333", margin: "10px 0" }}>
            Trendify Announces New Sustainable Collection
          </h2>
          <p
            style={{ fontSize: "1.1rem", color: "#666", marginBottom: "15px" }}
          >
            We are proud to launch our "Earth First" line, featuring 100%
            recycled materials and eco-friendly dyes. This marks a significant
            milestone in our journey towards becoming a carbon-neutral company
            by 2030.
          </p>
          <a
            href="#"
            style={{
              color: "#1877F2",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Read More &rarr;
          </a>
        </article>

        <article
          style={{ borderBottom: "1px solid #eee", paddingBottom: "30px" }}
        >
          <span
            style={{
              fontSize: "0.9rem",
              color: "#888",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            January 15, 2026
          </span>
          <h2 style={{ fontSize: "2rem", color: "#333", margin: "10px 0" }}>
            Trendify Expands to European Markets
          </h2>
          <p
            style={{ fontSize: "1.1rem", color: "#666", marginBottom: "15px" }}
          >
            Following our success in North America, we are excited to bring the
            Trendify experience to customers in the UK, France, and Germany
            starting next month.
          </p>
          <a
            href="#"
            style={{
              color: "#1877F2",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Read More &rarr;
          </a>
        </article>

        <article
          style={{ borderBottom: "1px solid #eee", paddingBottom: "30px" }}
        >
          <span
            style={{
              fontSize: "0.9rem",
              color: "#888",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            December 10, 2025
          </span>
          <h2 style={{ fontSize: "2rem", color: "#333", margin: "10px 0" }}>
            Record Breaking Holiday Sales
          </h2>
          <p
            style={{ fontSize: "1.1rem", color: "#666", marginBottom: "15px" }}
          >
            Thanks to our loyal customers, Trendify celebrated its biggest
            holiday season yet, with over 1 million orders shipped worldwide.
          </p>
          <a
            href="#"
            style={{
              color: "#1877F2",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Read More &rarr;
          </a>
        </article>
      </div>

      <div
        style={{
          marginTop: "60px",
          padding: "30px",
          backgroundColor: "#f5f5f5",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
          Media Inquiries
        </h3>
        <p>For press kits and interview requests, please contact:</p>
        <p style={{ fontWeight: "bold", marginTop: "10px" }}>
          press@trendify.com
        </p>
      </div>
    </div>
  );
};

export default Press;
