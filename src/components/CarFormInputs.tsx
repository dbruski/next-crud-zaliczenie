"use client";
import { Car } from "@prisma/client"
import { useCallback, useState } from "react";

interface Props {
  initialValues?: Car
  disableBrandAndModel?: boolean
}

const fields: (keyof Car)[] = ["brand", "model", "imgUrl", "milage", "fuel"];

export const CarFormInputs = ({ initialValues, disableBrandAndModel }: Props) => {

  const [formValue, setFormValue] = useState(initialValues ?? {
    id: "",
    brand: "",
    model: "",
    imgUrl: "",
    milage: 0,
    fuel: 0,
  })

  const onChange = useCallback((e: any) => {
    setFormValue((previousValue) => ({
      ...previousValue,
      [e.target.id]: e.target.value,
    }))
  }, [])

  return (
    fields.map((field) => (
      <div className="flex gap-4 align-center items-center" key={field}>
        <label className="w-12" htmlFor="title">
          {field}
        </label>
        <input
          name={field}
          className="border rounder p-2 w-full"
          id={field}
          onChange={onChange}
          disabled={["brand", "model"].includes(field) && disableBrandAndModel}
          value={formValue?.[field]}
        />
      </div>
    ))

  )
}