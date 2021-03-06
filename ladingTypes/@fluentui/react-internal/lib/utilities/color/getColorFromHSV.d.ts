import { IHSV, IColor } from './interfaces';
/**
 * Converts an HSV color (and optional alpha value) to a color object.
 * If `a` is not given, a default of 100 is used.
 * Hex in the returned value will *not* be prefixed with #.
 * If `a` is unspecified or 100, the result's `str` property will contain a hex value
 * (*not* prefixed with #)
 */
export declare function getColorFromHSV(hsv: IHSV, a?: number): IColor;
