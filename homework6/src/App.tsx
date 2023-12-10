import { useContext, useState, ChangeEvent } from "react";
import { CounterContext } from "./context/CounterContex";
import { CounterContextType } from "./types/types";

function App() {
    const [value, setValue] = useState<number>(0);

    const { state, onIncrement, onDecrement, onReset, onIncrementByValue } =
        useContext<CounterContextType>(CounterContext)!;

    return (
        <div className="flex flex-col gap-y-8 h-screen mx-auto items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
            <div className="flex flex-col">
                <input
                    type="number"
                    placeholder="number"
                    value={value}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setValue(Number(e.target.value))
                    }
                    className="appearance-none h-20 w-96 px-6 text-white text-4xl bg-inherit border-2 rounded-е-lg border-blue-500 border-opacity-50 outline-none focus:text-white transition duration-200"
                />
                <button
                    onClick={() => onIncrementByValue(value)}
                    className="relative w-0 h-5 border-l-[190px] border-l-transparent border-t-[75px] border-blue-500 border-r-[190px] border-r-transparent"
                >
                    <span className="absolute text-cyan-900 inset-0 flex items-center justify-center top-[-70px]">
                        ADD
                    </span>
                </button>
            </div>

            <div className="text-5xl font-bold text-cyan-700">
                {state.count}
            </div>
            <div className="flex gap-5">
                <button
                    onClick={onIncrement}
                    className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-[70px] h-[70px] justify-center items-center rounded-full text-orange-500 text-2xl  font-extrabold hover:cursor:pointer"
                >
                    +
                </button>
                <button
                    onClick={onDecrement}
                    className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-[70px] h-[70px] justify-center items-center  rounded-full text-orange-500 text-2xl font-extrabold hover:cursor:pointer"
                >
                    -
                </button>
            </div>
            <button
                onClick={onReset}
                className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-[80px] h-[50px] justify-center items-center  text-xl rounded hover:cursor:pointer"
            >
                RESET
            </button>
        </div>
    );
}

export default App;
