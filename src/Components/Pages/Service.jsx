import React from 'react'
import { Link } from 'react-router-dom'

export default function Service() {
  return (
    <>
     <div className="container-xxl py-5">
  <div className="container">
    <div className="row g-4">
      {/* JEE Preparation */}
      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="service-item text-center pt-3">
          <Link to="/jee">
            <div className="p-4">
              <i className="fa fa-3x fa-lightbulb text-primary mb-4" />
              <h5 className="mb-3">IIT-JEE Preparation</h5>
              <p>Crack JEE with structured guidance, problem-solving depth, and mentorship from IITians who've done it.</p>
            </div>
          </Link>
        </div>
      </div>

      {/* NEET Preparation */}
      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
        <div className="service-item text-center pt-3">
          <Link to="/neet">
            <div className="p-4">
              <i className="fa fa-3x fa-heartbeat text-primary mb-4" />
              <h5 className="mb-3">NEET Preparation</h5>
              <p>
  Build strong fundamentals and clinical reasoning with expert mentorship for future medical professionals.
</p></div>
          </Link>
        </div>
      </div>

      {/* Tech Career Mentorship */}
      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
        <div className="service-item text-center pt-3">
          <Link to="/mentorship">
            <div className="p-4">
              <i className="fa fa-3x fa-rocket text-primary mb-4" />
              <h5 className="mb-3">Tech Career Mentorship</h5>
              <p>Get real-world guidance for SDE, ML, Data Science and QA roles. Learn from industry leaders and crack top tech jobs.</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Programming & Tech Skills */}
      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
        <div className="service-item text-center pt-3">
          <Link to="/courses">
            <div className="p-4">
              <i className="fa fa-3x fa-code text-primary mb-4" />
              <h5 className="mb-3">Programming Mastery</h5>
              <p>Learn Java, C++, Python, Web & App Development, Artificial Intelligence — everything you need to build, code, and grow.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}
