import { ComponentWithAs, ComposeOptions, Input } from './types';
declare function compose<TElementType extends keyof JSX.IntrinsicElements, TInputProps, TInputStylesProps, TParentProps, TParentStylesProps>(input: Input<TElementType, TInputProps>, inputOptions?: ComposeOptions<TInputProps, TInputStylesProps, TParentProps, TParentStylesProps>): ComponentWithAs<TElementType, TInputProps & TParentProps>;
export default compose;
