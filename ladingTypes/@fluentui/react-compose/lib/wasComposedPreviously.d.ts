import * as React from 'react';
import { ComposedComponent, Input } from './types';
/**
 * compose() allows you to pass two inputs:
 * - React.forwardRef + static fluentComposeConfig, i.e. previously composed component
 * - a function
 */
export declare function wasComposedPreviously<TElementType extends React.ElementType = 'div', TProps = {}>(input: Input<TElementType, TProps>): input is ComposedComponent<TProps>;
