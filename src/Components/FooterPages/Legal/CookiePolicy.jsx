import React from "react";

const CookiePolicy = () => {
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
        Cookie Policy
      </h1>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "1.5rem", color: "#333", marginBottom: "15px" }}>
          What Are Cookies?
        </h2>
        <p>
          Cookies are small text files that are stored on your computer or
          mobile device when you visit a website. They allow the website to
          remember your actions and preferences (such as login, language, font
          size, and other display preferences) over a period of time.
        </p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "1.5rem", color: "#333", marginBottom: "15px" }}>
          How We Use Cookies
        </h2>
        <p>We use cookies for the following purposes:</p>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
          <li style={{ marginBottom: "10px" }}>
            <strong>Essential Cookies:</strong> Necessary for the website to
            function properly (e.g., maintaining your shopping cart).
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Analytics Cookies:</strong> Help us understand how visitors
            interact with our website by collecting and reporting information
            anonymously.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Marketing Cookies:</strong> Used to track visitors across
            websites to display ads that are relevant and engaging.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "1.5rem", color: "#333", marginBottom: "15px" }}>
          Managing Cookies
        </h2>
        <p>
          You can control and/or delete cookies as you wish. You can delete all
          cookies that are already on your computer and you can set most
          browsers to prevent them from being placed. However, if you do this,
          you may have to manually adjust some preferences every time you visit
          a site and some services and functionalities may not work.
        </p>
      </section>
    </div>
  );
};

export default CookiePolicy;
