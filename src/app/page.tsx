import { baseURL} from "@/app/resources/config";
import { home, person } from "@/app/resources/content";
import { Meta } from "@/app/modules";
import Container from "@/app/components/Container";

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
      <h1>Home</h1>
    </Container>
  );
}
