import { useState } from "react";
import "./App.css";
import ShoppingMenu from "./components/Layouts/MenuItem";

type ShoppingItems = {
  id: number;
  name: string;
  purchased: boolean;
};

const App = () => {
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

  return (
    <ShoppingMenu items={items}/>
  );
};

export default App;
