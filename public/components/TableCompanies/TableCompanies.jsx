import React, { useState, useEffect } from "react";

import "../TableCompanies/TableCompanies.scss";

const TableCompanies = ({ data, filterByInput, filtredData, setFiltredData }) => {
  
  const [isSortedById, setIsSortedById] = useState(false)

  const handleDataSortingById = (items) => {
    if (isSortedById) {
      setIsSortedById(false);
       items.sort((a,b) => b.id - a.id)
    } else {
      setIsSortedById(true);
      items.sort((a, b) => a.id - b.id);
    };
    
    setFiltredData(items)
  };

  const getItemsToRender = () => {
    if (filtredData.length !== 0) {
      return filtredData
    } else {
        return data
    }
  };

  return (
    data.length > 0 ?
    <>
      <div className="header">
        <input 
          type= "text" 
          className= "headerInput" 
          placeholder= "" 
          onChange= {(event) => filterByInput(event)}
        />
      </div>
      <table className= "tableCompanies">
        <thead>
          <tr className= "tableCompaniesRow">
            <th onClick = {() => {
              handleDataSortingById([...data])
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

            getItemsToRender().map((item, i) => {
              return(
                <tr key= {item.id} className= "tableCompaniesRow">
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.city}</td>
                  <td>{item.sumOfCompanyIncomes} PLN</td>
                  <td>{item.averageIncomes} PLN</td>
                  <td>{item.sumOfTheLastMonthIncomes} PLN</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
   : "loading" 
  ); 
};

export default TableCompanies;
