import { colors } from './colors';
import { fontSizes } from './font-sizes';
import { layout } from './layout';
import { spacing } from './spacing';

export const theme = `
  :root {
    ${fontSizes}
    ${spacing}
    ${layout}
    ${colors}
  }
`;
