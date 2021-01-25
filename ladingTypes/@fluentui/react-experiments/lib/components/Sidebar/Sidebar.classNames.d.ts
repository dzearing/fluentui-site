/*!
 * Copyright (C) Microsoft Corporation. All rights reserved.
 */
import { ISidebarStyles } from './Sidebar.types';
export interface ISidebarClassNames {
    root?: string;
    rootCollapsed?: string;
    content?: string;
    contentCollapsed?: string;
    footer?: string;
}
export declare const getSidebarClassNames: (styles: ISidebarStyles, className?: string | undefined, collapsed?: boolean | undefined) => ISidebarClassNames;
