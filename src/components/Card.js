import Text from "./Text";
import {useCookies} from "react-cookie";

export default function Card(props) {
    const [cookies, setCookie] = useCookies();
    return (
        <div className={`relative w-fit min-h-10 min-w-10 rounded-[9px] text-center ${cookies["dark-mode"] === true ? 'bg-dark-background-secondary' : 'bg-background-secondary bg-opacity-40'}`}>
            {/* Card image */}
            <img src={props.image} alt={props.alt} className="rounded-t-[9px] object-cover"/>

            {/* Card body text */}
            <div className="p-5 flex content-center justify-center">
                <Text>{props.children}</Text>
            </div>
        </div>
    )
}