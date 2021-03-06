import * as React from 'react';
import { IShimmeredDetailsListProps } from './ShimmeredDetailsList.types';
export declare class ShimmeredDetailsListBase extends React.Component<IShimmeredDetailsListProps, {}> {
    private _shimmerItems;
    private _classNames;
    constructor(props: IShimmeredDetailsListProps);
    render(): JSX.Element;
    private _onRenderShimmerPlaceholder;
    private _renderDefaultShimmerPlaceholder;
}
