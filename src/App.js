import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

const URL = "https://random-data-api.com/api/v2/blood_types"

function App() {
  const [type, setType] = useState('')
  const [rh, setRh] = useState('')
  const [group, setGroup] = useState('')

  useEffect(() => {
    axios.get(URL)
    .then((response) => {
      console.log(response.data)
      setType(response.data.type)
      setRh(response.data.rh_factor)
      setGroup(response.data.group)

    }).catch((error) => {
      alert(error)
    })
  }, [])
  

  return (
    <div>
      <h3>Random blood types</h3>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Blood type</th>
            <th scope="col">RH</th>
            <th scope="col">Group</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td> {type} </td>
            <td> {rh} </td>
            <td> {group} </td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}


export default App;
