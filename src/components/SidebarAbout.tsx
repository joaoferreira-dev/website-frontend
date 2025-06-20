import { about } from "@/app/resources/content";

export const SidebarAbout = () => {
    return (
        <div className="fixed left-4 top-[40%]">
            <nav>
                <ul className="flex flex-col gap-8">
                    {about.sidebar.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <div className="w-4 h-[0.5px] bg-gray-500"></div>
                            <a href={`#${item.anchor}`}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}