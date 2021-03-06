import * as React from 'react';
import { IRenderFunction } from '../../Utilities';
import { CheckboxVisibility, ConstrainMode, DetailsListLayoutMode, IColumn, IDetailsList, IDetailsListProps } from '../DetailsList/DetailsList.types';
import { IDetailsRowProps } from '../DetailsList/DetailsRow.types';
import { SelectionMode } from '../../Selection';
import { ScrollToMode } from '../../List';
export interface IDetailsListState {
    focusedItemIndex: number;
    lastWidth?: number;
    lastSelectionMode?: SelectionMode;
    adjustedColumns: IColumn[];
    isCollapsed?: boolean;
    isSizing?: boolean;
    isSomeGroupExpanded?: boolean;
    /**
     * A unique object used to force-update the List when it changes.
     */
    version: {};
    getDerivedStateFromProps(nextProps: IDetailsListProps, previousState: IDetailsListState): IDetailsListState;
}
export declare class DetailsListBase extends React.Component<IDetailsListProps, IDetailsListState> implements IDetailsList {
    static defaultProps: {
        layoutMode: DetailsListLayoutMode;
        selectionMode: SelectionMode;
        constrainMode: ConstrainMode;
        checkboxVisibility: CheckboxVisibility;
        isHeaderVisible: boolean;
        compact: boolean;
        useFastIcons: boolean;
    };
    private _async;
    private _root;
    private _header;
    private _groupedList;
    private _list;
    private _focusZone;
    private _selectionZone;
    private _selection;
    private _activeRows;
    private _dragDropHelper;
    private _initialFocusedIndex;
    private _columnOverrides;
    static getDerivedStateFromProps(nextProps: IDetailsListProps, previousState: IDetailsListState): IDetailsListState;
    constructor(props: IDetailsListProps);
    scrollToIndex(index: number, measureItem?: (itemIndex: number) => number, scrollToMode?: ScrollToMode): void;
    focusIndex(index: number, forceIntoFirstElement?: boolean, measureItem?: (itemIndex: number) => number, scrollToMode?: ScrollToMode): void;
    getStartItemIndexInView(): number;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: IDetailsListProps, prevState: IDetailsListState): void;
    render(): JSX.Element;
    forceUpdate(): void;
    protected _onRenderRow: (props: IDetailsRowProps, defaultRender?: IRenderFunction<IDetailsRowProps> | undefined) => JSX.Element;
    private _getDerivedStateFromProps;
    private _onGroupExpandStateChanged;
    private _onColumnIsSizingChanged;
    private _getGroupNestingDepth;
    private _onRowDidMount;
    private _setFocusToRowIfPending;
    private _setFocusToRow;
    private _onRowWillUnmount;
    private _onToggleCollapse;
    private _forceListUpdates;
    private _notifyColumnsResized;
    private _adjustColumns;
    /** Returns adjusted columns, given the viewport size and layout mode. */
    private _getAdjustedColumns;
    /** Builds a set of columns based on the given columns mixed with the current overrides. */
    private _getFixedColumns;
    private _getJustifiedColumnsAfterResize;
    /** Builds a set of columns to fix within the viewport width. */
    private _getJustifiedColumns;
    private _onColumnResized;
    private _rememberCalculatedWidth;
    private _getColumnOverride;
    /**
     * Callback function when double clicked on the details header column resizer
     * which will measure the column cells of all the active rows and resize the
     * column to the max cell width.
     *
     * @param column - double clicked column definition
     * @param columnIndex - double clicked column index
     * TODO: min width 100 should be changed to const value and should be consistent with the
     * value used on _onSizerMove method in DetailsHeader
     */
    private _onColumnAutoResized;
    /**
     * Call back function when an element in FocusZone becomes active. It will translate it into item
     * and call onActiveItemChanged callback if specified.
     *
     * @param row - element that became active in Focus Zone
     * @param focus - event from Focus Zone
     */
    private _onActiveRowChanged;
    private _onBlur;
    private _getItemKey;
}
export declare function buildColumns(items: any[], canResizeColumns?: boolean, onColumnClick?: (ev: React.MouseEvent<HTMLElement>, column: IColumn) => void, sortedColumnKey?: string, isSortedDescending?: boolean, groupedColumnKey?: string, isMultiline?: boolean): IColumn[];
