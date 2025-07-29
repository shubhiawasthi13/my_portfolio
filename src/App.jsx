import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const openImageModal = (src) => {
    setModalImage(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  return (
    <div className="portfolio-container">
      {/* Hero Section */}
      <section id="hero" className="hero">
        <h1>Hi, I'm SHUBHI AWASTHI</h1>
        <p className="subtitle">MERN Stack & Frontend Developer</p>
        <div className="cta-buttons">
          <a href="#projects" className="btn primary">
            View Projects
          </a>
          <a href="#contact" className="btn secondary">
            Contact Me
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about" data-aos="fade-up">
        <div className="container">
          <h2>About Me</h2>
          <p className="">
            Hello! I'm a dedicated and enthusiastic MERN stack developer with a
            strong foundation in building dynamic and responsive web
            applications. Currently, I’m gaining hands-on experience as a
            frontend intern, where I actively contribute to developing modern,
            user-friendly interfaces that enhance user experience.
            <br />
            <br />
            My journey into tech began with a passion for design and
            problem-solving, which naturally led me to web development. I enjoy
            translating ideas into digital experiences using technologies like
            React, Node.js, Express, and MongoDB. I'm particularly focused on
            creating performance-optimized, scalable solutions while staying
            updated with the latest trends in frontend and backend development.
            <br />
            <br />
            Beyond coding, I value teamwork, creativity, and continuous
            learning. Whether it's collaborating in an agile environment or
            diving into a new tech stack, I’m always eager to grow and take on
            exciting challenges. Let’s build something great together!
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills" data-aos="fade-up">
        <div className="container">
          <h2>Tech Stack</h2>
          <div className="skills-grid">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Node.js",
              "MongoDB",
              "Express",
              "Bootstrap",
              "Tailwind",
              "Threejs",
              "Python",
              "Django",
              "Php",
              "Mysql",
              "Git",
            ].map((skill) => (
              <div key={skill} className="skill-item">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects" data-aos="fade-up">
        <div className="container">
          <h2>Projects</h2>
          <hr />
          <h4>GrowSkill - Learning Management System</h4>
          <p>
            A full-featured Learning Management System (LMS) built with the MERN
            stack and a companion mobile app developed using React Native. It
            includes secure user authentication, video lectures, course progress
            tracking, and Stripe payment integration—delivering a seamless
            online learning experience across web and mobile platforms.
          </p>
          <strong>Tech Stack</strong> :{" "}
          <p>
            Reactjs, Tailwind CSS, RTK, React Native(Expo), RTK Query, JWT,
            Nodejs, Express, Mongoose,
          </p>
          <p>
            AI: OpenRouter API (Mistral 7B) for dynamic interview questions{" "}
            <br />
            PDF Generation: Certificate creation using pdf-lib
          </p>
          <p>
            💳 <strong>Test Stripe Payment:</strong> Use card number{" "}
            <code>4242 4242 4242 4242</code>, CVV <code>123</code>, and any
            future expiry date.
          </p>
          <p>
            🔐 <strong>Admin Panel Login:</strong> Email:{" "}
            <code>shubhi@gmail.com</code>, Password: <code>1234</code>
          </p>
          <hr />
          <h3>
            <a href="https://groww-skill.netlify.app">🔗Live Site </a>
          </h3>
          <div className="projects-grid">
            <div className="project-card">
              <img
                src="./lms.png"
                alt="cust 1"
                onClick={() => openImageModal("./lms.png")}
                className="clickable-img"
              />
              <h3>Students Pannel</h3>
            </div>
            <div className="project-card">
              <img
                src="./lms-admin.png"
                alt="cust 2"
                onClick={() => openImageModal("./lms-admin.png")}
                className="clickable-img"
              />
              <h3>Admin Pannel</h3>
            </div>
            <div className="project-card">
              <img
                src="./lms-app-banner.png"
                alt="cust 2"
                onClick={() => openImageModal("./lms_app.png")}
                className="clickable-img"
              />
              <h3>GrowSkill App</h3>
            </div>
          </div>
        </div>

        <div className="container">
          <hr />
          <h4>EatOpay- Digital Menu with Admin Panel</h4>
          <hr />
          <h3>
            <a href="https://github.com/shubhiawasthi13/customer-pannel">
              Customer Pannel{" "}
            </a>
          </h3>
          <div className="projects-grid">
            <div className="project-card">
              <img
                src="./cust-1.png"
                alt="cust 1"
                onClick={() => openImageModal("./cust-1.png")}
                className="clickable-img"
              />
              <h3>Digital Menu</h3>
            </div>
            <div className="project-card">
              <img
                src="./cust-2.png"
                alt="cust 2"
                onClick={() => openImageModal("./cust-2.png")}
                className="clickable-img"
              />
              <h3>Order Summery Modal</h3>
            </div>
            <div className="project-card">
              <img
                src="./cust-3.png"
                alt="cust 3"
                onClick={() => openImageModal("./cust-3.png")}
                className="clickable-img"
              />
              <h3>Quick Order Modal</h3>
            </div>
          </div>

          <h3>
            <a href="https://github.com/shubhiawasthi13/admin-panel">
              Admin Pannel
            </a>
          </h3>
          <div className="projects-grid">
            <div className="project-card">
              <img
                src="./ad-1.png"
                alt="ad 1"
                onClick={() => openImageModal("./ad-1.png")}
                className="clickable-img"
              />
              <h3>Admin Dashboard</h3>
            </div>
            <div className="project-card">
              <img
                src="./ad-2.png"
                alt="ad 2"
                onClick={() => openImageModal("./ad-2.png")}
                className="clickable-img"
              />
              <h3>Order Page</h3>
            </div>
            <div className="project-card">
              <img
                src="./ad-3.png"
                alt="ad 3"
                onClick={() => openImageModal("./ad-3.png")}
                className="clickable-img"
              />
              <h3>Inventory Page</h3>
            </div>
            <div className="project-card">
              <img
                src="./ad-4.png"
                alt="ad 4"
                onClick={() => openImageModal("./ad-4.png")}
                className="clickable-img"
              />
              <h3>Set Up Page</h3>
            </div>
            <div className="project-card">
              <img
                src="./ad-5.png"
                alt="ad 5"
                onClick={() => openImageModal("./ad-5.png")}
                className="clickable-img"
              />
              <h3>Report Page</h3>
            </div>
            <div className="project-card">
              <img
                src="./ad-6.png"
                alt="ad 6"
                onClick={() => openImageModal("./ad-6.png")}
                className="clickable-img"
              />
              <h3>History Page</h3>
            </div>
          </div>
          <h3>
            <a href="https://github.com/shubhiawasthi13/Super-admin">
              Super Admin Pannel{" "}
            </a>{" "}
          </h3>
          <div className="projects-grid">
            <div className="project-card">
              <img
                src="./super-ad-1.png"
                alt="Super Admin 1"
                onClick={() => openImageModal("./super-ad-1.png")}
                className="clickable-img"
              />

              <h3>Super Admin Dashboard</h3>
            </div>
            <div className="project-card">
              <img
                src="./super-ad-2.png"
                alt="Super Admin 1"
                onClick={() => openImageModal("./super-ad-2.png")}
                className="clickable-img"
              />
              <h3>Super Admin Dashboard</h3>
            </div>
            <div className="project-card">
              <img
                src="./super-ad-3.png"
                alt="Super Admin 1"
                onClick={() => openImageModal("./super-ad-3.png")}
                className="clickable-img"
              />
              <h3>Restaurants Details Page</h3>
            </div>
          </div>
          <h3>
            <a href="https://www.eatopae.in/">EatOpay Website</a>{" "}
          </h3>
          <div className="projects-grid">
            <div className="project-card">
              <img
                src="./web-1.png"
                alt="web 1"
                onClick={() => openImageModal("./web-1.png")}
                className="clickable-img"
              />
              <h3>Website Index Page</h3>
            </div>
            <div className="project-card">
              <img
                src="./web-2.png"
                alt="web 2"
                onClick={() => openImageModal("./web-2.png")}
                className="clickable-img"
              />
              <h3>Website Customer Page</h3>
            </div>
            <div className="project-card">
              <img
                src="./web-3.png"
                alt="web 3"
                onClick={() => openImageModal("./web-3.png")}
                className="clickable-img"
              />
              <h3>Website Career Page</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact" data-aos="fade-up">
        <div className="container text-center">
          <h2>Contact Me</h2>
          <p>Got a project or collaboration in mind? Let’s talk!</p>
          <div className="contact-links">
            Contact No:{" "}
            <a href="#" className="link">
              7318572874
            </a>
            <br />
            Email:{" "}
            <a href="#" className="link">
              awasthishubhi147@gmail.com
            </a>
            <br />
            GitHub:{" "}
            <a href="https://github.com/shubhiawasthi13" className="link">
              🔗Github
            </a>
            <br />
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/shubhi-awasthi-7a5075248?trk=contact-info"
              className="link"
            >
              🔗Linkedin
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Shubhi Awasthi. My Portfolio</p>
      </footer>

      {isModalOpen && (
        <div className="image-modal" onClick={closeModal}>
          <img src={modalImage} alt="Full Screen" />
        </div>
      )}
    </div>
  );
}
