"use client";

import { IconType, } from "react-icons";
import { iconLibrary } from "@/utils/icons"; 

export const Icon = ({
      name,
      className
    }: {name: string, className?: string}) => {
    const IconComponent: IconType | undefined = iconLibrary[name];

    return <IconComponent className={className} />
}