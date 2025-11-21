import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <div className="button-row">
                  <a
                    href="#services"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Services
                  </a>

                  <a
                    href="#contact"
                    className="btn btn-custom-secondary btn-lg page-scroll"
                  >
                    Contact Us
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
