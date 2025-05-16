"use client";

import { IconType, } from "react-icons";
import { iconLibrary, IconName } from "@/app/utils/icons"; 

export const Icon = ({
      name
    }: {name: string}) => {
    const IconComponent: IconType | undefined = iconLibrary[name];

    return <IconComponent />
}