import React from 'react';

function Contact() {
  return (
    <section style={{ maxWidth: "500px", margin: "2rem auto", padding: "2rem", borderRadius: "10px", background: "#f9f9f9", textAlign: "center" }}>
      <h1>Contact Fi Studio Inc</h1>
      <p>
        We'd love to hear from you! Reach out to us using the information below.
      </p>
      <ul style={{ listStyle: "none", padding: 0, fontSize: "1.1rem" }}>
        <li>
          <strong>Email:</strong>{" "}
          <a href="mailto:hi@fistudio.com">hi@fistudio.com</a>
        </li>
        <li>
          <strong>Phone:</strong> +1 (555) 123-4567
        </li>
        <li>
          <strong>Address:</strong> 123 Market St, San Francisco, CA 94103
        </li>
      </ul>
      <div style={{ margin: "2rem 0" }}>
        <iframe
          title="Fi Studio Inc Location"
          src="https://www.google.com/maps?q=123+Market+St,+San+Francisco,+CA+94103&output=embed"
          width="100%"
          height="250"
          style={{ border: 0, borderRadius: "8px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <p>
        Or fill out our <a href="mailto:hi@fistudio.com">contact form</a> and we’ll get back to you soon!
      </p>
    </section>
  );
}
export default Contact;