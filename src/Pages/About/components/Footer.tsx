import * as ST from '../styled'

const Footer = () => {
    return<>
        <div>
            <ST.Footer>
                <ST.FooterLogo>
                    <a href="#">
                            <ST.FooterLogoImg src="../ui-lib/svg/path.png" alt="" />
                    </a>
                </ST.FooterLogo>
                <ST.FooterNav>
                    <ST.FooterNavLi>
                        <a className='FooterNavLiA' href="#1">Услуги</a>
                        <a className='FooterNavLiA' href="#2">Вакансии</a> 
                        <a className='FooterNavLiA' href="#3">Контакты</a> 
                        <a className='FooterNavLiA' href="#4">О нас</a>
                            <div className="MainContanerContent6Links">
                                <a href="#1"><img src="../ui-lib/svg/Social Media Icon Square_Twitter.png" alt="telegram" /></a>
                                <a href="#2"><img src="../ui-lib/svg/Social Media Icon Square_Instagram.png" alt="instagram" /></a>
                                <a href="#3"><img src="../ui-lib/svg/Social Media Icon Square_LinkedIn.png" alt="whatsapp" /></a>
                                <a href="#4"><img src="../ui-lib/svg/Social Media Icon Square_LinkedIn (1).png" alt="avito" /></a>
                                <a href="#5"><img src="../ui-lib/svg/Social Media Icon Square_Facebook.png" alt="VK" /></a>
                            </div>
                    </ST.FooterNavLi>
                </ST.FooterNav>
            </ST.Footer>
        </div>
    </>



};

export default Footer;