import { useState, useEffect } from 'react';
import { Movies } from "../types/Movies";
import { StarshipsInt } from "../types/Starships";
import Card from "../components/cards/Card"
import ReusableTable from "../components/table/ReusableTable";
import useFetchData from "../hooks/fetchData";
import Loading from '../components/loading/Loading';
import Error from '../components/error/Error';

const Starships: React.FC = () => {
  const [shipData, setShipData] = useState<StarshipsInt [] | null>(null);
  const { data, error , isLoading } = useFetchData<StarshipsInt []>('https://swapi.dev/api/starships');

  useEffect(() => {
    if (data) {
      setShipData(data);
    }
  }, [data]);

  const columns: string [] = [
    'Name',
    'Model',
    'Manufacturer',
    'Cost in Credits',
    'Length',
    'Max Atmosphere Speed',
    'Crew',
    'Passengers',
    'Cargo Cap.',
    'Consumables',
    'Hyperdrive Rating',
    'MGLT', 
    'Starship Class',
    'Films',
  ]

  const propertyMap = {
    'Name': (ship: StarshipsInt) => ship.name,
    'Model': (ship: StarshipsInt) => ship.model,
    'Manufacturer': (ship: StarshipsInt) => ship.manufacturer,
    'Cost in Credits': (ship: StarshipsInt) => ship.cost_in_credits,
    'Length': (ship: StarshipsInt) => ship.length,
    'Max Atmosphere Speed': (ship: StarshipsInt) => ship.max_atmosphering_speed,
    'Crew': (ship: StarshipsInt) => ship.crew,
    'Passengers': (ship: StarshipsInt) => ship.passengers,
    'Cargo Cap.': (ship: StarshipsInt) => ship.cargo_capacity,
    'Consumables': (ship: StarshipsInt) => ship.consumables,
    'Hyperdrive Rating': (ship: StarshipsInt) => ship.hyperdrive_rating,
    'MGLT': (ship: StarshipsInt) => ship.MGLT,
    'Starship Class': (ship: StarshipsInt) => ship.starship_class,
    'Films': (ship: StarshipsInt) => {
      const movieNames = ship.films.map((filmUrl) => {
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
    return <Error message='Failed to get starship information!'/>
  }

  return (
    <Card customStyle="card">
      <ReusableTable columns={columns} data={shipData} propertyMap={propertyMap} />
    </Card>
  )
}

export default Starships;