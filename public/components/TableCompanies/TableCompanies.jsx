import React from "react";

const Table = ({data}) => (
  data ?
    <table>
      <thead>
        <tr>
          <th>Id</th><th>Name</th><th>City</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map(item => {
            return(
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.city}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
   : "load" 
);

export default Table;
