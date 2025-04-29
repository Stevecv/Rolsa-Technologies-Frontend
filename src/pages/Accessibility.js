import Page from "../components/Page";
import Text from "../components/Text";
import {Link} from "react-router-dom";
import { ToggleSlider }  from "react-toggle-slider";
import {useCookies} from "react-cookie";

export default function Accessibility() {
    const [cookies, setCookie] = useCookies();
    return (
        <Page title="ACCESSIBILITY">
            <div className="w-full flex justify-center">
                <div className={`w-[64%] mt-[4%] ${cookies["dark-mode"] === true ? 'bg-dark-background-secondary' : 'bg-background-secondary bg-opacity-40'} text-center mb-16`}>
                    <Text>Dark Mode</Text>
                    <div className="w-full flex justify-center mb-5">
                        <ToggleSlider
                            onToggle={state => setCookie("dark-mode", state)}
                            active={cookies["dark-mode"]}

                            barBackgroundColorActive={'#D56144'}
                            barWidth={191}
                            barHeight={82}
                            handleSize={82}
                            handleBorderRadius={82}
                            barBorderRadius={82}
                        />
                    </div>


                    <Text>Large text</Text>
                    <div className="w-full flex justify-center mb-5">
                        <ToggleSlider
                            onToggle={state => setCookie("large-text", state)}
                            active={cookies["large-text"]}

                            barBackgroundColorActive={'#D56144'}
                            barWidth={191}
                            barHeight={82}
                            handleSize={82}
                            handleBorderRadius={82}
                            barBorderRadius={82}
                        />
                    </div>

                    <Text>Simple font</Text>
                    <div className="w-full flex justify-center mb-5">
                        <ToggleSlider
                            onToggle={state => setCookie("simple-font", state)}
                            active={cookies["simple-font"]}

                            barBackgroundColorActive={'#D56144'}
                            barWidth={191}
                            barHeight={82}
                            handleSize={82}
                            handleBorderRadius={82}
                            barBorderRadius={82}
                        />
                    </div>
                </div>
            </div>
        </Page>
    )
}