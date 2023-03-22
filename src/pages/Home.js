import { Link } from "react-router-dom";
import { Button, Progress } from "@material-tailwind/react";
import { FaRobot } from "react-icons/fa";
import { motion } from "framer-motion";

export function Home() {
    const wrapper = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 1,
                delay: 0.3
            }
        }
    };
    return (
        <>
        <Progress value={0} />;
            <motion.div variants={wrapper} initial="hidden" animate="show" className="flex justify-center mt-60">
                <div className="w-full max-w-sm">
                    <div className="flex flex-col items-center">
                        <div className="flex justify-center w-24 h-24 items-center mb-6 bg-gray-100 rounded-full shadow-lg">
                            <FaRobot className="w-10 h-10" />
                        </div>
                        <h2 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">You don't have any bots yet</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Please create your first bot to be able to work with system</p>
                        <Link to="/configure"><Button className="inline-flex items-center px-4 py-2 mt-6 text-sm font-medium text-center text-white">ADD BOT</Button></Link>
                    </div>
                </div>
            </motion.div>
        </>
    );
}