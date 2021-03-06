import * as React from 'react';
import { IHoverCardProps, OpenCardMode, HoverCardType, IHoverCard } from './HoverCard.types';
import { ExpandingCardMode } from './ExpandingCard.types';
export interface IHoverCardState {
    isHoverCardVisible?: boolean;
    mode?: ExpandingCardMode;
    openMode?: OpenCardMode;
}
export declare class HoverCardBase extends React.Component<IHoverCardProps, IHoverCardState> implements IHoverCard {
    static defaultProps: {
        cardOpenDelay: number;
        cardDismissDelay: number;
        expandedCardOpenDelay: number;
        instantOpenOnClick: boolean;
        setInitialFocus: boolean;
        openHotKey: number;
        type: HoverCardType;
    };
    private _hoverCard;
    private _dismissTimerId;
    private _openTimerId;
    private _currentMouseTarget;
    private _nativeDismissEvent;
    private _childDismissEvent;
    private _classNames;
    private _async;
    private _events;
    constructor(props: IHoverCardProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: IHoverCardProps, prevState: IHoverCardState): void;
    dismiss: (withTimeOut?: boolean | undefined) => void;
    render(): JSX.Element;
    private _getTargetElement;
    private _shouldBlockHoverCard;
    private _cardOpen;
    private _executeCardOpen;
    /**
     * Hide HoverCard
     * How we dismiss the card depends on where the callback is coming from.
     * This is provided by the `isNativeEvent` argument.
     *  true: Event is coming from event listeners set up in componentDidMount.
     *  false: Event is coming from the `onLeave` prop from the HoverCard component.
     */
    private _cardDismiss;
    private _setDismissedState;
    private _instantOpenAsExpanded;
    private _setEventListeners;
}
