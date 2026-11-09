import test from "node:test";
import assert from "node:assert/strict";
import { profile, projects, filterProjects } from "../portfolio-data.mjs";

test("project slugs are unique and every project has bilingual content", () => {
  const slugs = projects.map((project) => project.slug);
  assert.equal(new Set(slugs).size, slugs.length);

  for (const project of projects) {
    assert.ok(project.title.en && project.title.vi, project.slug + " needs both titles");
    assert.ok(project.summary.en && project.summary.vi, project.slug + " needs both summaries");
    assert.ok(project.scope.en && project.scope.vi, project.slug + " needs both descriptions");
    assert.ok(Array.isArray(project.stack) && project.stack.length > 0, project.slug + " needs a stack");
  }
});

test("private and client projects never publish a repository URL", () => {
  for (const project of projects) {
    if (project.visibility !== "public") {
      assert.equal(project.repoUrl, null, project.slug + " must not expose a non-public repository");
    }
  }
});

test("public project links point to GitHub repositories", () => {
  const publicProjects = projects.filter((project) => project.visibility === "public");
  assert.ok(publicProjects.length > 0);
  for (const project of publicProjects) {
    assert.match(project.repoUrl, /^https:\/\/github\.com\//);
  }
});

test("category filters return only matching projects", () => {
  assert.equal(filterProjects(projects, "all").length, projects.length);
  assert.ok(filterProjects(projects, "ai").every((project) => project.category === "ai"));
  assert.ok(filterProjects(projects, "enterprise").every((project) => project.category === "enterprise"));
  assert.deepEqual(filterProjects(projects, "unknown"), []);
});

test("profile contact links are present and valid", () => {
  assert.match(profile.email, /^[^@\s]+@[^@\s]+\.[^@\s]+$/);
  assert.match(profile.github, /^https:\/\/github\.com\//);
  assert.match(profile.linkedin, /^https:\/\/www\.linkedin\.com\//);
  assert.match(profile.cv, /^https:\/\//);
});
