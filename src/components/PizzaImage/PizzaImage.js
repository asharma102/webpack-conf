import React from 'react';

import style from './PizzaImage.css'
import PizzaPic from '../../assets/original.jpg'

const PizzaImage = (props) => {
    return (
        <div className={style.PizzaImage}>
            <img src={PizzaPic} className={style.PizzaImg} />
        </div>
    )
}

export default PizzaImage;