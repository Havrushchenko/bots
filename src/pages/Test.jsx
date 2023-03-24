import React, { useState, Fragment } from 'react';
import { Link } from "react-router-dom";
import { Button, Progress, Alert } from "@material-tailwind/react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { AiOutlinePlus } from 'react-icons/ai';
import { motion } from "framer-motion";

export function Category() {
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

    const options = [
        {
            label: "Refund",
            value: "refund",
        },
        {
            label: "Product Details",
            value: "product Details",
        },
        {
            label: "Product Info",
            value: "product Info",
        },
        {
            label: "Complaint",
            value: "complaint",
        },
    ];

    const actions = [
        {
            label: "Reply with a message",
            value: "reply with a message",
        },
        {
            label: "Reply with a message and promt user for answer",
            value: "reply with a message and promt user for answer",
        },
        {
            label: "Reply with a message and action",
            value: "reply with a message and action",
        },
    ];
    const [inputValues, setInputValues] = useState({});
    const [counter, setCounter] = useState(1);

    const handleClick = () => {
        setCounter(counter + 1);
        console.log(counter);
    };

    const handleOnChange = (e) => {
        const abc = {};
        abc[e.target.className] = e.target.value;
        setInputValues({ ...inputValues, ...abc });
    };

    const [category, setCategory] = React.useState('');
    const [action, setAction] = React.useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [show, setShow] = React.useState(true);

    const handleChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'category') {
            setCategory(inputValue);
        } else if (inputType === 'action') {
            setAction(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!category) {
            setErrorMessage('Please, select a category');
            return;
        } else if (!action) {
            setErrorMessage('Please, select an action');
            return;
        }
        setCategory('');
        setAction('');
        window.location.assign('/done');
    };

    return (
        <>
            <Progress value={66} />
            {errorMessage && (
                <Fragment>
                    <Alert className="absolute right-0 left-0 mr-auto ml-auto w-96 mt-48"
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
            <motion.div variants={wrapper} initial="hidden" animate="show" className="flex justify-center mt-64">
                <div className="">
                    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
                        <h2 className="mb-6 text-xl font-medium text-gray-900 dark:text-white">Configure your bot</h2>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div className="flex justify-center gap-3">
                                {Array.from(Array(counter)).map((c, index) => {
                                    return (
                                        <FormControl onChange={handleOnChange} key={c} className={index}
                                            type="text" sx={{ m: 1, minWidth: 120 }} size="small">
                                            <InputLabel>Select category</InputLabel>
                                            <Select value={category} label="Select category" name="category" onChange={handleChange}>
                                                {options.map((option) => (
                                                    <MenuItem value={option.value}>{option.label}</MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    );
                                })}
                                {Array.from(Array(counter)).map((c, index) => {
                                    return (
                                        <FormControl onChange={handleOnChange} key={c} className={index}
                                            type="text" sx={{ m: 1, minWidth: 120 }} size="small">
                                            <InputLabel id="demo-select-small">Select action</InputLabel>
                                            <Select value={action} label="Select category" name="action" onChange={handleChange}>
                                                {actions.map((action) => (
                                                    <MenuItem value={action.value}>{action.label}</MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    );
                                })}
                            </div>
                        </div>
                        {Object.keys(inputValues).map((c) => {
                            return <p>{inputValues[c]}</p>;
                        })}
                        <button onClick={handleClick} className="flex items-center gap-2 mb-6 mr-[305px] hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"><AiOutlinePlus></AiOutlinePlus>Add new category</button>
                        <div className="flex w-max gap-80">
                            <Link to="/configure"><Button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center" variant="outlined">Back</Button></Link>
                            <Button type="submit" onClick={handleFormSubmit} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center" variant="gradient">Submit</Button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}