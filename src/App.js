import './App.css';
import CardInput from "./CardInput";
import CardSelectFields from "./CardSelectFields";
import CardButton from "./CardButton";
import {useRef, useState} from "react";
import Card from "./Card";


function App() {
    const [cardCredential, setCardCredential] = useState({
        number: '',
        name: '',
        month: '',
        year: '',
        cvv: ''
    })
    const [isCvvFocused, setIsCvvFocused] = useState(false)

    const focusInput = useRef()

    const onFinish = (e) => {
        e.preventDefault()
    }

    return (
        <div className="container-wrapper">
            <div className="container">
                <Card cardCredential={cardCredential} isCvvFocused={isCvvFocused}/>
                <div className="form-wrapper">
                    <form className='form' onSubmit={onFinish}>
                        <CardInput label={'Card Number'} onChange={setCardCredential} field={'number'} maxLength={16}/>
                        <CardInput label={'Card Holder'} onChange={setCardCredential} field={'name'} maxLength={35}/>
                        <div className='form__card-date-cvv'>
                            <CardSelectFields label={'Expiration Date'} onChangeMonth={setCardCredential}
                                              onChangeYear={setCardCredential}/>
                            <CardInput label={'CVV'} onChange={setCardCredential} field={'cvv'}
                                       onFocus={setIsCvvFocused} maxLength={4}/>
                        </div>
                        <CardButton/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
