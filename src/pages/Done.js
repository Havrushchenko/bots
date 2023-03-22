import { Link } from "react-router-dom";
import { FaRobot } from "react-icons/fa";
import { Button, Progress } from "@material-tailwind/react";
import { motion } from "framer-motion";

export function Done() {
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
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5,
                delay: 0.3
            }
        }
    };
    return (
        <>
            <Progress value={100} />
            <motion.div variants={wrapper} initial="hidden" animate="show" className="flex justify-center mt-60">
                <div className="">
                    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
                        <div className="flex justify-center w-24 h-24 items-center mb-6 bg-gray-100 rounded-full shadow-lg">
                            <FaRobot className="w-10 h-10" />
                        </div>
                        <h2 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Congratulations!</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">You will recieve an email shortly once your bot is ready.</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Stay tuned!</p>
                        <Link to="/configure"><Button className="inline-flex items-center px-4 py-2 mt-6 text-sm font-medium text-center text-white">DONE</Button></Link>
                    </div>
                </div>
            </motion.div>
        </>
    );
}