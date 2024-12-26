import { HoverEffect } from "../ui/card-hover-effect";

export default function CardHoverOnlineCoursesComponent() {
  const onlineCourseTools = [
    {
      title: "CS50",
      description:
        "CS50 is an introductory course to computer science made by Harvard University.",
      link: "https://git-scm.com",
    },
    {
      title: "Coursera",
      description:
        "Coursera is a platform that offers courses related to Computer Science.",
      link: "https://www.coursera.org",
    },
    {
      title: "FreeCodeCamp",
      description:
        "FreeCodeCamp offers free courses ranging from simple web development to machine learning.",
      link: "https://www.freecodecamp.org",
    },
    {
      title: "Udemy",
      description:
        "Udemy showcases high quality courses on various categories like business and software development.",
      link: "https://www.udemy.com",
    },
  ];
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={onlineCourseTools} />
    </div>
  );
}
