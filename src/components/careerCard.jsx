import React from "react";

export const CareerCard = ({ position, location, description, requirements }) => {
  return (
    <div className="col-md-4">
      <div className="card" style={{ marginBottom: "30px", borderRadius: "12px", overflow: "hidden" }}>
        <img
          src={image}
          alt={title}
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />

        <div className="card-body" style={{ padding: "20px" }}>
          <p style={{ color: "#777", fontSize: "14px" }}>{position}</p>
          <h3 style={{ marginTop: "0", fontWeight: "600" }}>{location}</h3>
          <p style={{ color: "#555" }}>{description}</p>
          <ul>
            {requirements.map((req, index) => (
              <li key={index} style={{ color: "#555" }}>{req}</li>
            ))}
          </ul> 

          <button className="btn btn-custom btn-sm">Read More</button>
        </div>
      </div>
    </div>
  );
};
