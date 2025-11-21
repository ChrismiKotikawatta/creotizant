import React from "react";

export const Blogs = ({ data }) => {
    return (
        <div style={{ padding: "100px 20px" }}>
            <div className="container">
                <h2>Blogs</h2>
                <h3>Welcome to our insights and articles.</h3>

                <div className="row" style={{ marginTop: "40px" }}>
                    {data && data.length > 0 ? (
                        data.map((blog) => (
                            <div className="col-md-4" key={blog.id}>
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
                                        src={blog.image}
                                        alt={blog.title}
                                        style={{
                                            width: "100%",
                                            height: "200px",
                                            objectFit: "cover",
                                        }}
                                    />

                                    <div className="card-body" style={{ padding: "20px" }}>
                                        <p style={{ color: "#777", fontSize: "14px" }}>
                                            {blog.date}
                                        </p>
                                        <h3 style={{ marginTop: "0", fontWeight: "600" }}>
                                            {blog.title}
                                        </h3>
                                        <p style={{ color: "#555" }}>{blog.description}</p>

                                        <button className="btn btn-custom btn-sm">
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No blogs available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};
