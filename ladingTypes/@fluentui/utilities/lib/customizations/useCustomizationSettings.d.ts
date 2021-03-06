import { ISettings } from './Customizations';
/**
 * Hook to get Customizations settings from Customizations singleton or CustomizerContext.
 * It will trigger component state update on settings change observed.
 */
export declare function useCustomizationSettings(properties: string[], scopeName?: string): ISettings;
