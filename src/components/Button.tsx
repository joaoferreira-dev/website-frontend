import Link from "next/link"
import { person } from "@/app/resources/content";

interface ButtonProps {
    href: string;
    text: string;
    avatar?: boolean;
}

export const Button = ({ href, text, avatar }: ButtonProps) => {
    return (
        <button className="flex items-center gap-3 font-semibold bg-black/30 hover:bg-gray-800 duration-300 px-1 py-1 rounded-3xl border border-white/20">
            <img src={person.avatar} alt="avatar" className="rounded-2xl h-8" />
            <Link href={href} className="pr-3">{text}</Link>
        </button>
    )
}