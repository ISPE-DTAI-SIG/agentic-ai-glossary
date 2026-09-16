const categories = [
  "Foundational AI and machine learning",
  "Agents and agentic systems",
  "Agentic capabilities",
  "Evaluation, validation, and governance"
];

const terms = [
  ["Artificial intelligence (AI)", "Computer systems that perform tasks normally requiring human intelligence, such as interpreting text or images.", "Umbrella term that sets the scope for every tool discussed here.", 0],
  ["Machine learning (ML)", "AI that learns patterns from data rather than following explicitly programmed rules.", "Underlies most predictive and generative tools applied to real-world data.", 0],
  ["Natural language processing (NLP)", "Methods that let computers interpret and generate human language.", "Enables reading protocols, clinical notes, and literature at scale.", 0],
  ["Generative AI", "Models that produce new content (text, code, tables) in response to a prompt.", "Fast drafting, but output is prompt-bound and requires verification.", 0],
  ["Large language model (LLM)", "A generative model trained on large text corpora that predicts and produces language.", "The reasoning engine inside most current agents.", 0],
  ["Multimodal", "Able to process or generate more than one type of information, such as text, images, audio, or structured data.", "Clarifies the manuscript’s distinction between language models and broader generative AI systems that may operate across multiple data types.", 0],
  ["Prompt", "The instruction or question given to a model to elicit a response.", "Small wording changes can alter outputs; prompts should be logged.", 0],
  ["Human-in-the-loop", "A person reviews or approves each step before the workflow proceeds.", "Standard control point.", 0],
  ["Small language model (SLM)", "A smaller, more focused language model, often under 10 billion parameters, that can run on local or on-premise infrastructure.", "Enables tasks with strict data-residency or latency constraints, such as on-premise code-list expansion within a covered entity's firewall.", 0],
  ["Vision language model (VLM)", "A model that jointly processes images and text to support tasks such as captioning, extraction, or image-grounded reasoning.", "Supports extracting data from scanned case report forms or triangulating imaging results with physician notes and diagnosis codes.", 0],
  ["Prompt engineering", "The practice of designing structured instructions—including task, context, constraints, and examples—to reliably shape a model's output.", "Standardizing prompt templates across studies helps ensure the same framing (e.g., target-trial emulation) is applied consistently.", 0],
  ["System prompt", "The persistent, higher-level instruction that sets an AI agent's role, scope, and behavioral constraints before any user input arrives.", "Can encode methodological guardrails, such as forbidding an agent from proposing an estimand without a matching censoring rule.", 0],
  ["User prompt", "The specific input or question a person enters to trigger a task within the bounds set by the system prompt.", "The wording of a user prompt—population, comparator, outcome, and time window—shapes what the agent actually produces.", 0],
  ["Token", "The unit of text—often a word piece—that a model reads and generates; cost, length limits, and latency are measured in tokens.", "Long protocol PDFs or codebooks may need to be summarized or chunked to stay within an agent's token budget.", 0],
  ["Data leakage", "When information from the intended test or evaluation dataset improperly influences model development.", "Can make a phenotyping or classification model look more accurate than it will be on genuinely unseen claims or EHR data.", 0],
  ["Overfitting", "When a model learns patterns specific to its training data that do not generalize to new data.", "An overfit code list or risk model may perform well in the source database but fail when applied to a different health system.", 0],
  ["Class imbalance", "An unequal distribution of outcome categories in the training or evaluation data that can distort performance metrics.", "Common in adverse-event or rare-outcome classification, where naive accuracy can hide poor detection of the minority class.", 0],
  ["AI agent", "A model, often an LLM, combined with tools and instructions to complete a bounded task.", "Building block that can, for example, screen abstracts or write analytic code.", 1],
  ["Agentic AI system", "A system that uses and coordinates several specialized agents, leverages tools, and autonomously or semi-autonomously completes multi-step tasks toward a defined objective.", "Distinguishes end-to-end workflow execution from one-time generation. Mirrors a multidisciplinary study team (e.g., trialist, statistician).", 1],
  ["Orchestration", "Control layer that organizes, sequences, and coordinates multiple agents, tools toward a goal.", "Determines whether earlier study decisions carry forward correctly.", 1],
  ["Autonomy (spectrum of autonomy)", "The degree to which a system acts without human direction, from tightly supervised to largely independent.", "Oversight should scale to the stakes of each task.", 1],
  ["Multi-agent system", "A system of several AI agents with distinct roles, such as a statistician, a literature reviewer, and a clinician-epidemiologist, working together.", "Mirrors a multidisciplinary study team and can surface disagreements—e.g., on bias risk—for human adjudication.", 1],
  ["Workflow", "The end-to-end sequence of steps, handoffs, and checkpoints an agentic system follows to complete a task.", "Defining checkpoints between stages—design, phenotyping, cohort build, analysis—keeps errors from silently propagating downstream.", 1],
  ["Planning / re-planning", "Breaking a goal into ordered steps and revising the plan as results arrive.", "Poor planning propagates errors across study stages.", 2],
  ["Reasoning", "The judgments, inferences, and choices a model or agent makes from the information available to it.", "Methodologic errors can arise when an agent selects an inappropriate comparator, estimator, or design despite having the correct inputs.", 2],
  ["Tool use / tool call", "Invoking an external function, database, calculator, or retrieval system.", "The wrong tool or inputs can yield invalid designs or analyses.", 2],
  ["Memory", "Information a system retains and reuses across steps or sessions.", "Keeps definitions and decisions consistent across a study.", 2],
  ["Retrieval / retrieval-augmented generation (RAG)", "Architecture that retrieves external documents or data and conditions generation on retrieved context to reduce unsupported outputs.", "Grounds outputs in guidance, labels, or data dictionaries rather than model recall.", 2],
  ["Context / state", "The information a system carries forward as it works.", "Loss of state causes inconsistent exposure and outcome definitions.", 2],
  ["Feedback loop / iterative refinement", "Repeated cycles in which output is checked and improved.", "Can reduce reviewer workload while preserving accuracy—if the checks are sound.", 2],
  ["Guardrails", "Technical, procedural, or methodological constraints intended to keep AI behavior within acceptable bounds.", "Encode methodological rules (e.g., staying blinded to the exposure-outcome relationship during descriptive analysis).", 2],
  ["Semantic catalog layer", "A searchable representation of available data assets, variables, metadata, and their meaning within a data environment.", "Can help agents locate appropriate variables and understand what a healthcare database contains before analysis.", 2],
  ["Reinforcement learning from human feedback (RLHF)", "Training that uses human ratings to steer a model toward preferred behavior.", "Used to reduce recurrence of known errors.", 2],
  ["Methods module / skill", "Reusable, structured methodological guidance loaded when relevant.", "Encodes recurring checks such as time-zero alignment or comparator appropriateness.", 2],
  ["Model Context Protocol (MCP)", "An open standard that lets AI systems connect to external resources—databases, APIs, or search tools—in a consistent way.", "An MCP server exposing a common data model (e.g., OMOP, Sentinel) lets an agent query patient counts without a custom connector for every study.", 2],
  ["API (application programming interface)", "A defined set of rules that lets two software systems exchange data or requests with each other.", "Agents commonly use APIs to pull drug-label changes or push finalized results to a study registry after human sign-off.", 2],
  ["Harness engineering", "The work of wiring up an agent's execution environment—its available tools, skill files, sub-agent routing, and error handling—separate from training the underlying model.", "A well-built harness ensures a literature-review sub-agent is only invoked when the design agent flags a genuinely novel exposure-outcome pair.", 2],
  ["Knowledge base", "A curated set of sources—guidelines, protocols, regulatory documents, or internal SOPs—that an agent can consult.", "A repository of validated phenotypes with version history keeps a phenotyping agent from re-deriving code lists that already exist.", 2],
  ["Structured output", "A model response constrained to a consistent, parsable format, such as JSON, a table, or a template, rather than free text.", "Requiring a design agent to emit fixed fields—population, comparator, outcome, estimand—makes downstream QC and audit easier.", 2],
  ["Model temperature", "A sampling setting that controls how variable or deterministic a model's output is; lower values produce more consistent answers.", "Low temperature is preferred when generating reproducible code lists or specifications; higher temperature may suit early brainstorming.", 2],
  ["Deterministic setting", "A configuration—fixed model version, prompts, retrieval snapshot, and low temperature—intended to make agent output reproducible.", "Locking these settings for a regulatory-submission run supports the ability to reproduce the same study output later.", 2],
  ["Fallback model or method", "A backup model, estimator, or rule-based approach invoked automatically when the primary method fails a prespecified check.", "Routing to a rule-based code-list expansion when an LLM-based expansion fails a coverage check preserves output quality without stopping the workflow.", 2],
  ["Agentic evaluation (“evals”)", "Structured assessment of how well an agent completes a task, during development and after deployment.", "Prerequisite for trusting outputs used in decisions.", 3],
  ["Validation", "A structured process for demonstrating that an AI model, agent, workflow, or output performs adequately for its intended use.", "Validation links evaluation results to a specific context of use and is necessary before high-stakes deployment.", 3],
  ["Deterministic evaluation", "A check with a single, objectively correct answer.", "Suits objectively graded tasks (e.g., algorithm operationalization).", 3],
  ["Benchmark / benchmarking", "A comparison of system performance against a defined reference task, dataset, method, model, or human standard.", "Benchmarking makes it possible to compare agent performance across methods or versions rather than judging outputs in isolation.", 3],
  ["LLM-as-a-judge", "Using an LLM to score another agent’s output against a rubric or reference.", "Scales subjective review, but the judge model must itself be validated.", 3],
  ["Golden / reference dataset", "A curated set of correct examples representing gold-standard performance.", "Serves as the source of truth for grading agent outputs.", 3],
  ["Model confidence score", "A numerical value produced by a model or workflow to indicate how strongly it supports a prediction, classification, or decision.", "Confidence scores can help prioritize uncertain literature-screening or extraction decisions for review, but they are not themselves proof of correctness.", 3],
  ["Calibration", "A process used to align how a task is interpreted or scored across agents or reviewers before or during repeated evaluation.", "In the manuscript, small-batch calibration is a human-review practice for aligning screening or evaluation decisions; it is distinct from statistical probability calibration of an ML model.", 3],
  ["Performance threshold", "A predefined level of performance that an agent or system must meet for a specified task or use.", "Thresholds convert evaluation metrics into actionable deployment, escalation, or remediation decisions.", 3],
  ["Performance drift / regression", "A decline or change in system performance over time after deployment, including degradation associated with changing data or system behavior.", "Supports the manuscript’s recommendation for ongoing post-deployment monitoring rather than one-time validation.", 3],
  ["Negative / adversarial testing", "Deliberately probing whether a system catches known errors.", "Tests, for example, detection of immortal person-time.", 3],
  ["Trace / trace-level evaluation", "Assessment of intermediate steps, tool calls, retrieved evidence, and revisions—not just final text.", "Separates genuinely sound results from fluent-looking ones.", 3],
  ["Evidence grounding", "The extent to which an output is supported by relevant external evidence that can be traced to its source.", "Critical for verifying that study-design and evidence-synthesis decisions are not based on fabricated or misapplied information.", 3],
  ["Audit trail", "A structured record of inputs, outputs, tool calls, revisions, and human decisions.", "Supports reproducibility, transparency, and regulatory review.", 3],
  ["Risk-based evaluation", "An evaluation approach in which the depth of testing, oversight, and mitigation is scaled to the likelihood and consequence of system failure.", "The manuscript recommends matching evaluation intensity and human oversight to the scientific or regulatory harm that could result from an incorrect output.", 3],
  ["Long-horizon robustness", "The ability of a system to maintain reliable performance across long, multi-step tasks with many dependencies.", "Especially important for end-to-end studies in which early errors can accumulate or propagate.", 3],
  ["Automation bias", "The tendency to accept polished automated output without sufficient scrutiny.", "Central risk when a single AI draft replaces multidisciplinary team review.", 3],
  ["Accountability", "Clear assignment of responsibility for AI-assisted decisions, outputs, and resulting actions.", "Prevents responsibility for scientific or regulatory decisions from becoming diffuse across humans and automated systems.", 3],
  ["Explainability / interpretability", "The extent to which users can understand an AI output or the factors contributing to it in the context of its intended use.", "Supports expert review of agent decisions and helps identify when seemingly plausible outputs lack sound methodological rationale.", 3],
  ["Hallucination", "When a model produces information that sounds plausible but is false, fabricated, or unsupported by any source.", "NIST's Generative AI Profile prefers the term \"confabulation\" to avoid implying intent; either way, a fabricated citation or nonexistent ICD-10 code can silently corrupt a study.", 3],
  ["Version drift", "A change in an agent's behavior caused by an update to the underlying model, API, prompts, tools, or retrieval corpus, rather than by gradual performance decline.", "A previously validated phenotyping agent can produce a different code list after a routine model upgrade, even with no change to its instructions.", 3],
  ["Evaluation rubric", "A prespecified scoring framework—domains, criteria, scales, and adjudication rules—used to judge an AI output.", "Scoring an AI-drafted protocol on time-zero specification, eligibility, and bias control turns subjective review into a reproducible process.", 3],
  ["Executability", "Whether a proposed protocol or specification can actually be implemented against real data.", "A design that looks sound on paper can fail if its eligibility criteria don't map to fields that exist in the target data source.", 3],
  ["Error analysis", "The systematic classification of an agent's failures by source, task stage, and severity.", "Separating retrieval errors from reasoning errors from tool-call errors helps prioritize fixes by their impact on the final effect estimate.", 3],
  ["Bias", "Systematic distortion in an AI system's outputs, arising from the training data (systemic bias), the modeling or sampling process (computational/statistical bias), or how people interpret AI output (human-cognitive bias).", "Broader than a single failure mode like automation bias—checking for all three types is necessary when an agent's output feeds a causal study design.", 3],
  ["Safety review", "A risk-based review of whether an AI output could cause harm if used as-is, including unsupported causal claims or privacy issues.", "A pre-release safety review of an AI-drafted product-label-support analysis is warranted before it informs any regulatory communication.", 3],
  ["Deployment", "The operational release of an AI system for real users, including access controls, logging, and governance.", "Releasing a phenotyping agent inside a covered entity's environment with role-based access and study-level logging is a deployment decision, not just a technical one.", 3],
  ["Monitoring", "Ongoing, post-deployment tracking of an AI system's output quality, failure rates, and drift.", "Tracking agreement between a production agent and a held-out reference set over time can catch silent degradation before it affects a live study.", 3],
  ["Transparency", "The extent to which information about an AI system and its outputs is available to the people interacting with it.", "Distinct from explainability and interpretability: transparency is about what information is disclosed, not how a decision was reached or what it means for the user.", 3],
  ["Generalizability", "The degree to which a model's performance holds up when applied to a population or setting different from the one it was developed on.", "Central to pharmacoepidemiology, where a phenotyping or risk model trained in one data source is often applied to a different health system or patient population.", 3],
  ["Risk tiering", "Classifying an AI use case by its potential impact along two axes: risk to patients if the output is wrong, and impact on a regulatory decision.", "A use case affecting a late-stage trial's primary endpoint warrants far more scrutiny than one supporting an internal feasibility check, even with the same underlying model.", 3],
  ["Predetermined change control plan (PCCP)", "A prespecified plan, reviewed by a regulator, describing what future modifications will be made to an AI system and how they will be validated.", "Lets a validated phenotyping or risk-prediction agent be updated on a defined schedule without triggering a full re-review each time, provided changes stay within the plan.", 3],
  ["Frozen model", "A model whose parameters have been finally fixed, with no further adaptation to new data.", "Freezing the model used for a regulatory submission run keeps the analysis reproducible even if a newer model version becomes available later.", 3],
  ["Trustworthy AI", "An umbrella term, from NIST's AI Risk Management Framework, covering seven characteristics an AI system should have: valid and reliable, safe, secure and resilient, accountable and transparent, explainable and interpretable, privacy-enhanced, and fair with harmful bias managed.", "Provides a shared checklist for evaluating whether an agentic AI tool is appropriate to use in a regulated pharmacoepidemiology workflow, beyond just accuracy.", 3],
  ["AI lifecycle", "The full span of stages an AI system passes through—planning and design, data collection, model building, verification and validation, deployment, and ongoing monitoring.", "Treating validation and monitoring as lifecycle stages, not one-time events, matches how a study-supporting agent should actually be governed over time.", 3],
  ["Value chain / component integration risk", "Risk introduced when an agent relies on third-party models, tools, or data sources that are not fully transparent or vetted.", "An agent that calls an external code-execution tool or a vendor's retrieval service inherits that component's failure modes and update schedule.", 3]
].map(([term, definition, why, category]) => ({ term, definition, why, category: categories[category] }));

