import { redirect } from 'next/navigation';

import { db } from '@/db';
import { CarFormInputs } from '@/components/CarFormInputs';

export default function SnippetCreatePage() {
  async function addNewCar(formData: FormData) {
    'use server';
    const brand = formData.get('brand') as string;
    const model = formData.get('model') as string;
    const imgUrl = formData.get('imgUrl') as string;
    const milage = parseInt(formData.get('milage') as string);
    const fuel = parseInt(formData.get('fuel') as string);

    await db.car.create({
      data: {
        brand,
        model,
        imgUrl,
        milage,
        fuel,
      },
    });

    redirect('/');
  }

  return (
    <form action={addNewCar}>
      <h3 className="font-bold m-3">Add new car to the garage</h3>
      <div className="flex flex-col gap-4">
        <CarFormInputs />

        <button type="submit" className="rounded p-2 bg-blue-200">
          Add to garage
        </button>
      </div>
    </form>
  );
}
