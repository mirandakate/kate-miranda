import React from "react";
import {
    CloudUploadIcon,
    CogIcon,
    LockClosedIcon,
    RefreshIcon,
    ServerIcon,
    ShieldCheckIcon,
} from '@heroicons/react/outline'

interface SkillsProps {

}


const Skills: React.FunctionComponent<SkillsProps> = (props) => {
    return (
        <div className="relative bg-white py-16 sm:py-24 lg:py-32" id="skills">
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                    Skills
                </p>
                <div className="mt-12">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
                        <div className="pt-6">
                            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                                <div className="-mt-6">
                                    <div>
                                        <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                                            <p className="text-white font-bold">Primary Skills</p>
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 pt-6">
                                        <h3 className="text-lg font-medium text-gray-700 tracking-tight">React.js</h3>
                                        <h3 className="text-lg font-medium text-gray-700 tracking-tight">React Hooks</h3>
                                        <h3 className="text-lg font-medium text-gray-700 tracking-tight">TypeScript</h3>
                                        <h3 className="text-lg font-medium text-gray-700 tracking-tight">Next.js</h3>
                                        <h3 className="text-lg font-medium text-gray-700 tracking-tight">Node.js</h3>
                                        <h3 className="text-lg font-medium text-gray-700 tracking-tight">GraphQL</h3>
                                        <h3 className="text-lg font-medium text-gray-700 tracking-tight">REST APIs</h3>
                                        <h3 className="text-lg font-medium text-gray-700 tracking-tight">HTML</h3>
                                        <h3 className="text-lg font-medium text-gray-700 tracking-tight">CSS</h3>
                                        <h3 className="text-lg font-medium text-gray-700 tracking-tight">SASS</h3>
                                        <h3 className="text-lg font-medium text-gray-700 tracking-tight">Git</h3>
                                        <h3 className="text-lg font-medium text-gray-700 tracking-tight">Postman</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-6">
                            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                                <div className="-mt-6">
                                    <div>
                                        <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                                            <p className="text-white font-bold">Other Skills</p>
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 pt-6">
                                        <h3 className="text-lg font-medium text-gray-700 tracking-tight">React Native</h3>
                                        <h3 className="text-lg font-medium text-gray-700 tracking-tight">Tailwind CSS</h3>
                                        <h3 className="text-lg font-medium text-gray-700 tracking-tight">Android Studio</h3>
                                        <h3 className="text-lg font-medium text-gray-700 tracking-tight">XCode</h3>
                                        <h3 className="text-lg font-medium text-gray-700 tracking-tight">Expo</h3>
                                        <h3 className="text-lg font-medium text-gray-700 tracking-tight">Microsoft Azure</h3>
                                        <h3 className="text-lg font-medium text-gray-700 tracking-tight">Jira</h3>
                                        <h3 className="text-lg font-medium text-gray-700 tracking-tight">Asana</h3>
                                        <h3 className="text-lg font-medium text-gray-700 tracking-tight">Bitbucket</h3>
                                        <h3 className="text-lg font-medium text-gray-700 tracking-tight">Confluence</h3>
                                        <h3 className="text-lg font-medium text-gray-700 tracking-tight">Storybook</h3>
                                        <h3 className="text-lg font-medium text-gray-700 tracking-tight">Adobe Photoshop</h3>
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

export default Skills