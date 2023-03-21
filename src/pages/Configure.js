import { Link } from "react-router-dom";
import { Select, Option, Input, Button, Progress } from "@material-tailwind/react";
export function Configure() {
    return (
        <>
            <div className="flex justify-center mt-64">
                <div className="w-full max-w-sm">
                    <div className="flex justify-center px-4 pt-4">
                    <Progress className="w-72 mb-6" value={25} />
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="mb-6 text-xl font-medium text-gray-900 dark:text-white">Configure your bot</h2>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div className="flex flex-col w-72 gap-6">
                                <Select size="md"label="Messanger">
                                    <Option disabled={true}>Telegram</Option>
                                </Select>
                            </div>
                        </div>
                        <div className="w-72 mb-6">
                            <Input label="Name" />
                        </div>
                        <div className="flex flex-col w-72 gap-6 mb-6">
                                <Select size="md"label="Powered by AI">
                                    <Option disabled={true}>ChatGPT</Option>
                                </Select>
                            </div>
                        <div className="flex w-max gap-36">
                            <Link to="/"><Button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center" variant="outlined">Back</Button></Link>
                            <Button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center" variant="gradient">Next</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}