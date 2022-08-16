import preval from "next-plugin-preval";
import { getAllNavigationsData } from "./api";

export default preval(getAllNavigationsData());
