import { db } from "@/db";
import Image from "next/image";
import { redirect } from "next/navigation";
import RefuelImage from "@/assets/refuelImage.png";

interface Props {
  id: string;
}

export const RefuelForm = ({ id }: Props) => {
  async function refuelCar() {
    'use server';

    await db.car.update({
      where: {
        id: parseInt(id),
      },
      data: {
        fuel: 100,
      }
    })
    redirect(`/`);
  }
  return (
    <form action={refuelCar}>
      <button type="submit" className="rounded p-2 bg-green-200 flex flex-row gap-4 items-center">
        <Image src={RefuelImage} height={50} width={50} alt="Refuel icon" />
        Refuel car
      </button>
    </form>
  )
}