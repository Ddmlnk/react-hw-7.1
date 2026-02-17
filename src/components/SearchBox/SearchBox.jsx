import css from './SearchBox.module.css'
import { searchUser } from '../../redux/searchSlice'
import { useDispatch } from 'react-redux'

export default function SearchBox (){

    const dispatch = useDispatch()

    const handleChange =(event)=>{
        dispatch(searchUser(event.target.value)) 
        
    }
    return (
        <div className={css.wrapper}>
        <label htmlFor="seachContact">Find contacts by name</label>
        <input type="text" id='seachContact' name='contact'  onChange={handleChange}/>
        </div>
    )
}