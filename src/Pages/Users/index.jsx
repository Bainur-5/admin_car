import { useEffect, useState } from 'react'
import { getUserCards } from '../../API'
import Search from '../../Companent/Search'
import cls from './Users.module.scss'
const Users = () =>{
    const [userCard, setUserCard] = useState(null)
    const [filtereArr, setFiltereArr] = useState('')
    useEffect(() =>{
        console.log('d');
        getUserCards()
        .then(res => res.json())
        .then(r =>{
            if(r){
                
                const data = Object.entries(r).map(item => {
                    const userId = item[0]
                    return{
                        ...item[1],
                        userId
                    }
                })   
                setUserCard(data)
            }
        })
    }, [])
    const cardSearchName = (search) =>{      
    const filtere = userCard.filter(({name, surname}) => name.toUpperCase().includes(search.toUpperCase()))
    console.log(filtere);
    setFiltereArr(filtere)
    }
    const cardSearchSurname = (search) =>{      
    const filtere = userCard.filter(({surname}) => surname.toUpperCase().includes(search.toUpperCase()))
    console.log(filtere);
    setFiltereArr(filtere)
    }
    return(
        <div className={cls.root}>
            <div className={cls.cont_search}>
                <Search key='search' onSearchName={cardSearchName} onSearchSurnname={cardSearchSurname}/>
            </div>
            <div className={cls.cont_users}>
                <div className={cls.header_users}>
                    <div className={cls.title}>
                        <h3>Имя Фамилия</h3>
                    </div>
                    <div className={cls.age}>
                        <p>Возраст</p>
                    </div>
                    <div className={cls.stage}>
                        <p>Стаж</p>
                    </div>
                    <div className={cls.email}>
                        <p>Email</p>
                    </div>
                </div>
                {
                    userCard &&(
                        filtereArr !== '' ? (
                            filtereArr.map(item => 
                                <div key={item.userId} className={cls.card_users}>
                                    <div className={cls.title}>
                                        <h1>{item.name} {item.surname}</h1>
                                    </div>
                                    <div className={cls.age}>
                                        <h1>{item.age}</h1>
                                    </div>
                                    <div className={cls.stage}>
                                        <h1>{item.stage}</h1>
                                    </div>
                                    <div className={cls.email}>
                                        <p>{item.email}</p>
                                    </div>
                                </div>
                                )
                        ) : (
                            userCard.map(item => 
                                <div key={item.userId} className={cls.card_users}>
                                    <div className={cls.title}>
                                        <h1>{item.name} {item.surname}</h1>
                                    </div>
                                    <div className={cls.age}>
                                        <h1>{item.age}</h1>
                                    </div>
                                    <div className={cls.stage}>
                                        <h1>{item.stage}</h1>
                                    </div>
                                    <div className={cls.email}>
                                        <p>{item.email}</p>
                                    </div>
                                </div>
                                )
                        )
                    )
                }
            </div>
        </div>
    )
}
export default Users