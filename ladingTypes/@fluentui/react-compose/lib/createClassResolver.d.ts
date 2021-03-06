import { ClassDictionary } from './types';
/**
 * `createClassResolver` is a factory function which creates a state to classmap resolver for
 * slot specific class names. It can be used in conjunction with the `compose` option `classes` to
 * inject css modules without writing cx(...) logic manually distributing classnames.
 *
 * Class names which map to slots are automatically distributed to correct slot props.
 *
 * Class names with an underscore are interpretted as enum matchable classes. For example,
 * the class "size_large" would be applied to the `root` slot when the component's state contains
 * a prop `size` with a value `large`.
 *
 * Remaining class names would be interpretted as modifiers, applied to the `root` slot when
 * the component `state` contains a truthy matching prop name.
 */
export declare const createClassResolver: (classes: Record<string, string>) => (state: Record<string, any>) => Record<string, string>;
declare type ResolvedMap = {
    slots: Record<string, string>;
    modifiers: Record<string, string>;
    enums: Record<string, Record<string, string>>;
};
/**
 * Helper to take a css module map and translate it into { slots, modifiers, enums } where
 * slots are a matched name in the slotNames array, enums have underscores splitting the matched
 * name/value, and modifiers are everything else. Creating this split definition keeps runtime
 * resolution work to a minimum.
 */
export declare function createResolvedMap(classes: ClassDictionary): ResolvedMap;
export {};
