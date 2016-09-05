import GitRepo from 'git-repository';
import run from './run';
import { fetch } from './shared/helpers';
import config from './shared/config';
import _debug from 'debug';

const debug = _debug('root/build/deploy.js');

// TODO: Update deployment URL
// For more information visit http://gitolite.com/deploy.html
const getRemote = (slot) => ({
  name: slot || 'production',
  url: `https://example${slot ? `-${slot}` : ''}.scm.azurewebsites.net:443/example.git`,
  website: `http://example${slot ? `-${slot}` : ''}.azurewebsites.net`
});

/**
 * Deploy the contents of the `/dist` folder to a remote
 * server via Git. Example: `npm run deploy --production`
 */
export default async function deploy () {
  debug('Initiating Deploy Task');
  // By default deploy to the staging deployment slot
  const remote = getRemote(config.__PROD__ ? null : 'staging');

  /**
   * Initialize a new Git repository inside the `/build` folder
   * if it doesn't exist yet
   */
  const repo = await GitRepo.open('dist', { init: true });
  await repo.setRemote(remote.name, remote.url);

  // Fetch the remote repository if it exists
  if (await repo.hasRef(remote.url, 'master')) {
    await repo.fetch(remote.name);
    await repo.reset(`${remote.name}/master`, { hard: true });
    await repo.clean({ force: true });
  }

  /**
   * Build the project in RELEASE mode which
   * generates optimized and minimized bundles
   */
  process.argv.push('--release');
  await run(require('./dist'));

  // Push the contents of the build folder to the remote server via Git
  await repo.add('--all .');
  await repo.commit('Update');
  await repo.push(remote.name, 'master');

  // Check if the site was successfully deployed
  const response = await fetch(remote.website);
  debug(`${remote.website} -> ${response.statusCode}`);
}

