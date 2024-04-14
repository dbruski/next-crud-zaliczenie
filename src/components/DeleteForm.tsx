import { db } from "@/db";
import { redirect } from "next/navigation";

interface Props {
  id: string;
}

export const DeleteCarForm = ({ id }: Props) => {
  async function deleteCar() {
    'use server';

    await db.car.delete({
      where: {
        id: parseInt(id),
      },
    })
    redirect(`/`);
  }
  return <form action={deleteCar}>
    <button type="submit" className="rounded p-2 bg-red-200 basis-1/4">Delete car from collection</button>
  </form>
}