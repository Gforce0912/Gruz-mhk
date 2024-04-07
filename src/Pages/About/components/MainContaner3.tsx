import * as ST from '../styled'

const MainContaner3 = () => {
    return<>
        <div className='C'>
            <div>
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
            </div>
        </div>
    </>



};

export default MainContaner3;