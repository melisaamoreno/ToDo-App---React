import './App.css';
import { Center, Input, Button, Heading, Box, HStack, useColorMode } from '@chakra-ui/react'
import {useState} from 'react'
import {Task} from './assets/Componentes/Task/Task'
import { v4 as idGenerator } from 'uuid'
import { FaRegMoon } from "react-icons/fa";



function App() {
const { colorMode, toggleColorMode } = useColorMode()
const [task, setTask] = useState([{
  id: idGenerator(),
  text: 'Prueba 1',
  checked: false
}])
const [filter, setFilter] = useState(0)


const deleteTask = (taskId) => {
let newTaskList = task.filter (item =>  item.id !== taskId
)
  setTask (newTaskList)
}
const setCheck = (id) => {
  const newTaskList = task.map(item => {
    if (item.id === id){
      item.checked = !item.checked
    }
    return item
  })
  setTask(newTaskList)
  console.log(task)
}


console.log(task)
  return (
    <Center flexDirection='column'>
    <Box display='flex' flexDirection='column'mt='60px' bg='#322659' padding='10' w='40%' borderRadius='5'>
    <Heading display='flex' justifyContent='space-between' color='white'>ToDo App   <Button color='black' onClick={toggleColorMode}>
        <FaRegMoon /> {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
      </Heading> 
      <Input placeholder='Ingrese su tarea' mt='5' onKeyDown={(e) => {
        if (e.key === 'Enter'){
          setTask([...task, {id: idGenerator(), text: e.target.value, checked: false}])
          e.target.value = ""
        }
      }}
         />
    </Box>
    
    <Box display='flex' flexDirection='column' mt='5' alignItems='center'  bg='#322659' padding='5' w='40%' borderRadius='5'>
    <HStack spacing='20px'>
    <Button colorScheme='teal' variant='outline' onClick={() => setFilter(0)}> Todos </Button>
    <Button colorScheme='teal' variant='outline' onClick={() => setFilter(1)}> Completos </Button>
    <Button colorScheme='teal' variant='outline' onClick={() => setFilter(2)}> Incompletos </Button>
    </HStack> 

    {task.filter(element => {
      if(filter === 0 || (filter===1 && element.checked) || (filter === 2 && !element.checked)){
        return true
      }
      return false
    }).map (element => <Task key={element.id} id={element.id} text={element.text} checked={element.checked} deleteTask={deleteTask} setCheck={setCheck} task={task} setTask={setTask}/> )}
</Box>
</Center>
  )
   
}

export default App;
