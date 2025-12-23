import Image from "next/image";
import HeroSection from "./hero/page";
import About from "./about/page";
import FeaturedStories from "./featuredStories/page";
import MultimediaPortfolio from "./multimediaPortfolio/page";
import ExperienceTimeline from "./experienceTimeline/page";
import ResearchThoughtWork from "./researchThoughtWork/page";
import WorkshopsLeadership from "./workshopsLeadership/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <About></About>
      <FeaturedStories></FeaturedStories>
      <MultimediaPortfolio></MultimediaPortfolio>
      <ExperienceTimeline></ExperienceTimeline>
      <ResearchThoughtWork></ResearchThoughtWork>
      <WorkshopsLeadership></WorkshopsLeadership>
      <Contact></Contact>
    
    </div>
  );
}
