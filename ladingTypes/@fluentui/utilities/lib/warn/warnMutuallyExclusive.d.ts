import { ISettingsMap } from './warn';
/**
 * Warns when two props which are mutually exclusive are both being used.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param exclusiveMap - A map where the key is a parameter, and the value is the other parameter.
 */
export declare function warnMutuallyExclusive<P>(componentName: string, props: P, exclusiveMap: ISettingsMap<P>): void;
