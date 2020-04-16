import React, { useState } from "react";

const Table = ({ data, setFiltredCompanies }) => {
  const [isSortedById, setIsSortedById] = useState(false)
  
  const handleDataSortingById = (items) => {
    if (isSortedById) {
      setIsSortedById(false);
      return items.sort((a,b) => b.id - a.id)
    } else {
        setIsSortedById(true);
        return  items.sort((a, b) => a.id - b.id);
    } 
  }

  let temp;

  const handleFilteringByInput = (event) => {
    const { value } = event.target;
    temp = data.filter(item => {
      return item.id == value || item.name == value || item.city == value || item.sumOfCompanyIncomes == value || item.averageIncomes == value || item.sumOfTheLastMonthIncomes == value;
    })
    return temp;
  }

  return (
    data.length > 0 ?
    <>
      <label>
        Enter a filter <input type= "text" placeholder="" onChange={(event) => setFiltredCompanies(handleFilteringByInput(event))}/>
      </label>
   
      <table>
        <thead>
          <tr>
            <th onClick = {() => {
              setFiltredCompanies(handleDataSortingById(data))
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
            data.map((item, i) => {
              return(
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.city}</td>
                  <td>{item.sumOfCompanyIncomes} pln</td>
                  <td>{item.averageIncomes} pln</td>
                  <td>{item.sumOfTheLastMonthIncomes} pln</td>
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

export default Table;
