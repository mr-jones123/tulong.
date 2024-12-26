"use client";
import { Timeline } from "@/components/ui/timeline";
import CardHoverAIComponent from "./cardHoverAI";
import CardHoverGitComponent from "./cardHoverGit";
import CardHoverOnlineCoursesComponent from "./cardHoverOnlineCourses";
export default function TimelineComponent() {
  const timelineData = [
    {
      title: "Artificial Intelligence",
      content: (
        <div>
          <h1 className="text-feuGold font-light md:text-3xl text-center">
            Harness the power of AI to automate your academic life.
          </h1>
          <CardHoverAIComponent />
        </div>
      ),
    },
    {
      title: "Git and GitHub",
      content: (
        <div>
          <h1 className="text-feuGold font-light md:text-3xl text-center">
            Learn version control and collboration with Git and GitHub.
          </h1>
          <CardHoverGitComponent />
        </div>
      ),
    },
    {
      title: "Online Courses",
      content: (
        <div>
          <h1 className="text-feuGold font-light md:text-3xl text-center">
            Access free online courses and earn a certificate.
          </h1>
          <CardHoverOnlineCoursesComponent />
        </div>
      ),
    }
    
  ];
  return (
    <div className="w-full">
      <Timeline data={timelineData} />
    </div>
  );
}
