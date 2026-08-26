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
  ["AI agent", "A model, often an LLM, combined with tools and instructions to complete a bounded task.", "Building block that can, for example, screen abstracts or write analytic code.", 1],
  ["Agentic AI system", "A system that uses and coordinates several specialized agents, leverages tools, and autonomously or semi-autonomously completes multi-step tasks toward a defined objective.", "Distinguishes end-to-end workflow execution from one-time generation. Mirrors a multidisciplinary study team (e.g., trialist, statistician).", 1],
  ["Orchestration", "Control layer that organizes, sequences, and coordinates multiple agents, tools toward a goal.", "Determines whether earlier study decisions carry forward correctly.", 1],
  ["Autonomy (spectrum of autonomy)", "The degree to which a system acts without human direction, from tightly supervised to largely independent.", "Oversight should scale to the stakes of each task.", 1],
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
  ["Explainability / interpretability", "The extent to which users can understand an AI output or the factors contributing to it in the context of its intended use.", "Supports expert review of agent decisions and helps identify when seemingly plausible outputs lack sound methodological rationale.", 3]
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
