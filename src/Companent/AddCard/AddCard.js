import cls from './AddCard.module.scss'
import { useState } from 'react'
const AddCard = ({newCard, disabletBtn}) =>{
    const [modelAuto, setModelAuto] = useState('')
    const [markAuto, setMarkAuto] = useState('')
    const [ageUser, setAgeUser] = useState('')
    const [fuelAuto, setFuelAuto] = useState('')
    const [imgAuto, setImgAuto] = useState('')
    const [minAuto, setMinAuto] = useState('')
    const [dayAuto, setDayAuto] = useState('')
    const [placeAuto, setPlaceAuto] = useState('')
    const [stageUser, setStageUser] = useState('')
    const [typeAuto, setTypeAuto] = useState('')
    const [slideImg1, setSlideImg1] = useState('')
    const [slideImg2, setSlideImg2] = useState('')
    const [slideImg3, setSlideImg3] = useState('')
    const [slideImg4, setSlideImg4] = useState('')
    const [slideImg5, setSlideImg5] = useState('')
    const [slideImg6, setSlideImg6] = useState('')
    return(
        <div className={cls.root}>
            <div className={cls.container}>
                <div className={cls.title}><h1>Post</h1></div>  
                <div className={cls.cont_value}>
                    <div className={cls.h2}>
                        <h2>Названия</h2>
                    </div>
                    <div className={cls.input}>
                        <input
                            onChange={(e) =>{
                                setModelAuto(e.target.value)
                    
                            }}    
                        value={modelAuto}    type='text' placeholder='Название авто'/>
                    </div>
                </div>
                <div className={cls.cont_value}>
                    <div className={cls.h2}>
                        <h2>Марка</h2>
                    </div>
                    <div className={cls.input}>
                        <input
                            onChange={(e) =>{
                                setMarkAuto(e.target.value)
                            }}    
                            value={markAuto}
                        type='text' placeholder='Марка авто'/>
                    </div>
                </div>
                <div className={cls.cont_value}>
                    <div className={cls.h2}>
                        <h2>Фото</h2>         
                    </div>
                    <div className={cls.input}>
                        <input
                            onChange={(e) =>{
                                setImgAuto(e.target.value)
                            }}    
                            value={imgAuto}
                        type='text' placeholder='Фото авто(url)'/>
                    </div>
                </div>
                <div className={cls.cont_value}>
                    <div className={cls.h2}>
                        <h2>Класс</h2>
                    </div>
                    <div className={cls.input}> 
                        <input
                            onChange={(e) =>{
                                setTypeAuto(e.target.value)
                            }}    
                            value={typeAuto}
                        type='text' placeholder='Класс атвто'/>
                    </div>
                </div>
                <div className={cls.cont_value}>
                    <div className={cls.h2}>
                        <h2>Стаж</h2>
                    </div>
                    <div className={cls.input}>
                        <input
                            onChange={(e) =>{
                                setStageUser(e.target.value)
                            }}    
                            value={stageUser}
                        type='number' placeholder='Стаж водителя'/>
                    </div>
                </div>
                <div className={cls.cont_value}>
                    <div className={cls.h2}>
                        <h2>Возраст</h2>
                    </div>
                    <div className={cls.input}>
                        <input
                            onChange={(e) =>{
                                setAgeUser(e.target.value)
                            }}    
                            value={ageUser}
                        type='number' placeholder='Возраст водителя'/>
                    </div>
                </div>
                <div className={cls.cont_value}>
                    <div className={cls.h2}>
                        <h2>Бензин</h2>
                    </div>
                    <div className={cls.input}>
                        <input
                            onChange={(e) =>{
                                setFuelAuto(e.target.value)
                            }}    
                            value={fuelAuto}
                        type='text' placeholder='Бензин (АИ 95)'/>
                    </div>
                </div>
                <div className={cls.cont_value}>
                    <div className={cls.h2}>
                        <h2>Минута</h2>
                    </div>
                    <div className={cls.input}>
                        <input
                            onChange={(e) =>{
                                setMinAuto(e.target.value)
                            }}    
                            value={minAuto}
                        type='number' placeholder='Зa миниту'/>
                    </div>
                </div>
                <div className={cls.cont_value}>
                    <div className={cls.h2}>
                        <h2>День</h2>
                    </div>
                    <div className={cls.input}>
                        <input
                            onChange={(e) =>{
                                setDayAuto(e.target.value)
                            }}    
                            value={dayAuto}
                        type='number' placeholder='За сутки'/>
                    </div>
                </div>
                <div className={cls.cont_value}>
                    <div className={cls.h2}>
                        <h2>Место</h2>
                    </div>
                    <div className={cls.input}>
                        <input
                            onChange={(e) =>{
                                setPlaceAuto(e.target.value)
                            }}    
                            value={placeAuto}
                        type='text' placeholder='Места в авто'/>
                    </div>
                </div>
                <div className={cls.cont_value}>
                    <div className={cls.h2}>
                        <h2>Фото для слайда</h2>
                    </div>
                    <div className={cls.input}>
                        <input
                            onChange={(e) =>{
                                setSlideImg1(e.target.value)
                            }}    
                            value={slideImg1}
                        type='text' placeholder='Салон, фото авто (url)'/>
                    </div>
                </div>
                <div className={cls.cont_value}>
                    <div className={cls.h2}>
                        <h2>Фото для слайда</h2>
                    </div>
                    <div className={cls.input}>
                        <input
                            onChange={(e) =>{
                                setSlideImg2(e.target.value)
                            }}    
                            value={slideImg2}
                        type='text' placeholder='Салон, фото авто (url)'/>
                    </div>
                </div>
                <div className={cls.cont_value}>
                    <div className={cls.h2}>
                        <h2>Фото для слайда</h2>
                    </div>
                    <div className={cls.input}>
                        <input
                            onChange={(e) =>{
                                setSlideImg3(e.target.value)
                            }}    
                            value={slideImg3}
                        type='text' placeholder='Салон, фото авто (url)'/>
                    </div>
                </div>
                <div className={cls.cont_value}>
                    <div className={cls.h2}>
                        <h2>Фото для слайда</h2>
                    </div>
                    <div className={cls.input}>
                        <input
                            onChange={(e) =>{
                                setSlideImg4(e.target.value)
                            }}    
                            value={slideImg4}
                        type='text' placeholder='Салон, фото авто (url)'/>
                    </div>
                </div>
                <div className={cls.cont_value}>
                    <div className={cls.h2}>
                        <h2>Фото для слайда</h2>
                    </div>
                    <div className={cls.input}>
                        <input
                            onChange={(e) =>{
                                setSlideImg5(e.target.value)
                            }}    
                            value={slideImg5}
                        type='text' placeholder='Салон, фото авто (url)'/>
                    </div>
                </div>
                <div className={cls.cont_value}>
                    <div className={cls.h2}>
                        <h2>Фото для слайда</h2>
                    </div>
                    <div className={cls.input}>
                        <input
                            onChange={(e) =>{
                                setSlideImg6(e.target.value)
                            }}    
                            value={slideImg6}
                        type='text' placeholder='Салон, фото авто (url)'/>
                    </div>
                </div>
                <div className={cls.cont_btn}>
                    <button 
                    disabled={disabletBtn}
                    onClick={e => {
                    newCard(modelAuto, markAuto,  ageUser, fuelAuto, imgAuto, minAuto, dayAuto, placeAuto, stageUser, typeAuto, slideImg1, slideImg2,slideImg3,slideImg4,slideImg5,slideImg6,
                        setModelAuto, setMarkAuto,  setAgeUser, setFuelAuto, setImgAuto, setMinAuto, setDayAuto, setPlaceAuto, setStageUser, setTypeAuto, setSlideImg1, setSlideImg2, setSlideImg3, setSlideImg4, setSlideImg5, setSlideImg6)
                    }}>POST</button>
                </div>
            </div>
        </div>
    )
}
export default AddCard