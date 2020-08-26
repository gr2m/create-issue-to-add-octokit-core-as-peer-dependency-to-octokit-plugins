# create-issue-to-add-octokit-core-as-peer-dependency-to-octokit-plugins

This is a script for [mutate-github-repositories-cli](https://github.com/gr2m/mutate-github-repositories-cli/).

It's a one-off script not useful to anyone, but I created the repository as a reference to others (and my future self).

## Usage

```
git clone https://github.com/gr2m/create-issue-to-add-octokit-core-as-peer-dependency-to-octokit-plugins.git
cd create-issue-to-add-octokit-core-as-peer-dependency-to-octokit-plugins
$ npx mutate-github-repositories-cli \
  --token 0123456789012345678901234567890123456789 \
  script.js \
  gr2m/* octokit/*
```

## Licenses

[ISC](LICENSE.md)
