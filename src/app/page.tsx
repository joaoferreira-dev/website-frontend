import { baseURL} from "@/app/resources/config";
import { home, person } from "@/app/resources/content";
import { Meta } from "@/modules";
import Container from "@/components/Container";
import { Section } from "@/components/Section";

import tempIMG from "@/../public/images/temp.png"
import { Button } from "@/components/Button";

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
    <Container>
      <Section>
        <h1 className="text-6xl font-bold">{home.headline}</h1>
        <p className="text-gray-400 text-xl font-medium my-5">{home.subheadline}</p>
        <Button href="/about" text={`About - ${person.name}`} />
      </Section>
    </Container>
  );
}
