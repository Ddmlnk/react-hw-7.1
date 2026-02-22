
import css from "./App.module.css"
import ContactList from './ContactsList/ContactsList'
import ContactForm from './CotactForm/CotactForm'
import SearchBox from './SearchBox/SearchBox'

export default function App() {

  return (
    <div className={css.wrapper}>
    <ContactForm></ContactForm>
    <SearchBox></SearchBox>
    <ContactList></ContactList>
      
    </div>
  )
}

