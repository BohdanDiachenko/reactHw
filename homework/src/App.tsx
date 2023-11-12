import Button from "./components/Button/Button"
import './styles/global.scss';


function App() {

  return (
    <div className="container">
      <Button name='OK' description="The best button"/>
      <Button name='Badly' description="The Bad button"/>
    </div>
  )
}

export default App
