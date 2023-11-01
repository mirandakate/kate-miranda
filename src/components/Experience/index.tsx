import React from "react";

interface ExperienceProps {

}

const Experience: React.FunctionComponent<ExperienceProps> = (props) => {
    return (
        <div className="relative bg-white" id="experience">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <p className="mt-2 text-3xl text-center font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                    Experience
                </p>
                <div className="mt-12">
                    <div className="grid grid-cols-1">
                        <div className="pt-6 mb-10">
                            <div className="flow-root bg-white rounded-2xl shadow-2xl px-6 pb-8">
                                <div className="-mt-6">
                                    <div>
                                        <span className="inline-flex p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                                            <p className="text-white font-bold">White Cobalt<br /> <span className="text-xs">(Makati, Philippines)</span></p>
                                        </span>
                                        <p className="text-sm text-right font-semibold text-gray-700">React Developer (June 2021 to Present)</p>
                                    </div>
                                    <div className="text-sm font-semibold text-gray-700">
                                        <p className="mt-5">White Cobalt (via Cloud Employee) <span className="font-medium">is a digital transformation partner integrating digital technology into core areas of business.</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-6 mb-10">
                            <div className="flow-root bg-white rounded-2xl shadow-2xl px-6 pb-8">
                                <div className="-mt-6">
                                    <div>
                                        <span className="inline-flex p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                                            <p className="text-white font-bold">Damstra Technology<br /> <span className="text-xs">(Clark Freeport Zone, Philippines)</span></p>
                                        </span>
                                        <p className=" text-sm text-right font-semibold text-gray-700">Frontend Engineer (ReactJS) (January 2020 to June 2021)</p>
                                    </div>
                                    <div className="text-sm font-semibold text-gray-700">
                                        <p className="mt-5">Damstra Technology (via Shore360, Inc.) <span className="font-medium">is a longstanding leader in workforce management compliance, and safety management.</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-6 mb-10">
                            <div className="flow-root bg-white rounded-2xl shadow-2xl px-6 pb-8">
                                <div className="-mt-6">
                                    <div>
                                        <span className="inline-flex p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                                            <p className="text-white font-bold">Trackerteer Web Developer Corp.<br /> <span className="text-xs">(Clark Freeport Zone, Philippines)</span></p>
                                        </span>
                                        <p className=" text-sm text-right font-semibold text-gray-700">Frontend Developer (June 2017 to January 2020)</p>
                                    </div>
                                    <div className="text-sm font-semibold text-gray-700">
                                        <p className="mt-5">Trackerteer Web Developer Corp. <span className="font-medium">is a software and web development company delivering responsive software projects globally to customers from start-ups to establish companies.</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience