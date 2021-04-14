import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUserAlt,
  faPaperPlane,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import { useHistory } from "react-router";
export default function Navbar() {
  const history = useHistory();
  return (
    <div className="text-center">
      <div class="d-flex align-items-start justify-content-center">
        <div
          class="nav flex-column center nav-pills me-3"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <div class="card" style={{ border: "none", margin: 20 }}>
            <div className="text-center">
              <img src="./logo192.png" class="rounded" alt="..." width="100" />
            </div>
            <div class="card-body">
              <h4 class="card-text">Vinay Sarilla</h4>
              <h6 class="card-text text-secondary">Frontend Developer</h6>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex align-items-start justify-content-center">
        <div
          class="nav flex-column center nav-pills me-3"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
          style={{ marginTop: 25,marginBottom:75 }}
        >
          <button
            class="nav-link active"
            id="v-pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-home"
            type="button"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
            onClick={() => history.push("/")}
          >
            <FontAwesomeIcon icon={faHome} style={{ marginRight: 15 }} />
            Home
          </button>
          <button
            class="nav-link"
            id="v-pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-profile"
            type="button"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
            onClick={() => history.push("/projects")}
          >
            <FontAwesomeIcon icon={faUserAlt} style={{ marginRight: 15 }} />
            Projects
          </button>
          <button
            class="nav-link "
            id="v-pills-messages-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-messages"
            type="button"
            role="tab"
            aria-controls="v-pills-messages"
            aria-selected="false"
            onClick={() => history.push("/technologies")}
          >
            <FontAwesomeIcon icon={faPaperPlane} style={{ marginRight: 15 }} />
            Technologies
          </button>
          <button
            class="nav-link"
            id="v-pills-settings-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-settings"
            type="button"
            role="tab"
            aria-controls="v-pills-settings"
            aria-selected="false"
            onClick={() => history.push("/contact")}

          >
            <FontAwesomeIcon icon={faCog} style={{ marginRight: 15 }} />
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
