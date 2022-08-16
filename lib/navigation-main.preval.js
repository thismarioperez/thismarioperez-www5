import preval from "next-plugin-preval";
import { getNavigationMain } from "./api";

export default preval(getNavigationMain());
