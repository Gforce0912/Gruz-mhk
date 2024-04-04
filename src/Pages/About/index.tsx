import * as ST from './styled'

const About = (): JSX.Element => {
    
    return <>
        <ST.AboutWrapp>
            <ST.UpToHeader>
                <ST.UpToHeaderIcon src="../ui-lib/svg/map-pin.svg" alt="" />
                <ST.UpToHeaderH4>Махачкала</ST.UpToHeaderH4>
                <ST.UpToHeaderGraph>
                    <h4>График звонков: круглосуточно</h4>
                </ST.UpToHeaderGraph>
            </ST.UpToHeader>
            <ST.Header>
                <ST.HeaderLogo>
                    <a href="#">
                        <ST.HeaderLogoImg src="../ui-lib/svg/path.png" alt="" />
                    </a>
                </ST.HeaderLogo>
                <ST.HeaderNavTell>+7 (928) 682  29-72</ST.HeaderNavTell>
                <ST.HeaderNav>
                    <ST.HeaderNavLi>
                        <a className='HeaderNavLiA' href="#1">Услуги</a>
                        <a className='HeaderNavLiA' href="#2">Вакансии</a> 
                        <a className='HeaderNavLiA' href="#3">Контакты</a> 
                        <a className='HeaderNavLiA' href="#4">О нас</a>
                        <button className='HeaderNavLiBtn'><a href="#5">Связаться</a></button>
                    </ST.HeaderNavLi>
                </ST.HeaderNav>
            </ST.Header>
            <ST.MainContaner1>
                <ST.MainContaner1Title>
                    <h1 className='MainContaner1TitleH1'>О НАС</h1>
                    <p className='MainContaner1TitleP'>
                    Мы многопрофильная организация, 
                    работаем на рынке грузоперевозок, 
                    предоставляем грузчиков/разнорабочих
                    и осуществляем вывоз мусора более 7 лет.
                    Работаем с сетевиками, крупными организациями,
                    ИП и физ. Лицами! Под нашим контролем,
                    любой заказ будет выполнен без нареканий!
                    </p>
                </ST.MainContaner1Title>
                <ST.MainContaner1Image>
                    <img className='MainContaner1ImageImgBack' src="../ui-lib/svg/group-trucks-parked-line-truck-stop 3.svg" alt="" />
                    <img className='MainContaner1ImageImg' src="../ui-lib/svg/group-trucks-parked-line-truck-stop 3.svg" alt="" />
                    <img className='MainContaner1ImageImgBack1' src="../ui-lib/svg/group-trucks-parked-line-truck-stop 3.svg" alt="" />
                    <img className='MainContaner1ImageImgBack2' src="../ui-lib/svg/group-trucks-parked-line-truck-stop 3.svg" alt="" />
                    <img className='MainContaner1ImageImgBack3' src="../ui-lib/svg/group-trucks-parked-line-truck-stop 3.svg" alt="" />
                    <img className='MainContaner1ImageImgBack4' src="../ui-lib/svg/group-trucks-parked-line-truck-stop 3.svg" alt="" />
                </ST.MainContaner1Image>
            </ST.MainContaner1>
            <ST.MainContaner2>
                <div>
                    <div>
                        <h3 className='MainContaner2H3'>Наши приемущества</h3>
                    </div>
                    <div className="MainContaner2Icon">
                        <div className="MainContaner2Icon1">
                            <img src="../ui-lib/svg/Vector.svg" alt="" />
                            <p>Доступные цены</p>
                        </div>
                        <div className="MainContaner2Icon2">
                            <img src="../ui-lib/svg/_Group_.svg" alt="" />
                            <p>Срочная подача</p>
                        </div>
                        <div className="MainContaner2Icon3">
                            <img src="../ui-lib/svg/responsibility.png" alt="" />
                            <p>Ответственность</p>
                        </div>
                    </div>
                </div>
            </ST.MainContaner2>
            <ST.MainContaner3>
                <ST.MainContaner3Back src='../ui-lib/svg/Frame 5.png'/>
                <div className='MainContaner3Content'>
                    <div className="MainContaner3contentYear">
                        <h1 className="MainContaner3contentYearH1">7 лет</h1>
                        <p className="MainContaner3contentYearP">на рынке</p>
                    </div>
                    <div className="MainContaner3ContentText">
                        <p>За 7 лет работы компания “ГрузМхк”
                           достигла значительных успехов,<br/> включая
                           расширение географии услуг, 
                           улучшение качества <br/> предоставляемых услуг 
                           и приобретение репутации надежного и <br/> 
                           ответственного партнера.
                        </p>
                    </div>
                </div>
            </ST.MainContaner3>
            <ST.MainContaner4>
                <h1 className="MainContaner4H1">Мы работаем в 250+ городах России</h1>
                <div className="MainContaner4Content">
                    <img src="../ui-lib/svg/Mask group.png" alt="250+ городов" />
                    <ul className='MainContaner4ContentUl1'>
                        <p>Краснодарский край</p>
                        <p>Республика Крым</p>
                        <p>Чеченская республика</p>
                        <p>Оренбургская область</p>
                        <p>Ставрапольский край</p>
                        <p>Республика Татарстан</p>
                        <p>Воронежская область</p>
                    </ul>
                    <ul className='MainContaner4ContentUl2'>
                        <p>Брянская область</p>
                        <p>Ростовская область</p>
                        <p>Саратовская область</p>
                        <p>Омская область</p>
                        <p>Калининградская область</p>
                        <p>Республика Дагестан</p>
                        <a href="#1">Найти_свой_город</a>
                    </ul>
                </div>
            </ST.MainContaner4>
            <ST.MainContaner5>
                <div className="MainContaner5H1">
                    <h1>Наши клиенты</h1>
                </div>
                <div className="MainContaner5Content">
                    <img src="../ui-lib/svg/Frame 39580.png" alt="" />
                </div>
            </ST.MainContaner5>
            <ST.MainContaner6>
                <div className="MainContaner6H1">
                    <h1>Оставьте заявку на бесплатную консультацию</h1>
                </div>
                <div className="MainContaner6Content">
                    <img className="MainContaner6ContentBack" src="../ui-lib/svg/Rectangle 23791.png" alt="" />
                    <div className="MainContaner6ContentForm">
                        <div className="MainContaner6ContentMainForm">
                            <div className="MainContaner6ContentMainFormPersonData">
                                <div className="MainContaner6ContentFormName">
                                    <p>Имя*</p>
                                    <input type="text" />
                                </div>
                                <div className="MainContaner6ContentFormTel">
                                    <p>Телефон*</p>
                                    <input type='tel' />
                                </div>
                            </div>
                            <div className="MainContaner6ContentFormComm">
                                <p>Комментарий</p>
                                <input type="text" />
                            </div>
                            <div className="MainContaner6ContentFormCallTime"></div>
                        </div>
                        <div className="MainContaner6ContentContacts">
                            <div className="MainContaner6ContentContactsTell"></div>
                            <div className="MainContaner6ContentContactsLinks"></div>
                        </div>
                    </div>
                </div>
            </ST.MainContaner6>
            <footer>

            </footer>
        </ST.AboutWrapp>
    </>
};

export default About;