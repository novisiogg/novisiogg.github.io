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
      { text: "Decorator-powered logging system", applies: ["Decorators"] },
      { text: "Resource tracking context manager", applies: ["Context managers"] },
      { text: "Fault-tolerant mini agent", applies: ["Custom exception hierarchies & chaining"] },
      { text: "Large dataset streaming pipeline", applies: ["Generators & iterables"] },
      { text: "Typed FastAPI inference API", applies: ["Type hints", "Packaging", "Docker multi-stage builds"] },
      { text: "Reusable AI utility package", applies: ["Packaging", "Type hints"] },
      { text: "Test-driven evaluation suite", applies: ["Testing & mocking"] },
      { text: "Performance profiler for inference", applies: ["Profiling"] },
      { text: "Concurrent inference server", applies: ["Concurrency"] },
      { text: "Debuggable chatbot", applies: ["Concurrency", "Testing & mocking"] },
      { text: "Dockerized AI service", applies: ["Docker multi-stage builds", "Cross-platform CLI compatibility"] },
      { text: "Optimized multi-stage container build", applies: ["Docker multi-stage builds"] },
      { text: "Set up GitHub Actions: lint, pytest, build Docker image on push", applies: ["Testing & mocking", "Docker multi-stage builds"] },
      { text: "Pre-commit hooks: black, isort, mypy, trailing whitespace", applies: ["Type hints", "Testing & mocking"] }
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
      { text: "OOP chatbot or classifier", applies: ["OOP design", "Agent architecture"] },
      { text: "Persistent memory assistant", applies: ["JSON serialization/deserialization", "Memory manager pattern"] },
      { text: "MemoryManager with multiple backends", applies: ["Memory manager pattern", "Swappable storage backends"] },
      { text: "System-aware AI agent", applies: ["Separation of concerns", "Agent architecture"] },
      { text: "Selective memory reset UI", applies: ["Factory reset logic", "Memory manager pattern"] }
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
      { text: "Gradient descent visualizer (2D/3D)", applies: ["Calculus", "Optimization basics"] },
      { text: "Matrix operations from scratch (no NumPy)", applies: ["Linear algebra"] },
      { text: "Probability simulator (dice, distributions)", applies: ["Probability basics"] },
      { text: "Implement linear regression from scratch", applies: ["Linear algebra", "Calculus", "Loss functions"] },
      { text: "Visualize loss landscape for a simple model", applies: ["Loss functions", "Optimization basics"] }
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
      { text: "History-aware chatbot", applies: ["Conversation memory loops", "Local LLM via Ollama"] },
      { text: "Memory reset demo", applies: ["Decoupled memory systems", "Metadata isolation"] },
      { text: "Local Ollama agent API", applies: ["Local LLM via Ollama", "LLM environment management"] },
      { text: "Scoped memory notepad", applies: ["Metadata isolation", "Decoupled memory systems"] },
      { text: "Subprocess control agent", applies: ["os + subprocess mastery", "Process creation"] }
    ]
  },
  {
    id: 4,
    name: "Phase 4 · Frontend Engineering for AI Interfaces",
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
      { text: "Dashboard for roadmap tracker", applies: ["HTML, CSS fundamentals", "JavaScript DOM manipulation"] },
      { text: "Chat UI for AI agent", applies: ["JavaScript DOM manipulation", "Frontend-backend communication (APIs)"] },
      { text: "Visualization UI (graphs, stats)", applies: ["JavaScript DOM manipulation", "State management basics"] },
      { text: "Control panel for system monitoring", applies: ["HTML, CSS fundamentals", "Frontend-backend communication (APIs)"] },
      { text: "Interactive tool for model outputs", applies: ["JavaScript DOM manipulation", "State management basics"] }
    ]
  },
  {
    id: 5,
    name: "Phase 5 · Low‑Level Systems & Computer Architecture",
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
      { text: "Logic gate simulator", applies: ["Binary & logic gates"] },
      { text: "Binary calculator", applies: ["Binary & logic gates"] },
      { text: "Cache profiler", applies: ["CPU internals & cache locality"] },
      { text: "Pipeline demo", applies: ["Branch prediction", "CPU internals"] },
      { text: "Assembly hello world", applies: ["x86-64 assembly"] },
      { text: "Disassembly annotator", applies: ["Disassembly tools"] },
      { text: "ELF inspector", applies: ["ELF format"] },
      { text: "Memory mapper", applies: ["Virtual memory"] },
      { text: "Mini shell", applies: ["Process management", "Context switching"] },
      { text: "Syscall tracer", applies: ["Kernel vs user space"] },
      { text: "Resource monitor", applies: ["Process management"] },
      { text: "Model quantization lab", applies: ["SIMD/AVX"] }
    ]
  },
  {
    id: 6,
    name: "Phase 6 · GPU Programming & CUDA Fundamentals",
    color: "#8b5cf6",
    learnTasks: [
      "GPU vs CPU architecture: cores, memory hierarchy (global, shared, registers)",
      "CUDA programming model: kernel, grid, block, thread",
      "Memory coalescing and occupancy",
      "Tensor cores and mixed precision (FP16, BF16)",
      "Profiling with nvprof / Nsight Systems"
    ],
    projectTasks: [
      { text: "Write a simple vector addition CUDA kernel and run on free Google Colab GPU", applies: ["CUDA programming model"] },
      { text: "Measure occupancy: vary block size and measure kernel latency", applies: ["Memory coalescing and occupancy"] },
      { text: "Implement matrix multiplication: naive vs shared memory vs cuBLAS", applies: ["GPU vs CPU architecture", "CUDA programming model"] },
      { text: "Profile the Tiny GPT training/inference from Phase 12 using Nsight", applies: ["Profiling with nvprof / Nsight Systems"] },
      { text: "Quantization benchmark: compare FP32, FP16, INT8 throughput on a GPU", applies: ["Tensor cores and mixed precision"] }
    ]
  },
  {
    id: 7,
    name: "Phase 7 · Networking Protocols & API Design",
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
      { text: "HTTP client", applies: ["HTTP & REST", "Sockets & asyncio"] },
      { text: "TCP echo server", applies: ["TCP/UDP internals", "Sockets & asyncio"] },
      { text: "OSI visualizer", applies: ["OSI model"] },
      { text: "API-powered agent", applies: ["HTTP & REST", "Sockets & asyncio"] },
      { text: "Retry/backoff system", applies: ["HTTP & REST"] },
      { text: "FastAPI inference API", applies: ["HTTP & REST"] },
      { text: "Async scraper", applies: ["Sockets & asyncio"] },
      { text: "Task scheduler", applies: ["Sockets & asyncio"] },
      { text: "Concurrency benchmarks", applies: ["Sockets & asyncio"] }
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
      { text: "Voice assistant", applies: ["TTS systems", "Speech-to-text"] },
      { text: "Audio visualizer", applies: ["Audio fundamentals", "Spectrograms"] },
      { text: "Voice-controlled agent", applies: ["Speech-to-text", "Voice activity detection"] },
      { text: "Silence detector", applies: ["Voice activity detection"] },
      { text: "Spectrogram tool", applies: ["Spectrograms"] },
      { text: "Webcam image recognizer", applies: ["OpenCV basics"] }
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
      { text: "Data explorer", applies: ["Feature engineering"] },
      { text: "Dataset splitter", applies: ["Model evaluation"] },
      { text: "ML on MNIST", applies: ["Regression & classification", "Model evaluation"] },
      { text: "Confusion matrix UI", applies: ["Model evaluation"] },
      { text: "Bias detector", applies: ["Bias & fairness"] },
      { text: "Neural net from scratch", applies: ["Gradient descent"] },
      { text: "Regularization playground", applies: ["Gradient descent", "Model evaluation"] },
      { text: "Experiment tracker", applies: ["Model evaluation"] },
      { text: "Model deployment", applies: ["Model evaluation"] },
      { text: "Bias dashboard", applies: ["Bias & fairness"] }
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
      { text: "Build ETL pipeline (raw → cleaned dataset)", applies: ["ETL pipelines", "Data cleaning"] },
      { text: "Scraper + cleaner pipeline for real-world data", applies: ["ETL pipelines", "Handling missing data"] },
      { text: "Dataset versioning system (simple)", applies: ["Data validation"] },
      { text: "SQL-backed analytics dashboard", applies: ["SQL basics"] },
      { text: "Data validation tool that flags bad inputs", applies: ["Data validation", "Schema design"] }
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
      { text: "Mini experiment tracker (log runs + metrics)", applies: ["Experiment tracking", "Hyperparameter tracking"] },
      { text: "Model comparison dashboard", applies: ["Model versioning", "Comparison of model runs"] },
      { text: "Dataset version control system (basic)", applies: ["Dataset versioning"] },
      { text: "Hyperparameter tuning logger", applies: ["Hyperparameter tracking"] },
      { text: "Reproducible training pipeline", applies: ["Reproducibility in ML"] },
      { text: "DVC pipeline for a dataset → preprocessing → features", applies: ["Data versioning with DVC", "Data pipeline reproducibility"] },
      { text: "Data diff visualization: compare two versions of a CSV", applies: ["Data versioning with DVC"] }
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
      { text: "Attention implementation", applies: ["Attention mechanism"] },
      { text: "Tiny GPT", applies: ["Transformer blocks", "Autoregressive generation"] },
      { text: "Tokenizer comparison tool", applies: ["Tokenization"] },
      { text: "Attention visualizer", applies: ["Multi-head attention"] },
      { text: "LoRA fine-tuning", applies: ["Fine-tuning (LoRA)"] },
      { text: "Quantization benchmarks", applies: ["Quantization"] }
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
      { text: "Compare zero-shot vs few-shot vs CoT on a reasoning task (e.g., math word problems)", applies: ["Zero-shot, few-shot, chain-of-thought (CoT) prompting"] },
      { text: "Implement self-consistency: sample multiple CoT answers, pick majority", applies: ["Self-consistency and tree-of-thoughts"] },
      { text: "Build a prompt template manager (YAML/JSON templates, variables)", applies: ["Prompt templating and versioning"] },
      { text: "Measure token waste: reduce prompt length by 30% without accuracy loss", applies: ["Token efficiency"] },
      { text: "Structured extraction: parse unstructured text to JSON using function calling", applies: ["Structured generation with function calling / tool use"] }
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
      "Caching strategies"
    ],
    projectTasks: [
      { text: "Embedding explorer", applies: ["Embeddings"] },
      { text: "RAG chatbot", applies: ["RAG pipelines"] },
      { text: "Custom vector DB", applies: ["Vector search", "ANN indexing"] },
      { text: "Citation accuracy test: ensure every answer segment has a source chunk", applies: ["RAG pipelines"] },
      { text: "Run RAG on a QA dataset, compute answer-source intersection", applies: ["RAG pipelines", "Evaluation"] }
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
      { text: "Function calling agent", applies: ["Tool calling"] },
      { text: "ReAct system", applies: ["ReAct pattern"] },
      { text: "Task planner simulator", applies: ["State machines"] },
      { text: "Tool usage evaluator: track which tools the agent calls, success rate", applies: ["Tool calling", "Multi-agent systems"] },
      { text: "Safety guard: reject harmful tool calls (e.g., `rm -rf /`)", applies: ["Safe execution"] }
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
      { text: "Distributed job queue (producer + workers)", applies: ["Task queues", "Worker architecture"] },
      { text: "Multi-worker web scraper", applies: ["Worker architecture", "Rate limiting"] },
      { text: "Rate-limited API system with retry queue", applies: ["Rate limiting", "Dead-letter queues"] },
      { text: "Task scheduler with background workers", applies: ["Task queues", "Worker architecture"] },
      { text: "Simple load balancer simulation", applies: ["Load balancing"] },
      { text: "Deploy a FastAPI model with BentoML, add health checks", applies: ["Model serving basics"] },
      { text: "Create GitHub Actions pipeline: lint → test → build Docker → push to registry", applies: ["CI/CD for ML"] },
      { text: "Run model on local K3s/Kind (single-node Kubernetes)", applies: ["Container orchestration"] },
      { text: "Model registry experiment: log different models, rollback via CLI", applies: ["Model registries"] },
      { text: "Simulate A/B test: compare two model versions with live traffic logging", applies: ["Canary deployments"] },
      { text: "Drift detection dashboard: show input distribution shift over time", applies: ["Monitoring model drift"] },
      { text: "Job queue with dead-letter queue and retry visualizer", applies: ["Dead-letter queues"] },
      { text: "Simulate flaky workers: show backoff and eventual success/failure", applies: ["Exponential backoff with jitter"] }
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
      { text: "Secure AI service", applies: ["Docker security", "Threat modeling"] },
      { text: "Resilient API", applies: ["Retry patterns", "Input sanitization"] },
      { text: "Injection scanner", applies: ["Input sanitization"] },
      { text: "Ethics layer", applies: ["Ethics"] }
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
      { text: "Local LLM UI", applies: ["llama.cpp", "Streaming APIs"] },
      { text: "Fine-tuner", applies: ["Fine-tuning"] },
      { text: "Prompt inspector", applies: ["Prompt debugging"] },
      { text: "Model comparison tool", applies: ["Model comparison"] }
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
      { text: "Logging dashboard for AI agent actions", applies: ["Logging strategies"] },
      { text: "Latency + error tracking system", applies: ["Metrics collection"] },
      { text: "Trace visualization (request lifecycle)", applies: ["Tracing and request flow"] },
      { text: "System health monitor (CPU, memory, tasks)", applies: ["Monitoring system health"] },
      { text: "Agent decision timeline viewer", applies: ["Tracing", "OpenTelemetry"] },
      { text: "Build hallucination detector: compute similarity between answer and retrieved chunks", applies: ["Hallucination detection"] },
      { text: "Implement RAGAS-like evaluation on RAG chatbot from phase 14", applies: ["RAG evaluation"] },
      { text: "Prompt injection lab: try to extract system prompts, build a guardrail", applies: ["Prompt leakage evaluation"] },
      { text: "Create a ground truth Q&A set and run factuality benchmarks", applies: ["Factuality metrics"] },
      { text: "LLM-as-a-judge: compare two models on 50 prompts, measure agreement", applies: ["Human evaluation protocols"] },
      { text: "Trace viewer for agent decisions: show each step (thought → action → observation)", applies: ["Distributed tracing"] },
      { text: "Instrument RAG chatbot with OpenTelemetry, visualize in Jaeger", applies: ["OpenTelemetry instrumentation"] }
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
      { text: "AI journal", applies: ["Alignment", "Hybrid AI"] },
      { text: "Symbolic reasoning bot", applies: ["Hybrid AI"] },
      { text: "Chinese room sim", applies: ["Chinese Room"] },
      { text: "Debate agent", applies: ["Alignment"] }
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
      { text: "Threat model doc", applies: ["Threat modeling"] },
      { text: "Security lab setup", applies: ["Threat modeling"] },
      { text: "AES demo", applies: ["Encryption"] },
      { text: "TLS inspector", applies: ["Encryption"] },
      { text: "Password cracker", applies: ["Password hashing"] },
      { text: "SQL injection lab", applies: ["SQL injection"] },
      { text: "XSS lab", applies: ["XSS"] },
      { text: "Session hijack demo", applies: ["XSS", "Buffer overflow"] },
      { text: "Command injection scanner", applies: ["SQL injection"] },
      { text: "Phishing analyzer", applies: ["Threat modeling"] },
      { text: "Email security tool", applies: ["Encryption"] },
      { text: "ROP demo", applies: ["ROP"] },
      { text: "PrivEsc lab", applies: ["Linux privilege escalation"] },
      { text: "ARP spoof tool", applies: ["ARP spoofing"] },
      { text: "Port scanner", applies: ["Network security"] },
      { text: "Malware analysis", applies: ["Malware analysis"] },
      { text: "CTF writeups", applies: ["CTF challenges"] },
      { text: "LLM prompt injection lab: test 10 injection variants on an agent", applies: ["Prompt injection"] },
      { text: "Build a simple guardrail model that detects injection attempts", applies: ["Prompt injection"] }
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
      { text: "IAM escalation lab", applies: ["IAM policies"] },
      { text: "Policy analyzer", applies: ["IAM policies"] },
      { text: "S3 auditor", applies: ["S3 security"] },
      { text: "Secrets scanner", applies: ["Secrets management"] },
      { text: "SSRF demo", applies: ["SSRF"] },
      { text: "CloudTrail detector", applies: ["CloudTrail"] },
      { text: "Secure Terraform baseline", applies: ["Terraform security"] }
    ]
  },
  {
    id: 23,
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
      { text: "Build a RAG agent with: FastAPI, Docker, local LLM (Ollama), vector DB (Chroma)", applies: ["Review all previous phases"] },
      { text: "Add monitoring: token cost, latency, hallucination score (Phase 19 style)", applies: ["Cost estimation", "Observability"] },
      { text: "Add evaluation: run a test set, compute RAGAS metrics", applies: ["RAG evaluation"] },
      { text: "Security: prompt injection guard, API key auth, rate limiting", applies: ["Security", "Rate limiting"] },
      { text: "Frontend dashboard (Phase 4) showing agent decisions and metrics", applies: ["Frontend"] },
      { text: "Deploy on a cloud VM or free tier (Render / Fly.io), document the process", applies: ["Self‑hosting vs managed"] }
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
      const text = typeof p === 'string' ? p : p.text;
      const applies = typeof p === 'object' ? p.applies : null;
      tasks[`${phase.id}_${idx++}`] = {
        text: text,
        checked: false,
        category: "project",
        applies: applies
      };
    }
  }

  return tasks;
}