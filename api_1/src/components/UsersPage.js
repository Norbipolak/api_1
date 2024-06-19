import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function UsersPage() {
    const [users, setUsers] = useState([]);

    const getUserData = async ()=> {
        try {
            const response = await fetch("https://randomuser.me/api/?results=12");
            const json = await response.json();

            setUsers(json.results);
        } catch(err) {
            console.log(err);
        }
    };

    useEffect(()=> {
        getUserData();
    }, []);

    return(
        <div className="container-xl p-lg text-center">
            <div className="grid-col-3 gap-md">
                {
                    users.map((u,i )=> 
                        <User key={i} u={u}/>
                    )
                }
            </div>
        </div>
    );
}


export default UsersPage;

/*
        <>
            <MBContext>
                <Outlet/>
            </MBContext>
        </>


A UserPage-en jelennek meg elvileg a user-ek, itt ilyen alkomponensek lesznek
és lesz egy olyan, hogy Users 
a User komponens, semmi mást nem csinál csak megjeleníti a user-nek az adatait 
Pl. lejönnek adatok, hogy gender, name, location stb.

function User({gender, name, location, email, phone, cell, picture}) {

}

valami ilyen adatok lejönnek és akkor itt megjelenítjük a User-en az adatokat, de ha viszont van a User-nek egy alkomponense
akkor annak is át tudjuk adni a szükséges adatokat, hogy gender, name, location stb.

lesz egy async getUserData függvény, amivel leszedjük az adatokat!!! 

const response = await fetch("https://randomuser.me/api/?results=10");

Ez lesz amit megszólítunk, ez egy sima get-es kérés!! 
    const getUserData = async ()=> {
        try {
            const response = await fetch("https://randomuser.me/api/?results=10");
            const json = await response.json();

            console.log(json);
        } catch(err) {
            console.log(err);
        }
    };

console.log(json)-ben meg majd látjuk az adatokat, amik lejöttek, ha minden rendben ment 

de nagyon fontos, hogy ezt a függvényt meg kell hívni és ha nem a jsx szerkezetben hívjuk meg, akkor egy useEffect-ben kell!!!!!!! 
    useEffect(()=> {
        getUserData();
    }, []);

és ha ez meg van, akkor csinálunk neki egy route-ot az App.js-en!!
    return(
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/" element={<UsersPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );

és ha meg szeretnénk nézni, akkor npm start és akkor majd látjuk, hogy pl. mi a console.log(json)
lejöttek és megjelenítjük azokat a dologokat, amiket szeretnénk látni!!! 

Első körben megjelenítjük a name-t 
a result-on belül vannak azok az adatok, amik szükségesek számunkra, ezért majd arra set-veljük a user useState-s változónkat  
-> 
try {
    const response = await fetch("https://randomuser.me/api/?results=10");
    const json = await response.json();

    setUsers(json.results);

ezt pedig a return-ben a jsx-ben fogjuk megjeleníteni!!!
<div className="container-xl">
    <div className="grid-col-4 gap-md">
        {
            users.map((u,i )=>
                <div key={i} className="box-secondary-lighter p-md">
                    <h3>{u.name.title} {u.name.first} {u.name.last}</h3>
                </div>
            )
        }
    </div>
</div>

Van egy container div benne egy grid div majd végigmegyünk a users-eken egy map-val és majd ott mindegyiknek csinálunk egy div-et, ami majd 
kap egy box-ot, fontos, hogy itt kell megadni a key-t az index-vel key={i} és ezen belül meg azt jelenítünk meg, amit akarunk pl. itt első körben 
egy h3-as tag-ben megjelenítettük a nevet!! 

Mivel ez egy grid és azt mondtuk neki, hogy legyen egy col-4-es, tehát egy sorban 4 legyen, ezért annyit kellene lehozni, amennyi a osztható 
a grid-vel, tehát 4-vel
mert most így 10-et hozunk le összesen 
->
fetch("https://randomuser.me/api/?results=10");
de ezt átírjuk 12-re, hogy mindent sor telített legyen!! 
->
fetch("https://randomuser.me/api/?results=12");

container-nek adunk még egy p-lg-t, hogy ne teljesen a tetejétől kezdje a container-ben lévő dolgokat, hanem egy kicsit menjenek lejjebb 
meg egy center-text-et, hogy minden szöveg, ami a container-ben lesz az legyen középen

Megjelenítünk még dolgokat, amiket szeretnénk és lesznek ikon-ok és ha az ikon felé megyünk, tehát onMouseOver, akkor jelenítse meg a hozzá 
tartozó adatot, pl. ha egy telefon ikon van, akkor jelenítse meg a telefonszámot, de alapból majd a nevet fogja megjeleníteni

pl. van egy ikon egy férfi meg egy női mindegyiket használni fogjuk méghozzá úgyhogy az adatok, amik lejöttek van egy olyan, hogy gender 
nő vagy férfi és meghatározzuk, hogyha férfi, akkor a férfi ikon jelenjen majd meg, ha meg nő, akkor meg a női 

<div className="d-flex">
    <div>
        <FontAwesomeIcon icon="fa-solid fa-person" />
    </div>
</div>

Ez majd egy display flex-ben lesz benne, mert az ikonok majd egymás mellett lesznek!!! 
fontos az ikonoknál, hogy solid vagy regular!! 
be kell importálni a library-t 
majd a library add()-val tudjuk golobálissá tenni 
    - és itt fontos, hogy a regular vagy a solid-ot válasszuk ki, mert nem mindegy, ha itt a másikat válasszuk, akkor nem tudja megjeleníteni!! 

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPerson } from '@fortawesome/free-solid-svg-icons';

library.add(faPerson)
és ha több ikont akarunk, majd akkor fontos, hogy az összeset itt be kell írni
-> 
import { faPerson, faPersonDress } from '@fortawesome/free-solid-svg-icons';
library.add(faPerson, faPersonDress)

és ha beírtuk a library.add()-be, akkor automatikusan importálni fogja, mint felette látszik!!!

és itt egy {}-ben használhatunk egy internal operator-t, amiben meghatározzuk, hogyha a gender az male, akkor jelenítse meg az male icon-t 
ha meg : ,tehát ha másik, akkor meg a nőit 
{
    u.gender === "male" ? <FontAwesomeIcon icon="fa-solid fa-person" />
    : <FontAwesomeIcon icon="fa-solid fa-person-dress" />
}
és a div, amiben ez benne van, annak meg adunk egy color: white-ot vagy valamilyen színt, hogy az ikon, olyan színű legyen!!! 
mert az ikon az teljesen úgy müködik, mint a font, karakter!!! 
úgy tudjuk azt csinálni, hogy nagyobb legyen az ikon, hogy adunk neki egy nagyobb betűméretet!! 
->
<div className="color-white font-xxl cursor-pointer">
    {
        u.gender === "male" ? <FontAwesomeIcon icon="fa-solid fa-person" />
        : <FontAwesomeIcon icon="fa-solid fa-person-dress" />
    }
</div>
A cursor-pointer miatt meg látszik, hogy majd rá lehet nyomni

és az összes többi az ugyanilyen lesz(csak majd az ikon lesz más) 
de viszont a -flex, amiben benne van, annak meg adunk egy justify-content: space-between, hogy 
a sorban, majd egyenlő távolságra legyenek ezek az ikonok!!! 
de ezt még meg kell csinálni a flex.scss-ben, de elötte a variables-ben csinálunk neki egy list-et a flex-ben pedig meghívjuk!!! 
variables ->
$justifyContents: left, right, center, space-between, space-around, space-evenly;
flex ->
@include listMixin($justifyContents, "jc", justify-content);

    <div className="d-flex jc-space-between">
        <div className="color-white font-xxl cursor-pointer">
            {
                u.gender === "male" ? <FontAwesomeIcon icon="fa-solid fa-person" />
                : <FontAwesomeIcon icon="fa-solid fa-person-dress" />
            }
        </div>

        <div className="color-white font-xxl cursor-pointer">
            <FontAwesomeIcon icon="fa-solid fa-envelope" />
        </div>

        <div className="color-white font-xxl cursor-pointer">
            <FontAwesomeIcon icon="fa-solid fa-calendar" />
        </div>

        <div className="color-white font-xxl cursor-pointer">
            <FontAwesomeIcon icon="fa-solid fa-location-dot" />
        </div>

                                
        <div className="color-white font-xxl cursor-pointer">
            <FontAwesomeIcon icon="fa-solid fa-mobile" />
        </div>
    </div>

import { faCalendar, faEnvelope, faLocation, faMobile, faPerson, faPersonDress} from '@fortawesome/free-solid-svg-icons';
library.add(faPerson, faPersonDress, faEnvelope, faCalendar, faLocation, faMobile)

Hafelémegyünk az ikonnak, akkor meg kell, hogy változzon a színe, de viszont ilyen :hover-es class-jaink nincsenek 
de ezeket megcsináljuk és még egy mixin-t is létre tudunk hozni -> mixin.scss!!! 
Kell mixin, mert nem mindegy, hogy a background-color-je vagy a color-je lesz olyan színű 
<div className="color-white font-xxl cursor-pointer c-hover-secondary-lighter">
mixins-ben a leírás, hogy csináltuk ezt a c-hover-secondary-lighter class-t!!! 
meg a settings-ben a meghívása 
és akkor most ha felé megyünk, akkor megváltozik a színe!!!
megadjuk ezt a hover-es class-t is az összes div-nek, hogyha felé megyünk bármelyik ikonnak, akkor olyan legyen a színe
*******
Most jön az, hogyha az ikon felé visszük a cursor-t, akkor meg kell jeleníteni a megfelelő adatot!!!!!!
erre csinálunk egy showData függvényt, ami majd vár egy data-t, ez a data lesz az amit majd megjelenítünk, tehát az u.cell mondjuk!! 
ezt a függvényt meghívjuk egy onMouseOver-ben a ikonnak, hogy tudja, hogy melyik ikon fölött melyik data-t kell megjelenítenie!! 

<h3>{u.name.title} {u.name.first} {u.name.last}</h3>
első esetben ezt akarjuk majd megjeleníteni, kérdés, hogy hogy tudjuk ezt azonosítani 

Ezt most már egyszerűbb lenne a User nevű komponensbe belerakni az egészet, mert akkor lenne itt egy data nevű useState-s változó 
és akkor az módosulna!! 

itt viszont nem lehet egy data, mert itt több record van, amit meg kell jeleníteni!!!!! 
A User kap egy ilyen u-t 
function User({u}) {

}

export default User;

az egészet, ami itt van a map alatt azt átmásoljuk!!! 
->
function User({ u }) {
    return (
        <div className="box-secondary-lighter p-md">
            <h3>{u.name.title} {u.name.first} {u.name.last}</h3>

            <div className="d-flex jc-space-between">
                <div className="color-white font-xxl cursor-pointer c-hover-white">
                    {
                        u.gender === "male" ? <FontAwesomeIcon icon="fa-solid fa-person" />
                            : <FontAwesomeIcon icon="fa-solid fa-person-dress" />
                    }
                </div>

                <div className="color-white font-xxl cursor-pointer c-hover-white">
                    <FontAwesomeIcon icon="fa-solid fa-envelope" />
                </div>

                <div className="color-white font-xxl cursor-pointer c-hover-white">
                    <FontAwesomeIcon icon="fa-solid fa-calendar" />
                </div>

                <div className="color-white font-xxl cursor-pointer c-hover-white">
                    <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                </div>


                <div className="color-white font-xxl cursor-pointer c-hover-white">
                    <FontAwesomeIcon icon="fa-solid fa-mobile" />
                </div>
            </div>
        </div>
    );
}

és akkor ott hozzuk létre ezt a data-s useState-s változót!!!! és ott folytatjuk!!
itt meg behívjuk a User komponens és itt adjuk meg a key-t, ott meg nem kell!!!! 
    <div className="grid-col-3 gap-md">
        {
            users.map((u,i )=> 
            <User key={i} u={u}/>
            )
        }
    </div>

és átadjuk majd a user-eket, amit vár az a komponens!!!!!!!!!!!!!!!!!!!!!!!!!!!
u={u}
        
*/