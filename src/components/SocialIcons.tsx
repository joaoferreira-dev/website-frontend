import Link from 'next/link';
import { Icon } from './Icon';
import { social } from "@/app/resources/content";

export const SocialIcons = () => {
    return (
        <div className="flex gap-3 items-center">
            {social.map((item) => {
                return (
                    <Link href={item.link} key={item.name} target="_blank" rel="noopener noreferrer">
                        <Icon name={item.icon} className='w-6 h-6' />
                    </Link>
                )
            })}
        </div>
    );
}