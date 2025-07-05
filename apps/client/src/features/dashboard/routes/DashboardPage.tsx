import type React from "react";
import ShoppingMenu from "../components/Layouts/ShoppingMenu";
import { useState } from "react";

type ShoppingItems = {
  id: number;
  name: string;
  purchased: boolean;
};

const DashboardPage: React.FC = () => {
    const [items, setItems] = useState<ShoppingItems[]>([
    {
      id: 1,
      name: "Susu UHT",
      purchased: false,
    },
    {
      id: 2,
      name: "telur ayam",
      purchased: true,
    },
    {
      id: 3,
      name: "Roti Tawar",
      purchased: false,
    },
    { id: 4, name: "Minyak Goreng", purchased: false },
  ]);
  console.log(setItems)
  return (
    <ShoppingMenu items={items}/>
  );
}

export default DashboardPage