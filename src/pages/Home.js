import { FaRobot } from "react-icons/fa";

export function Home() {
    return (
        <>
            <div className="flex justify-center mt-64">
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
            </div>
        </>
    );
}