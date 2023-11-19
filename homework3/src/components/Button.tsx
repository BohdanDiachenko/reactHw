import React from 'react';

interface ButtonProps {
    handleClick: () => void;
    name: string;
}

const Button: React.FC<ButtonProps> = ({ handleClick, name }: ButtonProps): JSX.Element => {
    return (
        <button onClick={handleClick}>
            {name}
        </button>
    );
};

export default Button;
