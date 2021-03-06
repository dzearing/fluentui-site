import { IComponentAs } from '../IComponentAs';
/**
 * Composes two components which conform to the `IComponentAs` specification; that is, two
 * components which accept a `defaultRender` prop, which is a 'default' implementation of
 * a component which accepts the same overall props.
 *
 * @public
 */
export declare function composeComponentAs<TProps>(outer: IComponentAs<TProps>, inner: IComponentAs<TProps>): IComponentAs<TProps>;
