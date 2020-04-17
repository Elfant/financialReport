import React, { useState, useEffect } from "react";

import TableCompanies from "../components/TableCompanies/TableCompanies.jsx";

const App = () => {
  const [companies, setCompanies] = useState([]);
  const [filtredData, setFiltredData] = useState([]);

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
    <TableCompanies 
      data = {companies}
      filtredData = {filtredData ? filtredData : []}
      setCompanies = {setCompanies} 
      filterByInput = {handleFilteringByInput}
      setFiltredData = {setFiltredData}
    />
  )
};

export default App;
