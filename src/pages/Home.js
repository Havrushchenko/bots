import { Link } from "react-router-dom";
import { Button, Progress } from "@material-tailwind/react";
import { FaRobot } from "react-icons/fa";

export function Home() {
    return (
        <>
            <div className="flex justify-center mt-64">
                <div className="w-full max-w-sm">
                <div className="flex justify-center px-4 pt-4">
                    <Progress className="w-72 mb-6" value={0} />
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex justify-center w-24 h-24 items-center mb-6 bg-gray-100 rounded-full shadow-lg">
                            <FaRobot className="w-10 h-10" />
                        </div>
                        <h2 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">You don't have any bots yet</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Please create your first bot to be able to work with system</p>
                        <Link to="/configure"><Button className="inline-flex items-center px-4 py-2 mt-6 text-sm font-medium text-center text-white">ADD BOT</Button></Link>
                    </div>
                </div>
            </div>
        </>
    );
}