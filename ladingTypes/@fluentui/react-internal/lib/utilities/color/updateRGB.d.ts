import { IColor, IRGB } from './interfaces';
/**
 * Gets a color with a single RGBA component updated to a new value.
 * Does not modify the original `color`. Alpha defaults to 100 if not set.
 */
export declare function updateRGB(color: IColor, component: keyof IRGB, value: number): IColor;
