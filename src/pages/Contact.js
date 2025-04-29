import Page from "../components/Page";
import Text from "../components/Text";
import {Link} from "react-router-dom";
import {useCookies} from "react-cookie";

export default function Contact() {
    const [cookies, setCookie] = useCookies();
    return (
        <Page title="CONTACT US">
            <div className="w-full flex justify-center">
                <div className={`w-[64%] mt-[4%] bg-opacity-40 text-center mb-16
                ${cookies["dark-mode"] === true ? 'bg-dark-background-secondary' : 'bg-background-secondary bg-opacity-40'}`}>
                    <Text>Email</Text>
                    <Text>
                        <div className="text-secondary underline font-[45px]">
                            <Link
                                to='#'
                                onClick={(e) => {
                                    window.location.href = "mailto:contact@rolsatechnology.com";
                                    e.preventDefault();
                                }}
                            >
                                contact@rolsatechnology.com
                            </Link>
                        </div>
                    </Text>



                    <Text>Phone number</Text>
                    <Text>
                        <div className="text-secondary underline font-[45px]">
                            <Link
                                to='#'
                                onClick={(e) => {
                                    window.location.href = "tel:13974174774";
                                    e.preventDefault();
                                }}
                            >
                                13974174774
                            </Link>
                        </div>
                    </Text>

                    <Text>Address</Text>
                    <Text>
                        <div
                            className="text-secondary underline font-[45px] hover:cursor-pointer"
                            onClick={() => {
                                navigator.clipboard.writeText("17 Cromwell Avenue\n" + "Oxfordshire\n" + "United Kingdom")
                            }}>
                            17 Cromwell Avenue <br/>
                            Oxfordshire <br/>
                            United Kingdom <br/>
                        </div>
                    </Text>
                </div>
            </div>
        </Page>
    )
}