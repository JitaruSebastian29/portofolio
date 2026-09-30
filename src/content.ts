export const profile = {
  name: "Sebastian Jitaru",
  role: "AI Engineer",
  location: "Amsterdam, Netherlands",
  intro:
    "I build machine learning systems and the infrastructure that runs them. Currently AI Engineer at Prioticket in Amsterdam, and finishing an MSc in Artificial Intelligence at the University of Groningen.",
  email: "sjitaru29@gmail.com",
  github: "https://github.com/JitaruSebastian29",
  linkedin: "https://www.linkedin.com/in/sebastian-jitaru/",
  cv: "cv-sebastian-jitaru.pdf",
};

export type Entry = {
  title: string;
  org: string;
  place?: string;
  dates: string;
  points: string[];
};

export const experience: Entry[] = [
  {
    title: "AI Engineer",
    org: "Prioticket",
    place: "Amsterdam, Netherlands",
    dates: "Jan 2025 – Present",
    points: [
      "Built a dynamic pricing module that predicts optimal price per product per client, using an ensemble of gradient boosting and regularized regression models.",
      "Built the MLOps pipeline around it: feature and prediction distributions are monitored for drift, models are evaluated against baseline metrics, and retraining and deployment trigger on performance degradation.",
      "Built a RAG pipeline with hybrid sparse-dense retrieval, reciprocal rank fusion and cross-encoder re-ranking over a central knowledge base. Manual completion time dropped by 60%.",
      "Built a data aggregation pipeline for client onboarding: Named Entity Recognition, dense embedding similarity for fuzzy deduplication, and rule-based classification into structured client profiles.",
      "Built the edge networking layer for the company's Cloud Run services in Terraform: a global HTTPS load balancer per project, Cloud Armor restricting origin traffic to the CDN ranges, Certificate Manager for wildcard certificates with DNS authorisation, mTLS on origin pull, and DNS in Cloudflare.",
      "Wrote it as a reusable module with one configuration per environment, and gated it in GitLab CI/CD so a plan runs automatically and the apply is a manual job.",
    ],
  },
  {
    title: "Software Engineer",
    org: "Prioticket",
    place: "Amsterdam, Netherlands",
    dates: "Jul 2024 – Dec 2024",
    points: [
      "Built full-stack features across several codebases in TypeScript, Angular, NestJS and Express.js, with async and event-driven patterns, on BigQuery and CloudSQL.",
      "Designed idempotent REST APIs with error propagation and request validation, and tracked response times in NewRelic and Greylog.",
      "Ran GitLab CI/CD pipelines for reporting frontend and backend services, deploying to Google Cloud Kubernetes with automated scaling and monitoring against a 99.9% uptime SLA.",
      "Built multi-tenant reporting with role-based access control and tenant-isolated query scoping, export features for enterprise clients, and integrations with Twinfield and Oracle Finance.",
    ],
  },
  {
    title: "Cybersecurity Analyst",
    org: "Semic",
    place: "Lleida, Spain",
    dates: "Jun 2023 – Jun 2024",
    points: [
      "Deployed and maintained endpoint protection and EDR (CrowdStrike, Kaspersky, Bitdefender) for public and private sector clients, including the Hospital of Barcelona-Granollers and the Government of Andorra.",
      "Investigated security incidents, including ransomware intrusions against SMEs in Lleida. Analysed logs and network traffic, and ran internal security audits and vulnerability assessments using OWASP methodologies and Burp Suite.",
      "Administered Fortinet firewalls, ran phishing simulations against cloned web assets, deployed honeypots for threat intelligence, and managed Windows and Linux server environments.",
    ],
  },
  {
    title: "Machine Learning Engineer, Internship",
    org: "Ruxailab",
    place: "Brazil, remote",
    dates: "Feb 2024 – Jul 2024",
    points: [
      "Trained a CNN on the FER dataset for real-time video emotion analysis, reaching 72% per-frame accuracy.",
      "Built the serving infrastructure with FastAPI (async endpoints, batch inference) and Vue.js, containerised with Docker, deployed on GCP with Firebase for auth and persistence.",
    ],
  },
];

