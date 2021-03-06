import * as React from 'react';
import { KeytipDataOptions } from './KeytipData.types';
/**
 * Hook that creates a ref which is used for passing to Keytip target element.
 * The ref will handle setting the attributes needed for Keytip to work.
 */
export declare function useKeytipRef<TElement extends HTMLElement = HTMLElement>(options: KeytipDataOptions): React.Ref<TElement>;
export declare function setAttribute(element: HTMLElement | null, attributeName: string, attributeValue: string | undefined, append?: boolean): void;
