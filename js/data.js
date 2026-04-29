export const roadmapData = [
  {
    id: 0,
    name: "Phase 0 · Python Mastery & Best Practices",
    color: "#3b82f6",
    learnTasks: [
      "Decorators: closures, chaining, retry with exponential backoff",
      "Context managers: __enter__/__exit__, database pools, exception handling",
      "Custom exception hierarchies & chaining",
      "Generators & iterables: stream large CSV efficiently",
      "Metaprogramming: __init_subclass__, plugin systems",
      "Type hints: mypy strict, full typing",
      "Packaging: pyproject.toml, wheels, TestPyPI",
      "Testing & mocking: pytest, fixtures, AWS mocks",
      "Profiling: cProfile, optimize bottlenecks",
      "Concurrency: asyncio, threads, multiprocessing",
      "Docker multi-stage builds, secrets management",
      "Cross-platform CLI compatibility"
    ],
    projectTasks: [
      "Decorator-powered logging system",
      "Resource tracking context manager",
      "Fault-tolerant mini agent",
      "Large dataset streaming pipeline",
      "Typed FastAPI inference API",
      "Reusable AI utility package",
      "Test-driven evaluation suite",
      "Performance profiler for inference",
      "Concurrent inference server",
      "Debuggable chatbot",
      "Dockerized AI service",
      "Optimized multi-stage container build",
      "Set up GitHub Actions: lint, pytest, build Docker image on push",
      "Pre-commit hooks: black, isort, mypy, trailing whitespace"
    ]
  },

  {
    id: 1,
    name: "Phase 1 · OOP Foundations & Data Persistence",
    color: "#10b981",
    learnTasks: [
      "OOP design: inheritance, polymorphism",
      "Agent architecture with modular components",
      "JSON serialization/deserialization",
      "Memory manager pattern",
      "Separation of concerns",
      "Factory reset logic",
      "Swappable storage backends"
    ],
    projectTasks: [
      "OOP chatbot or classifier",
      "Persistent memory assistant",
      "MemoryManager with multiple backends",
      "System-aware AI agent",
      "Selective memory reset UI"
    ]
  },

  {
    id: 2,
    name: "Phase 2 · Math Foundations for AI",
    color: "#0ea5e9",
    learnTasks: [
      "Linear algebra: vectors, matrices, dot product, eigenvalues",
      "Probability basics: distributions, expectation, variance",
      "Bayes theorem and conditional probability",
      "Calculus: derivatives, gradients, chain rule",
      "Optimization basics: gradient descent intuition",
      "Loss functions and error surfaces"
    ],
    projectTasks: [
      "Gradient descent visualizer (2D/3D)",
      "Matrix operations from scratch (no NumPy)",
      "Probability simulator (dice, distributions)",
      "Implement linear regression from scratch",
      "Visualize loss landscape for a simple model"
    ]
  },

  {
    id: 3,
    name: "Phase 3 · System Control & The Brain",
    color: "#8b5cf6",
    learnTasks: [
      "os + subprocess mastery",
      "Process creation, stdout/stderr capture",
      "Conversation memory loops",
      "Local LLM via Ollama",
      "Decoupled memory systems",
      "Metadata isolation",
      "LLM environment management"
    ],
    projectTasks: [
      "History-aware chatbot",
      "Memory reset demo",
      "Local Ollama agent API",
      "Scoped memory notepad",
      "Subprocess control agent"
    ]
  },
  {
    id: 7,
    name: "Phase 7 · Frontend Engineering for AI Interfaces",
    color: "#38bdf8",
    learnTasks: [
      "HTML, CSS fundamentals",
      "JavaScript DOM manipulation",
      "Basic UI/UX principles",
      "State management basics",
      "Frontend-backend communication (APIs)",
      "Optional: intro to React"
    ],
    projectTasks: [
      "Dashboard for roadmap tracker",
      "Chat UI for AI agent",
      "Visualization UI (graphs, stats)",
      "Control panel for system monitoring",
      "Interactive tool for model outputs"
    ]
  },

  {
    id: 4,
    name: "Phase 4 · Low‑Level Systems & Computer Architecture",
    color: "#ef4444",
    learnTasks: [
      "Binary & logic gates",
      "CPU internals & cache locality",
      "Branch prediction",
      "SIMD/AVX",
      "x86-64 assembly",
      "Disassembly tools",
      "Compilation pipeline",
      "ELF format",
      "Virtual memory",
      "Kernel vs user space",
      "Process management",
      "Context switching"
    ],
    projectTasks: [
      "Logic gate simulator",
      "Binary calculator",
      "Cache profiler",
      "Pipeline demo",
      "Assembly hello world",
      "Disassembly annotator",
      "ELF inspector",
      "Memory mapper",
      "Mini shell",
      "Syscall tracer",
      "Resource monitor",
      "Model quantization lab"
    ]
  },

  {
    id: 5,
    name: "Phase 5 · GPU Programming & CUDA Fundamentals",
    color: "#8b5cf6",
    learnTasks: [
      "GPU vs CPU architecture: cores, memory hierarchy (global, shared, registers)",
      "CUDA programming model: kernel, grid, block, thread",
      "Memory coalescing and occupancy",
      "Tensor cores and mixed precision (FP16, BF16)",
      "Profiling with nvprof / Nsight Systems"
    ],
    projectTasks: [
      "Write a simple vector addition CUDA kernel and run on free Google Colab GPU",
      "Measure occupancy: vary block size and measure kernel latency",
      "Implement matrix multiplication: naive vs shared memory vs cuBLAS",
      "Profile the Tiny GPT training/inference from Phase 11 using Nsight",
      "Quantization benchmark: compare FP32, FP16, INT8 throughput on a GPU"
    ]
  },

  {
    id: 6,
    name: "Phase 6 · Networking Protocols & API Design",
    color: "#f97316",
    learnTasks: [
      "HTTP & REST",
      "TCP/UDP internals",
      "DNS",
      "TLS handshake",
      "Sockets & asyncio",
      "OSI model",
      "Packet analysis",
      "Traceroute implementation",
      "Subnetting"
    ],
    projectTasks: [
      "HTTP client",
      "TCP echo server",
      "OSI visualizer",
      "API-powered agent",
      "Retry/backoff system",
      "FastAPI inference API",
      "Async scraper",
      "Task scheduler",
      "Concurrency benchmarks"
    ]
  },

  {
    id: 8,
    name: "Phase 8 · Multimodal AI: Voice & Vision",
    color: "#ec489a",
    learnTasks: [
      "TTS systems",
      "Audio fundamentals",
      "Speech-to-text",
      "Voice activity detection",
      "Spectrograms",
      "OpenCV basics"
    ],
    projectTasks: [
      "Voice assistant",
      "Audio visualizer",
      "Voice-controlled agent",
      "Silence detector",
      "Spectrogram tool",
      "Webcam image recognizer"
    ]
  },

  {
    id: 9,
    name: "Phase 9 · Classical Machine Learning & Model Evaluation",
    color: "#06b6d4",
    learnTasks: [
      "Regression & classification",
      "Tree models & boosting",
      "Gradient descent",
      "Model evaluation",
      "Feature engineering",
      "Bias & fairness",
      "PCA & dimensionality reduction"
    ],
    projectTasks: [
      "Data explorer",
      "Dataset splitter",
      "ML on MNIST",
      "Confusion matrix UI",
      "Bias detector",
      "Neural net from scratch",
      "Regularization playground",
      "Experiment tracker",
      "Model deployment",
      "Bias dashboard"
    ]
  },

  {
    id: 10,
    name: "Phase 10 · Data Engineering, ETL & SQL",
    color: "#22c55e",
    learnTasks: [
      "Data cleaning and preprocessing at scale",
      "ETL pipelines (extract, transform, load)",
      "Pandas deep dive (groupby, joins, performance)",
      "SQL basics (SELECT, JOIN, aggregation)",
      "Data validation and schema design",
      "Handling missing and inconsistent data"
    ],
    projectTasks: [
      "Build ETL pipeline (raw → cleaned dataset)",
      "Scraper + cleaner pipeline for real-world data",
      "Dataset versioning system (simple)",
      "SQL-backed analytics dashboard",
      "Data validation tool that flags bad inputs"
    ]
  },

  {
    id: 11,
    name: "Phase 11 · Experiment Tracking, Versioning & DVC",
    color: "#84cc16",
    learnTasks: [
      "Experiment tracking concepts",
      "Model versioning",
      "Dataset versioning",
      "Hyperparameter tracking",
      "Reproducibility in ML",
      "Comparison of model runs",
      "Data versioning with DVC (data diff, push/pull)",
      "Data pipeline reproducibility (dvc repro)"
    ],
    projectTasks: [
      "Mini experiment tracker (log runs + metrics)",
      "Model comparison dashboard",
      "Dataset version control system (basic)",
      "Hyperparameter tuning logger",
      "Reproducible training pipeline",
      "DVC pipeline for a dataset → preprocessing → features",
      "Data diff visualization: compare two versions of a CSV"
    ]
  },

  {
    id: 12,
    name: "Phase 12 · Transformers & Attention Mechanisms",
    color: "#14b8a6",
    learnTasks: [
      "Attention mechanism",
      "Multi-head attention",
      "Positional encoding",
      "Transformer blocks",
      "Tokenization",
      "Autoregressive generation",
      "KV caching",
      "Fine-tuning (LoRA)",
      "Quantization"
    ],
    projectTasks: [
      "Attention implementation",
      "Tiny GPT",
      "Tokenizer comparison tool",
      "Attention visualizer",
      "LoRA fine-tuning",
      "Quantization benchmarks"
    ]
  },

  {
    id: 13,
    name: "Phase 13 · Prompt Engineering & Structured Generation",
    color: "#14b8a6",
    learnTasks: [
      "Zero-shot, few-shot, chain-of-thought (CoT) prompting",
      "Self-consistency and tree-of-thoughts",
      "System prompts, role prompting, and output formatting (JSON, XML)",
      "Prompt templating and versioning",
      "Token efficiency: optimizing prompts for cost/latency",
      "Structured generation with function calling / tool use"
    ],
    projectTasks: [
      "Compare zero-shot vs few-shot vs CoT on a reasoning task (e.g., math word problems)",
      "Implement self-consistency: sample multiple CoT answers, pick majority",
      "Build a prompt template manager (YAML/JSON templates, variables)",
      "Measure token waste: reduce prompt length by 30% without accuracy loss",
      "Structured extraction: parse unstructured text to JSON using function calling"
    ]
  },

  {
    id: 14,
    name: "Phase 14 · Retrieval‑Augmented Generation (RAG)",
    color: "#a855f7",
    learnTasks: [
      "Embeddings",
      "Vector search",
      "RAG pipelines",
      "ANN indexing",
      "Caching strategies",
    ],
    projectTasks: [
      "Embedding explorer",
      "RAG chatbot",
      "Custom vector DB",
      "Citation accuracy test: ensure every answer segment has a source chunk",
      "Run RAG on a QA dataset, compute answer-source intersection"
    ]
  },

  {
    id: 15,
    name: "Phase 15 · LLM Agents & Tool Use",
    color: "#f43f5e",
    learnTasks: [
      "Tool calling",
      "ReAct pattern",
      "Multi-agent systems",
      "Safe execution",
      "State machines"
    ],
    projectTasks: [
      "Function calling agent",
      "ReAct system",
      "Task planner simulator",
      "Tool usage evaluator: track which tools the agent calls, success rate",
      "Safety guard: reject harmful tool calls (e.g., `rm -rf /`)"
    ]
  },

  {
    id: 16,
    name: "Phase 16 · Distributed Systems, MLOps & Kubernetes",
    color: "#f59e0b",
    learnTasks: [
      "Task queues (Redis, basic queue systems)",
      "Worker architecture and job distribution",
      "Horizontal vs vertical scaling",
      "Rate limiting and backpressure",
      "Idempotency in distributed systems",
      "Basic load balancing concepts",
      "Model serving basics (BentoML, KServe, or FastAPI + Docker)",
      "CI/CD for ML: GitHub Actions, pre-commit hooks, model testing",
      "Container orchestration: Kubernetes basics (pods, deployments, services)",
      "Model registries (MLflow, Hugging Face Hub)",
      "Canary deployments and A/B testing for models",
      "Monitoring model drift and data drift in production",
      "Dead-letter queues and poison message handling",
      "Exponential backoff with jitter"
    ],
    projectTasks: [
      "Distributed job queue (producer + workers)",
      "Multi-worker web scraper",
      "Rate-limited API system with retry queue",
      "Task scheduler with background workers",
      "Simple load balancer simulation",
      "Deploy a FastAPI model with BentoML, add health checks",
      "Create GitHub Actions pipeline: lint → test → build Docker → push to registry",
      "Run model on local K3s/Kind (single-node Kubernetes)",
      "Model registry experiment: log different models, rollback via CLI",
      "Simulate A/B test: compare two model versions with live traffic logging",
      "Drift detection dashboard: show input distribution shift over time",
      "Job queue with dead-letter queue and retry visualizer",
      "Simulate flaky workers: show backoff and eventual success/failure"
    ]
  },

  {
    id: 17,
    name: "Phase 17 · Hardening & Secure AI Practices",
    color: "#64748b",
    learnTasks: [
      "Retry patterns",
      "Input sanitization",
      "Docker security",
      "Ethics",
      "Threat modeling"
    ],
    projectTasks: [
      "Secure AI service",
      "Resilient API",
      "Injection scanner",
      "Ethics layer"
    ]
  },

  {
    id: 18,
    name: "Phase 18 · Local LLM Deployment & Optimization",
    color: "#0284c7",
    learnTasks: [
      "llama.cpp",
      "Model comparison",
      "Fine-tuning",
      "Streaming APIs",
      "Prompt debugging"
    ],
    projectTasks: [
      "Local LLM UI",
      "Fine-tuner",
      "Prompt inspector",
      "Model comparison tool"
    ]
  },

  {
    id: 19,
    name: "Phase 19 · Observability, Evaluation & LLM Tracing",
    color: "#a78bfa",
    learnTasks: [
      "Logging strategies (structured logs)",
      "Metrics collection (latency, errors, throughput)",
      "Tracing and request flow",
      "Debugging distributed systems",
      "Monitoring system health",
      "Alerting basics",
      "Hallucination detection techniques (self-ask, embedding similarity)",
      "RAG evaluation: RAGAS metrics (faithfulness, answer relevancy, context recall)",
      "Prompt leakage and prompt injection evaluation",
      "Factuality metrics vs ground truth (BERTScore, Q&A pairs)",
      "Human evaluation protocols and LLM-as-a-judge",
      "Distributed tracing basics (spans, trace propagation)",
      "OpenTelemetry instrumentation for LLM apps"
    ],
    projectTasks: [
      "Logging dashboard for AI agent actions",
      "Latency + error tracking system",
      "Trace visualization (request lifecycle)",
      "System health monitor (CPU, memory, tasks)",
      "Agent decision timeline viewer",
      "Build hallucination detector: compute similarity between answer and retrieved chunks",
      "Implement RAGAS-like evaluation on RAG chatbot from phase 12",
      "Prompt injection lab: try to extract system prompts, build a guardrail",
      "Create a ground truth Q&A set and run factuality benchmarks",
      "LLM-as-a-judge: compare two models on 50 prompts, measure agreement",
      "Trace viewer for agent decisions: show each step (thought → action → observation)",
      "Instrument RAG chatbot with OpenTelemetry, visualize in Jaeger"
    ]
  },

  {
    id: 20,
    name: "Phase 20 · AGI Concepts & Alignment",
    color: "#6366f1",
    learnTasks: [
      "Turing test",
      "Chinese Room",
      "Hybrid AI",
      "Alignment"
    ],
    projectTasks: [
      "AI journal",
      "Symbolic reasoning bot",
      "Chinese room sim",
      "Debate agent"
    ]
  },

  {
    id: 21,
    name: "Phase 21 · Applied Security & Prompt Injection Defense",
    color: "#dc2626",
    learnTasks: [
      "Threat modeling",
      "Encryption",
      "Password hashing",
      "SQL injection",
      "XSS",
      "Buffer overflow",
      "ROP",
      "Linux privilege escalation",
      "ARP spoofing",
      "Malware analysis",
      "CTF challenges"
    ],
    projectTasks: [
      "Threat model doc",
      "Security lab setup",
      "AES demo",
      "TLS inspector",
      "Password cracker",
      "SQL injection lab",
      "XSS lab",
      "Session hijack demo",
      "Command injection scanner",
      "Phishing analyzer",
      "Email security tool",
      "ROP demo",
      "PrivEsc lab",
      "ARP spoof tool",
      "Port scanner",
      "Malware analysis",
      "CTF writeups",
      "LLM prompt injection lab: test 10 injection variants on an agent",
      "Build a simple guardrail model that detects injection attempts"
    ]
  },

  {
    id: 22,
    name: "Phase 22 · Cloud Security & Infrastructure as Code",
    color: "#2563eb",
    learnTasks: [
      "Shared responsibility",
      "IAM policies",
      "S3 security",
      "SSRF",
      "CloudTrail",
      "VPC logs",
      "Secrets management",
      "Terraform security"
    ],
    projectTasks: [
      "IAM escalation lab",
      "Policy analyzer",
      "S3 auditor",
      "Secrets scanner",
      "SSRF demo",
      "CloudTrail detector",
      "Secure Terraform baseline"
    ]
  },

  {
    id: 25,
    name: "Capstone",
    color: "#000000",
    learnTasks: [
      "Review all previous phases: Python, systems, ML, RAG, agents, MLOps, security",
      "System design for a production RAG service",
      "Cost estimation and rate limiting",
      "User feedback collection (thumbs up/down for retrieval)",
      "Self‑hosting vs managed tradeoffs"
    ],
    projectTasks: [
      "Build a RAG agent with: FastAPI, Docker, local LLM (Ollama), vector DB (Chroma)",
      "Add monitoring: token cost, latency, hallucination score (Phase 22 style)",
      "Add evaluation: run a test set, compute RAGAS metrics",
      "Security: prompt injection guard, API key auth, rate limiting",
      "Frontend dashboard (Phase 6) showing agent decisions and metrics",
      "Deploy on a cloud VM or free tier (Render / Fly.io), document the process"
    ]
  }
];





export function buildTaskStore(data) {
  const tasks = {};

  for (let phase of data) {
    let idx = 0;

    for (let l of phase.learnTasks) {
      tasks[`${phase.id}_${idx++}`] = {
        text: l,
        checked: false,
        category: "learn"
      };
    }

    for (let p of phase.projectTasks) {
      tasks[`${phase.id}_${idx++}`] = {
        text: p,
        checked: false,
        category: "project"
      };
    }
  }

  return tasks;
}