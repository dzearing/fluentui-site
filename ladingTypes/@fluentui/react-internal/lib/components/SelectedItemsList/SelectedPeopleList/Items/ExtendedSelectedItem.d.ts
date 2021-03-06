import * as React from 'react';
import { ISelectedPeopleItemProps } from '../SelectedPeopleList';
export interface IPeoplePickerItemState {
    contextualMenuVisible: boolean;
}
export declare class ExtendedSelectedItem extends React.Component<ISelectedPeopleItemProps, IPeoplePickerItemState> {
    protected persona: React.RefObject<HTMLDivElement>;
    constructor(props: ISelectedPeopleItemProps);
    render(): JSX.Element;
    private _onClickIconButton;
}
