import { React, useState } from 'react'
import { Link } from "react-router-dom";
import { Select, Option, Button, Progress } from "@material-tailwind/react";
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
            value: "Refund",
        },
        {
            label: "Product Details",
            value: "Product Details",
        },
        {
            label: "Product Info",
            value: "Product Info",
        },
        {
            label: "Complaint",
            value: "Complaint",
        },
    ];

    const actions = [
        {
            label: "Reply with a message",
            value: "Reply with a message",
        },
        {
            label: "Reply with a message and promt user for answer",
            value: "Reply with a message and promt user for answer",
        },
        {
            label: "Reply with a message and action",
            value: "Reply with a message and action",
        },
    ];
    return (
        <>
            <Progress value={66} />
            <motion.div variants={wrapper} initial="hidden" animate="show" className="flex justify-center mt-64">
                <div className="">
                    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
                        <h2 className="mb-6 text-xl font-medium text-gray-900 dark:text-white">Configure your bot</h2>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div className="flex justify-center w-80 gap-7">
                                <Select size="md" label="Select category">
                                    {options.map((option) => (
                                        <Option value={option.value}>{option.label}</Option>
                                    ))}
                                </Select>
                                <Select size="md" label="Select action">
                                {actions.map((action) => (
                                        <Option value={action.value}>{action.label}</Option>
                                    ))}
                                </Select>
                            </div>
                        </div>
                        <div className="flex w-max gap-72">
                            <Link to="/configure"><Button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center" variant="outlined">Back</Button></Link>
                            <Link to="/done"><Button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center" variant="gradient">Submit</Button></Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}