import { translations, projects, filterProjects } from "./portfolio-data.mjs";

const state = { language: "en", filter: "all" };
const projectList = document.getElementById("projectList");
const languageToggle = document.getElementById("languageToggle");
const menuToggle = document.getElementById("menuToggle");
const primaryNav = document.getElementById("primaryNav");

function textElement(tag, className, value) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  element.textContent = value;
  return element;
}

function createTagList(tags) {
  const list = document.createElement("ul");
  list.className = "tag-list";
  tags.forEach((tag) => list.append(textElement("li", "", tag)));
  return list;
}

function createProjectLink(project, copy) {
  if (project.repoUrl) {
    const link = document.createElement("a");
    link.className = "project-link";
    link.href = project.repoUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = copy.openRepository;
    return link;
  }

  if (project.liveUrl) {
    const link = document.createElement("a");
    link.className = "project-link";
    link.href = project.liveUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = copy.openLiveSystem;
    return link;
  }

  return textElement("span", "project-private", project.visibility === "client" ? copy.clientDelivery : copy.privateCode);
}

function createFeaturedProject(project, copy, language) {
  const article = document.createElement("article");
  article.className = "project-feature";

  const main = document.createElement("div");
  main.className = "project-feature-main";

  const meta = document.createElement("div");
  meta.className = "project-meta-line";
  meta.append(
    textElement("span", "project-type", project.type[language]),
    textElement("span", "project-status", project.status[language])
  );

  const title = textElement("h3", "project-title", project.title[language]);
  const summary = textElement("p", "project-summary", project.summary[language]);
  const scope = textElement("p", "project-scope", project.scope[language]);
  const highlights = document.createElement("ul");
  highlights.className = "project-highlights";
  project.highlights[language].forEach((item) => highlights.append(textElement("li", "", item)));

  const footer = document.createElement("div");
  footer.className = "project-feature-footer";
  footer.append(createTagList(project.stack), createProjectLink(project, copy));
  main.append(meta, title, summary, scope, highlights, footer);

  const visual = document.createElement("div");
  visual.className = "feature-visual";
  visual.setAttribute("aria-label", "CAD workflow from prompt to parametric model");
  visual.append(
    textElement("span", "visual-caption", language === "en" ? "Model generation path" : "Luồng tạo mô hình"),
    textElement("div", "visual-stage visual-stage-one", language === "en" ? "Engineering intent" : "Yêu cầu kỹ thuật"),
    textElement("div", "visual-connector", "↓"),
    textElement("div", "visual-stage visual-stage-two", "Feature graph"),
    textElement("div", "visual-connector", "↓"),
    textElement("div", "visual-stage visual-stage-three", language === "en" ? "Parametric model" : "Mô hình tham số")
  );
  const output = document.createElement("div");
  output.className = "visual-outputs";
  ["STEP", "STL", "DXF", "PDF"].forEach((label) => output.append(textElement("span", "", label)));
  visual.append(output);

  article.append(main, visual);
  return article;
}

function createProjectRow(project, copy, language) {
  const article = document.createElement("article");
  article.className = "project-row";

  const category = textElement("div", "project-category", project.type[language]);
  const main = document.createElement("div");
  main.className = "project-row-main";
  main.append(
    textElement("h3", "project-row-title", project.title[language]),
    textElement("p", "project-summary", project.summary[language]),
    textElement("p", "project-scope", project.scope[language])
  );

  const side = document.createElement("div");
  side.className = "project-row-side";
  side.append(
    textElement("span", "project-status", project.status[language]),
    createTagList(project.stack),
    createProjectLink(project, copy)
  );

  article.append(category, main, side);
  return article;
}

function renderProjects() {
  const copy = translations[state.language];
  const visibleProjects = filterProjects(projects, state.filter);
  const fragment = document.createDocumentFragment();

  if (visibleProjects.length === 0) {
    fragment.append(textElement("p", "empty-projects", copy.noProjects));
  } else {
    visibleProjects.forEach((project) => {
      const element = project.featured && state.filter === "all"
        ? createFeaturedProject(project, copy, state.language)
        : createProjectRow(project, copy, state.language);
      fragment.append(element);
    });
  }

  projectList.replaceChildren(fragment);
}

function setLanguage(language) {
  state.language = language;
  const copy = translations[language];
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (copy[key]) element.textContent = copy[key];
  });

  languageToggle.textContent = language === "en" ? "VI" : "EN";
  languageToggle.setAttribute("aria-label", copy.switchLanguage);
  menuToggle.setAttribute("aria-label", copy.openNavigation);
  renderProjects();
}

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    state.filter = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    renderProjects();
  });
});

languageToggle.addEventListener("click", () => {
  setLanguage(state.language === "en" ? "vi" : "en");
});

menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", translations[state.language][open ? "closeNavigation" : "openNavigation"]);
  primaryNav.classList.toggle("is-open", open);
});

primaryNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", translations[state.language].openNavigation);
    primaryNav.classList.remove("is-open");
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", translations[state.language].openNavigation);
    primaryNav.classList.remove("is-open");
  }
});

setLanguage("en");
