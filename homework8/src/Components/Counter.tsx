import type { RootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redax/slices/counterSlice";

export function Counter() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="flex w-1/2 justify-between mx-auto items-center">
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
                className="w-40 h-10 rounded-lg neon-blue hover:neon-green text-white px-4 py-2"
            >
                Increment
            </button>
            <div className="text-white text-4xl">{count}</div>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
                className="w-40 h-10 rounded-lg neon-blue hover:neon-red text-white"
            >
                Decrement
            </button>
        </div>
    );
}
