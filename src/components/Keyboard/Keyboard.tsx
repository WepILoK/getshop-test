import React, {useState} from 'react';
import './Keyboard.scss'
import checkImg from '../../assets/images/check.svg'
import closeImg from '../../assets/images/out.svg'

export const Keyboard = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'СТЕРЕТЬ', 0]
    const [checkbox, setCheckbox] = useState(false)

    const toggleCheckbox = () => {
        setCheckbox(!checkbox)
    }

    return (
        <div className="keyboard">
            <div className='keyboard__header header'>
                Введиде ваш номер мобильного телефона
            </div>
            <div className='keyboard__tel-number tel-number'>
                +7(___)___-__-__
            </div>
            <div className='keyboard__sub-text sub-text'>
                и с Вами свяжется наш менеждер для дальнейшей консультации
            </div>
            <div className='numpad'>
                {arr.map(item =>
                    Number.isInteger(item)
                        ? <div className='numpad__num btn'
                               key={item}>
                            <p>{item}</p>
                        </div>
                        : <div className='numpad__backspace btn'
                               key={item}>
                            <p>{item}</p>
                        </div>
                )}
            </div>
            <div className='keyboard__checkbox'>
                <div className='checkbox__label'
                     onClick={toggleCheckbox}>
                    {checkbox && <img src={checkImg} alt=''/>}
                </div>
                <div className='checkbox__sub-text sub-text'>
                    Согласие на обработку персональных данных
                </div>
            </div>
            <div className='keyboard__btn btn'>
                <p>ПОДТВЕРДИТЬ НОМЕР</p>
            </div>

        </div>
    );
};

