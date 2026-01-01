export const siteConfig = {
  name: "Fabio Rosenthal",
  title: "AI Researcher",
  description: "Portfolio website of Fabio Rosenthal",
  accentColor: "#1d4ed8",
  social: {
    linkedin: "https://www.linkedin.com/in/fabio-rosenthal-677869153",
    scholar: "https://scholar.google.com/citations?user=jPYk7D8AAAAJ&hl=en",
    github: "https://github.com/rosenthalf"
  },
  aboutMe:
    "I am a PhD student supervised by Prof. Stephan Günnemann in the Data Analytics and Machine Learning Group at the Technical University of Munich, in collaboration with Volkswagen AG. My research focuses on efficiency, explainability, and robustness in computer vision, large language models (LLMs), and multimodal large language models (MLLMs).",
  skills: {
    "Technical Stack": ["Python", "PyTorch", "NumPy", "Ray", "TensorBoard", "scikit-learn"],
    "Deep Learning & Research": ["Vision Transformers", "Efficiency", "Multimodal Models", "Model Robustness", "NLP", "Explainability"],
    "Scientific Foundations": ["Linear Algebra", "Probability & Statistics", "Optimization"],
    "Research Practice & Tooling": ["Experimental Design", "Reproducible Research", "Git", "Docker", "Linux", "HPC", "LaTeX", "Azure"]
  },
  projects: [
  ],
  experience: [
    {
      company: "Volkswagen AG",
      title: "Research Scientist",
      dateRange: "Oct 2023 - Present",
      workType: "Full Time",
      bullets: [
      ],
    },
    {
      company: "GfK SE",
      title: "AI Engineer",
      dateRange: "Jun 2022 - Mar 2023",
      workType: "Working Student",
      bullets: [
      ],
    },
    {
      company: "Siemens AG",
      title: "Research Scientist",
      dateRange: "Jul 2020 - Sep 2020",
      workType: "Internship",
      bullets: [
      ],
    },
  ],
  education: [
    {
      school: "Technical University of Munich",
      degree: "PhD Candidate (Dr. rer. nat)",
      dateRange: "Oct 2023 - Present",
      achievements: [
        "PhD candidate at the Data Analytics and Machine Learning (DAML) Group",
        "Under supervision of Prof. Stephan Günnemann"
      ],
    },
    {
      school: "Friedrich-Alexander University Erlangen",
      degree: "M.Sc. Artificial Intelligence",
      dateRange: "Oct 2021 - Sep 2023",
      gpa: 3.9,
      achievements: [
        "Second master's program with a strong focus on artificial intelligence, combining in-depth theoretical foundations with hands-on coursework",
        "Coursework spanning computer vision, explainability, and efficient machine learning methods",
      ],
    },
    {
      school: "Friedrich-Alexander University Erlangen",
      degree: "M.Sc. Mechatronics",
      dateRange: "Oct 2020 - Sep 2023",
      gpa: 3.7,
      achievements: [
        "Interdisciplinary master's program at the intersection of electrical engineering, control systems, and computer science",
        "Specialization in robotics, control theory, and AI-driven methods for autonomous systems",
      ],
    },
    {
      school: "Technical University of Brunswick",
      degree: "B.Sc. Mechanical Engineering",
      dateRange: "Oct 2016 - Sep 2020",
      gpa: 3.0,
      achievements: [
        "Solid engineering foundation in mechanics, mathematics, and systems thinking, with a strong focus on analytical problem-solving",
        "Early exposure to modeling, simulation, and control concepts that sparked a growing interest in data-driven and AI-based methods",
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
