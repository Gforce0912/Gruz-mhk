import * as ST from '../styled'

const MainContaner4 = () => {
    return<>
        <div className='C'> 
            <div>
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
            </div>
        </div>
    </>



};

export default MainContaner4;