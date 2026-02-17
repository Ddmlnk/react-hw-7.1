import css from './Contact.module.css'
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { deleteUser } from '../../redux/userSlice';
import { useDispatch } from 'react-redux';

export default function Contact ({item}){

    const dispatch=useDispatch()
    
    const handleClick = ()=>{
      dispatch(deleteUser(item.id))
    }
    
    return (
        <div className={css.item}>
            <div className={css.dataWrapper}>
                <div className={css.wrapper}>
                    <FaUser />
                    <h2 className={css.contactName}> {item.name} </h2>
                </div>
                <div className={css.wrapper}>
                    <FaPhoneAlt />
                    <p className={css.contactNumber}> {item.number} </p>
                </div>
            </div>
            <button className={css.deleteButton}  onClick={handleClick}>Delete</button>
        </div>
    )
}