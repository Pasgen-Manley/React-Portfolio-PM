import React from "react";

function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Pasgen Manley</h2>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Proficiencies</h2>
          <ul>
            <li>
            HTML, CSS, JavaScript, jQuery, React.js, Frameworks (Bootstrap, Bulma), IndexedDB,<br />
            Node.js, Express.js, MySQL, Sequelize, MongoDB, Mongoose, NoSQL, HandleBars,<br />
            Graphql, Responsive Web Design.
            </li>
          </ul>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className = "w-50 mx-auto">
        <h1 className ="pb-4 pt-2">Resume</h1>
        <p>
          Click link to download my resume. <a href="../assets/resume/Pasgen-Manley-Resume-Developer.pdf" className="card-link">Resume</a>
        </p>
      </div>
    </section>
  );
}

export default Resume;