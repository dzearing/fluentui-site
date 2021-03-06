import { IEffects, IPalette, ISemanticColors } from '../types/index';
/** Generates all the semantic slot colors based on the theme so far
 * We'll use these as fallbacks for semantic slots that the passed in theme did not define.
 * The caller must still mix in the customized semantic slots at the end.
 */
export declare function makeSemanticColors(p: IPalette, e: IEffects, s: Partial<ISemanticColors> | undefined, isInverted: boolean, depComments?: boolean): ISemanticColors;
/**
 * Map partial platte and effects to partial semantic colors.
 */
export declare function getSemanticColors<TResult = Partial<ISemanticColors>>(p: Partial<IPalette> | undefined, e: Partial<IEffects> | undefined, s: Partial<ISemanticColors> | undefined, isInverted: boolean, depComments?: boolean): TResult;
