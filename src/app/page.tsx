import { baseURL} from "@/app/resources/config";
import { home, person } from "@/app/resources/content";
import { Meta } from "@/modules";
import Container from "@/components/Container";
import { Section } from "@/components/Section";

import { Button } from "@/components/Button";
import { SocialIcons } from "@/components/SocialIcons";
import { Slider } from "@/components/Slider";
import TopScroller from "@/components/TopScroller";
import Link from "next/link";
import { CallToAction } from "@/components/CallToAction";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
  });
}

export default function Home() {
  return (
  <>
    <TopScroller />
    <Container>
      <Section>
        <div className="lg:w-10/12">
          <h1 className="text-6xl font-bold">{home.headline}</h1>
          <p className="text-gray-400 text-2xl font-medium my-5">{home.subheadline}</p>
          <div className="flex items-center gap-3">
            <Button href="/about" text={`About - ${person.name}`} avatar />
            <Button href="/assets/joao-ferreira-full-stack-developer.pdf" text="Download CV" _blank />
          </div>
          <SocialIcons className="mt-5" />
        </div>
      </Section>
    </Container>

    <Container classNames="px-10">
      <Section>
        <Slider />
      </Section>
    </Container>

    <Container>
      <Section>
        <CallToAction 
          headline={home.ctaAboutMe.headline} 
          subheadline={home.ctaAboutMe.subheadline}
          buttonText={home.ctaAboutMe.buttonText}
          buttonLink={home.ctaAboutMe.buttonLink} />
      </Section>
    </Container>
  </>
  );
}
