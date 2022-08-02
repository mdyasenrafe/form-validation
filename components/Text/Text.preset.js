import { Typrography } from "../../theme/Typrography";

const BASE = {
  fontFamily: Typrography.regular,
  fontSize: 16,
};
const BOLD = {
  fontFamily: Typrography.bold,
};
const MEDIUM = {
  fontFamily: Typrography.regular,
};

export const Preset = {
  default: BASE,
  bold: BOLD,
  medium: MEDIUM,
  h1: {
    ...BOLD,
    fontSize: 48,
  },
  h2: {
    ...BOLD,
    fontSize: 36,
  },
  h3: {
    ...BOLD,
    fontSize: 30,
  },
  h4: {
    ...BOLD,
    fontSize: 26,
  },
  h5: {
    ...BOLD,
    fontSize: 20,
  },
  h6: {
    ...MEDIUM,
    fontSize: 18,
  },
};
