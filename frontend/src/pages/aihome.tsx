import React from "react";
import Navbar from "./homepage";

const AIHome: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h1 className="text-center">Artificial Intelligence</h1>
        <p className="text-center">
          Select a semester to explore courses and leave reviews.
        </p>
        <div className="list-group mt-3">
          <a
            href="semester1.html"
            className="list-group-item list-group-item-action"
          >
            Semester 1
          </a>
          <a
            href="semester2.html"
            className="list-group-item list-group-item-action"
          >
            Semester 2
          </a>
          <a
            href="semester3.html"
            className="list-group-item list-group-item-action"
          >
            Semester 3
          </a>
          <a
            href="semester4.html"
            className="list-group-item list-group-item-action"
          >
            Semester 4
          </a>
          <a
            href="semester5.html"
            className="list-group-item list-group-item-action"
          >
            Semester 5
          </a>
          <a
            href="semester6.html"
            className="list-group-item list-group-item-action"
          >
            Semester 6
          </a>
        </div>
      </div>
    </>
  );
};

export default AIHome;
