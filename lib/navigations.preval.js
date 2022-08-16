import preval from "next-plugin-preval";
import { getAllNavigations } from "./api";

export default preval(getAllNavigations());
