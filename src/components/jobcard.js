import React from "react";
import { Row, Col, Badge } from "react-bootstrap";

const JobCard = ({ job }) => {
  return (
    <div>
      {/* /////onClick={() => jobSelect()} */}
      <div className="job-content">
        <Row>
          <Col xs={3}>
            <div className="jobcard-logo">
              <img src={job.img} alt="Job Pic" />
            </div>
          </Col>
          <Col xs={9}>
            <div className="jobcard-descriptions">
              <h2 className="jobcard-title">{job.title}</h2>
              <div>$ {job.salary}</div>
              <Row>
                <Col>
                  {" "}
                  <div>
                    <ul className="benefit-list">
                      {job.benefits.map((benefit) => (
                        <li>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </Col>
                <Col>
                  <div className="date-location-box">
                    {job.isHotjob ? (
                      <div className="hotjob-label">Hot Job</div>
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
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default JobCard;
