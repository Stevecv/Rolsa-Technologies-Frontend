import Page from "../components/Page";
import 'rc-slider/assets/index.css';
import TwoOptionChoice from "../components/TwoOptionChoice";
import {ApartmentOutlined, BoltTwoTone, HomeOutlined, LocalFireDepartmentOutlined} from "@mui/icons-material";
import NumberChoiceBox from "../components/NumberChoiceBox";
import CustomSlider from "../components/CustomSlider";
import Text from "../components/Text";
import {useCookies} from "react-cookie";

export default function EnergyCalculator() {
    const [cookies, setCookie] = useCookies();

    var energyUsage = 0;

    var amountOfPeople = cookies['occupantCount'];
    var bedrooms = cookies['bedrooms'];
    var flatOrHouse = cookies['accommodationType'];
    var heating = cookies['houseHeatingMethod'];
    var waterHeating = cookies['waterHeatingMethod'];
    var cooking = cookies['cookingMethod'];

    var ovens = cookies['electricOvens'];
    var computers = cookies['computers'];
    var fridges = cookies['fridges'];
    var tumbleDryers = cookies['tumbleDryers'];
    var televisions = cookies['televisions'];
    var washingMachines = cookies['washingMachines'];
    var dishwashers = cookies['dishwashers'];
    var independentFreezers = cookies['independentFreezers'];

    var insulation = cookies['insulationQuality'] / 10;


    energyUsage += (amountOfPeople - 1) * 1061;
    energyUsage += (bedrooms - 1) * 1454;

    if (flatOrHouse === 1) {
        energyUsage += (bedrooms - 1) * 1454;
    }

    if (heating === 0) {
        energyUsage += 6445 + ((10 - insulation) * 552.5);
    } else {
        energyUsage += 6445 + ((10 - insulation) * 552.5);
    }

    if (waterHeating === 0) {
        energyUsage += 1434;
    } else {
        energyUsage += 800;
    }

    if (cooking === 0) {
        energyUsage += 338;
    } else {
        energyUsage += 243;
    }

    energyUsage += 62 * ovens
    energyUsage += 108 * computers
    energyUsage += 166 * fridges
    energyUsage += 355 * tumbleDryers
    energyUsage += 162 * televisions
    energyUsage += 235 * washingMachines;
    energyUsage += 302 * dishwashers;
    energyUsage += 240 * independentFreezers;

    energyUsage = Math.round(energyUsage / 100);

    return (
        <Page title="ENERGY CALCULATOR">
            <div className="w-full flex justify-center">
                <div className={` bg-opacity-40 w-[92%] mt-[4%]
                ${cookies["dark-mode"] === true ? 'bg-dark-background-secondary' : 'bg-background-secondary bg-opacity-40'}`}>
                    <div className="w-full grid grid-cols-2">
                        <div className="w-full flex items-center justify-center py-5">
                            <TwoOptionChoice title={"Accommodation type"} optionA={"House"} optionB="Flat"
                                             cookieKey="accommodationType" default={0}
                                             iconA = {HomeOutlined} iconB = {ApartmentOutlined}/>
                        </div>

                        <div className="w-full flex items-center justify-center py-5">
                            <TwoOptionChoice title={"How do you cook?"} optionA={"Gas"} optionB="Electric"
                                             cookieKey="cookingMethod" default={0}
                                             iconA = {LocalFireDepartmentOutlined} iconB = {BoltTwoTone}/>
                        </div>

                        <div className="w-full grid grid-cols-2 py-5">
                            <div className="flex justify-center">
                                <NumberChoiceBox title={"Occupants"} max={50} min={1} cookieKey='occupantCount' default={1}/>
                            </div>

                            <div className="flex justify-center">
                                <NumberChoiceBox title={"Bedrooms"} max={50} min={1} cookieKey='bedrooms' default={1}/>
                            </div>
                        </div>

                        <div className="w-full flex items-center justify-center py-5">
                            <TwoOptionChoice title={"Do you use thermostats?"} optionA={"Yes"} optionB="No"
                                         cookieKey="thermostats" default={0}/>
                        </div>

                        <div className="px-10 py-5">
                            <CustomSlider title="Insulation quality" cookieKey="insulationQuality" default={50}
                                          low="Poor" high="Excellent"/>
                        </div>

                        <div className="w-full flex items-center justify-center py-5">
                            <TwoOptionChoice title={"How do you heat your water?"} optionA={"Gas"} optionB="Electric"
                                         cookieKey="waterHeatingMethod" default={0}
                                         iconA = {LocalFireDepartmentOutlined} iconB = {BoltTwoTone}/>
                        </div>

                        <div className="w-full flex items-center justify-center py-5">
                            <TwoOptionChoice title={"How do you heat your house?"} optionA={"Gas"} optionB="Electric"
                                         cookieKey="houseHeatingMethod" default={0}
                                         iconA = {LocalFireDepartmentOutlined} iconB = {BoltTwoTone}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center">
                <div className={`bg-opacity-40 w-[92%] my-[4%]
                ${cookies["dark-mode"] === true ? 'bg-dark-background-secondary' : 'bg-background-secondary bg-opacity-40'}`}>
                    <div className="w-full text-center">
                        <Text><div className="text-[60px]">Your appliances</div></Text>
                    </div>


                    <div className="grid grid-cols-4 pb-[4%]">
                        <div className="flex justify-center py-5">
                            <NumberChoiceBox title={"Electric oven"} max={50} min={0} cookieKey='electricOvens' default={1}/>
                        </div>
                        <div className="flex justify-center py-5">
                            <NumberChoiceBox title={"Computer"} max={50} min={0} cookieKey='computers' default={1}/>
                        </div>
                        <div className="flex justify-center py-5">
                            <NumberChoiceBox title={"Dishwasher"} max={50} min={0} cookieKey='dishwashers' default={1}/>
                        </div>
                        <div className="flex justify-center py-5">
                            <NumberChoiceBox title={"Television"} max={50} min={0} cookieKey='televisions' default={1}/>
                        </div>
                        <div className="flex justify-center py-5">
                            <NumberChoiceBox title={"Tumble dryer"} max={50} min={0} cookieKey='tumbleDryers' default={1}/>
                        </div>
                        <div className="flex justify-center py-5">
                            <NumberChoiceBox title={"Washing machine"} max={50} min={0} cookieKey='washingMachines' default={1}/>
                        </div>
                        <div className="flex justify-center py-5">
                            <NumberChoiceBox title={"Independent freezer"} max={50} min={0} cookieKey='independentFreezers' default={1}/>
                        </div>
                        <div className="flex justify-center py-5 items-end">
                            <NumberChoiceBox title={"Fridges"} max={50} min={0} cookieKey='fridges' default={1}/>
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
                        {energyUsage} kWh<div className={`${cookies["dark-mode"] === true ? 'text-white' : 'text-black'} inline`}><BoltTwoTone sx={{ fontSize: 96 }} /></div>
                    </div>
                </Text>
            </div>
        </Page>
    )
}