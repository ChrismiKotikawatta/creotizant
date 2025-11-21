import React from "react";

export const Careers = ({ data }) => {
  return (
    <div style={{ padding: "100px 20px" }}>
      <div className="container">
        <h2>Careers</h2>
        <h3>Welcome to our career opportunities.</h3>

        <div className="row" style={{ marginTop: "40px" }}>
          {data && data.length > 0 ? (
            data.map((career) => (
              <div className="col-md-4" key={career.id}>
                <div
                  className="card"
                  style={{
                    marginBottom: "30px",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                  }}
                >
                  <img
                    src={career.image}
                    alt={career.title}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="card-body" style={{ padding: "20px" }}>
                    <p style={{ color: "#777", fontSize: "14px" }}>
                      {career.position}
                    </p>
                    <h3 style={{ marginTop: "0", fontWeight: "600" }}>
                      {career.location}
                    </h3>
                    <p style={{ color: "#555" }}>{career.description}</p>

                    <button className="btn btn-custom btn-sm">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No Careers available.</p>
          )}
        </div>
      </div>
    </div>
  );
};
