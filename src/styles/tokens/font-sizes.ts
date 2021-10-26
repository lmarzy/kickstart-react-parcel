// ========================================================================
// THEME/FONT-SIZES
// ========================================================================

import { fontSizesPx } from '../settings';
import { pxToRem } from '../utils';

export const fontSizes = `
  --size-1: ${pxToRem(fontSizesPx[1])};
  --size-2: ${pxToRem(fontSizesPx[2])};
  --size-3: ${pxToRem(fontSizesPx[3])};
  --size-4: ${pxToRem(fontSizesPx[4])};
`;
