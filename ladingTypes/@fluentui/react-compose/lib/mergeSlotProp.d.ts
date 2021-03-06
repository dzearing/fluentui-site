import { SlotProp } from './types';
/**
 * Merge props for a slot to a slot prop.
 * @param slotProp - Slot prop.
 * @param slotProps - Props for the slot.
 * @param mappedProp - Optional mapped prop name for the slotProp after merging.
 */
export declare function mergeSlotProp<TProps>(slotProp: SlotProp<TProps>, slotProps: TProps, mappedProp?: string): SlotProp<TProps>;
