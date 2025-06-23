import Link from "next/link"

interface CallToActionType {
    headline: string;
    subheadline: string;
    buttonText: string;
    buttonLink: string;
    _blank?: boolean
}

export const CallToAction = ({ headline, subheadline, buttonText, buttonLink, _blank=false }: CallToActionType) => {
    return (
        <div className="py-16 px-6 text-center bg-gray-800 rounded-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">{headline}</h2>
          <p className="text-lg mb-6 max-w-xl mx-auto">{subheadline}</p>
          <Link
            href={buttonLink}
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
            target={_blank ? "_blank" : ""}
          >{buttonText}</Link>
        </div>
    )
}