import * as React from 'react';
import { ReactWrapper } from 'enzyme';
import { Component } from 'react';
import * as ReactTestUtils from 'react-dom/test-utils';
export declare function findNodes(wrapper: ReactWrapper<any, any>, className: string): ReactWrapper<any, any>;
export declare function expectNodes(wrapper: ReactWrapper<any, any>, className: string, n: number): void;
export declare function expectOne(wrapper: ReactWrapper<any, any>, className: string): void;
export declare function expectMissing(wrapper: ReactWrapper<any, any>, className: string): void;
/** @deprecated Use fake timers and `jest.runAllTimers()` instead */
export declare function delay(millisecond: number): Promise<void>;
/**
 * Mounts the element attached to a child of document.body. This is primarily for tests involving
 * event handlers (which don't work right unless the element is attached).
 */
export declare function mountAttached<C extends Component, P = C['props'], S = C['state']>(element: React.ReactElement<P>): ReactWrapper<P, S, C>;
export declare function renderIntoDocument(element: React.ReactElement<any>): HTMLElement;
export declare function mockEvent(targetValue?: string): ReactTestUtils.SyntheticEventData;
/**
 * Hack for forcing Jest to run pending promises
 * https://github.com/facebook/jest/issues/2157#issuecomment-279171856
 */
export declare function flushPromises(): Promise<void>;
