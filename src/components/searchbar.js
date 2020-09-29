import React from "react";
import { Container } from "react-bootstrap";

const SearchBar = () => {
  return (
    <div>
      <Container md="6">
        <input
          className="form-control"
          type="text"
          placeholder="Try to search for a job"
          aria-label="Search"
        />
      </Container>
    </div>
  );
};

export default SearchBar;
