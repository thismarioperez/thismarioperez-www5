import { useEffect, useLayoutEffect } from "react";
import { isBrowser } from "@/scripts/utils";

const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
