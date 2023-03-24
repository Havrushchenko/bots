import React from "react";
import { useState, Fragment } from 'react';
import { Link } from "react-router-dom";
import { Button, Progress, Alert } from "@material-tailwind/react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
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

    const messangers = [
        {
            label: "Telegram",
            value: "telegram",
        },
        {
            label: "Viber",
            value: "viber",
        }
    ];

    const [messanger, setMessanger] = React.useState('');
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [show, setShow] = React.useState(true);
    const handleChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'messanger') {
            setMessanger(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!messanger) {
            setErrorMessage('Please select a messanger');
            return;
        } else if (!name) {
            setErrorMessage('Please select bot`s name');
            return;
        }
        setMessanger('');
        setName('');
        window.location.assign('/category');
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
                                <FormControl className='w-72' size="small">
                                    <InputLabel>Select category</InputLabel>
                                    <Select value={messanger} label="Select category" name="messanger" onChange={handleChange}>
                                        {messangers.map((messanger) => (
                                            <MenuItem value={messanger.value}>{messanger.label}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div className="mb-6">
                            <TextField className="w-72" size="small" value={name} name="name" onChange={handleChange} label="Name" autocomplete="off" variant="outlined" />
                        </div>
                        <div className="flex flex-col w-72 mb-6">
                            <FormControl className='w-72' size="small">
                                <InputLabel>Powered by AI</InputLabel>
                                <Select label="Powered by AI" name="ai" onChange={handleChange}>
                                    <MenuItem disabled={true} value="chatgpt">ChatGPT</MenuItem>
                                </Select>
                            </FormControl>
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
