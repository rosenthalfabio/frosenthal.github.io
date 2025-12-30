export const siteConfig = {
  name: "Ryan Fitzgerald",
  title: "Senior Software Engineer",
  description: "Portfolio website of Ryan Fitzgerald",
  accentColor: "#1d4ed8",
  social: {
    email: "your-email@example.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "https://x.com/rfitzio",
    github: "https://github.com/RyanFitzgerald",
  },
  aboutMe:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quos asperiores nihil consequatur tempore cupiditate architecto natus commodi corrupti quas quasi facere est, dignissimos odit nam veniam sapiente ut, vitae eligendi ipsum dolor, nostrum ullam impedit! Corrupti ratione mollitia temporibus necessitatibus, consectetur reiciendis recusandae id, dolorum quaerat, vero pariatur. Ratione!",
  skills: ["Javascript", "React", "Node.js", "Python", "AWS", "Docker"],
  projects: [
    {
      name: "AI Dev Roundup Newsletter",
      description:
        "One concise email. Five minutes. Every Tuesday. Essential AI news & trends, production-ready libraries, powerful AI tools, and real-world code examples",
      link: "https://aidevroundup.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "Chrome Extension Mastery: Build Full-Stack Extensions with React & Node.js",
      description:
        "Master the art of building production-ready, full-stack Chrome Extensions using modern web technologies and best practices",
      link: "https://fullstackextensions.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "ExtensionKit",
      description:
        "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
  ],
  experience: [
    {
      company: "Volkswagen AG",
      title: "Research Scientist",
      dateRange: "Oct 2023 - Present",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      company: "Startup Inc",
      title: "Full Stack Developer",
      dateRange: "Jun 2020 - Dec 2021",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
    {
      company: "Digital Agency",
      title: "Frontend Developer",
      dateRange: "Aug 2018 - May 2020",
      bullets: [
        "Developed responsive web applications for 20+ clients",
        "Improved site performance scores by 35% on average",
        "Introduced modern JavaScript frameworks to legacy codebases",
      ],
    },
  ],
  education: [
    {
      school: "University Name",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2014 - 2018",
      achievements: [
        "Graduated Magna Cum Laude with 3.8 GPA",
        "Dean's List all semesters",
        "President of Computer Science Club",
      ],
    },
    {
      school: "Online Platform",
      degree: "Full Stack Development Certificate",
      dateRange: "2019",
      achievements: [
        "Completed 500+ hours of coursework",
        "Built 10+ portfolio projects",
        "Specialized in React and Node.js",
      ],
    },
  ],
  papers: [
    {
      title: "Unexplored Flaws in Multiple-Choice VQA Evaluations",
      conference: "Preprint",
      location: "",
      year: "2025",
      description: "Multimodal Large Language Models (MLLMs) demonstrate strong capabilities in handling image-text inputs.\n" +
          "A common way to assess this ability is through multiple-choice Visual Question Answering (VQA). Earlier works\n" +
          "have already revealed that these benchmarks are sensitive to answer choice order, a limitation that can be\n" +
          "mitigated through careful design. Yet, we highlight additional, unexplored biases in prompt formatting that\n" +
          "question the reliability of current MLLM evaluations.\n" +
          "Specifically, we identify three key variation factors in\n" +
          "prompt formatting and analyze their impact through a\n" +
          "large-scale study involving seven MLLMs and five VQA\n" +
          "datasets, spanning 48 distinct prompt format variations. Our findings reveal that multiple-choice VQA is\n" +
          "highly sensitive to minor prompt format changes, even\n" +
          "when these changes are semantically neutral. We further demonstrate that these biases persist independently\n" +
          "of known order biases or the MLLM’s confidence in the\n" +
          "correct answer. Finally, we demonstrate that existing\n" +
          "bias mitigation strategies fail to address these newly\n" +
          "identified biases.",
      arxivId: "2511.22341",
      authors: [
        { name: "Fabio Rosenthal", highlight: true },
        { name: "Sebastian Schmidt", highlight: false },
        { name: "Thorsten Graf", highlight: false },
        { name: "Thorsten Bagdonat", highlight: false },
        { name: "Stephan Günnemann", highlight: false },
        { name: "Leo Schwinn", highlight: false }
      ],
      keywords: ["MLLMs", "Robustness", "Evaluation", "NLP", "Computer Vision"],
      projectLink: "",
      bibtex: '@article{rosenthal2025unexplored,\n' +
          '      title={Unexplored flaws in multiple-choice VQA evaluations}, \n' +
          '      author={Fabio Rosenthal and Sebastian Schmidt and Thorsten Graf and Thorsten Bagodonat and Stephan Günnemann and Leo Schwinn},\n' +
          '      year={2025},\n' +
          '      journal = {Preprint},\n' +
          '      shortjournal = {},\n' +
          '      url={https://arxiv.org/abs/2511.22341}, \n' +
          '}'
    },
    {
      title: "FOCUS: Internal MLLM Representations for Efficient Fine-Grained Visual Question Answering",
      conference: "NeurIPS 2025",
      location: "San Diego, USA",
      year: "2025",
      description: "While Multimodal Large Language Models (MLLMs) offer strong perception and\n" +
          "reasoning capabilities for image-text input, Visual Question Answering (VQA)\n" +
          "focusing on small image details still remains a challenge. Although visual cropping\n" +
          "techniques seem promising, recent approaches have several limitations: the need\n" +
          "for task-specific fine-tuning, low efficiency due to uninformed exhaustive search,\n" +
          "or incompatibility with efficient attention implementations. We address these\n" +
          "shortcomings by proposing a training-free visual cropping method, dubbed FOCUS,\n" +
          "that leverages MLLM-internal representations to guide the search for the most\n" +
          "relevant image region. This is accomplished in four steps: first, we identify the\n" +
          "target object(s) in the VQA prompt; second, we compute an object relevance map\n" +
          "using the key-value (KV) cache; third, we propose and rank relevant image regions\n" +
          "based on the map; and finally, we perform the fine-grained VQA task using the top-ranked region. As a result of this informed search strategy, FOCUS achieves strong\n" +
          "performance across four fine-grained VQA datasets and three types of MLLMs. It\n" +
          "outperforms three popular visual cropping methods in both accuracy and efficiency,\n" +
          "and matches the best-performing baseline, ZoomEye, while requiring 3–6.5×\n" +
          "less compute.",
      arxivId: "2506.21710",
      authors: [
        { name: "Liangyu Zhong*", highlight: false },
        { name: "Fabio Rosenthal*", highlight: true },
        { name: "Joachim Sicking", highlight: false },
        { name: "Fabian Hüger", highlight: false },
        { name: "Thorsten Bagdonat", highlight: false },
        { name: "Hanno Gotschalk", highlight: false },
        { name: "Leo Schwinn", highlight: false }
      ],
      keywords: ["MLLMs", "Robustness", "Test-Time Method", "NLP", "Computer Vision"],
      projectLink: "https://focus-mllm-vqa.github.io",
      bibtex:
          '@article{zhong2025focus,\n' +
          'title={{FOCUS}: Internal {MLLM} Representations for Efficient Fine-Grained Visual Question Answering}, \n' +
          'author={Liangyu Zhong and Fabio Rosenthal and Joachim Sicking and Fabian H{\\"u}ger and Thorsten Bagdonat and Hanno Gottschalk and Leo Schwinn},\n' +
          'year={2025},\n' +
          'journal = {Neural Information Processing Systems},\n' +
          'shortjournal = {NeurIPS},\n' +
          'volume = {38},\n' +
          'url={https://openreview.net/forum?id=8I1XNt70lj}, \n' +
          '}'
    }
  ]
};
