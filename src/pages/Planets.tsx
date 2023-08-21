import React, { useEffect, useState } from 'react';
import Card from "../components/cards/Card";
import ReusableTable from "../components/table/ReusableTable";
import Planet from '../types/Planets';
import { Movies } from '../types/Movies';
import Loading from '../components/loading/Loading';
import Error from '../components/error/Error';
import useFetchData from '../hooks/fetchData';

const Planets: React.FC = () => {
  const [planets, setPlanets] = useState<Planet [] | null>(null);
  const { data, error, isLoading } = useFetchData<Planet []>('https://swapi.dev/api/planets');

  useEffect(() => {
    if (data) {
      setPlanets(data);
    }
  }, [data])

  const columns: string [] = [
    'Planet',
    'Rotation Period',
    'Orbital Period',
    'Diameter',
    'Climate',
    'Gravity',
    'Terrain',
    'Surface Water %',
    'Population',
    'Films'
  ];


  const propertyMap = {
    'Planet': (planet: Planet) => planet.name,
    'Rotation Period': (planet: Planet) => `${planet.rotation_period} Standard Hours`,
    'Orbital Period': (planet: Planet) => `${planet.orbital_period} Standard Days`,
    'Diameter': (planet: Planet) => `${planet.diameter} Miles`,
    'Climate': (planet: Planet) => planet.climate,
    'Gravity': (planet: Planet) => planet.gravity,
    'Terrain': (planet: Planet) => planet.terrain,
    'Surface Water %': (planet: Planet) => `${planet.surface_water}`,
    'Population': (planet: Planet) => planet.population,
    'Films': (planet: Planet) => {
      const movieNames = planet.films.map((filmUrl) => {
        const filmNumber = filmUrl.split('/').filter(Boolean).pop();
        const movieIndex = parseInt(filmNumber || "0", 10);
        return Movies[movieIndex];
      })
      .join(', ');
      return movieNames;
    }
  }

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <Error message='An error has occured' />
  }

  return (
    <Card customStyle="card">
      {planets && <ReusableTable columns={columns} data={planets || null} propertyMap={propertyMap}/>}
    </Card>
  )
}

export default Planets;