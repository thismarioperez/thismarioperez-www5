import preval from "next-plugin-preval";
import { getHeader } from "./api";

export default preval(getHeader());
