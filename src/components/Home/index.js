import { FaRobot } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosInformationCircleOutline } from "react-icons/io";

export function Nav() {
    const icons = [
        {
            name: <AiOutlineUser />,
        },
        {
            name: <IoIosInformationCircleOutline />,
        }
    ];

    return (
        <nav className="bg-gray-100 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <a href="#" className="flex items-center">
                    <FaRobot className="mr-3 h-6 sm:h-9" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">BOTS</span>
                </a>
                <div className="flex items-center lg:order-2">
                    <a href="#" className="hover:bg-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Help center</a>
                    {icons.map((icon) =>
                    (
                        <div className="hover:bg-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                            {icon.name}</div>
                    )
                    )}
                </div>
            </div>
        </nav>
    );
}