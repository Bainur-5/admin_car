import { AiFillDelete, AiFillEdit } from 'react-icons/all'
import cls from './RedagDelete.module.scss'
const RedagDelete = ({cardId, fuel, born_year, stage, image, model_type,type, mark, min_price, day_price, onDelete, onEdit}) =>{
    
    return(
        <>  
            <div key={cardId} className={cls.cont}>                    
                        <div key={cardId} className={cls.NavLink} to={`/AutoCard/${cardId}`} >
                            <div className={cls.back}>
                                <div className={cls.card_Car}>
                                    <div className={cls.info_Car}>

                                        <div className={cls.info_Card}>
                                            <div>
                                                <img src='https://pngimg.com/uploads/fuel/fuel_PNG38.png' alt={cardId}/>
                                            </div>
                                            <p>Бензин {fuel}</p>
                                        </div>
                                        <div className={cls.info_Card}>
                                            <div>
                                                <h1>{born_year}</h1>
                                            </div>
                                            <p>Возраст</p>
                                        </div>
                                        <div className={cls.info_Card}>
                                            <div>
                                                <h1>{stage}</h1>
                                            </div>
                                            <p>Стаж</p>
                                        </div>
                                    </div>
                                    <div className={cls.car_img1}>
                                        <img src={image} alt={cardId}/>
                                    </div>
                                    <div className={cls.sum}>
                                        <div className={cls.name}>
                                            <h1>{model_type    }</h1>
                                            <p>{type}  {mark}</p>
                                        </div>
                                        <div className={cls.sum_text}>
                                            <p>Стоимость</p>
                                            <h3>{min_price} сом/мин</h3>
                                            <p>{day_price} сом/сутки</p>
                                        </div>
                                    </div>
                                </div>           
                            </div>    
                        </div>  
                        <div className={cls.cont_btn}>
                            <button onClick={onDelete} className={cls.delete}><AiFillDelete/></button>
                            <button onClick={onEdit} className={cls.redag}><AiFillEdit/></button>
                        </div>
                    </div>
        </>
    )
}
export default RedagDelete