import Header from './components/Header'
import MainContaner1 from './components/MainContaner1'
import MainContaner2 from './components/MainContaner2'
import MainContaner3 from './components/MainContaner3'
import MainContaner4 from './components/MainContaner4'
import MainContaner5 from './components/MainContaner5'
import MainContaner6 from './components/MainContent6'
import UpToHeader from './components/UpToHeader'
import * as ST from './styled'


const About = (): JSX.Element => {
    
    return <>
        <ST.AboutWrapp>
            <UpToHeader/>
            <Header/>
            <MainContaner1/>
            <MainContaner2/>
            <MainContaner3/>
            <MainContaner4/>
            <MainContaner5/>
            <MainContaner6/>
            <footer>

            </footer>
        </ST.AboutWrapp>
    </>
};

export default About;