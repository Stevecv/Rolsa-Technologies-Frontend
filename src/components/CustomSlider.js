import Slider from "rc-slider";
import {useCookies} from "react-cookie";
import Text from "./Text";

export default function CustomSlider(props) {
    const [cookies, setCookie] = useCookies();

    if (cookies[props.cookieKey] === undefined) {
        setCookie(props.cookieKey, props.default);
    }

    return (
        <div>
            <div className="w-full text-center">
                <Text>{props.title}</Text>
            </div>
            <div className="w-full grid-cols-2 grid text-[24px]">
                <div className={`flex justify-start ${cookies["dark-mode"] === true ? 'text-white' : 'text-black'}`}>
                    {props.low}
                </div>
                <div className={`flex justify-end ${cookies["dark-mode"] === true ? 'text-white' : 'text-black'}`}>
                    {props.high}
                </div>
            </div>


            <Slider
                trackStyle={{backgroundColor: '#D56144', height: 7, borderRadius: 3.5 }}
                railStyle={{ backgroundColor: '#D56144', height: 7, borderRadius: 3.5 }}

                handleStyle={{
                    borderWidth: 0,
                    opacity: 100,
                    height: 25,
                    width: 25,
                    marginLeft: -14,
                    marginTop: -9,
                    backgroundColor: '#D56144',
                }}

                defaultValue={cookies[props.cookieKey]}
                onChange={(e) => {setCookie(props.cookieKey, e)}}
            />
        </div>
    )
}