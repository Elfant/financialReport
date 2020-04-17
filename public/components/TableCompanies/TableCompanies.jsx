import React, { useState } from "react";

const Table = ({ data, filterByInput, filtredData, setFiltredData}) => {
  
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
      <label>
        Enter a filter <input type= "text" placeholder="" onChange={(event) => filterByInput(event)}/>
      </label>
   
      <table>
        <thead>
          <tr>
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