const labels = ["Foundational AI & ML", "Agents & agentic systems", "Agentic capabilities", "Evaluation, validation & governance"];
let activeCategory = "all";
let activeLetter = "all";

const searchInput = document.querySelector("#search-input");
const categoryFilters = document.querySelector("#category-filters");
const letterFilters = document.querySelector("#letter-filters");
const results = document.querySelector("#results");
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");

function button(label, value, group, active, disabled = false) {
  const el = document.createElement("button");
  el.type = "button";
  el.className = group === "category" ? "filter-button" : "letter-button";
  el.textContent = label;
  el.dataset.value = value;
  el.setAttribute("aria-pressed", String(active));
  el.disabled = disabled;
  return el;
}

function renderControls() {
  categoryFilters.replaceChildren(button("All terms", "all", "category", activeCategory === "all"));
  categories.forEach((category, index) => categoryFilters.append(button(labels[index], category, "category", activeCategory === category)));
  const initials = new Set(terms.map(({ term }) => term[0].toUpperCase()));
  letterFilters.replaceChildren(button("All", "all", "letter", activeLetter === "all"));
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach(letter => letterFilters.append(button(letter, letter, "letter", activeLetter === letter, !initials.has(letter))));
}

function render() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  const filtered = terms.filter(item => {
    const matchesQuery = !query || `${item.term} ${item.definition} ${item.why}`.toLocaleLowerCase().includes(query);
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesLetter = activeLetter === "all" || item.term.toUpperCase().startsWith(activeLetter);
    return matchesQuery && matchesCategory && matchesLetter;
  });

  results.replaceChildren(...filtered.map(item => {
    const row = document.createElement("article");
    row.className = "term-row";
    const heading = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = item.term;
    const category = document.createElement("div");
    category.className = "category";
    category.textContent = item.category;
    heading.append(title, category);
    const copy = document.createElement("div");
    const definition = document.createElement("p");
    definition.className = "definition";
    definition.textContent = item.definition;
    const why = document.createElement("p");
    why.className = "why";
    const strong = document.createElement("strong");
    strong.textContent = "Why it matters: ";
    why.append(strong, item.why);
    copy.append(definition, why);
    row.append(heading, copy);
    return row;
  }));

  emptyState.hidden = filtered.length !== 0;
  resultCount.textContent = `Showing ${filtered.length} of ${terms.length} terms`;
  renderControls();
}

categoryFilters.addEventListener("click", event => {
  const target = event.target.closest("button");
  if (!target) return;
  activeCategory = target.dataset.value;
  render();
});
letterFilters.addEventListener("click", event => {
  const target = event.target.closest("button");
  if (!target) return;
  activeLetter = target.dataset.value;
  render();
});
searchInput.addEventListener("input", render);
document.addEventListener("keydown", event => {
  if (event.key === "/" && document.activeElement !== searchInput) {
    event.preventDefault();
    searchInput.focus();
  }
});

render();
