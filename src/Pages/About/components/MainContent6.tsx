import ReCAPTCHA from "react-google-recaptcha";

import * as ST from '../styled'

const MainContaner6 = () => {

    function onChange(value) {
        console.log("Captcha value:", value);
      }
    return<>
        <div className='C'>
            <div>
                <ST.MainContaner6>
                    <div className="MainContaner6H1">
                        <h1>Оставьте заявку на бесплатную консультацию</h1>
                    </div>
                    <div className="MainContaner6Content">
                        <img className="MainContaner6ContentBack" src="../ui-lib/svg/Rectangle 23791.png" alt="" />
                        <div className="MainContaner6ContentForm">
                            <div className="MainContanerContent6FormNTInputs">
                                <div className='MainContanerContent6FormInput1'>
                                    <p>Имя*</p>
                                    <input type="text" className="MainContanerContent6FormInp" placeholder='Введите свое имя...'/>
                                </div>
                                <div className='MainContanerContent6FormInput2'>
                                    <p>Телефон*</p>
                                    <input type="text" className="MainContanerContent6FormInp" placeholder='+7 (000)000-00-00'/>
                                </div>
                            </div>
                            <div className="MainContanerContent6Comm">
                                <p>Комментарий</p>
                                <textarea placeholder='Уточните детали заказа...'/>
                            </div>
                            <div className="MainContanerContent6CallTime">
                                <p>Выбрать время звонка:</p>
                                <div className="MainContanerContent6CallTimeRadio">
                                    <label className='CallTimeLabel'>
                                        <input type="radio" name='callTimeRadio' className='callTimeRadio'/>
                                        <p>С 6:00 до 12:00</p>
                                    </label>
                                    <label className='CallTimeLabel'>
                                        <input type="radio" name='callTimeRadio' className='callTimeRadio'/>
                                        <p>с 12:30 до 18:00</p>
                                    </label>
                                    <label className='CallTimeLabel'>
                                        <input type="radio" name='callTimeRadio' className='callTimeRadio' />
                                        <p>с 18:30 до 00:00</p>
                                    </label>
                                </div>
                            </div>
                            <div className="MainContaner6ContentBut">
                                <div className='MainContaner6ContentButCap'>
                                    <button><a href="##">Оставить заявку</a></button>
                                    <ReCAPTCHA
                                    sitekey="Your client site key"
                                    onChange={onChange} className="Recaptch"
                                />
                                </div>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </ST.MainContaner6>
            </div>
        </div>
    </>
    
    
    
};
    
export default MainContaner6;