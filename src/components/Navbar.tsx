import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isSelected, setSelected] = useState("home");
    return (
        <div className="h-screen w-44 shadow-2xl bg-black text-white flex flex-col justify-between">
            <div className="mt-10">
                <Link  to={"/"} onClick={() => setSelected("home")} className={`block py-2.5 px-4 rounded-s cursor-pointer hover:text-green-200 transition duration-200 ${isSelected === "home" ? "bg-zinc-500" : "hover:bg-zinc-800"}`}>
                    Home
                </Link>
                <Link to={"/about"} onClick={() => setSelected("about")} className={`block py-2.5 px-4 rounded-s cursor-pointer hover:text-green-200 transition duration-200 ${isSelected === "about" ? "bg-zinc-500" : "hover:bg-zinc-800"}`}>
                    About
                </Link>
                <a onClick={() => setSelected("tree")} className={`block py-2.5 px-4 rounded-s cursor-pointer hover:text-green-200 transition duration-200 ${isSelected === "tree" ? "bg-zinc-500" : "hover:bg-zinc-800"}`}>
                    Tree
                </a>
            </div>
            <div className="mb-10">
                <a className="block cursor-pointer py-2.5 px-4 rounded-s transition duration-200 hover:bg-blue-700">
                    Github
                </a>
            </div>
        </div>
    );
};