import React, { useState, useEffect } from 'react';
import './App.css';
import {
  useQuery,
  gql,
} from "@apollo/client";

function App() {
  const LIST_COUNTRIES = gql`
    {
      countries {
        name
        code
        continent{
          code
          name
        } 
    }
    }
  `;
  const [country, setCountry] = useState('US');
  const { loading, error, data } = useQuery(LIST_COUNTRIES);

if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <table>
      {data.countries.map(country => (
        <tr key={country}>
        <td> Code: {country.code} </td>
        <td> Country: {country.name} </td>
        <td> Continent: {country.continent.name} </td>
        </tr>
      ))}
    </table>
  );
}
export default App;