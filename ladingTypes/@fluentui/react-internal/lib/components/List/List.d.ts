import * as React from 'react';
import { IList, IListProps, IPage, ScrollToMode } from './List.types';
export interface IListState<T = any> {
    pages?: IPage<T>[];
    /** The last versionstamp for  */
    measureVersion?: number;
    isScrolling?: boolean;
    getDerivedStateFromProps(nextProps: IListProps<T>, previousState: IListState<T>): IListState<T>;
}
/**
 * The List renders virtualized pages of items. Each page's item count is determined by the getItemCountForPage callback
 * if provided by the caller, or 10 as default. Each page's height is determined by the getPageHeight callback if
 * provided by the caller, or by cached measurements if available, or by a running average, or a default fallback.
 *
 * The algorithm for rendering pages works like this:
 *
 * 1. Predict visible pages based on "current measure data" (page heights, surface position, visible window)
 * 2. If changes are necessary, apply changes (add/remove pages)
 * 3. For pages that are added, measure the page heights if we need to using getBoundingClientRect
 * 4. If measurements don't match predictions, update measure data and goto step 1 asynchronously
 *
 * Measuring too frequently can pull performance down significantly. To compensate, we cache measured values so that
 * we can avoid re-measuring during operations that should not alter heights, like scrolling.
 *
 * To optimize glass rendering performance, onShouldVirtualize can be set. When onShouldVirtualize return false,
 * List will run in fast mode (not virtualized) to render all items without any measurements to improve page load time.
 * And we start doing measurements and rendering in virtualized mode when items grows larger than this threshold.
 *
 * However, certain operations can make measure data stale. For example, resizing the list, or passing in new props,
 * or forcing an update change cause pages to shrink/grow. When these operations occur, we increment a measureVersion
 * number, which we associate with cached measurements and use to determine if a remeasure should occur.
 */
export declare class List<T = any> extends React.Component<IListProps<T>, IListState<T>> implements IList {
    static defaultProps: {
        startIndex: number;
        onRenderCell: (item: any, index: number, containsFocus: boolean) => JSX.Element;
        renderedWindowsAhead: number;
        renderedWindowsBehind: number;
    };
    private _root;
    private _surface;
    private _pageRefs;
    private _async;
    private _events;
    private _estimatedPageHeight;
    private _totalEstimates;
    private _cachedPageHeights;
    private _focusedIndex;
    private _scrollElement;
    private _hasCompletedFirstRender;
    private _surfaceRect;
    private _requiredRect;
    private _allowedRect;
    private _visibleRect;
    private _materializedRect;
    private _requiredWindowsAhead;
    private _requiredWindowsBehind;
    private _measureVersion;
    private _scrollHeight;
    private _scrollTop;
    private _pageCache;
    static getDerivedStateFromProps<T = any>(nextProps: IListProps<T>, previousState: IListState<T>): IListState<T>;
    constructor(props: IListProps<T>);
    get pageRefs(): Readonly<Record<string, unknown>>;
    /**
     * Scroll to the given index. By default will bring the page the specified item is on into the view. If a callback
     * to measure the height of an individual item is specified, will only scroll to bring the specific item into view.
     *
     * Note: with items of variable height and no passed in `getPageHeight` method, the list might jump after scrolling
     * when windows before/ahead are being rendered, and the estimated height is replaced using actual elements.
     *
     * @param index - Index of item to scroll to
     * @param measureItem - Optional callback to measure the height of an individual item
     * @param scrollToMode - Optional defines where in the window the item should be positioned to when scrolling
     */
    scrollToIndex(index: number, measureItem?: (itemIndex: number) => number, scrollToMode?: ScrollToMode): void;
    getStartItemIndexInView(measureItem?: (itemIndex: number) => number): number;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    shouldComponentUpdate(newProps: IListProps<T>, newState: IListState<T>): boolean;
    forceUpdate(): void;
    /**
     * Get the current height the list and it's pages.
     */
    getTotalListHeight(): number;
    render(): JSX.Element | null;
    private _getDerivedStateFromProps;
    private _shouldVirtualize;
    /**
     * when props.items change or forceUpdate called, throw away cached pages
     */
    private _invalidatePageCache;
    private _renderPage;
    private _onRenderRoot;
    private _onRenderSurface;
    /** Generate the style object for the page. */
    private _getPageStyle;
    private _onRenderPage;
    /** Track the last item index focused so that we ensure we keep it rendered. */
    private _onFocus;
    /**
     * Called synchronously to reset the required render range to 0 on scrolling. After async scroll has executed,
     * we will call onAsyncIdle which will reset it back to it's correct value.
     */
    private _onScroll;
    private _resetRequiredWindows;
    /**
     * Debounced method to asynchronously update the visible region on a scroll event.
     */
    private _onAsyncScroll;
    /**
     * This is an async debounced method that will try and increment the windows we render. If we can increment
     * either, we increase the amount we render and re-evaluate.
     */
    private _onAsyncIdle;
    /**
     * Function to call when the list is done scrolling.
     * This function is debounced.
     */
    private _onScrollingDone;
    private _onAsyncResize;
    private _updatePages;
    /**
     * Notify consumers that the rendered pages have changed
     * @param oldPages - The old pages
     * @param newPages - The new pages
     * @param props - The props to use
     */
    private _notifyPageChanges;
    private _updatePageMeasurements;
    /**
     * Given a page, measure its dimensions, update cache.
     * @returns True if the height has changed.
     */
    private _measurePage;
    /** Called when a page has been added to the DOM. */
    private _onPageAdded;
    /** Called when a page has been removed from the DOM. */
    private _onPageRemoved;
    /** Build up the pages that should be rendered. */
    private _buildPages;
    private _getPageSpecification;
    /**
     * Get the pixel height of a give page. Will use the props getPageHeight first, and if not provided, fallback to
     * cached height, or estimated page height, or default page height.
     */
    private _getPageHeight;
    private _getItemCountForPage;
    private _createPage;
    private _getRenderCount;
    /** Calculate the visible rect within the list where top: 0 and left: 0 is the top/left of the list. */
    private _updateRenderRects;
}
