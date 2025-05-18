import { usePathname } from "next/navigation"
import { ToggleButton } from "./ToggleButton"

export const Navbar = () => {
    const pathname = usePathname() ?? "";

    return (
        <nav className="w-fit flex items-center gap-1.5 rounded-3xl bg-black-opacity-40 text-white p-1.5 border border-white/20">
            <ToggleButton selected={pathname == "/"} href="/" icon="home" />
            <div className="w-[1.2px] bg-white opacity-20 h-[22px]"></div>
            <ul>
                <li>
                    <ToggleButton selected={pathname.startsWith("/about")} href="/about" title="About" icon="person" />
                </li>
            </ul>
        </nav>
    )
}