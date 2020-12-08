import React from "react";
import Card from "../Card/Card";
import "./Candidates.css";

const Candidates = (data) => {

  const candidates = data.data;
  
  return (
    <section className="candidates">
      {candidates.length > 0 ? (
        candidates.map((candidate) => (
          <Card key={candidate.id} data={candidate}></Card>
        ))
      ) : (
        <p></p>
      )}
    </section>
  );
};

export default Candidates;
