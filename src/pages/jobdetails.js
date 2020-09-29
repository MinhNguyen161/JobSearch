import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Badge, Button } from "react-bootstrap";

const JobDetails = () => {
  const [job, setJob] = useState(null);
  const { id } = useParams(); // lay cai param de lay ID
  const getDetail = async () => {
    const url = `https://my-json-server.typicode.com/MinhNguyen161/JobSearch/jobs/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setJob(data);
    console.log("datata on Details", data);
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    job && (
      <div className="job-detail">
        <div className="content">
          <Row>
            <Col xs={3}>
              <div className="jobcard-logo">
                <img src={job.img} alt="Job Pic" />
              </div>
            </Col>
            <Col xs={9}>
              <div className="jobcard-descriptions">
                <h2 className="jobcard-title">{job.title}</h2>
                <Row>
                  <Col xs={8}>
                    <div className="salary">
                      <div>$ {job.salary}</div>
                    </div>
                  </Col>
                  <Col xs={4}>
                    <div className="date-location-box">
                      {job.isHotjob ? (
                        <strong className="hotjob-label">Hot Job</strong>
                      ) : (
                        <div></div>
                      )}

                      <div className="jobcard-location">
                        <div>{job.city}</div>
                        <div>District {job.district}</div>
                      </div>
                    </div>
                  </Col>
                </Row>

                <div>
                  {job.tags.map((tag) => (
                    <Badge variant="secondary" className="badge-style">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Row>
                  <Col>
                    {" "}
                    <div>
                      <h1> Benefits: </h1>

                      <ul className="benefit-list">
                        {job.benefits.map((benefit) => (
                          <li>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>
              <h1> Description: </h1>
              <div className="job-des">{job.description}</div>
            </Col>
          </Row>
        </div>

        <Button variant="danger" size="lg" block classname="applynow">
          Apply Now!{" "}
        </Button>
      </div>
    )
  );
};

export default JobDetails;
