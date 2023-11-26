import { useEffect, useState } from "react";
import { TodoType } from "../../types";
import IconCheck from "../IconCheck";
import IconUncheck from "../IconUncheck";

import './Todo.scss';

interface TodoProps {
  todo: TodoType;
}

const Todo: React.FC<TodoProps> = ({ todo }) => {
  const { title, id, completed } = todo;

  const [randomBgColor, setRandomBgColor] = useState('rgb(214, 238, 232)');

  const getLightColor = (): void => {
    const generateLightChannel = (): number => Math.floor(Math.random() * 56) + 200;
    const randomCode: string = `rgb(${generateLightChannel()}, ${generateLightChannel()}, ${generateLightChannel()})`;
    setRandomBgColor(randomCode);
  };

  useEffect(() => {
    window.addEventListener('scroll', getLightColor);
    return () => {
      window.removeEventListener('scroll', getLightColor);
    };
  }, []);

  return (
    <div className="todo" style={{ backgroundColor: randomBgColor, transition: 'background-color .5s' }}>
      <p className="todo-id"> {id}.</p>
      <p className="todo-title">{title}.</p>

      <div className="todo-chack">
        {completed ? <IconCheck /> :
          <IconUncheck />}
      </div>
    </div>
  );
};
export default Todo;