import { Icon } from "@/app/components/Icon";
import Link from "next/link";

interface ToggleButtonProps {
    selected: boolean;
    href: string;
    title?: string;
    icon: string;
}

export const ToggleButton = ({ selected, href, title, icon }: ToggleButtonProps) => {
    return (
        <Link href={href} className={`h-8 flex gap-2 items-center justify-center px-3 py-1 duration-300 rounded-2xl ${selected ? "bg-gray-800" : "hover:bg-gray-900"}`}>
            <Icon name={icon} />
            {title && <span className="text-sm">{title}</span>}
        </Link>
    )
}