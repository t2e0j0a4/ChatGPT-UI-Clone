import { createContext } from "react";
import MyContextTypes from "@/app/types/index";
const appContext = createContext<MyContextTypes | undefined>(undefined);
export default appContext;