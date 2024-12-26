import { HoverEffect } from "../ui/card-hover-effect";

export default function CardHoverGitComponent() {
  const gitTools = [
    {
      title: "Git",
      description: "Git is a version control system.",
      link: "https://git-scm.com",
    },
    {
      title: "GitHub",
      description: "GitHub is a platform for version control and collaboration using Git.",
      link: "https://github.com",
    },
  ];
  return(
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={gitTools} />
    </div>
  );
}
