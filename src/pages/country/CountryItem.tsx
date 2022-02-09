import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { Country } from "../../types/country";
import CountryShowItem from "./CountryShowItem";

const CountryItem: React.FC = () => {
  const [country, setCountry] = useState<Country[]>([]);
  const { name } = useParams<{ name: string }>();

  useEffect(() => {
    api
      .get<Country[]>(`/name/${name}`)
      .then((response) => {
        setCountry(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [name]);

  return (
    <>
      {country.map((country) => (
        <div key={country.numericCode}>
          <CountryShowItem country={country} />
        </div>
      ))}
    </>
  );
};

export default CountryItem;
