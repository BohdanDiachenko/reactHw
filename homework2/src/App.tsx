import './App.css'
import Card from './components/Card'
import courses from './data'

function App() {

  return (
    <div>
      <Card courses={courses}/>
    </div>
  )
}

export default App
