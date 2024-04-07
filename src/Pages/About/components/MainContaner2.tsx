import * as ST from '../styled'

const MainContaner2 = () => {
    return<>
        <div className='C'> 
            <div>
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
            </div>
        </div>
    </>



};

export default MainContaner2;