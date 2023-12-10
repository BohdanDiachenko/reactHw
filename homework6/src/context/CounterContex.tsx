import React, { createContext, useReducer} from "react";

import {
    CounterContextType,
    CounterState,
    CounterProviderProps,
    ActionType, 
    CounterAction
} from "../types/types";

const reducer = (state: CounterState, action: CounterAction): CounterState => {
    switch (action.type) {
        case ActionType.INCREMENT:
            return { count: state.count + 1 };
        case ActionType.INCREMENT_BY_VALUE:
            return { count: state.count + action.payload };
        case ActionType.DECREMENT:
            return { count: state.count - 1 };
        case ActionType.RESET:
            return { count: 0 };
        default:
            return state;
    }
};

export const CounterContext = createContext<CounterContextType>({
    state: { count: 0 },
    onIncrement: () => {},
    onDecrement: () => {},
    onReset: () => {},
    onIncrementByValue: () => {},
});

export const CounterProvider: React.FC<CounterProviderProps> = ({
    children,
}: CounterProviderProps) => {
    const initialState: CounterState = {
        count: 0,
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleIncrementCount = (): void => {
        dispatch({ type: ActionType.INCREMENT });
    };
    const handleDecrementCount = (): void => {
        dispatch({ type: ActionType.DECREMENT });
    };
    const handleResetCount = (): void => {
        dispatch({ type: ActionType.RESET });
    };
    const handleIncrementByValue = (value: number): void => {
        dispatch({ type: ActionType.INCREMENT_BY_VALUE, payload: value });
    };

    const providedValue: CounterContextType = {
        state,
        onIncrement: handleIncrementCount,
        onDecrement: handleDecrementCount,
        onReset: handleResetCount,
        onIncrementByValue: handleIncrementByValue,
    };

    return (
        <CounterContext.Provider value={providedValue}>
            {children}
        </CounterContext.Provider>
    );
};
