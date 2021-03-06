import * as React from 'react';
import { IComboBoxProps } from './ComboBox.types';
export interface IComboBoxState {
    /** The open state */
    isOpen?: boolean;
    /** The focused state of the combo box */
    focusState?: 'none' | 'focused' | 'focusing';
    /**
     * When taking input, this will store the index that the options input matches
     * (-1 if no input or match)
     */
    currentPendingValueValidIndex: number;
    /**
     * Stores the hovered over value in the dropdown
     * (used for styling the options without updating the input)
     */
    currentPendingValueValidIndexOnHover: number;
    /** When taking input, this will store the actual text that is being entered */
    currentPendingValue?: string;
}
export declare const ComboBox: React.FunctionComponent<IComboBoxProps>;
