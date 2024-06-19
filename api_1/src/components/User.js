import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function User({ u }) {
    const [data, setData] = useState(`u.name.title} {u.name.first} {u.name.last`);

    return (
        <div className="box-secondary-lighter p-md">
            <h3>{data}</h3>

            <div className="d-flex jc-space-between">
                <div className="color-white font-xxl cursor-pointer c-hover-white"
                onMouseOver={()=>setData(u.gender)}>
                    {
                        u.gender === "male" ? <FontAwesomeIcon icon="fa-solid fa-person" />
                            : <FontAwesomeIcon icon="fa-solid fa-person-dress" />
                    }
                </div>

                <div className="color-white font-xxl cursor-pointer c-hover-white"
                onMouseOver={()=>setData(u.email)}>
                    <FontAwesomeIcon icon="fa-solid fa-envelope" />
                </div>

                <div className="color-white font-xxl cursor-pointer c-hover-white"
                onMouseOver={()=>setData(u.dob.date.substr(0, 10))}>
                    <FontAwesomeIcon icon="fa-solid fa-calendar" />
                </div>

                <div className="color-white font-xxl cursor-pointer c-hover-white"
                onMouseOver={()=>setData(u.location.country)}>
                    <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                </div>


                <div className="color-white font-xxl cursor-pointer c-hover-white"
                onMouseOver={()=>setData(u.cell)}>
                    <FontAwesomeIcon icon="fa-solid fa-mobile" />
                </div>
            </div>
        </div>
    );
}

export default User;

/*
Ez lesz a data-nak a kezdőértéke, de ezt majd mindig felülírjuk, attól függően, hogy melyik ikon felé visszük, majd a cursor-t!!
const [data, setDate] = useState(`u.name.title} {u.name.first} {u.name.last`);

de alapból majd ezt fogja megjeleníteni itt a h3-ban! 

és ugye ehelyett 
<h3>{u.name.title} {u.name.first} {u.name.last}</h3>
megjelenítjük a data-t, mert az useState-nek a kezdőértéke
-> 
<h3>{data}</h3>

a setData meg úgy fog müködni, hogyha az ikon parent div-jében set-eljük! 
onMouseOver={()=>setData(u.gender)}>
-> 

    <div className="color-white font-xxl cursor-pointer c-hover-white"
    onMouseOver={()=>setData(u.gender)}>
        {
            u.gender === "male" ? <FontAwesomeIcon icon="fa-solid fa-person" />
            : <FontAwesomeIcon icon="fa-solid fa-person-dress" />
        }
    </div>

és mindegyiknél ugyanígy set-veljük a data-t arra, amire kell, amire vonatkozik az ikon!! 
pl. itt az u.gender 

és a showData az nem is szükséges a UsersPage-nél!!!! 

fontos, hogy itt is be legyen hívva a Fontawesome, mert azt alapból nem hívja be!!! 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

annyi a dolgunk, hogy mindegyiknél odarakjak az onMouseOver-t a megfelelő u-val!!! 
onMouseOver={()=>setData(u.dob.date.substr(0, 10))}> 
ez még sokkal hosszabb volt, ezért a substr-vel lerövidítettük, hogy ez legyen "1990.01.30"!!!!!! 
substr()-nél két paraméter van, az első benne lesz, de viszont az utolsó 10-es indexű, viszont már nincs!!!

        <div className="box-secondary-lighter p-md">
            <h3>{data}</h3>

            <div className="d-flex jc-space-between">
                <div className="color-white font-xxl cursor-pointer c-hover-white"
                onMouseOver={()=>setData(u.gender)}>
                    {
                        u.gender === "male" ? <FontAwesomeIcon icon="fa-solid fa-person" />
                            : <FontAwesomeIcon icon="fa-solid fa-person-dress" />
                    }
                </div>

                <div className="color-white font-xxl cursor-pointer c-hover-white"
                onMouseOver={()=>setData(u.email)}>
                    <FontAwesomeIcon icon="fa-solid fa-envelope" />
                </div>

                <div className="color-white font-xxl cursor-pointer c-hover-white"
                onMouseOver={()=>setData(u.dob.date.substr(0, 10))}>
                    <FontAwesomeIcon icon="fa-solid fa-calendar" />
                </div>

                <div className="color-white font-xxl cursor-pointer c-hover-white"
                onMouseOver={()=>setData(u.location.country)}>
                    <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                </div>


                <div className="color-white font-xxl cursor-pointer c-hover-white"
                onMouseOver={()=>setData(u.cell)}>
                    <FontAwesomeIcon icon="fa-solid fa-mobile" />
                </div>
            </div>
        </div>

Majd megnézzük következő órán, hogy van amikor felémegyünk egy link-nek akkor ott kettő van, csak nem fér ki van egy overflow:hidden 
és csak simán feljebb nyomja, ha felé megyünk, itt a margin-t kell majd használni, azzal tudjuk feljebb nyomni!! 
*/