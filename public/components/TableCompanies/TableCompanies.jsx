import React from "react";

const Table = ({data}) => {
  const {companies, scoresOfOperation} = data;
  return (
    companies ?
    <table>
      <thead>
        <tr>
          <th>Id</th>
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
  ) 
 
};

export default Table;
