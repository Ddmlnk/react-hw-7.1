import Contact from '../Contact/Contact'
// import css from './ContactList.module.css'
import { useSelector } from 'react-redux'


export default function ContactList (){
    const usersData = useSelector((state)=>state.user.data)
    const searchName = useSelector((state)=>state.search.data)
    console.log("searchName ", searchName)

    const visibleData = usersData.filter((item)=> item.name.toLowerCase().includes(searchName.toLowerCase()))
    console.log("visible: ", visibleData)

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