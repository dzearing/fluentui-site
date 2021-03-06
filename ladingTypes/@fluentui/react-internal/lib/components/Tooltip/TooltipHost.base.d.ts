import * as React from 'react';
import { ITooltipHostProps, ITooltipHost } from './TooltipHost.types';
import { TooltipDelay } from './Tooltip.types';
export interface ITooltipHostState {
    isAriaPlaceholderRendered: boolean;
    isTooltipVisible: boolean;
}
export declare class TooltipHostBase extends React.Component<ITooltipHostProps, ITooltipHostState> implements ITooltipHost {
    static defaultProps: {
        delay: TooltipDelay;
    };
    private static _currentVisibleTooltip;
    private _tooltipHost;
    private _classNames;
    private _async;
    private _dismissTimerId;
    private _openTimerId;
    private _defaultTooltipId;
    constructor(props: ITooltipHostProps);
    render(): JSX.Element;
    componentWillUnmount(): void;
    show: () => void;
    dismiss: () => void;
    private _getTargetElement;
    private _onTooltipMouseEnter;
    private _onTooltipMouseLeave;
    private _onTooltipKeyDown;
    private _clearDismissTimer;
    private _clearOpenTimer;
    private _hideTooltip;
    private _toggleTooltip;
    private _getDelayTime;
}
