"use client";

import { BsCloudArrowDownFill } from "react-icons/bs";
import { MdDiscount } from "react-icons/md";
import { FaCog } from "react-icons/fa";
import { FaInfinity } from "react-icons/fa";


export const featureData = [
    {
        id: 1,
        title: "Best Servers",
        icon: <BsCloudArrowDownFill className="relative text-4xl text-blue-500 z-10" />,
    },
    {
        id: 2,
        title: "Low Commission",
        icon: <MdDiscount className="relative text-4xl text-blue-500 z-10" />,
    },
    {
        id: 3,
        title: "100% Secure",
        icon: <FaCog className="relative text-4xl text-blue-500 z-10" />,
    },
    {
        id: 4,
        title: "Real Time Monitoring",
        icon: <FaInfinity className="relative text-4xl text-blue-500 z-10" />,
    },
]