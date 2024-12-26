import { HoverEffect } from "../ui/card-hover-effect";

export default function CardHoverAIComponent() {
  const AITools = [
    {
      title: "Claude",
      description: "Claude is an AI tool built by Antrohpic.",
      link: "https://claude.ai",
    },
    {
      title: "ChatGPT",
      description: "ChatGPT is an AI chatbot made by OpenAI.",
      link: "https://chatgpt.com",
    },
    {
        title: "Kaggle",
        description: "Kaggle is a platform for data science and machine learning.",
        link: "https://www.kaggle.com",
    },
    {
        title: "v0 by Vercel",
        description: "v0 generates an entire website for you and deploy it in Vercel.",
        link: "https://v0.dev",
    },
  ];
  return(
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={AITools} />
    </div>
  );
}
