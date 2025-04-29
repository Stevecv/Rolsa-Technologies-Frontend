import Page from "../components/Page";
import {useState} from "react";
import Text from "../components/Text";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState(undefined);
    const [cookies, setCookie] = useCookies();

    const handleSetEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleSetPassword = (event) => {
        setPassword(event.target.value);
    };
    const handleLoginClick = () => {
        if (email && password) {
            axios.get('http://194.213.3.13:8002/login?email=' + email + "&password=" + password)
                .then(function (response) {
                    if (response.data['result'] === true) {
                        setCookie('authentication_token', response.data['auth_token'])
                        setCookie('email', email)
                        navigate('/login-success');
                    } else {
                        setError(response.data['message']);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            setError("All fields are required!");
        }
    }

    return (
        <Page title="LOGIN">
            <div className="w-full flex justify-center">
                <div className={`bg-opacity-40 w-[64%] pb-[4%] mt-[4%] text-center 
                ${cookies["dark-mode"] === true ? 'bg-dark-background-secondary' : 'bg-background-secondary bg-opacity-40'}`}>
                    <div><Text>Email</Text></div>
                    <input type="email" name="email" onChange={handleSetEmail} placeholder={"johndoe@email.com"}
                           className={` border-[9px] rounded-[5px] border-secondary
                               text-[50px] focus:border-[10px] duration-100 outline-none
                               ${cookies["dark-mode"] === true ? 'bg-dark-background-secondary text-white' : 'bg-[#f5e6d1]'}`}/>

                    <div><Text>Password</Text></div>
                    <input type="password" name="password" onChange={handleSetPassword} placeholder={""}
                           className={`] border-[9px] rounded-[5px] border-secondary
                               text-[50px] focus:border-[10px] duration-100 outline-none 
                               ${cookies["dark-mode"] === true ? 'bg-dark-background-secondary text-white' : 'bg-[#f5e6d1]'}`}/>
                </div>
            </div>

            <div className="w-full text-center py-4">
                <Text>Don't have an account? <a href="/register" className="text-secondary underline">Register</a></Text>
            </div>

            <div className="w-full flex justify-center pb-10">
                <div>
                    <button className="bg-primary hover:scale-105 duration-200 px-32 rounded-[9px]"
                            onClick={handleLoginClick}>
                        <Text>Login</Text>
                    </button>

                    {error !== undefined &&
                        <Text>
                            <div className="text-red-500 text-[30px] text-center">
                                {error}
                            </div>
                        </Text>
                    }
                </div>
            </div>
        </Page>
    )
}