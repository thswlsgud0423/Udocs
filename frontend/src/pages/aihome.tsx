import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavbarComponent from "./NavbarComponents";
import "bootstrap/dist/css/bootstrap.min.css";
import "./aihome.css";

const AIHome: React.FC = () => {
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);

  // Explicitly type the courses object
  const courses: { [key: number]: string[] } = {
    1: ["Hands-on AI I", "Mathematics for AI I", "Programming in Python I"],
    2: ["Hands-on AI II", "Mathematics for AI II", "Programming in Python II"],
    3: ["Machine Learning: Supervised", "Mathematics for AI III"],
    4: ["Machine Learning: Unsupervised", "Numerical Optimization"],
    5: ["Reinforcement Learning", "NLP"],
    6: ["Gender Studies"],
  };

  return (
    <>
      {/* Navbar Component */}
      <NavbarComponent />

      {/* Main Content */}
      <div className="container mt-5 pt-5">
        <h1 className="text-center">Artificial Intelligence</h1>
        <p className="text-center">Select a semester to explore courses.</p>

        {/* Semester Buttons */}
        <div className="d-flex justify-content-center flex-wrap gap-3 mt-4">
          {[1, 2, 3, 4, 5, 6].map((semester) => (
            <button
              key={semester}
              className={`btn ${
                selectedSemester === semester ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() =>
                setSelectedSemester(selectedSemester === semester ? null : semester)
              }
            >
              Semester {semester}
            </button>
          ))}
        </div>

        {/* Courses List */}
        {selectedSemester && (
          <div className="mt-4">
            <h2 className="text-center">Courses for Semester {selectedSemester}</h2>
            <ul className="list-group mt-3">
              {courses[selectedSemester].map((course, index) => (
                <li key={index} className="list-group-item">

                  {course === "Programming in Python I" ? (
                    <Link to={`/python-1`}>{course}</Link>
                  ) : (
                    <Link to={`/Python_1`}>{course}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default AIHome;

