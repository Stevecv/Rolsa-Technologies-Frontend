import Navbar from "../components/Navbar";
import Text from "../components/Text";
import {Check} from "@mui/icons-material";
import LinkButton from "../components/LinkButton";

export default function LoginSuccess() {
    return (
        <div className="relative h-screen">
            <Navbar classname=""/>

            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <div className="text-center">
                    <div>
                        <Check sx={{fontSize: '150px', color: 'green'}}/>
                    </div>
                    <Text>
                        Login successful
                    </Text>
                    <div className="w-full flex justify-center items-center">
                        <LinkButton link='/'>Return home</LinkButton>
                    </div>
                </div>
            </div>
        </div>
    )
}