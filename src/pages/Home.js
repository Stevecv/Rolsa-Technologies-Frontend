import Page from "../components/Page";
import Card from "../components/Card";
import ImportantText from "../components/ImportantText";
import LinkButton from "../components/LinkButton";

export default function Home() {
    return (
        <Page title="ROLSA TECHNOLOGIES">
            <div className="flex flex-row">
                <div className="flex flex-col w-[50%] py-[75px] pl-[75px] pr-[37.5px] gap-[75px]">
                    <Card image='SolarPanels.png'>
                        Did you know joining the <ImportantText>1.4 million</ImportantText> other people in the UK who
                        have solar panels can save you up to <ImportantText>£700</ImportantText> annually?

                        <div className="w-full flex justify-center items-center">
                            <LinkButton link='/information'>More Info</LinkButton>
                        </div>
                    </Card>

                    <Card>
                        Do you know how much <ImportantText>electricity</ImportantText> you use each year?
                        Try our free <ImportantText>online calculator</ImportantText> to find out today!

                        <div className="w-full flex justify-center items-center">
                            <LinkButton link='/energy-calculator'>Get Started</LinkButton>
                        </div>
                    </Card>

                    <Card image='Pollution.png'>
                        Do you know your <ImportantText>carbon footprint</ImportantText>? Use our free calculator
                        to find out <ImportantText>today</ImportantText>!

                        <div className="w-full flex justify-center items-center">
                            <LinkButton link='/carbon-footprint-calculator'>Get Started</LinkButton>
                        </div>
                    </Card>
                </div>

                <div className="flex flex-col w-[50%] py-[75px] pr-[75px] pl-[37.5px] gap-[75px]">
                    <Card>
                        Want to find out how you can help save the planet?
                        Book a <ImportantText>consultation</ImportantText> today!

                        <div className="w-full flex justify-center items-center">
                            <LinkButton link='/consultation-booking'>Get Started</LinkButton>
                        </div>
                    </Card>

                    <Card image="ElectricVehicleCharging.png">
                        <ImportantText>Rolsa Technologies</ImportantText> specialises in making sure we find the
                        solution that’s right for you. We supply a wide range of
                        <ImportantText> green technology</ImportantText> solutions including solar panels,
                        electric vehicle charging stations and smart home energy management.

                        <div className="w-full flex justify-center items-center">
                            <LinkButton link='/bookings'>Book a Consultation</LinkButton>
                        </div>
                    </Card>

                    <Card image="RowingAtSunset.png">
                        Green technology isn’t just about saving the planet.
                        It’s also about <ImportantText>peace of mind</ImportantText>.
                        See what you can do <ImportantText>today</ImportantText>!

                        <div className="w-full flex justify-center items-center">
                            <LinkButton link='/bookings'>Book a Consultation</LinkButton>
                        </div>
                    </Card>
                </div>
            </div>
        </Page>
    )
}