import { useState } from 'react';

function useHover() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return { isHovered, bind: { onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave } };
}

export default useHover;


import { createContext, useContext } from 'react';


export const HoverContext = createContext<boolean >(false);

export function useHoverContext() {
  const isHovered = useContext(HoverContext);


  return isHovered;
}