import React from "react";

export default function About() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ minHeight: "400px" }}
            >
              <div className="position-relative h-100">
                <img
                  className="img-fluid position-absolute w-100 h-50"
                  src="/img/about.jpg"
                  alt="about jpg"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
  <h6 className="section-title bg-white text-start text-primary pe-3">
    About Us
  </h6>
  <h1 className="mb-4">Welcome to ADHYANT for you</h1>
  <p className="mb-4">
    At <strong>Adhyant</strong>, we believe true learning goes beyond just scoring high — it’s about building deep understanding, problem-solving skills, and career clarity. Whether you’re a student preparing for competitive exams or a tech enthusiast aiming for a top-tier job, we’re here to guide you.
  </p>
  <p className="mb-4">
    Our programs are led by experienced <strong>IITians</strong> and industry experts who bring real-world insight into every lesson. From foundational concepts to career-ready skills, we offer mentorship that helps you grow with confidence.
  </p>
  <div className="row gy-2 gx-4 mb-4">
    <div className="col-sm-6">
      <p className="mb-0">
        <i className="fa fa-arrow-right text-primary me-2" />
        IIT-JEE & NEET Coaching
      </p>
    </div>
    <div className="col-sm-6">
      <p className="mb-0">
        <i className="fa fa-arrow-right text-primary me-2" />
        Tech Mentorship for SDE/ML/Data
      </p>
    </div>
    <div className="col-sm-6">
      <p className="mb-0">
        <i className="fa fa-arrow-right text-primary me-2" />
        Full Stack & Programming Courses
      </p>
    </div>
    <div className="col-sm-6">
      <p className="mb-0">
        <i className="fa fa-arrow-right text-primary me-2" />
        Career-Focused Learning Paths
      </p>
    </div>
    <div className="col-sm-6">
      <p className="mb-0">
        <i className="fa fa-arrow-right text-primary me-2" />
        Personalized Mentorship
      </p>
    </div>
    <div className="col-sm-6">
      <p className="mb-0">
        <i className="fa fa-arrow-right text-primary me-2" />
        Real-World Project Exposure
      </p>
    </div>
  </div>
  {/* <a className="btn btn-primary py-3 px-5 mt-2" href="#">Read More</a> */}
</div>

          </div>
        </div>
      </div>
    </>
  );
}
