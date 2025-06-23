import type React from "react";
import { useState } from "react";
import Card from "../../Elements/Card";


type ShoppingItems = {
  id: number;
  name: string;
  purchased: boolean;
};

type ItemListProps = {
  items: ShoppingItems[];
};

const ShoppingMenu: React.FC<ItemListProps> = () => {
  const [items, setItems] = useState<ShoppingItems[]>([
    { id: 1, name: "Susu UHT", purchased: false },
    { id: 2, name: "telur ayam", purchased: true },
    { id: 3, name: "Roti Tawar", purchased: false },
    { id: 4, name: "Minyak Goreng", purchased: false },
  ]);
  const purchasedCount = items.filter((item) => item.purchased).length;
  const totalItems = items.length;
  const progress = totalItems > 0 ? (purchasedCount / totalItems) * 100 : 0;
  console.log(setItems)
  console.log(progress)
  return (
    <div className="container">
      <Card className="">
        <></>
      </Card>
    </div>
  );
};

export default ShoppingMenu;
