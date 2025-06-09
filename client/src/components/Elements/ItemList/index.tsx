import React from "react";

type ShoppingItems = {
  id: number;
  name: string;
  purchased: boolean;
};

type ItemListProps = {
  items: ShoppingItems[];
};

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* Head */}
        <thead>
          <tr>
            <th>Status</th>
            <th>Nama Item</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr key={item.id} className={item.purchased ? "opacity-60" : ""}>
                <td>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" 
                    checked={item.purchased}
                    className="checkbox checkbox-primary"
                    readOnly
                    />
                  </div>
                </td>
                <td>
                    <div className="flex items-center gap-3">
                        <div className={`font-bold ${item.purchased ? "line-through" : ""}`}>
                            {item.name}
                        </div>
                    </div>
                </td>
                <td>
                    <button className="btn btn-ghost btn-xs"> Edit </button>
                    <button className="btn btn-ghost btn-xs btn-error"> Hapus </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;
