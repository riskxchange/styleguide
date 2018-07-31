const pkg = require('./package.json')
const request = require('request-promise')
const promisify = require('util').promisify
const cp = require('child_process')
const exec = promisify(cp.exec)

async function getCurrentBranch () {
  const {stdout, stderr} = await exec('git rev-parse --abbrev-ref HEAD')
  if (stderr) throw new Error(stderr)
  return stdout.trim()
}

async function getLastCommitMessage () {
  const {stdout, stderr} = await exec(`git log -1 --pretty=%B`)
  if (stderr) throw new Error(stderr)
  return stdout.trim()
}

async function getCommitSha () {
  const {stdout, stderr} = await exec('git rev-parse HEAD')
  if (stderr) throw new Error(stderr)
  return (stdout.trim())
}

async function hasUnstagedChanges () {
  const {stdout, stderr} = await exec('git status -s')
  if (stderr) throw new Error(stderr)
  if (stdout.trim()) return true
  return false
}

async function createTag (tag, message) {
  const cmd = `git tag -a ${tag} -m ${JSON.stringify(message)}`
  console.log(cmd)
  try {
    const {stdout, stderr} = await exec(cmd)
    if (stderr) throw new Error(stderr)
    return stdout
  } catch (err) {
    err.message = err.message + `\nTo remove the tag, run: git tag --delete ${tag}\n`
    throw err
  }
}

async function pushToMaster (tag) {
  const {stdout, stderr} = await exec(`git push origin ${tag}`)
  if (stderr.match(`error: `)) throw new Error(stderr)
  return (stderr || '').concat(stdout || '')
}

async function releaseVersion (tag, message) {
  const commitSha = await getCommitSha()
  await request({
    uri: `https://api.github.com/repos/riskxchange/styleguide/releases/tags/${tag}`,
    simple: false,
    json: true,
    headers: {
      accept: 'application/vnd.github.v3+json',
      authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`
    },
    body: {
      tag_name: tag,
      target_commitish: commitSha,
      name: `Release v${tag}`,
      body: message,
      draft: false,
      prerelease: false
    }
  })
}

async function release () {
  try {
    if (!process.env.GITHUB_ACCESS_TOKEN) {
      throw new Error('Missing env var: GITHUB_ACCESS_TOKEN')
    }
    const tag = `${pkg.version}`
    const message = await getLastCommitMessage()
    console.log(`Checking git repo`)
    const branch = await getCurrentBranch()
    if (branch !== 'master') {
      throw new Error(`Cannot release branch "${branch}", must be on master`)
    }
    if (await hasUnstagedChanges()) {
      throw new Error('Please commit all changes before releasing')
    }
    console.log(`Creating tag "${tag}"`)
    await createTag(tag, message)
    console.log(`Pushing to git (origin/master)`)
    await pushToMaster(tag)
    await releaseVersion(tag)
    console.log(`Released v${tag} to Github`)
  } catch (err) {
    throw err
  }
}

release().catch(err => {
  console.log(`\u001b[31m${err.message}\u001b[0m`)
  process.exit(1)
})
