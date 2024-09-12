import './App.css'
import Titulo from './components/Titulo'
import { Card, Container } from 'react-bootstrap'
import Formulario from './components/Formulario'
import ListaNoticias from './components/ListaNoticias'
import { useState } from 'react'
function App() {
  const [categoria, setCategoria] = useState('')

  return (
    <Container>
      <Titulo></Titulo>
      <Card>
        <Formulario setCategoria={setCategoria}></Formulario>
        <ListaNoticias categoria={categoria}></ListaNoticias>
      </Card>
    </Container>
  )
}

export default App
