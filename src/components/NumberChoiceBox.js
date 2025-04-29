import {Add, Remove} from "@mui/icons-material";
import Text from "./Text";
import {useCookies} from "react-cookie";

export default function NumberChoiceBox(props) {
    // Cookies
    const [cookies, setCookie] = useCookies();

    if (cookies[props.cookieKey] === undefined) {
        setCookie(props.cookieKey, props.default);
    }

    // Add and subtract functions
    const addNumber = () => {
        if (cookies[props.cookieKey] < props.max) {
            setCookie(props.cookieKey, cookies[props.cookieKey] + 1)
        }
    }

    const subtractNumber = () => {
        if (cookies[props.cookieKey] > props.min) {
            setCookie(props.cookieKey, cookies[props.cookieKey] - 1)
        }
    }

    // Layout
    return (
        <div className="text-center w-[300px]">
            <Text>{props.title}</Text>
            <div className="grid grid-cols-3">
                <div className="bg-secondary w-[100px] h-[100px] flex justify-center items-center hover:cursor-pointer"
                    onClick={() => subtractNumber()}>
                    <Remove sx={{ fontSize: 90, color: 'white'}}/>
                </div>

                <div className="border-secondary border-8 w-[100px] h-[100px] flex justify-center items-center">
                    <Text>{cookies[props.cookieKey]}</Text>
                </div>

                <div className="bg-secondary w-[100px] h-[100px] flex justify-center items-center hover:cursor-pointer"
                     onClick={() => addNumber()}>
                    <Add sx={{ fontSize: 90, color: 'white' }}/>
                </div>
            </div>
        </div>
    )
}