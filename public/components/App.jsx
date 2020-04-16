import React, { useState, useEffect } from "react";

import TableCompanies from "../components/TableCompanies/TableCompanies.jsx";

const App = () => {
  const [companies, setCompanies] = useState([]);
  const [filtredCompanies, setFiltredCompanies] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/report")
    .then(res => res.json())
    .then(data => setCompanies(data))
  }, [])

  return (
    <TableCompanies 
      data = {filtredCompanies.length === 0 ? companies : filtredCompanies} 
      setFiltredCompanies = {setFiltredCompanies}
    />
  )
};

export default App;
