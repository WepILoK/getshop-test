import React, {useEffect, useState} from 'react';
import './Banner.scss'
import qrCodeImg from '../../assets/images/qr-code.svg'

interface IBannerProps {
    changePage: () => void
}

export const Banner: React.FC<IBannerProps> = ({changePage}) => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        let timerId = setTimeout(() =>
            setVisible(true), 5000);
        return () => {
            clearTimeout(timerId)
        }
    }, [])

    if(visible) {
        return (
            <div className='banner'>
                <div className='block'>
                    <div className='block__title text'>
                        <div className='title__first'>
                            ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША!
                        </div>
                        <div className='title__second'>
                            ПОДАРИТЕ ЕМУ СОБАКУ!
                        </div>
                    </div>
                    <div className='block__qr-code'>
                        <img className='qr-code__image' src={qrCodeImg} alt=""/>
                        <div className='qr-code__text sub-text'>
                            Сканируйте QR-код или нажмите OK
                        </div>
                    </div>
                    <div className='block__btn btn'
                         onClick={changePage}>
                        <p>OK</p>
                    </div>
                </div>
            </div>
        );
    } else return null

};

