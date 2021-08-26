import { useEffect, useState } from "react"
import { deleteCardId, getCards, patchCardId, postCard } from "../../API"
import AddCard from "../../Companent/AddCard/AddCard"
import Loading from "../../Companent/Loading/Loading"
import RedagDelete from "../../Companent/ReadagDelete/RedagDelete"
import cls from './Main.module.scss'
const Main = () =>{
    const [cards, setCards] = useState(null)
    const [carsdChengeState, setCarsdChengeState] = useState(false)
    const [disablateBtn, setDisablateBtn] = useState(false)
    const allCard = () =>{
       
        getCards()
        .then(res => res.json())
        .then(r =>  {
          const data = Object.entries(r).map(item => {
              const id = item[0]
              return{
                  ...item[1],
                  id
              }
          })
          setCards(data)
       })
    }
    useEffect(() => {
       allCard();
     },[carsdChengeState]);
    const onNewCard = (modelAuto, markAuto, ageUser, fuelAuto, imgAuto, minAuto, dayAuto, placeAuto, stageUser, typeAuto,slideImg1, slideImg2,slideImg3,slideImg4,slideImg5,slideImg6,
        setModelAuto, setMarkAuto,  setAgeUser, setFuelAuto, setImgAuto, setMinAuto, setDayAuto, setPlaceAuto, setStageUser, setTypeAuto, setSlideImg1, setSlideImg2, setSlideImg3, setSlideImg4, setSlideImg5, setSlideImg6) =>{
        if (modelAuto !== '' && markAuto !== '' && ageUser !== '' && fuelAuto !== '' && imgAuto !== '' && minAuto !== '' && dayAuto !== '' && placeAuto !== '' && stageUser !== '' && typeAuto !== '' ) {  
            setDisablateBtn(true)
            
            postCard({
                born_year: ageUser,
                day_price: dayAuto,
                fuel: fuelAuto,
                image: imgAuto,
                mark: markAuto,
                min_price: minAuto,
                model_type: modelAuto,
                place: placeAuto,
                stage: stageUser,
                type: typeAuto,
                photo: [{
                    img1: slideImg1,
                    img2: slideImg2,
                    img3: slideImg3,
                    img4: slideImg4,
                    img5: slideImg5,
                    img6: slideImg6
                }]
            })
            .then(res => res.json())
            .then(r => {
                setDisablateBtn(false)
                setModelAuto('')
                setMarkAuto('')
                setAgeUser('')
                setDayAuto('')
                setFuelAuto('')
                setImgAuto('')
                setMinAuto('')
                setPlaceAuto('')
                setStageUser('')
                setTypeAuto('')
                setSlideImg1('')
                setSlideImg2('')
                setSlideImg3('')
                setSlideImg4('')
                setSlideImg5('')
                setSlideImg6('')
                setCarsdChengeState(r)
            })
        }else{
            alert('Не вся поля заплнены')
        }
    }
    const cardDelete = id =>{
        setCards((prev) =>{
          return prev.filter(item => item.id !== id)
        })
        deleteCardId(id)
    }
    const cardEdit = (id, item) =>{
        const askMark= window.prompt('Марка', item.mark)
        const askModel = window.prompt('Модел', item.model_type)
        const askType = window.prompt('Класс машины', item.type)
        const askImg = window.prompt('Фото (url)', item.image)
        const askFuel = window.prompt('Бензин', item.fuel)
        const askPlace = +window.prompt('Место в машины (введите число)', item.place)
        const askStage =  +window.prompt('Стаж водителя (введите число)', item.stage)
        const askAge = +window.prompt('Возраст водителя (введите число)', item.born_year)
        const askDay = +window.prompt('За день (введите число)', item.day_price)
        const askMin = +window.prompt('За минуту (введите число)', item.min_price)
        const slideImg1 = window.prompt('Фто для слайда 1', item.photo[0].img1)
        const slideImg2 = window.prompt('Фто для слайда 2', item.photo[0].img2)
        const slideImg3 = window.prompt('Фто для слайда 3', item.photo[0].img3)
        const slideImg4 = window.prompt('Фто для слайда 4', item.photo[0].img4)
        const slideImg5 = window.prompt('Фто для слайда 5', item.photo[0].img5)
        const slideImg6 = window.prompt('Фто для слайда 6', item.photo[0].img6)
        if (askMark && askFuel &askDay & askAge &askImg &askMin&& askModel && askPlace &askStage && askType && slideImg1&& slideImg2&& slideImg3&& slideImg4&& slideImg5&& slideImg6) {
            patchCardId(id,{
                born_year: askAge,
                day_price: askDay,
                fuel: askFuel,
                image: askImg,
                mark: askMark,
                min_price: askMin,
                model_type: askModel,
                place: askPlace,
                stage: askStage,
                type: askType,
                photo: [{
                    img1: slideImg1,
                    img2: slideImg2,
                    img3: slideImg3,
                    img4: slideImg4,
                    img5: slideImg5,
                    img6: slideImg6
                }]

            })
            .then(res => res.json())
            .then(r => {
                console.log(r);
                setCarsdChengeState(r)
            })
        }else{
            alert('Поля не должы быть пустми')
        }
    }
    return(
        <div className={cls.root}>
            <AddCard newCard={onNewCard} disabletBtn={disablateBtn}/>
            <div className={cls.root_card}>
                {   
                    cards?.length === 0?(
                        <h1>Пусто</h1>
                    ) : cards ? (
                        cards.map(item =>{
                            // console.log(item);
                            return <RedagDelete key={item.id} item={item.id} fuel={item.fuel} born_year={item.born_year} stage={item.stage} image={item.image} model_type={item.model_type} type={item.type} mark={item.mark} min_price={item.min_price} day_price={item.day_price}
                             onDelete={(e) =>{
                            e.preventDefault() 
                            cardDelete(item.id)}}  
                            onEdit={(e) => {
                            e.preventDefault()
                            cardEdit(item.id, item)}} />
                        })
                    ) : <Loading/>
                }
            </div>
        </div>
    )
}
export default Main