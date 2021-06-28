import React from 'react'


function Table(props) {
    let summaries = props.tableData;
    //console.log(props.tableData)
    return (
        <>
             <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">State</th>
                <th scope="col">Confirmed</th>
                <th scope="col">Active</th>
                <th scope="col">Recovered</th>
                <th scope="col">Deaths</th>
              </tr>
            </thead>
            <tbody>
              {
               
                 summaries.map((summarie,k) => {
                   return(
                   <tr>
                     <td>{summarie.state}</td>
                     <td>{summarie.confirmed}</td>
                     <td>{summarie.active}</td>
                     <td>{summarie.recovered}</td>
                     <td>{summarie.deaths}</td>
                   </tr>
                   )
                
                 })
              
              
              }
             
            </tbody>
          </table>
        </>
    )
}

export default Table
