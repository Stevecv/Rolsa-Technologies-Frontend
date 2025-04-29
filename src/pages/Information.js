import Page from "../components/Page";
import LinkButton from "../components/LinkButton";
import Card from "../components/Card";
import InformationCard from "../components/InformationCard";

export default function Information() {
    return (
        <Page title="INFORMATION">
            <div className="grid grid-cols-2 p-[75px] gap-[75px]">
                <a href='information-solar-panels'>
                    <InformationCard image='SolarPanels.png' className="">
                        Solar Panels
                    </InformationCard>
                </a>

                <a href='information-electrical-vehicle-charging'>
                    <InformationCard image='ElectricVehicleCharging.png' className="">
                        Electrical Vehicle Charging
                    </InformationCard>
                </a>

                <a href='information-smart-home-technology'>
                    <InformationCard image='TechAtFingertips.png' className="">
                        Smart Home Technology
                    </InformationCard>
                </a>

                <a href='information-reducing-your-carbon-footprint'>
                    <InformationCard image='Pollution.png' className="">
                        Reducing Your Carbon Footprint
                    </InformationCard>
                </a>
            </div>
        </Page>
    )
}