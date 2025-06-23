import { home } from "@/app/resources/content"
import { Button } from "./Button"

export const Slider = () => {
    return (
        <div>
            {home.slider.map((slide, index) => (
                <div key={index}>
                    <img 
                        src={slide.imageURL}
                        alt={slide.title}
                        className="w-full h-auto rounded-2xl shadow-xl shadow-gray-900/90"
                        loading="lazy"
                    />
                    <div className="w-full px-3 mt-4">
                        <div className="w-full h-[2px] bg-white"></div>
                    </div>
                    
                    <div className="mt-6 flex flex-col gap-5 items-center">
                        <div className="md:w-10/12 px-6">
                            <h2 className="text-2xl font-bold">{slide.title}</h2>
                        </div>
                        <div>
                            <Button 
                                href={slide.buttonLink}
                                text={slide.buttonText}
                                _blank
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}