import { useDispatch } from "react-redux"
import {increment} from '../redux/slice'
import UserList from "../UserList"
import Input from "../components/Input"

function Home() {

  const dispatch= useDispatch()
  return (
    <div>
        <h1>Home Page</h1>
      <UserList />
      <button onClick={()=> dispatch(increment())} >Increment</button>
      <br />
      <br />

      <Input />
    </div>
  )
}

export default Home
