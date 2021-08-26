import { useState } from 'react'
import cls from './Search.module.scss'
const Search = ({onSearchName, onSearchSurnname}) =>{
    const [searchName, setSerchName] = useState('')
    const [searchSurname, setSerchSurname] = useState('')
    // console.log(search);
    return(
        <div className={cls.root}>
            <input type="text" onChange={e => {
                e.preventDefault()
                setSerchName(e.target.value)
                onSearchName(e.target.value)
                }} value={searchName}  placeholder='Поиск по имени'/>
                
            <input type="text" onChange={e => {
                e.preventDefault()
                setSerchSurname(e.target.value)
                onSearchSurnname(e.target.value)
                }} value={searchSurname}  placeholder='Поиск по фамилии'/>
        </div>
    )
}
export default Search 