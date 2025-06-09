import type React from "react";
import { useState } from "react";
import Card from "../../Fragments/Card";
import CardBody from "../../Fragments/CardBody";
import Title from "../../Elements/Title";
import Divider from "../../Elements/Divider";
import ItemList from "../../Elements/ItemList";
import StatCard from "../../Fragments/Statcard";

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
  return (
    <div className="container">
      <Card className="">
        <CardBody>
          <Title>Daftar Belanja</Title>
          <Divider />
        </CardBody>
        <CardBody>
          <ItemList items={items} />
        </CardBody>
        <CardBody className="grid grid-cols-2 gap-4">
          <StatCard title="Total item" value={totalItems} />
          <StatCard
            title="belum dibeli"
            value={items.filter((item) => !item.purchased).length}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default ShoppingMenu;
