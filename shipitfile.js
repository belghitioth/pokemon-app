// shipitfile.js
module.exports = shipit => {
    // Load shipit-deploy tasks
    require('shipit-deploy')(shipit)
  
    shipit.initConfig({
      default: {
        repositoryUrl: 'git@github.com:belghitioth/pokemon-app.git'
	deployTo: '/home/ubuntu/pokemon-app',
	deleteOnRollback : false,
	keepReleases: 2
      },
      staging: {
        servers: 'ubuntu@ec2-35-180-227-120.eu-west-3.compute.amazonaws.com',
        key: '~/OthKey.pem',
      }
    });

  shipit.blTask('build',async function() {
	await shipir.remote('cd');
	shipit.remote('pwd');
	});	
  };
