import { IColor } from './interfaces';
/**
 * Converts a color hue to an HTML color string (with # prefix).
 * This implementation ignores all components of `color` except hue.
 */
export declare function getFullColorString(color: IColor): string;
