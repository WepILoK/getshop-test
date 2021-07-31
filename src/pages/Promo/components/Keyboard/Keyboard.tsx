import React, {useEffect, useRef, useState} from 'react';

import checkImg from '../../../../assets/images/check.svg'
import {Api} from '../../../../api/validate-api';

import './Keyboard.scss'

interface IKeyboardProps {
    changeContent: (bool: boolean) => void
}


export const Keyboard: React.FC<IKeyboardProps> = ({changeContent}) => {
    const [phoneNumber, setPhoneNumber] = useState<string[]>(['7'])
    const [checkbox, setCheckbox] = useState(false)
    const [isError, setIsError] = useState(false)

    const numRef = useRef<string[]>(phoneNumber)
    numRef.current = phoneNumber

    const numPadValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'СТЕРЕТЬ', 0]

    const toggleCheckbox = (): void => {
        setCheckbox(!checkbox)
    }

    const toggleSubmitButton = (): boolean => phoneNumber.length === 11 && checkbox;

    const numberFieldChanges = (key: string): void => {
        if (numRef.current.length < 11 && (Number(key) || Number(key) === 0)) {
            setPhoneNumber(prevState => [...prevState, key])
        } else if (key === "Backspace" && numRef.current.length > 1) {
            setIsError(false)
            setPhoneNumber(numRef.current.filter((item, index) => index + 1 !== numRef.current.length))
        } else if (key === 'Enter') {
            submit()
        }
    }

    const submit = async () => {
        if (toggleSubmitButton()) {
            const valid = await Api.fetchValidate(Number(phoneNumber.join('')))
            if (valid) {
                changeContent(valid)
            } else {
                setIsError(true)
            }
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', (event) => numberFieldChanges(event.key))
        return () => {
            document.removeEventListener('keydown', (event) => numberFieldChanges(event.key))
        }
    }, [])

    return (
        <div className="keyboard">
            <div className='keyboard__header header'>
                Введиде ваш номер мобильного телефона
            </div>
            <div className={'keyboard__tel-number tel-number ' + (isError ? 'error' : '')}>
                +{phoneNumber[0]}({phoneNumber[1] || "_"}{phoneNumber[2] || "_"}
                {phoneNumber[3] || "_"}){phoneNumber[4] || "_"}{phoneNumber[5] || "_"}
                {phoneNumber[6] || "_"}-{phoneNumber[7] || "_"}{phoneNumber[8] || "_"}
                -{phoneNumber[9] || "_"}{phoneNumber[10] || "_"}
            </div>
            <div className='keyboard__sub-text sub-text'>
                и с Вами свяжется наш менеждер для дальнейшей консультации
            </div>
            <div className='numpad'
                 id='numpad'>
                {numPadValues.map(item =>
                    Number.isInteger(item)
                        ? <div
                            className='numpad__num btn'
                            onClick={() => numberFieldChanges(String(item))}
                            key={item}>
                            <p>{item}</p>
                        </div>
                        : <div
                            className='numpad__backspace btn'
                            onClick={() => numberFieldChanges('Backspace')}
                            key={item}>
                            <p>{item}</p>
                        </div>
                )}
            </div>
            {isError
                ? (<div className='keyboard__text error text'>
                        <p>НЕВЕРНО ВВЕДЕН НОМЕР</p>
                    </div>
                ) : (<div className='keyboard__checkbox'>
                    <div
                        className='checkbox__label'
                        onClick={toggleCheckbox}>
                        {checkbox && <img src={checkImg} alt=''/>}
                    </div>
                    <div className='checkbox__sub-text sub-text'>
                        Согласие на обработку персональных данных
                    </div>
                </div>)}
            <div
                className={'keyboard__btn btn ' + (toggleSubmitButton() ? 'enabled' : 'disabled')}
                onClick={submit}>
                <p>ПОДТВЕРДИТЬ НОМЕР</p>
            </div>
        </div>
    );
}