export const research: Entry[] = [
  {
    title: "Guided molecule selection using chemical foundation models for peptide design",
    org: "MSc thesis, University of Groningen and Traffikgene",
    dates: "Ongoing",
    points: [
      "Built the pipeline end to end: data preprocessing and validation, model training, and large-scale batch inference over a candidate pool of millions, in PyTorch, HuggingFace Transformers and scikit-learn on an HPC cluster (SLURM).",
      "Fine-tuned a transformer foundation model with LoRA and ran domain-adaptive continued pretraining of the encoder backbone.",
      "Built a heterogeneous prediction ensemble with out-of-distribution guardrails that flags low-confidence outputs, so downstream cost goes to high-value candidates only.",
      "Interpreted the CLM backbone with sparse autoencoders and Max Affine Spline Operator theory, to read the internal representation and classify latents into human-interpretable features.",
    ],
  },
  {
    title: "Do LLMs think too much? Adaptive chain-of-thought length reduction via latent state prediction",
    org: "University of Groningen, with Jeroen Niemendal and Viktor Vesely",
    dates: "Ongoing",
    points: [
      "A chain-of-thought length reduction method that classifies the LLM internal hidden state, so the model predicts the minimum number of tokens it needs to reach an accurate solution.",
    ],
  },
  {
    title: "Liquid ensembles: differentiable liquid democracy for decentralized model specialization",
    org: "University of Groningen, with Viktor Vesely",
    dates: "Ongoing",
    points: [
      "A deep ensemble method where models delegate decisions to other models through fully differentiable mechanisms, which lets task specialization emerge.",
      "To be submitted to Transactions on Machine Learning Research.",
    ],
  },
  {
    title: "Production ML system for issue classification",
    org: "University of Groningen",
    dates: "2025",
    points: [
      "Multi-label issue classification on a fine-tuned BERT model, with the full MLOps lifecycle: DVC for data versioning, MLflow with MinIO for experiment tracking and artifacts, Pandera for schema validation, FastAPI for async and batch serving.",
      "Full observability stack (Prometheus, Grafana, Loki, Promtail) with hybrid push and pull monitoring, predictions stored in MongoDB, all services in Docker Compose, build-test-train-deploy automated in GitLab CI/CD with remote VM deployment.",
    ],
  },
];

export const education: Entry[] = [
  {
    title: "MSc Artificial Intelligence",
    org: "University of Groningen, Netherlands",
    dates: "Sept 2024 – Aug 2026",
    points: [
      "Machine Learning and Robotics track. Deep Learning, Pattern Recognition, Natural Language Processing with Deep Learning, Deep Reinforcement Learning, Multi-Agent Reinforcement Learning, Trustworthy and Explainable AI, Computer Vision, Cognitive Robotics, Advanced Machine Learning, MLOps.",
    ],
  },
  {
    title: "BSc Computer Engineering",
    org: "University of Lleida, Spain",
    dates: "Sept 2020 – Jul 2024",
    points: [
      "Cybersecurity and Software Development track. Algorithms and Data Structures, Object Oriented Programming, Calculus, Statistics, Computer Architecture, Computational Logic, Physics, Systems Administration, Communication Networks, Software Architectures, Mobile Applications, Advanced Networks and Communications, Distributed Computing, Application Security, Cryptography.",
    ],
  },
];

export const skills: { label: string; items: string }[] = [
  {
    label: "Machine learning",
    items: "PyTorch, JAX, vLLM, scikit-learn, LangChain",
  },
  {
    label: "MLOps and infrastructure",
    items:
      "MLflow, DVC, Pandera, Docker, Kubernetes, Grafana, Prometheus, Loki, GitLab CI/CD, Vertex AI, NewRelic, Graylog",
  },
  {
    label: "Cloud and infrastructure as code",
    items:
      "Terraform, GCP (Cloud Run, Cloud Armor, Certificate Manager, global load balancing, Workload Identity Federation), AWS, Cloudflare, mTLS",
  },
  {
    label: "HPC and compute",
    items: "SLURM, CUDA, multi-node GPU cluster training",
  },
  {
    label: "Backend",
    items: "Python, TypeScript, JavaScript, NestJS, FastAPI, Express.js, Java",
  },
  {
    label: "Data and storage",
    items: "SQL, MongoDB, BigQuery, Elasticsearch, Redis, MinIO",
  },
  {
    label: "Frontend",
    items: "Angular, Next.js, React, CSS, HTML",
  },
  {
    label: "Security",
    items:
      "CrowdStrike, Kaspersky, Bitdefender, Fortinet, Burp Suite, Nmap, SIEM (Splunk, QRadar), MITRE ATT&CK, YARA, Sigma, OWASP, EDR, threat intelligence, incident response, vulnerability assessment, network administration",
  },
  {
    label: "Architecture and practice",
    items:
      "Event-driven and async architectures, stream processing, REST API design, replication and partitioning, OOP, SOLID, design patterns, Git, Linux",
  },
];

export const certificates = [
  "Cambridge Proficiency Exam (CAE) C2",
  "CrowdStrike",
  "Kaspersky",
  "Bitdefender",
  "Google Cloud",
];

export const outside: { title: string; points: string[] }[] = [
  {
    title: "Hackathons",
    points: [
      "Member of the HackEPS organisation at the University of Lleida, helping run hackathons with over 100 participants.",
      "Competed in and won hackathons including HackUPC in Barcelona and HackUDC in Galicia, where my team took the European Space Agency challenge and built a satellite data app with Flutter, InfluxDB and FastAPI.",
    ],
  },
  {
    title: "Mountains",
    points: [
      "Summited several of the highest peaks in the Pyrenees: Aneto (3404 m), Carlit (2921 m), Puigmal (2910 m), Puigpedrós (2912 m) and Pedraforca (2506 m).",
      "Bouldering indoors and rock climbing outdoors.",
    ],
  },
  {
    title: "Combat sports",
    points: ["Five years of Muay Thai, Jiu Jitsu and MMA."],
  },
];
