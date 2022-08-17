import preval from "next-plugin-preval";
import { getContact } from "./api";

export default preval(getContact());
