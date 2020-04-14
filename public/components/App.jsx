import React, { useState } from "react";

import Table from "../components/Table/Table.jsx";

const App = () => {
  const [companies, setCompanies] = useState([]);

  fetch("/report")
    .then(res => res.json())
    .then(data => setCompanies(data))

  return <Table />
};

export default App;
