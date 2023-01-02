import { RefObject } from "react";
import { useIntersectionObserver } from "./useIntersectionObserver";

export function useHasPassed(
  elementRef: RefObject<Element>,
) {
  const entry = useIntersectionObserver(elementRef, {});

  const isVisible = entry?.boundingClientRect.y <= 0;

  return isVisible;
}