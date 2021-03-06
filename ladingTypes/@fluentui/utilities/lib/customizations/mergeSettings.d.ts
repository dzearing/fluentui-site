import { ISettings, ISettingsFunction } from './Customizations';
/**
 * Merge new and old settings, giving priority to new settings.
 * New settings is optional in which case oldSettings is returned as-is.
 * @param oldSettings - Old settings to fall back to.
 * @param newSettings - New settings that will be merged over oldSettings.
 * @returns Merged settings.
 */
export declare function mergeSettings(oldSettings?: ISettings, newSettings?: ISettings | ISettingsFunction): ISettings;
export declare function mergeScopedSettings(oldSettings?: ISettings, newSettings?: ISettings | ISettingsFunction): ISettings;
