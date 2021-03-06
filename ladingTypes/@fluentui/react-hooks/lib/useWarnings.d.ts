import { ISettingsMap, IWarnControlledUsageParams } from '@fluentui/utilities/lib/warn';
export interface IWarningOptions<P> {
    /** Name of the component */
    name: string;
    /** Current component props */
    props: P;
    /** Generic messages */
    other?: string[];
    /** Warns when props are required if a condition is met */
    conditionallyRequired?: {
        /** Props required when the condition is met */
        requiredProps: string[];
        /** Name of the prop that the condition is based on */
        conditionalPropName: string;
        /** Whether the condition is met */
        condition: boolean;
    }[];
    /**
     * Warns when deprecated props are being used. Each key is a prop name and each value is
     * either undefined or a replacement prop name.
     */
    deprecations?: ISettingsMap<P>;
    /**
     * Warns when two props which are mutually exclusive are both being used.
     * The key is one prop name and the value is the other.
     */
    mutuallyExclusive?: ISettingsMap<P>;
    /**
     * Check for and warn on the following error conditions with a form component:
     * - A value prop is provided (indicated it's being used as controlled) without a change handler,
     *    and the component is not read-only
     * - Both the value and defaultValue props are provided
     * - The component is attempting to switch between controlled and uncontrolled
     *
     * The messages mimic the warnings React gives for these error conditions on input elements.
     * The warning will only be displayed once per component instance.
     */
    controlledUsage?: Pick<IWarnControlledUsageParams<P>, 'valueProp' | 'defaultValueProp' | 'onChangeProp' | 'readOnlyProp'>;
}
/**
 * Only in development mode, display console warnings when certain conditions are met.
 * Note that all warnings except `controlledUsage` will only be shown on first render
 * (new `controlledUsage` warnings may be shown later due to prop changes).
 */
export declare function useWarnings<P>(options: IWarningOptions<P>): void;
