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
        <>
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
            {/* <div className="flex justify-center mt-64">
                <div className="w-full max-w-sm">
                    <div className="flex justify-end px-4 pt-4">
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <div className="flex justify-center w-24 h-24 items-center mb-3 bg-gray-100 rounded-full shadow-lg">
                            <FaRobot className="w-10 h-10" />
                        </div>
                        <h2 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">You don't have any bots yet</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Please create your first bot to be able to work with system</p>
                        <button className="inline-flex items-center px-4 py-2 mt-4 text-sm font-medium text-center text-white bg-sky-600 rounded-lg hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ADD BOT</button>
                    </div>
                </div>
            </div> */}
        </>
    );
}