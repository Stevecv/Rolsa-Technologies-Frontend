import {useCookies} from "react-cookie";

export default function SmallText(props) {
    const [cookies, setCookie] = useCookies();
    return (
        <div className={`${cookies["dark-mode"] === true ? 'text-white' : 'text-black'} 
        font-bold ${cookies["large-text"] === true ? 'text-[65px]' : 'text-[40px]'} inline 
        ${cookies["simple-font"] === true ? '' : 'font-[arial]'} font-normal`}>
            {props.children}
        </div>
    )
}