import Text from "./Text";
import {useCookies} from "react-cookie";

export default function RadioOptions(props) {
    const [cookies, setCookie] = useCookies();
    if (cookies[props.cookieKey] === undefined) {
        setCookie(props.cookieKey, props.default);
    }

    return (
        <div>
            <div className="flex items-center justify-center">
                <Text>{props.title}</Text>
            </div>
            <div className="grid grid-cols-2">
                {
                    props.options.map((option, index) => (
                        <div className="flex items-center hover:cursor-pointer min-h-[90px]"
                             onClick={() => {setCookie(props.cookieKey, index)}}>
                            {cookies[props.cookieKey] !== index ?
                                <img src={"radio-unselected.png"} className="h-[40px] inline"/> :
                                <img src={"radio-selected.png"} className="h-[40px] inline"/>}

                            <div className="pl-2">
                                <Text><div className="text-[40px]">{option}</div></Text>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}