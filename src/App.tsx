import './App.css'
import { HashRouter, Route, Routes } from "react-router-dom";
import { MainPage, AboutPage, ServiceDetailedPage } from '~/src/Pages';
import { baseColor } from '@ui-lib/Tokens'; // пример импорта элементов из ui-lib
import About from './Pages/About';
// конечно же тут в App.tsx такого быть не должно, только в компонентах
function App() {
  return (
      <HashRouter basename="/">
        {/* @todo: здесь должен быть реализован компонент меню */}
        {/* <Menu/> */}
        <About/>
        <Routes>
            {/* @todo: здесь должны быть реализованы страницы */}
            {/* <Route path="/" element={<MainPage/>}/> */}
            {/* <Route path="/about" element={<AboutPage/>}/> */}
            {/* <Route path="/service" element={<ServiceDetailedPage/>}/> */}
        </Routes>
    </HashRouter>
  )
}

export default App
