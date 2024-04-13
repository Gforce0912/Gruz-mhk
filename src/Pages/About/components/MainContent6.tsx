// import ReCAPTCHA from "react-google-recaptcha";
import { useState } from 'react';
import * as ST from '../styled';

const MainContaner6 = () => {

    const [MainContanerContent6FormInpValueName, setMainContanerContent6FormInpValueName] = useState('');
    const [MainContanerContent6FormInpValueTell, setMainContanerContent6FormInpValueTel] = useState('');
    const [MainContanerContent6FormInpValueArea, setMainContanerContent6FormInpValueArea] = useState('');
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
                                    <input type="text"
                                     value={MainContanerContent6FormInpValueName}
                                     className="MainContanerContent6FormInp"
                                     placeholder='Введите свое имя...'
                                     onChange={e => setMainContanerContent6FormInpValueName(e.target.value)}
                                     />
                                </div>
                                <div className='MainContanerContent6FormInput2'>
                                    <p>Телефон*</p>
                                    <input type="text"
                                     className="MainContanerContent6FormInp"
                                     placeholder='+7 (000)000-00-00'
                                     value={MainContanerContent6FormInpValueTell}
                                     onChange={e => setMainContanerContent6FormInpValueTel(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="MainContanerContent6Comm">
                                <p>Комментарий</p>
                                <textarea 
                                placeholder='Уточните детали заказа...'
                                value={MainContanerContent6FormInpValueArea}
                                onChange={e => setMainContanerContent6FormInpValueArea(e.target.value)}
                                />
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
                                    {/* <ReCAPTCHA
                                    sitekey="Your client site key"
                                    onChange={onChange} className="Recaptch"
                                /> */}
                                </div>
                                <p className="MainContaner6ContentButP">Нажимая на кнопку Отправить, вы соглашаетесь с <span>политикой конфиденциальностью</span></p>
                            </div>
                        </div>
                        <div className="MainContanerContent6Contacts">
                            <div className="MainContanerContent6EmTel">
                                <div className="MainContanerContent6Email">
                                    <img src="../ui-lib/svg/mail.png" className='MainContanerContent6ConImg' alt="email" />
                                    <span className='MainContanerContent6ConSpan'>contact@company.com</span>
                                </div>
                                <div className="MainContanerContent6Tell">
                                    <img src="../ui-lib/svg/Vector (1).png" className='MainContanerContent6ConImg' alt="tell" />
                                    <span className='MainContanerContent6ConSpan'>(123) 456 - 789</span>
                                </div>
                            </div>
                            <div className="MainContanerContent6Links">
                                <a href="#1"><img src="../ui-lib/svg/Social Media Icon Square_Twitter.png" alt="telegram" /></a>
                                <a href="#2"><img src="../ui-lib/svg/Social Media Icon Square_Instagram.png" alt="instagram" /></a>
                                <a href="#3"><img src="../ui-lib/svg/Social Media Icon Square_LinkedIn.png" alt="whatsapp" /></a>
                                <a href="#4"><img src="../ui-lib/svg/Social Media Icon Square_LinkedIn (1).png" alt="avito" /></a>
                                <a href="#5"><img src="../ui-lib/svg/Social Media Icon Square_Facebook.png" alt="VK" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="MainContanerContent6Cards">
                            <div className="MainContanerContent6CardsPayment cards">
                                <h1>Способ оплаты</h1>
                                <ul>
                                    <li>Безналичная оплата</li>
                                    <li>Безналичная оплата переводом</li>
                                    <li>Безналичная оплата на ИП</li>
                                </ul>
                            </div>
                            <div className="MainContanerContent6CardsGraf cards">
                                <h1>График работы</h1>
                                <p>ежедневно: 6:00-00:00</p>
                            </div>
                        </div>
                </ST.MainContaner6>
            </div>
        </div>
    </>
    
    
    
};
    
export default MainContaner6;