import React, { useState, useEffect } from "react";

import "./App.scss";

import TableCompanies from "../components/TableCompanies/TableCompanies.jsx";

const App = () => {

  let elementsNumberOnPage = 100;
  
  const [companies, setCompanies] = useState([]);
  const [filtredData, setFiltredData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const setPageAdd = () => {
    if (pageNumber * elementsNumberOnPage >= companies.length) {
      return 0;
    } else {
        setPageNumber((prevState) => ++prevState);
      };
  };

  const setPageSub = () => {
    if (pageNumber === 0) {
      return 0;
    } else {
        setPageNumber((prevState) => --prevState);
      };
  };
  

  const calculateOffset = () => {
    if(pageNumber === 0) {
      return 0;
    } else {
        return (pageNumber - 1) * elementsNumberOnPage
    };
  };

  
  useEffect(() =>  setFiltredData([]), [pageNumber])

  useEffect(() => {
    fetch("http://localhost:8000/report")
    .then(res => res.json())
    .then(data => setCompanies(data))
  }, [])

   const handleFilteringByInput = (event) => {
    const { value } = event.target;

    if(!value) {
      return setFiltredData([])
    };

     const matchingData = [...companies].filter(item => {
      return Object.values(item).some((keyValue) => 
        `${keyValue}`.match(new RegExp(value)
      ));
    });

    return setFiltredData(matchingData);
  };

  return (
    <div className="container">
      <TableCompanies 
        data = {companies.slice(calculateOffset(), calculateOffset() + elementsNumberOnPage)}
        filtredData = {filtredData ? filtredData : []}
        setCompanies = {setCompanies} 
        filterByInput = {handleFilteringByInput}
        setFiltredData = {setFiltredData}
      />
      <div className="footer">
        <button className="btn btnLeft" onClick={() => setPageSub()}>&lt;</button>
        <button className="btn btnRight" onClick={() => setPageAdd()}>&gt;</button>
      </div>
    </div>
  );
};

export default App;
