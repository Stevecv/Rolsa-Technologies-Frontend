import Page from "../components/Page";
import 'rc-slider/assets/index.css';
import RadioOptions from "../components/RadioOptions";
import CustomSlider from "../components/CustomSlider";
import Text from "../components/Text";
import NumberChoiceBox from "../components/NumberChoiceBox";
import {useCookies} from "react-cookie";

export default function CarbonFootprintCalculator() {
    const [cookies, setCookie] = useCookies();

    var carbonFootprint = 0
    var tonnesPerMile = 0
    if (cookies['carType'] === 0) {
        tonnesPerMile = 0.00025;
    } else if (cookies['carType'] === 1) {
        tonnesPerMile = 0.0001975
    } else if (cookies['carType'] === 2) {
        tonnesPerMile = 0.00038
    } else if (cookies['carType'] === 3) {
        tonnesPerMile = 0.0003425
    } else if (cookies['carType'] === 4) {
        tonnesPerMile = 0.000445
    } else if (cookies['carType'] === 5) {
        tonnesPerMile = 0.0004175
    } else if (cookies['carType'] === 6) {
        tonnesPerMile = 0.000145
    } else if (cookies['carType'] === 7) {
        tonnesPerMile = 0.0002775
    } else if (cookies['carType'] === 8) {
        tonnesPerMile = 0.0000375
    }

    carbonFootprint += (cookies['distanceDriven']*2000) * tonnesPerMile;

    carbonFootprint += (0.3 * cookies['quickFlights'])
    carbonFootprint += (0.8 * cookies['shortFlights'])
    carbonFootprint += (1.4 * cookies['intermediateFlights'])
    carbonFootprint += (2 * cookies['longFlights'])

    carbonFootprint += (cookies['cfEnergyUsage'] / 45.7142857143)

    carbonFootprint += (0.1 + (cookies['binFullness'] * 0.03))

    carbonFootprint = Math.round(carbonFootprint * 10) / 10

    return (
        <Page title="CARBON FOOTPRINT CALCULATOR">
            <div className="w-full flex justify-center">
                <div className={`bg-opacity-40 w-[92%] mt-[4%] p-5 
                ${cookies["dark-mode"] === true ? 'bg-dark-background-secondary' : 'bg-background-secondary bg-opacity-40'}`}>
                    <div className="w-full grid grid-cols-2">
                        <div>
                            <div className="w-full flex items-center justify-center py-5">
                                <RadioOptions
                                    title = "What type of car do you drive?"
                                    options = {['Small petrol', 'Small diesel',
                                        'Medium petrol', 'Medium diesel',
                                        'Large petrol', 'Large diesel',
                                        'Hybrid', 'Plug-in hybrid',
                                        'Electric', 'I use public transport',]}
                                    cookieKey='carType'
                                    default={0}
                                />
                            </div>

                            <div className="px-10 py-5">
                                <CustomSlider title="Distance" cookieKey="distanceDriven" default={50}
                                          low="1000km" high="50000km"/>
                            </div>

                            <div className="w-full text-center">
                                <Text>
                                    <div>
                                        Flights
                                    </div>
                                </Text>

                                <Text>
                                    <div className="text-[20px]">
                                        Each way
                                    </div>
                                </Text>
                            </div>

                            <div className="grid grid-cols-2 pb-[4%]">
                                <div className="flex justify-center py-5">
                                    <NumberChoiceBox title={"Quick 1-2 hours"} max={365} min={0} cookieKey='quickFlights' default={0}/>
                                </div>
                                <div className="flex justify-center py-5">
                                    <NumberChoiceBox title={"Short 3-5 hours"} max={365} min={0} cookieKey='shortFlights' default={0}/>
                                </div>
                                <div className="flex justify-center py-5">
                                    <NumberChoiceBox title={"Intermediate 5-10 hours"} max={365} min={0} cookieKey='intermediateFlights' default={0}/>
                                </div>
                                <div className="flex justify-center py-5">
                                    <NumberChoiceBox title={"Long 10+ hours"} max={365} min={0} cookieKey='longFlights' default={0}/>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="px-10 py-5">
                                <CustomSlider title="Diet" cookieKey="diet" default={50}
                                              low="100% plant based" high="Meat lover"/>
                            </div>

                            <div className="px-10 py-5">
                                <CustomSlider title="Energy usage" cookieKey="cfEnergyUsage" default={50}
                                              low="Minimal" high="£160 monthly"/>
                            </div>

                            <div className="px-10 py-5">
                                <CustomSlider title="How full is your bin by the end of the week?"
                                              cookieKey="binFullness" default={50}
                                              low="Barely" high="Completely full"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full text-center pb-[4%]">
                <Text>
                    <div className="text-[60px]">
                        Your annual energy usage
                    </div>
                </Text>

                <Text>
                    <div className="text-secondary text-[96px]">
                        {carbonFootprint} t
                    </div>
                </Text>
            </div>
        </Page>
    )
}