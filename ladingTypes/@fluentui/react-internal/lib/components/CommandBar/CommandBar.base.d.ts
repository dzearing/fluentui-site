import * as React from 'react';
import { ICommandBar, ICommandBarItemProps, ICommandBarProps } from './CommandBar.types';
export interface ICommandBarData {
    /**
     * Items being rendered in the primary region
     */
    primaryItems: ICommandBarItemProps[];
    /**
     * Items being rendered in the overflow
     */
    overflowItems: ICommandBarItemProps[];
    /**
     * Items being rendered on the far side
     */
    farItems: ICommandBarItemProps[] | undefined;
    /**
     * Length of original overflowItems to ensure that they are not moved into primary region on resize
     */
    minimumOverflowItems: number;
    /**
     * Unique string used to cache the width of the command bar
     */
    cacheKey: string;
}
export declare class CommandBarBase extends React.Component<ICommandBarProps, {}> implements ICommandBar {
    static defaultProps: ICommandBarProps;
    private _overflowSet;
    private _resizeGroup;
    private _classNames;
    constructor(props: ICommandBarProps);
    render(): JSX.Element;
    focus(): void;
    remeasure(): void;
    private _onRenderData;
    private _onRenderItem;
    private _commandButton;
    private _onButtonClick;
    private _onRenderOverflowButton;
    private _computeCacheKey;
    private _onReduceData;
    private _onGrowData;
}
