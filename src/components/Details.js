import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";

export default function Details() {
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
//https://api.covid19india.org/state_district_wise.json
  useEffect(() => {
    axios.get("https://cdn-api.co-vin.in/api/v2/admin/location/states")
      .then(function (response) {
        let stateValues = response.data.states;

        setStates(stateValues);
      });
  }, []);

  const fetchDistrict = (e) => {   
    let state_id = e.target.value;
    axios.get(
        `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${state_id}`
      )
      .then(function (response) {
        let districtValues = response.data.districts;
        setDistricts(districtValues);
      });
  };

  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row" >
          <div className="col-md-5">
            <Form.Group controlId="State">
              <Form.Label>States</Form.Label>
              <Form.Control as="select" onChange={fetchDistrict}>
                <option>Select State</option>
                {states.map((state, k) => (
                  <option key={k} value={state.state_id}>
                    {state.state_name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </div>
          <div className="col-md-5">
            <Form.Group controlId="District">
              <Form.Label>District</Form.Label>
              <Form.Control as="select">
              <option>Select District</option>
                {districts.map((district, k) => (
                  <option key={k} value={district.district_id}>
                    {district.district_name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </div>
        </div>
        
      </div>
    </React.Fragment>
  );
}
