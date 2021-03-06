import { IStyle } from '../../../Styling';
export interface IPositioningContainerStyles {
    /**
     * Style for the root element in the default enabled/unchecked state.
     */
    root?: IStyle;
}
export interface IPositioningContainerNames {
    /**
     * Root html container for this component.
     */
    root: string;
    container: string;
    main: string;
    overFlowYHidden: string;
    beak?: string;
    beakCurtain?: string;
}
export declare const getClassNames: () => IPositioningContainerNames;
