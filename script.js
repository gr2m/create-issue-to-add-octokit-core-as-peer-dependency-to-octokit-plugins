module.exports = createIssueToAddOctokitCoreAsPeerDependencyToOctokitPlugins;

/**
 * Create follow up issue to https://github.com/octokit/plugin-paginate-rest.js/issues/124#issuecomment-681019208
 */
async function createIssueToAddOctokitCoreAsPeerDependencyToOctokitPlugins(
  octokit,
  repository
) {
  const owner = repository.owner.login;
  const repo = repository.name;

  if (owner === "gr2m" && !/^octokit-plugin-/.test(repo)) {
    octokit.log.debug("Ignoring %s/%s - not an Octokit plugin", owner, repo);
    return;
  }
  if (owner === "octokit" && !/^plugin-/.test(repo)) {
    octokit.log.debug("Ignoring %s/%s - not an Octokit plugin", owner, repo);
    return;
  }
  // octokit/plugin-paginate-rest already has the peer dependency set
  if (["plugin-paginate-rest.js", "plugin-request-log.js"].includes(repo)) {
    octokit.log.debug("Ignoring %s/%s - issue already exists", owner, repo);
    return;
  }

  octokit.log.debug("Creating issue for %s/%s", owner, repo);

  // https://docs.github.com/en/rest/reference/issues#create-an-issue
  const { data } = await octokit.request("POST /repos/{owner}/{repo}/issues", {
    owner,
    repo,
    title: "Add @octokit/core as peerDependency",
    body: `This is a follow up issue to https://github.com/octokit/plugin-paginate-rest.js/issues/124#issuecomment-681019208
    
We need to add \`@octokit/core\` as a peerDependency to address a problem with yarn 2. It is something I planned to do anyway, but wanted to figure out automated testing to assure compatibility of the plugins with the latest \`@octokit/core\`.

I only want to define compatibility with the lowest version, in this case v3. Compare pull request https://github.com/octokit/plugin-paginate-rest.js/pull/130/files.

I would appreciate help, this is a great issue for a first-time contributor`,
    labels: ["help wanted", "good first issue"],
  });

  octokit.log.info("Issue created: %s", data.html_url);
}
