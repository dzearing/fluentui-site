import * as React from 'react';
import { IGroupedList, IGroupedListProps, IGroup } from './GroupedList.types';
import { ScrollToMode } from '../../List';
import { SelectionMode } from '../../Selection';
export interface IGroupedListState {
    selectionMode?: IGroupedListProps['selectionMode'];
    compact?: IGroupedListProps['compact'];
    groups?: IGroup[];
    items?: IGroupedListProps['items'];
    listProps?: IGroupedListProps['listProps'];
    version: {};
}
export declare class GroupedListBase extends React.Component<IGroupedListProps, IGroupedListState> implements IGroupedList {
    static defaultProps: {
        selectionMode: SelectionMode;
        isHeaderVisible: boolean;
        groupProps: {};
        compact: boolean;
    };
    private _classNames;
    private _list;
    private _isSomeGroupExpanded;
    static getDerivedStateFromProps(nextProps: IGroupedListProps, previousState: IGroupedListState): IGroupedListState;
    constructor(props: IGroupedListProps);
    scrollToIndex(index: number, measureItem?: (itemIndex: number) => number, scrollToMode?: ScrollToMode): void;
    getStartItemIndexInView(): number;
    componentDidMount(): void;
    render(): JSX.Element;
    forceUpdate(): void;
    toggleCollapseAll(allCollapsed: boolean): void;
    private _setGroupsCollapsedState;
    private _renderGroup;
    private _returnOne;
    private _getDefaultGroupItemLimit;
    private _getGroupItemLimit;
    private _getGroupHeight;
    private _getPageHeight;
    private _getGroupKey;
    private _getGroupNestingDepth;
    private _onToggleCollapse;
    private _onToggleSelectGroup;
    private _isInnerZoneKeystroke;
    private _forceListUpdates;
    private _onToggleSummarize;
    private _getPageSpecification;
    private _computeIsSomeGroupExpanded;
    private _updateIsSomeGroupExpanded;
}
