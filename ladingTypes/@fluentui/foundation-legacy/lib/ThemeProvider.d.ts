import * as React from 'react';
import { ISchemeNames, ITheme } from '@fluentui/style-utilities';
export interface IThemeProviderProps {
    scheme?: ISchemeNames;
    theme?: ITheme;
}
/**
 * Theme provider is a simplified version of Customizer that activates the appropriate theme data
 * for a given scheme name.
 *
 * @param providers - Injected providers for accessing theme data and providing it via a Customizer component.
 */
export declare const ThemeProvider: React.FunctionComponent<IThemeProviderProps>;
