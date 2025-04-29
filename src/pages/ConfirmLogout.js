import Navbar from "../components/Navbar";
import Text from "../components/Text";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useCookies} from "react-cookie";

export default function ConfirmLogout() {
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies();


    const handleLogout = () => {
        axios.get('http://194.213.3.13:8002/logout?auth_token=' + cookies['authentication_token'])
            .then(function (response) {
                if (response.data['result'].includes('success')) {
                    navigate('/logout-success');
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className={`relative h-screen ${cookies["dark-mode"] === true ? 'bg-dark-background' : 'bg-background'}`}>
            <Navbar classname=""/>

            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <div className="text-center">
                    <Text>
                        Are you sure you want to logout?
                    </Text>
                    <div className="w-full flex justify-center items-center">
                        <div className="m-5">
                            <div onClick={handleLogout} className='bg-primary py-3 min-w-[440px]
                                flex items-center justify-center w-fit rounded-[9px] px-3 hover:cursor-pointer'>
                                <Text>Confirm</Text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}