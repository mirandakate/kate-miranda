import React from "react";

interface AboutMeProps {

}

const AboutMe: React.FunctionComponent<AboutMeProps> = (props) => {
    return (
        <div className="relative sm:py-24" id="about-me">
            <div aria-hidden="true" className="hidden sm:block">
                <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100" />
                <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl" />
                <svg className="absolute top-8 left-1/2 -ml-3" width={404} height={392} fill="none" viewBox="0 0 404 392">
                    <defs>
                        <pattern
                            id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width={404} height={392} fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />
                </svg>
            </div>
            <div className=" mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="relative rounded-2xl px-6 py-10 bg-emerald-500 overflow-hidden shadow-xl sm:px-12 sm:py-20">
                    <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
                        <svg
                            className="absolute inset-0 h-full w-full"
                            preserveAspectRatio="xMidYMid slice"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 1463 360"
                        >
                            <path
                                className="text-emerald-400 text-opacity-40"
                                fill="currentColor"
                                d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                            />
                            <path
                                className="text-emerald-600 text-opacity-40"
                                fill="currentColor"
                                d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                            />
                        </svg>
                    </div>
                    <div className="relative">
                        <div className="sm:text-center">
                            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                                About Me
                            </h2>
                            <p className="mt-6 mx-auto max-w-2xl text-lg font-bold text-emerald-50">
                                Hi, I&apos;m Kate Miranda, a React JS Developer with a knack of crafting a clean and efficient user interfaces. With 7 years of experience,
                                I specialize in building interactive web applications using React. I&apos;m passionate about creating seamless user experiences and writing 
                                elegant code. Let&apos;s work together to create something extraordinary!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe