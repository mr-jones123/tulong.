export default interface Resource {
    uniqueCode: number,
    name: string,
    link: string,
    platform: string[],
    subject: string[]
  };

  export const firstYearCSResources: Resource[] = [
    {
      uniqueCode: 1001,
      name: "Learn C++ Programming for Beginners - Free 31-hour course",
      link: "https://www.freecodecamp.org/news/learn-c-with-free-31-hour-course/",
      platform: ["YouTube", "FreeCodeCamp"],
      subject: ["Computer Programming 1", "Computer Programming 2"]
    },
    {
      uniqueCode: 1002,
      name: "Codeacademy - Learn C++",
      link: "https://www.codecademy.com/learn/learn-c-plus-plus",
      platform: ["Codeacademy"],
      subject: ["Computer Programming 1", "Computer Programming 2"]
    },
    {
      uniqueCode: 1003,
      name: "NeetCode",
      link: "https://neetcode.io/",
      platform: ["LeetCode"],
      subject: ["Data Structure and Algorithms"]
    },
  ]

  export const secondYearCSResources: Resource[] = [
    {
      uniqueCode: 2001,
      name: "Java Full Course - Bro Code",
      link: "https://youtu.be/xk4_1vDrzzo?si=1tV-0Wh_btYNk4R6",
      platform: ["YouTube Video", "Online Course"],
      subject: ["Object-Oriented Programming", "Mobile Programming"]
    },
    {
      uniqueCode: 2002,
      name: "Database Management Systems",
      link: "https://youtube.com/playlist?list=PLBlnK6fEyqRi_CUQ-FXxgzKQ1dwr_ZJWZ&si=4hBp3qzh76N9POCY",
      platform: ["YouTube Video"],
      subject: ["Information Management"]
    },
    {
      uniqueCode: 2003,
      name: "Introduction to Graph Theory: A Computer Science Perspective ",
      link: "https://youtu.be/LFKZLXVO-Dg?si=1IFPKnAq9GLDUUCR",
      platform: ["YouTube Video"],
      subject: ["Algorithms"]
    },
    {
      uniqueCode: 2004,
      name: "Traveling Salesman Problem",
      link: "https://www.math.uwaterloo.ca/tsp/",
      platform: ["Website"],
      subject: ["Algorithms"]
    },
    {
      uniqueCode: 2005,
      name: "Official PHP Documentation",
      link: "https://www.php.net/manual/en/",
      platform: ["Website"],
      subject: ["Applications Development and Emerging Technologies"]
    },
    {
      uniqueCode: 2006,
      name: "Python Crash Course: A hands-on, project-based, introduction to programming.",
      link: "https://codelikechamp.com/wp-content/uploads/python-crash-course-3rd-edition-pdf.pdf",
      platform: ["PDF"],
      subject: ["CS Specialization 1 (Structured Programming Language)"]
    },
    {
      uniqueCode: 2007,
      name: "Automata Tutorial.",
      link: "https://www.geeksforgeeks.org/theory-of-computation-automata-tutorials/",
      platform: ["Website"],
      subject: ["Automata Theory"]
    },
    
    
    
  ]

  export const thirdYearCSResources: Resource[] = [
    {
      uniqueCode: 1,
      name: "Learn C++ Programming for Beginners - Free 31-hour course",
      link: "https://www.freecodecamp.org/news/learn-c-with-free-31-hour-course/",
      platform: ["YouTube Video", "Online Course"],
      subject: ["Software Engineering", "Data Science"]
    },
    {
      uniqueCode: 2,
      name: "Codeacademy - Learn C++",
      link: "https://www.codecademy.com/learn/learn-c-plus-plus",
      platform: ["Online Course"],
      subject: ["Software Engineering", "Data Science"]
    },
    {
      uniqueCode: 3,
      name: "Learn C++ ",
      link: "https://www.codecademy.com/learn/learn-c-plus-plus",
      platform: ["Website"],
      subject: ["Software Engineering", "Data Science"]
    },
  ]