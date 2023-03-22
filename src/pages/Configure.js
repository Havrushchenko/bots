import React from "react";
import { useState, Fragment } from 'react'
import { Link } from "react-router-dom";
import { Select, Option, Input, Button, Progress, Alert } from "@material-tailwind/react";
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

    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [show, setShow] = React.useState(true);

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(name);

        if (!name) {
            setErrorMessage('Please, enter your bot`s name');
            return;
        }
        window.location.assign('/category');
        setName('');
    };

    return (
        <>
            <Progress value={33} />
            {errorMessage && (
                <Fragment>
                    <Alert className="absolute right-0 left-0 mr-auto ml-auto w-96 mt-40"
                        show={show}
                        animate={{
                            mount: { y: 0 },
                            unmount: { y: 100 },
                        }}
                        dismissible={{
                            onClose: () => setShow(false),
                        }}
                    >
                        {errorMessage}
                    </Alert>
                </Fragment>

            )}
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
                            <Input value={name} name="name" onChange={handleInputChange} label="Name" autocomplete="off"/>
                        </div>
                        <div className="flex flex-col w-72 gap-6 mb-6">
                            <Select size="md" label="Powered by AI">
                                <Option disabled={true}>ChatGPT</Option>
                            </Select>
                        </div>
                        <div className="flex w-max gap-36">
                            <Link to="/"><Button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center" variant="outlined">Back</Button></Link>
                            <Button type='click' onClick={handleFormSubmit} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center" variant="gradient">Next</Button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}
