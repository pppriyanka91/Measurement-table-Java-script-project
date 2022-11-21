import React, { useEffect, useState } from "react"; 
import * as Reactdomclient from "react-dom/client";

  function Measurement() {
  const [measurements, setmeasurements] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    
    const fetchTemp = () => {
      fetch('http://localhost:3000/temps')
          .then((res) =>
              res.json())
          .then((response) => {
             response = Object.values(response)
             setmeasurements(response)
          })
          .catch((err) => {
            console.log(err.message);
          });
  }
  fetchTemp(); 
  }, []);
 
return (
  <div>
  <table>
    <thead>
        <tr>
          <th> ID </th>
          <th> Temp </th>
          <th> time </th>
        </tr>
        </thead>
        
        <tbody>
          {measurements.map((measurement) => (
          <tr>
            <td>{measurement.unit_id}</td>
            <td>{measurement.temperature?.$numberDecimal}</td>
            <td>{measurement.unix_timestamp}</td>
        </tr>
        ))}
          </tbody>
      </table>
      </div>
);
};
const root = Reactdomclient.createRoot(document.getElementById("temperatureTable"));
root.render(<Measurement/>)
     