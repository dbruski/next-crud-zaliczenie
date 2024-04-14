import { db } from '@/db';
import { notFound, redirect } from 'next/navigation';
import Image from "next/image";
import { CarFormInputs } from '@/components/CarFormInputs';
import { DeleteCarForm } from '@/components/DeleteForm';
import { RefuelForm } from '@/components/RefuelForm';

interface Props {
  params: {
    id: string;
  };
}

export default async function SnippetShowPage({ params }: Props) {
  const car = await db.car.findFirst({
    where: { id: parseInt(params.id) },
  });

  async function update(formData: FormData) {
    'use server';
    const imgUrl = formData.get('imgUrl') as string;
    const milage = parseInt(formData.get('milage') as string);
    const fuel = parseInt(formData.get('fuel') as string);

    await db.car.update({
      where: {
        id: parseInt(params.id),
      },
      data: {
        imgUrl,
        milage,
        fuel,
      }
    })
    redirect(`/`);
  }

  if (!car) return notFound();

  return (
    <div>
      <div className="flex flex-row justify-between">
        <Image src={car.imgUrl} width={450} height={300} alt={`Image of ${car.brand} ${car.model}`} />
        <div className="flex flex-col">
          <DeleteCarForm id={params.id} />
          <RefuelForm id={params.id} />
        </div>
      </div>
      <form action={update}>
        <CarFormInputs initialValues={car} disableBrandAndModel />
        <button type="submit" className="rounded p-2 bg-blue-200">Update values</button>
      </form>
    </div>
  )
}
