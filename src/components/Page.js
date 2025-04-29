import Navbar from "./Navbar";
import {useCookies} from "react-cookie";

export default function Page(props) {
    const [cookies, setCookie] = useCookies();
    // Set default hero image
    var image = '/Hero.png'
    if (props.image) {
        image = props.image;
    }

    return (
        <div className="relative">
            {/* Hero */}
            <Navbar classname=""/>
            <div className="h-[80vh] absolute top-0 left-0">
                <img src={image} alt='Hero'
                     className='-z-10 object-cover h-[80vh] w-full fixed flex'/>

                <div className={`-z-10 w-full h-[80vh] flex items-center justify-center fixed text-white
                ${cookies["large-text"] === true ? 'text-[120px]' : 'text-[96px]'}
                ${cookies["simple-font"] === true ? '' : 'font-[arial] font-bold'}`}>
                    {props.title}
                </div>
            </div>

            {/* Content */}
            <div className={`left-0 mt-[70vh] w-full min-h-[20vh] ${cookies["dark-mode"] === true ? 'bg-dark-background' : 'bg-background'}`}>
                {props.children}
            </div>
        </div>
    )
}