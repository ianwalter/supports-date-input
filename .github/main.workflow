workflow "CI" {
  on = "push"
  resolves = ["Lint", "Test"]
}

action "Install" {
  uses = "docker://node:11-api"
  runs = "yarn"
}

action "Lint" {
  uses = "docker://node:11-api"
  needs = ["Install"]
  runs = "yarn"
  args = "lint"
}

action "Test" {
  uses = "docker://node:11-api"
  needs = ["Install"]
  runs = "yarn"
  args = "test"
}
