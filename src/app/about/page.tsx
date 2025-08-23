import Container from "@/components/Container";
import { Section } from "@/components/Section";
import Image from "next/image";
import { person, about } from "../resources/content";
import { SocialIcons } from "@/components/SocialIcons";
import { LanguageBadges } from "@/components/LanguageBadges";
import { SidebarAbout } from "@/components/SidebarAbout";
import TopScroller from "@/components/TopScroller";
import { CallToAction } from "@/components/CallToAction";

export default function About() {
    return (
        <>
            <TopScroller />
            <SidebarAbout />
            
            <Container>
                <Section noMargin>
                    <div className="flex flex-col md:flex-row gap-10">
                        <div className="md:w-4/12 flex flex-col items-center gap-5">
                            <Image src="/images/avatar.jpg" alt="Profile Photo" width={150} height={150} className="rounded-full border border-white/50" />
                            <LanguageBadges />
                        </div>
                        <div className="md:w-8/12">
                            <h1 className="text-6xl font-bold scroll-mt-20" id="introduction">{person.name}</h1>
                            <h2 className="text-2xl text-gray-400">{person.role}</h2>
                            <SocialIcons className="mt-5" />
                            <p className="mt-8">{about.description}</p>

                            {about.workExperience.length > 0 && (
                                <>
                                    <h2 className="mt-10 text-4xl font-bold scroll-mt-20" id="work-experience">Work Experience</h2>
                                    {about.workExperience.map((experience, index) => (
                                        <div key={index} className="mt-10">
                                            <div className="flex justify-between items-center">
                                                <h3 className="text-xl font-semibold">{experience.position}</h3>
                                                <p className="text-gray-400">{experience.startYear} - {experience.endYear}</p>
                                            </div>
                                            <h4 className="text-cyan-300 text-sm mb-4">{experience.company}</h4>
                                            {experience.description.map((desc, descIndex) => (
                                                <div key={descIndex} className="flex gap-5 mt-2">
                                                    <div className="flex items-center justify-center">
                                                        <div className="bg-cyan-400 w-2 h-2 rounded-full"></div>
                                                    </div>
                                                    <p>{desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </>
                            )}

                            {/* studies */}

                            {about.technicalSkills.length > 0 && (
                                <>
                                    <h2 className="my-10 text-4xl font-bold scroll-mt-20" id="technical-skills">Technical Skills</h2>
                                    {about.technicalSkills.map((skill, index) => (
                                        <div key={index} className="flex gap-5 mt-2">
                                            <div className="flex items-center justify-center">
                                                <div className="bg-cyan-400 w-2 h-2 rounded-full"></div>
                                            </div>
                                            <p>{skill}</p>
                                        </div>
                                    ))} 
                                </>
                            )}
                        </div>
                    </div>
                </Section>
            </Container>

            {/* <Container>
                <Section>
                    <CallToAction 
                        headline={about.ctaContactMe.headline}
                        subheadline={about.ctaContactMe.subheadline}
                        buttonText={about.ctaContactMe.buttonText}
                        buttonLink={about.ctaContactMe.buttonLink}
                        _blank />
                </Section>
            </Container> */}
        </>
    );
}