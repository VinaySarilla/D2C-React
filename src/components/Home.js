import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const Card = () => {
  const [shadow, setshadow] = useState(true);

  return (
    <div class="col-sm-6">
      <div
        class={`card homecard ${shadow ? "shadow-sm" : ""}`}
        onMouseEnter={() => setshadow(!shadow)}
        onMouseLeave={() => setshadow(!shadow)}
      >
        <div class="card-body">
          <h5 class="card-title">Project 1</h5>
          <p class="card-text">PWA</p>
          <div style={{ textAlign: "right" }}>
            <a href="#" class="btn btn-dark">
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const data = {
    name: "vinay",
    title: "PWA",
  };
  return (
    <div className="container">
      <div className="row" style={{ margin: "15px 0" }}>
        <Card data={data} />
        <Card />
      </div>
      <div className="row" style={{ margin: "15px 0" }}>
        <Card />
        <Card />
      </div>
    </div>
  );
}
