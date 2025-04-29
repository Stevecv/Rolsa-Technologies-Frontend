import Text from "./Text";
import {useCookies} from "react-cookie";

export default function TwoOptionChoice(props) {
    const [cookies, setCookie] = useCookies();

    if (cookies[props.cookieKey] === undefined) {
        setCookie(props.cookieKey, props.default);
    }

    const IconA = props.iconA;
    const IconB = props.iconB;

    return (
        <div className="">
            <div className="w-[788px] text-center"><Text>{props.title}</Text></div>
            <div className="grid-cols-2 grid w-[788px]">
                <div className={`border-secondary border-y-8 border-r-4 border-l-8 w-[394px] h-[111px]
                    flex items-center justify-center hover:cursor-pointer ${cookies[props.cookieKey] === 0 ? 'bg-secondary bg-opacity-20' : ''}`}
                    onClick={() => setCookie(props.cookieKey,0)}>
                    <Text><div className="text-[60px]">{props.iconA !== undefined ? <IconA sx={{ fontSize: 60 }}/> : <div />}{props.optionA}</div></Text>
                </div>
                <div className={`border-secondary border-y-8 border-r-8 border-l-4 w-[394px] h-[111px]
                    flex items-center justify-center hover:cursor-pointer ${cookies[props.cookieKey] === 1 ? 'bg-secondary bg-opacity-20' : ''}`}
                     onClick={() => setCookie(props.cookieKey,1)}>
                    <Text><div className="text-[60px]">{props.iconB !== undefined ? <IconB sx={{ fontSize: 60 }}/> : <div />}{props.optionB}</div></Text>
                </div>
            </div>
        </div>
    )
}