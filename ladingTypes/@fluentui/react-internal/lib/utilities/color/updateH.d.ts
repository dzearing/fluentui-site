import { IColor } from './interfaces';
/**
 * Gets a color with the same saturation and value as `color` and the other components updated
 * to match the given hue.
 *
 * Does not modify the original `color` and does not supply a default alpha value.
 */
export declare function updateH(color: IColor, h: number): IColor;
