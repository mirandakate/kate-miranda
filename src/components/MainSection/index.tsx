import React from "react";
import './index.scss'

interface MainSectionProps {

}

const MainSection: React.FunctionComponent<MainSectionProps> = (props) => {
    return (
        <div className="relative" id="home">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden bg-white">
                    <div className="absolute inset-0">
                        <div className="image" />
                    </div>
                    <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                        <div className="wrapper py-16">
                            <h1 className="text-4xl font-extrabold mx-20 tracking-tight sm:text-5xl lg:text-6xl">
                                <span className="block text-emerald-800">Sr. React JS</span>
                                <span className="block text-emerald-600">Developer</span>
                                <a
                                    href="/images/resume.pdf"
                                    download="kate-andrea-miranda.pdf"
                                    className="mt-10 flex items-center justify-center px-4 py-3 border border-transparent font-bold text-xl rounded-md shadow-sm text-white bg-gradient-to-r from-teal-500 to-cyan-600 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                                >
                                    Download Resume
                                </a>
                            </h1>
                        </div>
                        {/* <p className="mt-6 max-w-lg mx-auto text-center text-xl text--200 sm:max-w-3xl">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                            amet fugiat veniam occaecat fugiat aliqua.
                        </p>
                        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                                <a
                                    href="#"
                                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                                >
                                    Get started
                                </a>
                                <a
                                    href="#"
                                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                                >
                                    Live demo
                                </a>
                            </div>
                        </div> */}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MainSection