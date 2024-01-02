import React, { useState, useEffect } from 'react';
import '../../Styles/page/country.css'

function Country() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Sample country data
    const sampleCountries = [
      {
        name: "United States",
        code: "US",
        currency: "USD"
      },
      {
        name: "Canada",
        code: "CA",
        currency: "CAD"
      },
      {
        name: "United Kingdom",
        code: "GB",
        currency: "GBP"
      },
      {
        name: "Australia",
        code: "AU",
        currency: "AUD"
      },
      {
        name: "Germany",
        code: "DE",
        currency: "EUR"
      },
      {
        name: "France",
        code: "FR",
        currency: "EUR"
      },
      {
        name: "Japan",
        code: "JP",
        currency: "JPY"
      },
      {
        name: "China",
        code: "CN",
        currency: "CNY"
      },
      {
        name: "Brazil",
        code: "BR",
        currency: "BRL"
      },
      {
        name: "South Africa",
        code: "ZA",
        currency: "ZAR"
      },
      {
        name: "Mexico",
        code: "MX",
        currency: "MXN"
      },
      {
        name: "Italy",
        code: "IT",
        currency: "EUR"
      },
      {
        name: "Spain",
        code: "ES",
        currency: "EUR"
      },
      {
        name: "India",
        code: "IN",
        currency: "INR"
      },
      {
        name: "Russia",
        code: "RU",
        currency: "RUB"
      },
      {
        name: "Argentina",
        code: "AR",
        currency: "ARS"
      }
      // Add more countries here
    ];

    setCountries(sampleCountries);
  }, []);

  return (
    <div className="country-container">
      <ul className="country-list">
        {countries.map((country, index) => (
          <li key={index} className="country-item">
            <span className="country-name">{country.name}</span>
            <span className="country-currency">{country.currency}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Country;
