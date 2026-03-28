import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We will get back to you shortly.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      style={{
        padding: "80px 20px",
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "40px", color: "#333" }}>
        Contact Us
      </h1>
      <p style={{ textAlign: "center", marginBottom: "40px", color: "#666" }}>
        Have questions? We'd love to hear from you. Send us a message and we'll
        respond as soon as possible.
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
        <form onSubmit={handleSubmit} style={{ flex: "1", minWidth: "300px" }}>
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "bold",
                color: "#444",
              }}
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "bold",
                color: "#444",
              }}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "bold",
                color: "#444",
              }}
            >
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            ></textarea>
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "15px",
              backgroundColor: "#333",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              fontSize: "1.1rem",
              cursor: "pointer",
            }}
          >
            Send Message
          </button>
        </form>

        <div
          style={{
            flex: "1",
            minWidth: "250px",
            padding: "20px",
            backgroundColor: "#f9f9f9",
            borderRadius: "8px",
          }}
        >
          <h3 style={{ marginBottom: "20px", color: "#333" }}>Get in Touch</h3>
          <div style={{ marginBottom: "20px" }}>
            <p style={{ fontWeight: "bold", marginBottom: "5px" }}>Email</p>
            <p style={{ color: "#666" }}>shatakshi3333@gmail.com</p>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <p style={{ fontWeight: "bold", marginBottom: "5px" }}>Phone</p>
            <p style={{ color: "#666" }}>+91 7675904571</p>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <p style={{ fontWeight: "bold", marginBottom: "5px" }}>Address</p>
            <p style={{ color: "#666" }}>
              PVT Market, Sarrornagar,
              <br />
              Kothapet, Hyderabad, Telangana
            </p>
          </div>
          <div>
            <p style={{ fontWeight: "bold", marginBottom: "5px" }}>Hours</p>
            <p style={{ color: "#666" }}>Mon-Fri: 9am - 6pm IST</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
