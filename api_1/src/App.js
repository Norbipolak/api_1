import UsersPage from './components/UsersPage';
import "./styles/style.scss";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendar, faEnvelope, faLocation, faMobile, faPerson, faPersonDress} from '@fortawesome/free-solid-svg-icons';

library.add(faPerson, faPersonDress, faEnvelope, faCalendar, faLocation, faMobile)


function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/" element={<UsersPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

/*
Lesznek majd ikonjaink, ezért fel kell telepíteni az ikonokat a fontAwesome-ból 
fontos, hogy a másodiknál majd ki kell választani, hogy az svg-ket akarjuk feltelepíteni!!! 
npm i --save @fortawesome/fontawesome-svg-core
itt kell a harmadik a free svg icons package  
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons

npm i --save @fortawesome/react-fontawesome@latest

meg kell egy npm i sass, hogy tudjuk a scss file-okat compile-olás nélkül használni 
és akkor itt nem a App.css kell nekünk, ami alapból itt be van importálva, hanem 
import "./styles/style.scss";
*/

