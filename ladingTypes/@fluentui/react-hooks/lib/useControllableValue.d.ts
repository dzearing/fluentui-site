import * as React from 'react';
export declare type ChangeCallback<TElement extends HTMLElement, TValue, TEvent extends React.SyntheticEvent<TElement> | undefined> = (ev: TEvent, newValue: TValue | undefined) => void;
/**
 * Hook to manage a value that could be either controlled or uncontrolled, such as a checked state or
 * text box string.
 * @param controlledValue - The controlled value passed in the props. This value will always be used if provided,
 * and the internal state will be updated to reflect it.
 * @param defaultUncontrolledValue - Initial value for the internal state in the uncontrolled case.
 * @returns An array of the current value and an updater callback. Like `React.useState`, the updater
 * callback always has the same identity, and it can take either a new value, or a function which
 * is passed the previous value and returns the new value.
 * @see https://reactjs.org/docs/uncontrolled-components.html
 */
export declare function useControllableValue<TValue, TElement extends HTMLElement>(controlledValue: TValue | undefined, defaultUncontrolledValue: TValue | undefined): Readonly<[TValue | undefined, (update: React.SetStateAction<TValue | undefined>) => void]>;
export declare function useControllableValue<TValue, TElement extends HTMLElement, TEvent extends React.SyntheticEvent<TElement> | undefined>(controlledValue: TValue | undefined, defaultUncontrolledValue: TValue | undefined, onChange: ChangeCallback<TElement, TValue, TEvent> | undefined): Readonly<[TValue | undefined, (update: React.SetStateAction<TValue | undefined>, ev?: React.FormEvent<TElement>) => void]>;
