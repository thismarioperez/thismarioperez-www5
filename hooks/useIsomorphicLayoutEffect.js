import { useEffect, useLayoutEffect } from "react";
import { isBrowser } from "@/scripts/util";

const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
