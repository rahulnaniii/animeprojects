import React from "react";

function About() {
  return (
    <section className="about-page" style={{ textAlign: "center", padding: "2rem" }}>
      <h1>About Us</h1>
      <img
        src="https://vitrina.ai/wp-content/uploads/2024/08/Animation-Studios-in-Canada-Today.webp"
        alt="Team working together"
        style={{ width: "300px", borderRadius: "12px", margin: "1rem 0" }}
      />
      <div className="about-content" style={{ maxWidth: "600px", margin: "0 auto" }}>
        <p>
          We’re <strong>Fi Studio Inc</strong>, a creative agency dedicated to crafting beautiful digital experiences.
          Located in San Francisco, CA, we’ve been shaping brands and building products users love.
        </p>
        <ul className="company-info" style={{ listStyle: "none", padding: 0 }}>
          <li><strong>Founded:</strong> 2010</li>
          <li><strong>Location:</strong> San Francisco, CA</li>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:hi@fistudio.com">hi@fistudio.com</a>
          </li>
        </ul>
        <p>
          Our passionate team combines design, development, and strategy to bring ideas to life. We
          believe in transparency, creativity, and client partnerships that feel like one team.
        </p>
        <p>
          Learn more about our work on{" "}
          <a href="/projects">Projects</a> or drop us a line via{" "}
          <a href="/contact">Contact</a>.
        </p>
      </div>
    </section>
  );
}

export default About;