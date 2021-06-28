import React, { useState, useEffect } from "react";
//import axios from "axios";
import Counter from './utility/Counter';
import Table from './utility/Table';
import Chart from './utility/Chart';

function India() {
 
  const [counterVariables, setCounterVariables] = useState({});
  const [tableData, settableData] = useState([]);

  useEffect(() => {
    // axios.get("https://api.covid19india.org/data.json")
    //   .then(function (response) {
    //     let summary = response.data.statewise;
       
    //     setCounterVariables(summary[0]);
    //     // setfetchDate(summary[0].lastupdatedtime);
    //     // setActive(summary[0].active);
    //     // setConfirmed(summary[0].confirmed);
    //     // setDeaths(summary[0].deaths);
    //     // setRecovered(summary[0].recovered);
    //     //setSummaries(summary);
    //     //let filtered = summaries.shift();
    //     //console.log(filtered);

    //   });
    const getIndiandata = async() => {
      await fetch("https://api.covid19india.org/data.json")
      .then(response => response.json())
      .then(data => {
       let counterData = data.statewise[0];
       let tableData = data.statewise;
       tableData.splice(0,1);
       tableData.splice(30,1);
       console.log(tableData);
       setCounterVariables(counterData);
       settableData(tableData);
      })

    }
    getIndiandata();
  }, []);

  return (
    <>
      <div className="container mt-5">
        <Counter counterVariables={counterVariables} />
        <div className="row">
          <div className="col-md-6"><Table tableData={tableData} /></div>
          <div className="col-md-6">  <Chart /></div>
        
        </div>
      </div>
    </>
  );
}

export default India;
