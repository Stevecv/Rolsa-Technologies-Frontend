import React, {useState} from "react";
import Text from "./Text";
import {useCookies} from "react-cookie";

export default function DropDownMenu(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("");
    const [cookies, setCookie] = useCookies();


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left w-[584px]">
            <div>
                <button
                    onClick={toggleDropdown}
                    className="inline-flex justify-center rounded-md
                    border-secondary border-[10px] px-4 py-2 bg-opacity-0
                    text-sm font-medium text-gray-700
                    focus:outline-none w-[584px] h-[93px]"
                >
                    <div className="w-full h-full flex justify-center items-center">
                        <Text>
                            <div className="font-normal">
                                {selected}
                            </div>
                        </Text>

                        <div className="flex justify-end w-full">
                            <svg
                                className="ml-2 -mr-1 h-20 w-20"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </div>
                    </div>
                </button>
            </div>


            {isOpen && (
                <div
                    className={`origin-top-right absolute right-0 mt-2
                        rounded-md shadow-lg  ring-1 ring-black ring-opacity-5
                        focus:outline-none w-[584px]
                        ${cookies["dark-mode"] === true ? 'bg-dark-background-secondary' : 'bg-white'}`}
                    role="menu"
                >
                    <div className="py-1 hover:cursor-pointer" role="none">
                        <div
                            className={`block px-4 py-2 text-sm text-gray-700
                                mb-4
                                ${cookies["dark-mode"] === true ? 'bg-dark-background-secondary' : 'hover:bg-gray-100'}\``}
                            role="menuitem"
                        >
                            <div
                            onClick={() => {setSelected("Consultation"); setIsOpen(false); setCookie("topic", "Consultation")}}>
                                <Text>Consultation</Text>
                            </div>
                        </div>
                        <div
                            className={`block px-4 py-2 text-sm text-gray-700
                                mb-4
                                ${cookies["dark-mode"] === true ? 'bg-dark-background-secondary' : 'hover:bg-gray-100'}\``}
                            role="menuitem"
                        >
                            <div
                                onClick={() => {setSelected("Installation"); setIsOpen(false); setCookie("topic", "Consultation")}}>
                                <Text>Installation</Text>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}