import React from "react";

const AboutUs = () => {
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
        About Trendify
      </h1>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "2rem", color: "#444", marginBottom: "20px" }}>
          Our Story
        </h2>
        <p style={{ fontSize: "1.1rem", color: "#666", marginBottom: "20px" }}>
          Founded in 2024, Trendify began with a simple mission: to make
          high-quality, fashionable clothing accessible to everyone. What
          started as a small passion project in a garage has since grown into a
          global e-commerce platform, serving customers in over 50 countries.
        </p>
        <p style={{ fontSize: "1.1rem", color: "#666" }}>
          We believe that style is a way to say who you are without having to
          speak. That's why we work tirelessly to curate collections that help
          you express your unique personality.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "2rem", color: "#444", marginBottom: "20px" }}>
          Our Mission
        </h2>
        <p style={{ fontSize: "1.1rem", color: "#666" }}>
          To empower individuals to express themselves through fashion, while
          promoting sustainability and ethical manufacturing practices. We are
          committed to reducing our environmental footprint and ensuring fair
          labor practices across our supply chain.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: "2rem", color: "#444", marginBottom: "20px" }}>
          Why Choose Us?
        </h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li
            style={{ marginBottom: "15px", fontSize: "1.1rem", color: "#666" }}
          >
            ✔️ <strong>Quality Assurance:</strong> We handpick every item to
            ensure top-notch quality.
          </li>
          <li
            style={{ marginBottom: "15px", fontSize: "1.1rem", color: "#666" }}
          >
            ✔️ <strong>Sustainable Fashion:</strong> We are dedicated to
            eco-friendly practices.
          </li>
          <li
            style={{ marginBottom: "15px", fontSize: "1.1rem", color: "#666" }}
          >
            ✔️ <strong>Customer First:</strong> Our support team is here for you
            24/7.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;
