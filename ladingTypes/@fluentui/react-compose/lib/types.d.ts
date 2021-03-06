import * as React from 'react';
export interface ShorthandConfig<TProps> {
    mappedProp?: keyof TProps;
    mappedArrayProp?: keyof TProps;
    allowsJSX?: boolean;
}
export declare type PropsOfElement<E extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any> | ComponentWithAs> = E extends {
    __PRIVATE_PROPS: any;
} ? E['__PRIVATE_PROPS'] : JSX.LibraryManagedAttributes<E, React.ComponentPropsWithRef<E>>;
export declare type ComponentWithAs<TElementType extends keyof JSX.IntrinsicElements = 'div', TProps = {}> = (<TExtendedElementType extends React.ElementType = TElementType>(props: Omit<PropsOfElement<TExtendedElementType>, 'as' | keyof TProps> & {
    as?: TExtendedElementType;
} & TProps) => JSX.Element) & {
    propTypes?: React.WeakValidationMap<TProps> & {
        as: React.Requireable<string | ((props: any, context?: any) => any) | (new (props: any, context?: any) => any)>;
    };
    contextTypes?: React.ValidationMap<any>;
    defaultProps?: Partial<TProps & {
        as: TElementType;
    }>;
    displayName?: string;
    /**
     * A hack to simplify the resolution for ComponentWithAs.
     * @see https://github.com/microsoft/fluentui/pull/13841
     */
    readonly __PRIVATE_PROPS?: Omit<PropsOfElement<TElementType>, 'as' | keyof TProps> & {
        as?: TElementType;
    } & TProps;
};
export declare type ComposedComponent<TProps = {}> = React.FunctionComponent<TProps> & {
    fluentComposeConfig: Required<ComposePreparedOptions>;
};
export declare type InputComposeComponent<TProps = {}> = React.FunctionComponent<TProps> & {
    fluentComposeConfig?: Required<ComposePreparedOptions>;
};
export declare type Input<TElementType extends React.ElementType = 'div', TProps = {}> = InputComposeComponent<TProps> | ComposeRenderFunction<TElementType, TProps & {
    as?: React.ElementType;
}>;
export declare type ComposeRenderFunction<TElementType extends React.ElementType = 'div', TProps = {}, TState = TProps> = (props: TProps, ref: React.Ref<TElementType extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[TElementType] : TElementType>, options: ComposePreparedOptions & {
    state: any;
}) => React.ReactElement | null;
export declare type ComposeOptions<TInputProps = {}, TInputStylesProps = {}, TParentProps = {}, TParentStylesProps = {}, TState = TParentProps & TInputProps> = {
    className?: string;
    classes?: ClassDictionary | ClassFunction | (ClassDictionary | ClassFunction)[];
    displayName?: string;
    mapPropsToStylesProps?: (props: TParentStylesProps & TInputProps) => TInputStylesProps;
    handledProps?: (keyof TInputProps | 'as')[];
    overrideStyles?: boolean;
    slots?: Record<string, React.ElementType>;
    slotProps?: (props: TParentProps & TInputProps) => Record<string, object>;
    shorthandConfig?: ShorthandConfig<TParentProps & TInputProps>;
    state?: (props: TState, ref: React.Ref<HTMLElement>, options: ComposePreparedOptions) => any;
};
export declare type MergePropsResult<TState extends GenericDictionary, TSlots = GenericDictionary, TSlotProps = {
    [key in keyof TSlots]: any;
}> = {
    state: TState;
    slots: TSlots;
    slotProps: TSlotProps;
};
/**
 * Generic name to any dictionary.
 */
export declare type GenericDictionary = Record<string, any>;
/**
 * Generic set of module to class name map.
 */
export declare type ClassDictionary = Record<string, string>;
/**
 * Generic class resolver function type.
 */
export declare type ClassFunction = (state: GenericDictionary, slots: GenericDictionary) => ClassDictionary;
/**
 * Merged ComposeOptions.
 */
export declare type ComposePreparedOptions<TProps = {}, TInputState = any, TParentState = TProps> = {
    className: string;
    classes: (undefined | ClassDictionary | ClassFunction)[];
    displayName: string;
    displayNames: string[];
    mapPropsToStylesPropsChain: ((props: object) => object)[];
    render: ComposeRenderFunction;
    handledProps: (keyof TProps | 'as')[];
    overrideStyles: boolean;
    slots: Record<string, React.ElementType> & {
        __self: React.ElementType;
    };
    slotProps: ((props: TProps) => Record<string, object>)[];
    state: (props: TParentState, ref: React.Ref<HTMLElement>, options: ComposePreparedOptions) => TInputState;
    resolveSlotProps: <TResolvedProps>(props: TResolvedProps) => Record<string, object>;
    shorthandConfig: ShorthandConfig<TProps>;
};
export interface ComponentProps {
    as?: React.ElementType;
    className?: string;
}
export interface BaseSlots {
    root: React.ElementType;
}
export declare type SlotProps<TSlots extends BaseSlots, TProps, TRootProps extends React.HTMLAttributes<HTMLElement>> = {
    [key in keyof Omit<TSlots, 'root'>]: key extends keyof TProps ? TProps[key] : any;
} & {
    root: TRootProps;
};
export declare type SlotPropRenderFunction<TProps> = (Component: React.ElementType<TProps>, props: TProps) => React.ReactNode;
export declare type ObjectSlotProp<TProps extends GenericDictionary> = TProps & {
    children?: TProps['children'] | SlotPropRenderFunction<TProps>;
};
export declare type SlotProp<TProps> = React.ReactChild | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined | ObjectSlotProp<TProps>;
