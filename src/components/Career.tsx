import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack &amp; Mobile App Developer</h4>
                <h5>Freelance / Self-employed</h5>
              </div>
              <h3>2023 - Present</h3>
            </div>
            <p>
              Designing and building custom web and mobile applications, e-commerce
              platforms, delivery apps, office systems, and face recognition solutions
              using modern, scalable tech stacks tailored to client needs.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Social Media Manager Intern</h4>
                <h5>Digital Marketing &amp; Content</h5>
              </div>
              <h3>1 Year</h3>
            </div>
            <p>
              Managing end-to-end social media presence: content strategy, planning,
              video editing (reels, shorts, promos), thumbnail design, SEO-focused
              captions, and performance tracking using web and social analytics.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Computer Science Engineering Student</h4>
                <h5>Rai University, Ahmedabad</h5>
              </div>
              <h3>Ongoing</h3>
            </div>
            <p>
              Building a strong foundation in computer science while applying concepts
              in real-world projects that combine software engineering, AI, and
              practical problem solving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
