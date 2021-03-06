import * as React from 'react';
import { IDraggableZoneProps, ICoordinates } from './DraggableZone.types';
export interface IDraggableZoneState {
    isDragging: boolean;
    position: ICoordinates;
    lastPosition?: ICoordinates;
}
declare type MouseTouchEvent<T> = React.MouseEvent<T> & React.TouchEvent<T> & Event;
export declare class DraggableZone extends React.Component<IDraggableZoneProps, IDraggableZoneState> {
    private _touchId?;
    private _currentEventType;
    private _events;
    constructor(props: IDraggableZoneProps);
    componentDidUpdate(prevProps: IDraggableZoneProps): void;
    componentWillUnmount(): void;
    render(): React.DetailedReactHTMLElement<{
        style: any;
        className: string;
        onMouseDown: (event: MouseTouchEvent<HTMLElement>) => false | undefined;
        onMouseUp: (event: MouseTouchEvent<HTMLElement>) => void;
        onTouchStart: (event: MouseTouchEvent<HTMLElement>) => false | undefined;
        onTouchEnd: (event: MouseTouchEvent<HTMLElement>) => void;
    }, HTMLElement>;
    private _onMouseDown;
    private _onMouseUp;
    private _onTouchStart;
    private _onTouchEnd;
    private _onDragStart;
    private _onDrag;
    private _onDragStop;
    /**
     * Get the control position based off the event that fired
     * @param event - The event to get offsets from
     */
    private _getControlPosition;
    /**
     * Get the active touch point that we have saved from the event's TouchList
     * @param event - The event used to get the TouchList for the active touch point
     */
    private _getActiveTouch;
    /**
     * Get the initial touch identifier associated with the given event
     * @param event - The event that contains the TouchList
     */
    private _getTouchId;
    /**
     * Returns if an element (or any of the element's parents) match the given selector
     */
    private _matchesSelector;
    /**
     * Attempts to find the Touch that matches the identifier  we stored in dragStart
     * @param touchList The TouchList to look for the stored identifier from dragStart
     */
    private _findTouchInTouchList;
    /**
     * Create DragData based off of the last known position and the new position passed in
     * @param position The new position as part of the drag
     */
    private _createDragDataFromPosition;
    /**
     * Creates an updated DragData based off the current position and given baseDragData
     * @param baseDragData The base DragData (from _createDragDataFromPosition) used to calculate the updated positions
     */
    private _createUpdatedDragData;
}
export {};
