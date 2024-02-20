import React from "react";
interface CardButtonsProps {
  removeItem: () => void;
  addItem: () => void;
}

const CardButtons = ({ removeItem, addItem }: CardButtonsProps) => {
  return (
    <div className="flex items-center gap-4 justify-between p-3 rounded-2xl ">
      <button
        type="button"
        className="w-20 h-10 rounded-lg shadow border border-blue-500 flex-col justify-center items-center inline-flex"
        onClick={addItem}
      >
        +
      </button>
      <button
        type="button"
        className="w-20 h-10 rounded-lg shadow border border-blue-500 flex-col justify-center items-center inline-flex"
        onClick={removeItem}
      >
        x
      </button>
    </div>
  );
};

export default CardButtons;
