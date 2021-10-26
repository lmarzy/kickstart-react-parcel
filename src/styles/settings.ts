// ========================================================================
// CORE SETTINGS
// ========================================================================

import { BreakpointType } from '~/shared/unions/styles';

export const baseFontSize = 16;
export const baselineHeight = 16 * 1.5;

export const fontFamily =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'";
export const fontSizePx = baseFontSize;
export const lineHeight = 1.5;
export const lineHeightPx = fontSizePx * lineHeight;

export const fontSizesPx = {
  1: 14,
  2: 20,
  3: 28,
  4: 40,
};

export const gridColumns = 12;

export const breakpoints: Record<BreakpointType, number> = {
  sm: 600,
  md: 1000,
  lg: 1400,
};
