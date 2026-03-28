import React from "react";

const Careers = () => {
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
          marginBottom: "20px",
          color: "#333",
        }}
      >
        Join Our Team
      </h1>
      <p
        style={{
          textAlign: "center",
          fontSize: "1.2rem",
          color: "#666",
          marginBottom: "60px",
        }}
      >
        We're on a mission to redefine fashion e-commerce. Are you ready to make
        an impact?
      </p>

      <section style={{ marginBottom: "50px" }}>
        <h2
          style={{
            fontSize: "2rem",
            color: "#444",
            marginBottom: "30px",
            borderBottom: "2px solid #eee",
            paddingBottom: "10px",
          }}
        >
          Open Positions
        </h2>

        <div
          style={{
            marginBottom: "30px",
            padding: "20px",
            border: "1px solid #eee",
            borderRadius: "8px",
          }}
        >
          <h3
            style={{ fontSize: "1.5rem", color: "#333", marginBottom: "10px" }}
          >
            Senior Frontend Engineer
          </h3>
          <p style={{ color: "#888", marginBottom: "10px" }}>
            Remote • Full-time
          </p>
          <p style={{ color: "#666", marginBottom: "15px" }}>
            We are looking for an experienced React developer to lead our
            frontend team and build world-class user interfaces.
          </p>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#333",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Apply Now
          </button>
        </div>

        <div
          style={{
            marginBottom: "30px",
            padding: "20px",
            border: "1px solid #eee",
            borderRadius: "8px",
          }}
        >
          <h3
            style={{ fontSize: "1.5rem", color: "#333", marginBottom: "10px" }}
          >
            Product Designer
          </h3>
          <p style={{ color: "#888", marginBottom: "10px" }}>
            New York, NY • Hybrid
          </p>
          <p style={{ color: "#666", marginBottom: "15px" }}>
            Help us design intuitive and beautiful shopping experiences for
            millions of users.
          </p>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#333",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Apply Now
          </button>
        </div>

        <div
          style={{
            marginBottom: "30px",
            padding: "20px",
            border: "1px solid #eee",
            borderRadius: "8px",
          }}
        >
          <h3
            style={{ fontSize: "1.5rem", color: "#333", marginBottom: "10px" }}
          >
            Customer Success Specialist
          </h3>
          <p style={{ color: "#888", marginBottom: "10px" }}>
            Remote • Full-time
          </p>
          <p style={{ color: "#666", marginBottom: "15px" }}>
            Be the voice of Trendify and help our customers have the best
            shopping experience possible.
          </p>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#333",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Apply Now
          </button>
        </div>
      </section>

      <section
        style={{
          textAlign: "center",
          backgroundColor: "#f9f9f9",
          padding: "40px",
          borderRadius: "8px",
        }}
      >
        <h2 style={{ fontSize: "1.8rem", color: "#444", marginBottom: "15px" }}>
          Don't see the right fit?
        </h2>
        <p style={{ fontSize: "1.1rem", color: "#666", marginBottom: "20px" }}>
          We are always looking for talent. Send your resume to
          careers@trendify.com and we'll keep you in mind for future openings.
        </p>
      </section>
    </div>
  );
};

export default Careers;
