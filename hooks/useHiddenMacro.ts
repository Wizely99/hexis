import { createContext, useContext } from 'react';


export const HiddenMacroContext = createContext<boolean >(false);

export function useHiddenMacroContext() {
  const isHidden = useContext(HiddenMacroContext);


  return isHidden;
}