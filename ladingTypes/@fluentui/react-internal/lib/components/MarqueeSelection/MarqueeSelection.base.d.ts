import * as React from 'react';
import { Point, IRectangle } from '../../Utilities';
import { IMarqueeSelectionProps } from './MarqueeSelection.types';
export interface IMarqueeSelectionState {
    dragOrigin?: Point;
    dragRect?: IRectangle;
}
/**
 * MarqueeSelection component abstracts managing a draggable rectangle which sets items selected/not selected.
 * Elements which have data-selectable-index attributes are queried and measured once to determine if they
 * fall within the bounds of the rectangle. The measure is memoized during the drag as a performance optimization
 * so if the items change sizes while dragging, that could cause incorrect results.
 */
export declare class MarqueeSelectionBase extends React.Component<IMarqueeSelectionProps, IMarqueeSelectionState> {
    static defaultProps: {
        rootTagName: string;
        rootProps: {};
        isEnabled: boolean;
    };
    private _async;
    private _events;
    private _root;
    private _dragOrigin;
    private _rootRect;
    private _lastMouseEvent;
    private _autoScroll;
    private _selectedIndicies;
    private _preservedIndicies;
    private _itemRectCache;
    private _allSelectedIndices;
    private _scrollableParent;
    private _scrollableSurface;
    private _scrollTop;
    private _scrollLeft;
    private _isTouch;
    constructor(props: IMarqueeSelectionProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    /** Determine if the mouse event occured on a scrollbar of the target element. */
    private _isMouseEventOnScrollbar;
    private _onMouseDown;
    private _onTouchStart;
    private _onPointerDown;
    private _getRootRect;
    private _onAsyncMouseMove;
    private _onMouseMove;
    private _onMouseUp;
    private _isPointInRectangle;
    /**
     * We do not want to start the marquee if we're trying to marquee
     * from within an existing marquee selection.
     */
    private _isDragStartInSelection;
    private _isInSelectionToggle;
    private _evaluateSelection;
}
