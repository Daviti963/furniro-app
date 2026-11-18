import { SHOW_OPTIONS, DEFAULT_SHOW } from "../constants/constants";

export function parseShow(value: string | string[] | undefined): number {
  const showNumber = Number(value);
  return SHOW_OPTIONS.includes(showNumber) ? showNumber : DEFAULT_SHOW;
}
