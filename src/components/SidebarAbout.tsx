export const SidebarAbout = () => {
    return (
        <div className="fixed left-4 top-[40%]">
            <nav>
                <ul className="flex flex-col gap-8">
                    <li className="flex items-center gap-2">
                        <div className="w-4 h-[0.5px] bg-gray-500"></div>
                        <a href="#introduction">Introduction</a>
                    </li>
                    <li className="flex items-center gap-2">
                        <div className="w-4 h-[0.5px] bg-gray-500"></div>
                        <a href="#work-experience">Work Experience</a>
                    </li>
                    <li className="flex items-center gap-2">
                        <div className="w-4 h-[0.5px] bg-gray-500"></div>
                        <a href="#technical-skills">Technical Skills</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}