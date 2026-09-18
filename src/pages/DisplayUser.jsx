import { useDispatch, useSelector } from "react-redux"
import {increment} from '../redux/slice'
import UserList from "../UserList"
import Input from "../components/Input"
import { useGetUsersQuery } from "../redux/userAPI"

function DisplayUser() {
// const data = useSelector((state)=>state.counter.user);
const {data} = useGetUsersQuery();
console.log(data);

  return (
    <div>
        <h1>Display User Page</h1>
       {
        data?.map((user)=>(  <ul>
            <li>
                <span>Name:{user.name}</span>
            </li>
            <li>
                <span>Email:{user.email}</span>
            </li>
        </ul> 
        ))
       }
    </div>
  )
}

export default DisplayUser
