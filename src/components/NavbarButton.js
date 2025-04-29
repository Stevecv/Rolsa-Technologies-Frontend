import {useCookies} from "react-cookie";

export default function NavbarButton(props) {
    const [cookies, setCookie] = useCookies();

    return (
        <a href={props.link} className={`${cookies["large-text"] === true ? 'text-[40px]' : 'text-[28px]'} 
        ${cookies["simple-font"] === true ? '' : 'font-[arial] font-bold'}
             h-[82px] flex items-center px-4 font-bold`}>
            {props.title}
        </a>
    );
}