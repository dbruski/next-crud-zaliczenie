interface Props {
  fuelLevel: number;
}

const getTextColorBasedOnFuelLevel = (fuelLevel: number) => {
  if (fuelLevel > 65) return "text-green-600";
  if (fuelLevel > 30) return "text-yellow-600";
  return "text-red-600"
}

export const FuelLevel = ({ fuelLevel }: Props) => <p className={getTextColorBasedOnFuelLevel(fuelLevel)}>{fuelLevel}%</p>
