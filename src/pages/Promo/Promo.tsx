import React from 'react';
import {Keyboard} from "../../components/Keyboard/Keyboard";
import closeImg from "../../assets/images/out.svg";
import qrCodeImg from '../../assets/images/qr-code.svg'
import './Promo.scss'

interface IPromoProps {
    changePage: () => void
}

export const Promo: React.FC<IPromoProps> = ({changePage}) => {
    return (
        <div className='promo'>
            <Keyboard/>
            <div className='right-side'>
                <div className='right-side__close-btn btn'
                onClick={changePage}>
                    <svg width="88" height="52" viewBox="0 0 88 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="34.3448" y1="14.9407" x2="54.6264" y2="35.2223" stroke="black" strokeWidth="3"/>
                        <line x1="33.6576" y1="35.2223" x2="53.9392" y2="14.9407" stroke="black" strokeWidth="3"/>
                    </svg>
                </div>
                <div className='right-side__qr-code'>
                    <div className='right-side__text text'>
                        <p>Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</p>
                    </div>
                    <div>
                    <img src={qrCodeImg} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    );
};

