import React from "react";
interface MacrosButtonProps {
  hidden: boolean;
  onClick: () => void;
}
function MacrosButton({ hidden, onClick }: MacrosButtonProps) {
  return (
    <div>
      <button
        onClick={() => onClick()}
        type="button"
        className="flex items-center justify-center px-3 py-2 rounded-lg shadow border border-blue-500 gap-2.5 text-center text-white text-base capitalize false"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 256 256"
          color="white"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M100,116.43a8,8,0,0,0,4-6.93v-72A8,8,0,0,0,93.34,30,104.06,104.06,0,0,0,25.73,147a8,8,0,0,0,4.52,5.81,7.86,7.86,0,0,0,3.35.74,8,8,0,0,0,4-1.07ZM88,49.62v55.26L40.12,132.51C40,131,40,129.48,40,128A88.12,88.12,0,0,1,88,49.62Zm130.34,26.9c-.09-.18-.18-.37-.29-.55s-.2-.33-.31-.49A104.05,104.05,0,0,0,128,24a8,8,0,0,0-8,8v91.83l-78.81,45.9a8,8,0,0,0-2.87,11A104,104,0,0,0,232,128,103.34,103.34,0,0,0,218.34,76.52ZM136,40.36A88.05,88.05,0,0,1,199.89,77.3L136,114.51ZM128,216a88.45,88.45,0,0,1-71.49-36.68l75.4-43.91.22-.14L207.9,91.14A88,88,0,0,1,128,216Z"></path>
        </svg>
        {hidden ? "Show" : "Hide"} Energy & Macros
      </button>
    </div>
  );
}

export default MacrosButton;
