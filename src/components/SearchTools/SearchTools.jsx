import React, { Fragment, useState, useEffect, useRef } from "react";

import "./SearchTools.css";

import { getCandidates } from "../../services/getCandidates";

import Information from "../Information/Information";


const SearchTools = () => {

  const [params, setParams] = useState({
    address_text: "",
    filter_option: ""
  })
  const [checked, setChecked] = useState(true);
  const [candidates, setCandidates] = useState([]);

  const address_text = useRef();
  const noaddress_option = useRef();
  const all_option = useRef();

  useEffect(() => {
    
    getCandidates(params.address_text, params.filter_option).then((candidates) =>
      setCandidates(candidates)
    );
  }, [params.address_text, params.filter_option]);

  const handleInputChange = (event) => {
    let len = event.target.value.length
    if (len > 2) {
      setParams({
        ...params,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleOptionChange = (event) => {
    setParams({
      ...params,
      [event.target.name]: event.target.value,
    });
    setChecked(true)
  };

  const handleCleanButtonClick = () => {
    setParams({
      address_text: "",
      filter_option: ""
    });
    address_text.current.value = ''
    all_option.current.checked = true
    noaddress_option.current.checked = false
  };

  return (
    <Fragment>
      <section id="search_tools_section" className="search_tools">
        <div className="margin">
          <h1 className="candidates__title">BuscaCalles</h1>
          <h2 className="candidates__subtitle">Localiza las direcciones postales de España</h2>
          <h2 className="candidates__subtitle">usando los datos de CartoCiudad</h2>
        </div>
        <div className="margin">
          <input
            ref={address_text}
            type="text"
            name="address_text"
            placeholder="Escribe el texto de búsqueda..."
            onChange={handleInputChange}
          />
        </div>
        <div className="margin search_tools_section--filter_option" >
          <div><input type="radio" ref={all_option} id="all" name="filter_option" value=""
            onClick={handleOptionChange} defaultChecked={checked}
          />
            <label for="all"> Completo</label></div>
          <div><input type="radio" ref={noaddress_option} id="callejero" name="filter_option"
            value="municipio,poblacion,toponimo" onClick={handleOptionChange} defaultChecked={!checked} />
            <label for="all"> Solo callejero</label></div>
        </div>
        <div className="margin">
          {/* <button className="btn">Buscar</button> */}
          <button className="btn" onClick={handleCleanButtonClick} >Limpiar</button>
        </div>
      </section>
      <Information data={candidates}></Information>
    </Fragment>
  );
};

export default SearchTools;
