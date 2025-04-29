import NavbarButton from "./NavbarButton";
import {useCookies} from "react-cookie";
import axios from "axios";
import {useState} from "react";

export default function Navbar() {
    const [cookies, setCookie] = useCookies();
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    if (cookies.hasOwnProperty('authentication_token')) {
        const auth_token = cookies['authentication_token'];
        axios.get('http://194.213.3.13:8002/validate_auth_token?auth_token=' + auth_token)
            .then(function (response) {
                console.log(response.data);
                setIsLoggedIn(response.data !== false)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className={`h-[82px] bg-opacity-[25%] flex sticky top-0 z-10 
        ${cookies["dark-mode"] === true ? 'bg-dark-navbar-background text-white' : 'bg-navbar-background text-black'}`}>
            {/* Left side */}
            <NavbarButton title="HOME" link="/"/>
            <NavbarButton title="INFORMATION" link="/information"/>
            <NavbarButton title="CONSULTATION" link="/consultation-booking"/>
            <NavbarButton title="CONTACT" link="/contact"/>


            {/* Right side */}
            <div className="w-full flex justify-end">
                {isLoggedIn ? (
                    <NavbarButton title="LOGOUT" link="/confirm-logout"/>
                ) : (
                    <div className="flex justify-end">
                        <NavbarButton title="LOGIN" link="/login"/>
                        <NavbarButton title="REGISTER" link="/register"/>
                    </div>
                    )}
                <NavbarButton title="ACCESSIBILITY" link="/accessibility"/>
            </div>
        </div>
    )
}