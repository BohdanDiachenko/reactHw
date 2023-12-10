
import { ActionType } from "../types/types";

export const increment = () => ({
    type: ActionType.INCREMENT
})
export const decrement = () => ({
    type: ActionType.DECREMENT
})
export const reset = () => ({
    type: ActionType.RESET
})
export const incrementByValue = (value: number) => ({
    type: ActionType.INCREMENT_BY_VALUE,
    payload: Number(value)
})