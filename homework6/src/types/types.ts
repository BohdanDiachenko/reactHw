export interface CounterState {
    count: number;
}

export enum ActionType {
    INCREMENT = "INCREMENT",
    DECREMENT = "DECREMENT",
    RESET = "RESET",
    INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE",
}

export type CounterAction =
    | { type: "INCREMENT" }
    | { type: "INCREMENT_BY_VALUE"; payload: number }
    | { type: "DECREMENT" }
    | { type: "RESET" };

export interface CounterContextType {
    state: CounterState;
    onIncrement: () => void;
    onDecrement: () => void;
    onReset: () => void;
    onIncrementByValue: (value: number) => void;
}

export interface CounterProviderProps {
    children: React.ReactNode;
}
