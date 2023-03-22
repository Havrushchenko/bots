import { Link } from "react-router-dom";
import { Select, Option, Input, Button, Progress } from "@material-tailwind/react";
import { motion } from "framer-motion";

export function Configure() {
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
            <Progress value={33} />
            <motion.div variants={wrapper} initial="hidden" animate="show" className="flex justify-center mt-56">
                <div className="w-full max-w-sm">
                    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
                        <h2 className="mb-6 text-xl font-medium text-gray-900 dark:text-white">Configure your bot</h2>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div className="flex flex-col w-72 gap-6">
                                <Select size="md" label="Messanger">
                                    <Option disabled={true}>Telegram</Option>
                                </Select>
                            </div>
                        </div>
                        <div className="w-72 mb-6">
                            <Input label="Name" />
                        </div>
                        <div className="flex flex-col w-72 gap-6 mb-6">
                            <Select size="md" label="Powered by AI">
                                <Option disabled={true}>ChatGPT</Option>
                            </Select>
                        </div>
                        <div className="flex w-max gap-36">
                            <Link to="/"><Button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center" variant="outlined">Back</Button></Link>
                            <Link to="/category"><Button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center" variant="gradient">Next</Button></Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}