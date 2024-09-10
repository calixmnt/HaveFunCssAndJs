import { useContext } from "react"
import { ItemsContext } from "../contexts/ItemsContextProvider.jsx"

export const useItemsContext = () => {
    const context = useContext(ItemsContext);
    return context;
}