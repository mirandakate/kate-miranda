'use client'
import React from "react";
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    MenuIcon,
    XIcon,
} from '@heroicons/react/outline'

interface NavbarProps {

}

const solutions = [
    {
        name: 'Home',
        href: '#home',
    },
    {
        name: 'About Me',
        href: '#about-me',
    },
    {
        name: 'Skills',
        href: '#skills',
    },
    {
        name: 'Experience',
        href: '#experience',
    },
]

const Navbar: React.FunctionComponent<NavbarProps> = (props) => {
    return (
        <Popover className="relative bg-white">
            <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                    <a href="#">
                        <span className="sr-only">Workflow</span>
                        <p className="text-xl font-extrabold text-emerald-600">Kate <span className="text-slate-600">Miranda</span><span>.</span></p>
                    </a>
                </div>
                <div className="-mr-2 -my-2 md:hidden">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500">
                        <span className="sr-only">Open menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                </div>
                <Popover.Group as="nav" className="hidden md:flex space-x-10">
                    <a href="#home" className="text-base font-medium text-gray-500 hover:text-gray-900">
                        Home
                    </a>
                    <a href="#about-me" className="text-base font-medium text-gray-500 hover:text-gray-900">
                        About Me
                    </a>
                    <a href="#skills" className="text-base font-medium text-gray-500 hover:text-gray-900">
                        Skills
                    </a>
                    <a href="#experience" className="text-base font-medium text-gray-500 hover:text-gray-900">
                        Experience
                    </a>
                </Popover.Group>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel
                    focus
                    className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xl font-extrabold text-emerald-600">Kate <span className="text-slate-600">Miranda</span><span>.</span></p>
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500">
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid grid-cols-1 gap-7">
                                    {solutions.map((item: any) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                                        >
                                            <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}

export default Navbar