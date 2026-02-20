import { useEffect } from 'react'
import Contact from '../Contact/Contact'
// import css from './ContactList.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../redux/userOps'
import { selectVisibleData } from '../../redux/userSlice'

export default function ContactList (){
    const dispatch = useDispatch()
    // console.log("usersData: , ", usersData)
    const visibleData= useSelector(selectVisibleData)


    useEffect(()=>{
        dispatch(fetchUsers())
    },[dispatch])
    

    return (
       <>
        <ul>
            {visibleData.map((item)=>
                <li key={item.id}>
                    <Contact item={item}></Contact>
                </li>
            )}
            
        </ul>
       </>    
    )
}