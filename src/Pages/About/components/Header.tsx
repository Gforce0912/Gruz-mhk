import * as ST from '../styled'

const Header = () => {
    return<>
        <div>
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
        </div>
    </>



};

export default Header;