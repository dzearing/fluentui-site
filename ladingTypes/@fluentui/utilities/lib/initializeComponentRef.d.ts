import * as React from 'react';
import { IBaseProps } from './BaseComponent.types';
/**
 * Helper to manage componentRef resolution. Internally appends logic to
 * lifetime methods to resolve componentRef to the passed in object.
 *
 * Usage: call initializeComponentRef(this) in the constructor,
 */
export declare function initializeComponentRef<TProps extends IBaseProps, TState>(obj: React.Component<TProps, TState>): void;
