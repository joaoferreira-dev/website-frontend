import { person } from "@/app/resources/content";

import Container from "@/components/Container";
import { Icon } from "./Icon";
import { SocialIcons } from "./SocialIcons";


export const Footer = () => {
    const CURRENT_YEAR = new Date().getFullYear();

    return (
        <footer className="mt-20 pb-4 relative bottom-0">
            <Container classNames="flex justify-between items-center">
                <div>
                    <p className="text-gray-400">© {CURRENT_YEAR} / <span className="text-white">{person.name}</span></p>
                </div>
                <SocialIcons />
            </Container>
        </footer>
    )
}