import Hero from "~/components/Hero";
import type { Route } from "./+types/home";
import Services from "~/components/Services";
import AboutMe from "~/components/AboutMe";
import Skills from "~/components/Skills";
import Portfolio from "~/components/Portfolio";
import Contact from "~/components/Contact";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "My Portfolio" },
    { name: "description", content: "Welcome to My Portfolio!" },
  ];
}

export default function Home() {
  return (
    <div>
     <Hero></Hero>
     <Services></Services>
     <AboutMe></AboutMe>
     <Skills></Skills>
     <Portfolio></Portfolio>
     <Contact></Contact>
    </div>

  );
}
