import React from "react";
import './button.scss';

type ButtonComponentProps= {
    name: string;
    description: string;
}

const Button:React.FC<ButtonComponentProps> = ({name, description}:ButtonComponentProps):JSX.Element => {

    const onClick: React.MouseEventHandler = (
        e: React.MouseEvent<HTMLButtonElement>
    ) => {
        console.log('Click', e)
    }

    return (
    <div className="buttonWrapper">
        <button onClick={onClick} className="button" style={{ color: name === 'OK' ? '#19C37D' : '#FF0404' }}>{name}</button>
        <p>{description}</p>
    </div>)
};
export default Button;