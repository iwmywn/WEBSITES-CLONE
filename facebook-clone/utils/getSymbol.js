import { symbols, modes } from "../data/symbols.js";

export default function getSymbol(symbol, mode = false) {
  if (mode)
    return modes[`${symbol}`];
  return symbols[`${symbol}`];
}