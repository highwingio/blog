workflow "Build Workflow" {
  on = "push"
  resolves = ["Blog Checks Passed"]
}

action "Install" {
  uses = "actions/npm@master"
  runs = "yarn"
  args = "install"
}

action "TS Check" {
  needs = "Install"
  uses = "actions/npm@master"
  runs = "yarn"
  args = "tsc"
}

action "Blog Checks Passed" {
  needs = "TS Check"
  uses = "Ilshidur/action-slack@master"
  secrets = ["SLACK_WEBHOOK"]
  args = ":white_check_mark: {{ GITHUB_REPOSITORY }} all checks passed."
  env = {
    SLACK_OVERRIDE_MESSAGE = "true"
  }
}

workflow "PR Branch Cleanup Workflow" {
  on = "pull_request"
  resolves = ["Branch Cleanup"]
}

action "Branch Cleanup" {
  uses = "jessfraz/branch-cleanup-action@master"
  secrets = ["GITHUB_TOKEN"]
}
