import {useCookies} from "react-cookie";

export default function Text(props) {
    const [cookies, setCookie] = useCookies();
    return (
        <div className={`${cookies["dark-mode"] === true ? 'text-white' : 'text-black'} 
        font-bold ${cookies["large-text"] === true ? 'text-[75px]' : 'text-[50px]'} inline 
        ${cookies["simple-font"] === true ? '' : 'font-[arial] font-bold'}`}>
            {props.children}
        </div>
    )
}