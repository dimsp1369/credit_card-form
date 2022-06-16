import React, {useMemo} from 'react';


const Card = ({cardCredential, isCvvFocused,}) => {
    const {name, month, year, cvv, number} = cardCredential

    const ModifyCardNumber = () => useMemo(() => {
        const visaMask = new Array(16)
        // const mask = '#### #### #### ####'

        // return mask.split('').map((el, index) => (<span key={index}>
        //     {/*{el}*/}
        //     {cardCredential.number && cardCredential.number.length > index ? cardCredential.number[index] : el}
        // </span>))
        return visaMask.fill('#', 0, 16).map((el, index) => {
                if (index % 4 === 0) {
                    return <span key={Math.random()}>
                        {' ' + (number && number.length > index ? number[index] : el)}
                    </span>
                } else {
                    return <span key={Math.random()}>
                        {(number && number.length > index ? number[index] : el)}
                    </span>
                }
            }
        )
    }, [number])

    return (
        <div className="card-wrapper ">
            <div className={isCvvFocused ? `card card_flipped` : 'card'}>
                <div className='card__front'>
                    <div className='card__signa'>
                        <img
                            src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
                            alt="chip"/>
                        <img
                            src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png"
                            alt="cardType"/>
                    </div>
                    <div className='card__number focus__border'>
                        {ModifyCardNumber()}
                    </div>
                    <div className='card__cardHolder-expiration'>
                        <label className='cardHolder'>
                            <span className='card__cardHolder-expiration__label'>{'Card Holder'}</span>
                            <span>{name ? name.toUpperCase() : 'FULL NAME'}</span>
                        </label>
                        <label className='expiration'>
                            <span className='card__cardHolder-expiration__label'>{'Expires'}</span>
                            <span>{month ? month.length < 2 ? '0' + month : month : 'MM'}/{year ? year.slice(2) : 'YY'}</span>
                        </label>
                    </div>
                </div>
                <div className='card__back'>
                    <div className='card__magnetLine'/>
                    <div className='card__cvv'>
                        <span>{cvv}</span>
                    </div>
                    <img
                        src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png"
                        alt="cardType"/>
                </div>
            </div>
        </div>
    );
};

export default Card;
