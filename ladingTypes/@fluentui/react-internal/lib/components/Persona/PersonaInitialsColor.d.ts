import { IPersonaProps } from './Persona.types';
/** @deprecated Use `getPersonaInitialsColor` */
export declare function initialsColorPropToColorCode(props: IPersonaProps): string;
/**
 * Gets the hex color string (prefixed with #) for the given persona props.
 * This is the logic used internally by the Persona control.
 * @param props - Current persona props
 * @returns Hex color string prefixed with #
 */
export declare function getPersonaInitialsColor(props: Pick<IPersonaProps, 'primaryText' | 'text' | 'initialsColor'>): string;
