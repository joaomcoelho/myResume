import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import profileImg from "./images/joaoprofile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import resumeData from "./data/resumeData";
import Activities from "./components/Activities";
import Education from "./components/Education";
import Summary from "./components/Summary";
import Skill from "./components/Skill";
import SkillLoading from "./components/SkillLoading";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

class App extends React.Component {
  data = resumeData;

  render() {
    return (
      <div className="App">
        <div className="row Print-button">
          <div className="col-sm-9"></div>
          <div className="col-sm-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                window.print();
              }}
            >
              Print
            </button>
          </div>
        </div>
        <div className="container text-left">
          <div className="row pb-4">
            <div className="col-sm-2" style={{ borderRadius: 10, width: 100 }}>
              <img
                src={profileImg}
                alt="profileImg"
                style={{ borderRadius: 10, width: 120 }}
              />
            </div>
            <div className="col-sm-7" style={{ paddingLeft: 0 }}>
              <div className="row">
                <div className="col-sm-12">
                  <h2 className="col-sm-12">{this.data.name}</h2>
                  <div className="col-sm-12">
                    <FontAwesomeIcon
                      className="App-icon"
                      icon={faMapMarkerAlt}
                      style={{ fontSize: 20, marginRight: 4 }}
                    />
                    {this.data.street}
                  </div>
                  <div className="col-sm-12">
                    <b>Date/Place of birth:</b> {this.data.dateOfBirth},{" "}
                    {this.data.placeOfBirth} <b>Nationality:</b>{" "}
                    {this.data.nationality}
                  </div>
                  <div className="col-sm-12">
                    <b>Contact:</b> {this.data.contact} <b>Email:</b>{" "}
                    {this.data.email}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="pt-5" style={{ whiteSpace: "nowrap" }}>
                <FaLinkedin size={30} /> {this.data.linkedin}
              </div>
              <div className="pt-2" style={{ whiteSpace: "nowrap" }}>
                <FaGithub size={30} /> {this.data.github}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-9">
              <div className="row">
                <div className="col-sm-12">
                  <h3>Profile</h3>
                  <div>
                    <Summary summary={this.data.summary} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <h3 style={{ paddingBottom: 5 }}>Work Experience</h3>
                  <Experience experiences={this.data.experiences} />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <h3>Personal Projects</h3>
                  <Projects projects={this.data.projects} />
                </div>
              </div>
              <div className="row  pt-3">
                <div className="col-sm-12">
                  <h3>Education</h3>
                  <div>
                    <Education education={this.data.education} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <h3>Skills</h3>
              <h5 className="pt-2">Programming</h5>
              <Skill scores={this.data.programmingSkills} />

              <h5 className="pt-2">Web</h5>
              <Skill scores={this.data.webSkills} />

              <h5 className="pt-2">Data Management</h5>
              <Skill scores={this.data.dataManagementSkills} />

              <h5 className="pt-2">In Progress...</h5>
              <SkillLoading scores={this.data.loadingSkills} />

              <h4 className="pt-2">Languages</h4>
              <Skill scores={this.data.languages} />

              <h4 className="pt-2">Other Activities</h4>
              <Activities activities={this.data.activities} />

              <h4 className="pt-2">Keywords</h4>
              <div>
                {this.data.keywords.map(keyword => {
                  return (
                    <span class="badge badge-dark badge-dark mr-1 pb-1">
                      {keyword}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
