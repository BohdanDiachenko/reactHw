import { useEffect, useState } from 'react';
import axios from 'axios';
import Todo from './components/Todo/Todo';
import { TodoType } from './types';

import './App.scss';

function App() {
  const [data, setData] = useState<TodoType[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<TodoType[]>('https://jsonplaceholder.typicode.com/todos');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container'>
      {data && data.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default App;
