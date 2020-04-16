import React, { useState } from "react";

const Table = ({data , setCompanies}) => {
  const {companies, scoresOfOperation} = data;
  const [isFiltredDesc, setIsFiltredDesc] = useState(false)
  
  const handleDataSorting = (items) => {
    if (isFiltredDesc) {
      setIsFiltredDesc(false);
      return items.sort((a,b) => b.id - a.id)
    } else {
        setIsFiltredDesc(true);
        return  items.sort((a, b) => a.id - b.id);
    } 
  }
  
  return (
    companies ?
    <table>
      <thead>
        <tr>
          <th onClick = {() => {
            setCompanies(
              {
                companies: handleDataSorting(companies), 
                scoresOfOperation: handleDataSorting(scoresOfOperation)
              }
            )
          }}>Id
          </th>
          <th>Name</th>
          <th>City</th>
          <th>Total income</th>
          <th>Average income</th>
          <th>Last month income</th>
        </tr>
      </thead>
      <tbody>
        {
          companies.map((item, i) => {
            return(
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.city}</td>
                <td>{scoresOfOperation[i].sumOfCompanyIncomes} pln</td>
                <td>{scoresOfOperation[i].averageIncomes} pln</td>
                <td>{scoresOfOperation[i].sumOfTheLastMonthIncomes} pln</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
   : "load" 
  ); 
};

export default Table;
