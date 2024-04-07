import * as ST from '../styled'

const MainContaner1 = () => {
    return<>
        <div>
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
        </div>
        </>



};

export default MainContaner1;