import React, { useState } from "react";
import Button from "./Button";

const Counter: React.FC = (): JSX.Element => {
    const [count, setCount] = useState<number>(0);

    const handleIncrement = (): void => {
        setCount((prevCount) => prevCount + 1);
    };

    const handleDecrement = (): void => {
        setCount((prevCount) => prevCount - 1);
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <Button handleClick={handleIncrement} name={"Increment"} />
            <Button handleClick={handleDecrement} name={"Decrement"} />
        </div>
    );
};

export default Counter;
