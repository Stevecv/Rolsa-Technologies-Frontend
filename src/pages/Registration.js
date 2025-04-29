import Page from "../components/Page";
import {useState} from "react";
import Text from "../components/Text";
import axios from "axios";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";

export default function Registration() {
    const [cookies, setCookie] = useCookies();
    const navigate = useNavigate();
    const [errorText, setErrorText] = useState(undefined);

    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSetFirstName = (event) => {
        setFirstName(event.target.value);
    };
    const handleSetSurname = (event) => {
        setSurname(event.target.value);
    };
    const handleSetEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleSetPassword = (event) => {
        setPassword(event.target.value);
    };
    const handleRegisterClick = () => {
        if (firstName && surname && email && password) {
            axios.post('http://194.213.3.13:8002/register', {
                first_name: firstName,
                surname: surname,
                email: email,
                password: password,
            })
                .then(function (response) {
                    const data = response.data
                    console.log(data)
                    if (data === false) {
                        setErrorText("Account already exists!");
                    } else {
                        setCookie('authentication_token', response.data)
                        setCookie('email', email)
                        navigate('/registration-success')
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            setErrorText("All fields are required!");
        }
    }

    return (
        <Page title="REGISTER">
            <div className="w-full flex justify-center">
                <div className={`bg-opacity-40 w-[64%] pb-[4%] mt-[4%] text-center
                ${cookies["dark-mode"] === true ? 'bg-dark-background-secondary' : 'bg-background-secondary bg-opacity-40'}`}>
                    <div><Text>First Name</Text></div>
                    <input name="firstName" onChange={handleSetFirstName} placeholder={"John"}
                           className={`] border-[9px] rounded-[5px] border-secondary
                               text-[50px] focus:border-[10px] duration-100 outline-none 
                               ${cookies["dark-mode"] === true ? 'bg-dark-background-secondary text-white' : 'bg-[#f5e6d1]'}`}/>

                    <div><Text>Surname</Text></div>
                    <input name="surname" onChange={handleSetSurname} placeholder={"Doe"}
                           className={`] border-[9px] rounded-[5px] border-secondary
                               text-[50px] focus:border-[10px] duration-100 outline-none 
                               ${cookies["dark-mode"] === true ? 'bg-dark-background-secondary text-white' : 'bg-[#f5e6d1]'}`}/>

                    <div><Text>Email</Text></div>
                    <input type="email" name="email" onChange={handleSetEmail} placeholder={"johndoe@email.com"}
                           className={`] border-[9px] rounded-[5px] border-secondary
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
                <Text>Already have an account? <a href="/login" className="text-secondary underline">Login</a></Text>
            </div>

            <div className="w-full flex justify-center pb-10">
                <div>
                    <button className="bg-primary hover:scale-105 duration-200 px-32 rounded-[9px]"
                            onClick={handleRegisterClick}>
                        <Text>Register</Text>
                    </button>

                    {errorText !== undefined &&
                        <Text>
                            <div className="text-red-500 text-[30px] text-center">
                                {errorText}
                            </div>
                        </Text>
                    }
                </div>
            </div>
        </Page>
    )
}