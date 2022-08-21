import { gsap } from "gsap/dist/gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { CustomEase } from "gsap/dist/CustomEase";
import eases from "@/styles/exports/eases.module.scss";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(CustomEase);

Object.keys(eases).forEach((key) => {
    CustomEase.create(`ease${key !== "1" ? key : ""}`, eases[key]);
});

export { gsap };
