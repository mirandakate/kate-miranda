import React from "react";
import "./index.scss";

interface LogoSectionProps {

}

const LogoSection: React.FunctionComponent<LogoSectionProps> = (props) => {
    return (
        <div className="bg-gray-100" id="logo_section">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                {/* <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
                    Built from
                </p> */}
                <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                    <div className="col-span-1 flex items-center justify-center md:col-span-2 lg:col-span-1">
                        <img className="h-12 logo react-js" src="./images/react-js.png" alt="ReactJS" />
                    </div>
                    <div className="col-span-1 flex items-center justify-center md:col-span-2 lg:col-span-1">
                        <img className="h-10 logo typescript" src="./images/typescript.png" alt="Typescript" />
                    </div>
                    <div className="col-span-1 flex items-center justify-center md:col-span-2 lg:col-span-1">
                        <img className="h-10 logo next-js" src="./images/next.png" alt="NextJS" />
                    </div>
                    <div className="col-span-1 flex items-center justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                        <img className="h-10 logo javascript" src="./images/js.png" alt="Javascript" />
                    </div>
                    <div className="col-span-2 flex items-center justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                        <img className="h-6 logo tailwind" src="./images/tailwind.png" alt="Tailwind" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogoSection