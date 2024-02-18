import React from "react";
interface CardButtonsProps {
  removeItem: () => void;
  addItem: () => void;
}

const CardButtons = ({ removeItem, addItem }: CardButtonsProps) => {
  return (
    <div className="card">
      <div className="flex items-center p-3 justify-between">
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
    </div>
  );
};

export default CardButtons;
