import Page from "../components/Page";
import Text from "../components/Text";
import {useState} from "react";
import { DateTimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import { createTheme } from '@mui/material/styles'
import {ThemeProvider} from "@mui/material";
import {
    TEDropdown,
    TEDropdownToggle,
    TEDropdownMenu,
    TEDropdownItem,
    TERipple,
} from "tw-elements-react";
import DropdownBasicExample from "../components/Dropdown";
import DropDownMenu from "../components/Dropdown";
import BookingButton from "../components/BookingButton";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";


export default function Consultation() {
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    if (cookies.hasOwnProperty('authentication_token')) {
        const auth_token = cookies['authentication_token'];
        axios.get('http://194.213.3.13:8002/validate_auth_token?auth_token=' + auth_token)
            .then(function (response) {
                setIsLoggedIn(response.data !== false)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    if (!isLoggedIn) {
        navigate("/login");
    }

    const [phoneNumber, setPhoneNumber] = useState();
    const [date, setDate] = useState(new Date());
    const handleSetPhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
    };
    const [error, setError] = useState(undefined);

    let topic = cookies["topic"];

    const handleBookingClick = () => {
        if (isLoggedIn) {
            if (phoneNumber && date && topic) {
                axios.post('http://194.213.3.13:8002/book', {
                    email: cookies['email'],
                    date: date,
                    topic: topic,
                    phoneNumber: phoneNumber,
                })
                    .then(function (response) {
                        navigate('/booking-success')
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } else {
                setError("All fields are required!");
            }
        } else {
            setError("You must be logged in to do this!");
        }
    }


    const darkTheme = (theme) => createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#D56144',
                light:  '#D56144',
                dark: '#D56144',
            },
            secondary: {
                main: '#EFCB96',
            },
        },
    })

    const lightTheme = (theme) => createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: '#D56144',
                light:  '#D56144',
                dark: '#D56144',
            },
            secondary: {
                main: '#EFCB96',
            },
        },
    })

    return (
        <Page title="CONSULTATION BOOKING">
            <div className="w-full flex justify-center">
                <div className={`w-[92%] pb-[4%] mt-[4%] text-center mb-16
                    grid grid-cols-2 ${cookies["dark-mode"] === true ? 'bg-dark-background-secondary' : 'bg-background-secondary bg-opacity-40'}`}>
                    <div>
                        <div><Text>Phone number</Text></div>
                        <input type="tel" name="phonenumber" onChange={handleSetPhoneNumber} placeholder={""}
                               className={`border-[9px] rounded-[5px] border-secondary
                                   text-[50px] focus:border-[10px] duration-100 outline-none
                                   ${cookies["dark-mode"] === true ? 'bg-dark-background-secondary' : 'bg-[#f5e6d1]'}`}/>
                    </div>

                    <div>
                        <div><Text>Date</Text></div>
                        <ThemeProvider theme={cookies["dark-mode"] === true ? darkTheme : lightTheme}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateTimePicker
                                    onChange={(newValue) => {
                                        setDate(new Date(newValue));
                                    }}

                                    sx={{
                                        width: "584px",
                                        height: "93px"
                                    }}
                                />
                            </LocalizationProvider>
                        </ThemeProvider>
                    </div>

                    <div>
                        <div><Text>Topic</Text></div>
                       <DropDownMenu />
                    </div>

                    <div className="flex justify-center hover:cursor-pointer" onClick={handleBookingClick}>
                        <BookingButton>Book</BookingButton>
                    </div>

                    <div>

                    </div>

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