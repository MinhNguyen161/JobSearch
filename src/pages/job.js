import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import JobCard from "../components/jobcard";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "../components/searchbar";

const Job = () => {
  const [jobList, setJobList] = useState([]);
  const history = useHistory(); //help you go to other Route

  const getData = async () => {
    try {
      const url = "http://localhost:5001/jobs/";
      const response = await fetch(url);
      const data = await response.json();
      setJobList(data);
      console.log("data", data);
    } catch (err) {
      console.log("err");
    }
  };
  const goToJobDetail = (id) => {
    history.push(`/detail/${id}`); // chuyen di cho kahc luon

    console.log("go");
  };
  useEffect(() => {
    getData();
  }, []);
  //   onClick={() => goToJobDetail(item.id)}
  return (
    <div>
      <div className="search-area">
        <SearchBar />
      </div>
      {jobList.map((item) => {
        return (
          <div onClick={() => goToJobDetail(item.id)}>
            <JobCard job={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Job;
