import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";

// Swiper Modules
import { Navigation } from "swiper/modules";

import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="portfolio-container">
      {/* Hero Section */}
      <section id="hero" className="hero">
        <h1>Hi, I'm SHUBHI AWASTHI</h1>
        <p className="subtitle">Full Stack Developer</p>
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
          <p>
            Hello! I'm a dedicated and enthusiastic MERN stack developer with a
            strong foundation in building dynamic and responsive web
            applications. I worked as a MERN Stack Developer at{" "}
            <strong>Fluxvisio Dynamics LLP</strong>, where I contributed to both
            frontend and backend development. I also worked as a{" "}
            <strong>Frontend Developer</strong> for a Canada-based company,
            <strong>DealzUp</strong>, focusing on creating responsive UI and
            integrating APIs.
            <br />
            <br />
            Beyond coding, I value teamwork, creativity, and continuous
            learning. Whether it's collaborating in an agile environment or
            diving into a new tech stack, I’m always eager to grow and take on
            exciting challenges. Let’s build something great together!
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects" data-aos="fade-up">
        <div className="container">
          <h2>Projects</h2>

          {/* ----------------- DealzUp Vendor Project ----------------- */}
          <div className="project-block">
            <h3>DealzUp Vendor Web</h3>
            <h4>
              <a
                href="https://vendor.dealzup.ca"
                style={{ textDecoration: "none" }}
              >
                🔗 Live Website
              </a>
            </h4>
            <p>
              I developed the responsive, pixel-perfect frontend for the DealzUp
              Vendor Panel based on the provided Figma design. Vendors can
              create and manage their business, add/update products, view
              orders, and track performance through the dashboard. I also
              integrated all APIs to ensure smooth data flow and real-time
              updates across the platform.
            </p>
            <br />

            {/* Slider */}
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              navigation={true}
              modules={[Navigation]}
              className="project-slider"
            >
              <SwiperSlide>
                <img src="./home.png" alt="Home Page" />
                <h4 className="slide-title">Vendor Home Page</h4>
              </SwiperSlide>

              <SwiperSlide>
                <img src="./flyers.png" alt="Flyers Page" />
                <h4 className="slide-title">Vendor Flyers Page</h4>
              </SwiperSlide>

              <SwiperSlide>
                <img src="./flyer.png" alt="Flyer Detail" />
                <h4 className="slide-title">Vendor Flyer Page</h4>
              </SwiperSlide>

              <SwiperSlide>
                <img src="./product_modal.png" alt="Product Modal" />
                <h4 className="slide-title">Flyer Product Modal</h4>
              </SwiperSlide>

              <SwiperSlide>
                <img src="./vendor_dashborad.png" alt="Dashboard" />
                <h4 className="slide-title">Vendor Dashboard</h4>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* ----------------- Growskill Personal Project ----------------- */}
          <div className="project-block">
            <h3>GrowSkill - Learning Management System</h3>
            <h4>
              <a
                href="https://groww-skill.netlify.app"
                style={{ textDecoration: "none" }}
              >
                🔗 Live Website
              </a>
            </h4>
            <p>
              A full-featured Learning Management System (LMS) built with the
              MERN stack and a companion mobile app developed using React
              Native. It includes secure user authentication, video lectures,
              course progress tracking, and Stripe payment
              integration—delivering a seamless online learning experience
              across web and mobile platforms.
            </p>
            <h3>Tech Stack :</h3>
            <p>
              Reactjs, Tailwind CSS, RTK, React Native(Expo), RTK Query, JWT,
              Nodejs, Express, Mongoose, AI: OpenRouter API (Mistral 7B) for
              dynamic interview questions PDF Generation: Certificate creation
              using pdf-lib
            </p>
            <br />

            {/* Slider */}
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              navigation={true}
              modules={[Navigation]}
              className="project-slider"
            >
              <SwiperSlide>
                <img src="./lms.png" alt="Home Page" />
                <h4 className="slide-title">Home Page</h4>
              </SwiperSlide>

              <SwiperSlide>
                <img src="./course.png" alt="Course Filter Page" />
                <h4 className="slide-title">Course Filter Page</h4>
              </SwiperSlide>

              <SwiperSlide>
                <img src="./course_details.png" alt="Course details Page" />
                <h4 className="slide-title">Course Details Page</h4>
              </SwiperSlide>
              <SwiperSlide>
                <img src="./lms-admin.png" alt="Lms Admin Page" />
                <h4 className="slide-title">Admin Page</h4>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* ----------------- EatOpay Project ----------------- */}
          <div className="project-block">
            <h3>EatOpay</h3>
            <p>
              Digital restaurant menu system with Customer Panel and Admin
              Panel.
            </p>

            <h4>Customer Panel</h4>
            <h4>
              <a
                href="https://eatopae-cust2.onrender.com"
                style={{ textDecoration: "none" }}
              >
                🔗 Live Website
              </a>
            </h4>

            {/* Customer Panel Slider */}
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              navigation={true}
              modules={[Navigation]}
              className="project-slider"
            >
              <SwiperSlide>
                <img src="./cust-1.png" alt="" />
                <h4 className="slide-title">Digital Menu</h4>
              </SwiperSlide>
              <SwiperSlide>
                <img src="./cust-2.png" alt="" />
                <h4 className="slide-title">Order Summary</h4>
              </SwiperSlide>
              <SwiperSlide>
                <img src="./cust-3.png" alt="" />
                <h4 className="slide-title">Quick Order</h4>
              </SwiperSlide>
            </Swiper>

            <h4>Admin Panel</h4>

            {/* Admin Panel Slider */}
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              navigation={true}
              modules={[Navigation]}
              className="project-slider"
            >
              <SwiperSlide>
                <img src="./super-ad-1.png" alt="" />
                <h4 className="slide-title">Dashboard</h4>
              </SwiperSlide>
              <SwiperSlide>
                <img src="./super-ad-2.png" alt="" />
                <h4 className="slide-title">Restaurants</h4>
              </SwiperSlide>
              <SwiperSlide>
                <img src="./super-ad-3.png" alt="" />
                <h4 className="slide-title">Restaurant Details</h4>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact" data-aos="fade-up">
        <div className="container text-center">
          <h2>Contact Me</h2>
          <p>Got a project or collaboration in mind? Let’s talk!</p>

          <div className="contact-links">
            Email:{" "}
            <a href="#" className="link">
              awasthishubhi147@gmail.com
            </a>
            <br />
            GitHub:{" "}
            <a href="https://github.com/shubhiawasthi13" className="link">
              🔗 Github
            </a>
            <br />
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/shubhi-awasthi-7a5075248"
              className="link"
            >
              🔗 LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Shubhi Awasthi. My Portfolio</p>
      </footer>
    </div>
  );
}
