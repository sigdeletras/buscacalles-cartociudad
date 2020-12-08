import React, { Fragment, useState, useEffect } from "react";

import "./Information.css";

import Candidates from "../Candidates/Candidates";
import InfoBlocks from "../InfoBlocks/InfoBlocks";

const Information = (data) => {

  const candidatesData = data.data;

  const [resultados, setResultados] = useState([]);
  const [resultadosFilter, setResultadosFilter] = useState([]);
  const [filterState, setFilterState] = useState(true);

  useEffect(() => {
    setResultados(candidatesData);
  }, [candidatesData]);

  const provincesSummary = {};

  resultados.forEach((el) => {
    provincesSummary[el.province] = (provincesSummary[el.province] || 0) + 1;
  });

  const handleTagClick = (event) => {
    let tagValue = event.target.value;

    if (tagValue === "all") {
      setFilterState(true);
    } else {
      let resultadosFilter = resultados.filter(
        (resultados) => resultados.province === tagValue
      );
      setResultadosFilter(resultadosFilter);
      setFilterState(false);
    }

    let allTagBt = document.querySelectorAll(`[class="tag tag--select"]`);
    allTagBt.forEach(function (tag) {
      tag.className = "tag";
    });

    let selectTagBt = document.querySelector(`[value="${tagValue}"]`);
    selectTagBt.className = "tag tag--select";
  };

  return (
    <Fragment>
      <section className="information">
          {Array.isArray(resultados) && resultados.length ? (
            <div>
              <button
                className="tag tag--select"
                value="all"
                onClick={handleTagClick}
              >
                TODOS {resultados.length}
              </button>
              {Object.entries(provincesSummary)
                .sort()
                .map(([key, value]) => (
                  <button
                    className="tag"
                    value={key}
                    onClick={handleTagClick}
                  >
                    {key} {value}
                  </button>
                ))}
            </div>
          ) : (
            <InfoBlocks></InfoBlocks>
              
            )}
      </section>

      <Candidates
        data={filterState ? resultados : resultadosFilter}
      ></Candidates>
    </Fragment>
  );
};

export default Information;
