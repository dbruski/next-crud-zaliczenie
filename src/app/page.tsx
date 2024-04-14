'use server';
import { db } from '@/db';
import Link from 'next/link';
import Image from 'next/image';
import { FuelLevel } from '@/components/FuelLevel';
export default async function Home() {
  // const snippets = await db.snippet.findMany();
  const cars = await db.car.findMany();

  const renderedSnippets = cars.map((car) => {
    return (
      <Link
        key={car.id}
        href={`/cars/${car.id}`}
        className="flex justify-between items-center p-2 border rounded"
      >
        <Image src={car.imgUrl} width={150} height={50} alt={`Image of ${car.brand} ${car.model}`} />
        <b>{car.brand}</b>
        <p>{car.model}</p>
        <p>{car.milage}</p>
        <FuelLevel fuelLevel={car.fuel} />
        <div>View</div>
      </Link>
    );
  });

  return (
    <div>
      <div className="flex m-2 justify-between items-center">
        <h1 className="text-xl font-bold">Garage</h1>
        <Link href="/cars/new" className="border p-2 rounded">
          Add new car
        </Link>
      </div>
      <div className="flex justify-between items-center p-2 border">
        <div className="text-center">Image</div>
        <p>Brand</p>
        <p>Model</p>
        <p>Milage</p>
        <p>Fuel level</p>
        <p>Actions</p>
      </div>
      <div className="flex flex-col gap-2">{renderedSnippets}</div>
    </div>
  );
}
