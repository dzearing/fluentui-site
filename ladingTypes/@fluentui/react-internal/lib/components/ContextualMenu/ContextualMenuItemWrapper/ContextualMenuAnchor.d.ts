import * as React from 'react';
import { ContextualMenuItemWrapper } from './ContextualMenuItemWrapper';
export declare class ContextualMenuAnchor extends ContextualMenuItemWrapper {
    private _anchor;
    private _ariaDescriptionId;
    private _getMemoizedMenuButtonKeytipProps;
    render(): JSX.Element;
    protected _getSubmenuTarget: () => HTMLElement | undefined;
    protected _onItemClick: (ev: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    protected _renderAriaDescription: (ariaDescription?: string | undefined, className?: string | undefined) => JSX.Element | null;
}
