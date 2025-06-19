import { person } from "@/app/resources/content";

export const LanguageBadges = () => {
  return <div>
    {person.languages.map((language, index) => (
        <span
        key={index}
        className="inline-block bg-gray-800 text-white text-sm px-3 py-1 rounded-full mr-2 mb-2"
        >
        {language}
        </span>
    ))}
  </div>
}