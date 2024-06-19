import { createContext } from "react";
import { Outlet } from "react-router-dom";

export const MBContext = createContext();

function Nav() {

    return(
        <>
            <MBContext>
                <Outlet/>
            </MBContext>
        </>
    );
}

export default Nav;

/*
function Nav() {
    return(
        <>
            <Outlet/>
        </>
    );
}

Így kezdünk, mert az Outlet-be fog betöltödni minden, pl. a UsersPage, a Nav meg az összes js-en ott lesz!! 

*/