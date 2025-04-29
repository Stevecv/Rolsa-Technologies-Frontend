import Navbar from "../components/Navbar";
import Text from "../components/Text";
import {Check} from "@mui/icons-material";
import LinkButton from "../components/LinkButton";
import {useCookies} from "react-cookie";

export default function LogoutSuccess() {
    const [cookies, setCookie] = useCookies();
    return (
        <div className={`relative h-screen ${cookies["dark-mode"] === true ? 'bg-dark-background' : 'bg-background'}`}>
            <Navbar classname=""/>

            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <div className="text-center">
                    <div>
                        <Check sx={{fontSize: '150px', color: 'green'}}/>
                    </div>
                    <Text>
                        Logout successful
                    </Text>
                    <div className="w-full flex justify-center items-center">
                        <LinkButton link='/'>Return home</LinkButton>
                    </div>
                </div>
            </div>
        </div>
    )
}