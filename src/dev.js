import * as childProcess from 'child_process';

function run() {
  const client = childProcess.spawn('vue-cli-service', ['serve']);
  client.stdout.on('data', x => process.stdout.write(x));
  client.stderr.on('data', x => process.stderr.write(x));

  const server = childProcess.spawn('nodemon', ['--exec', 'npm run babel-server'], {
    env: Object.assign({
      NODE_ENV: 'development'
    }, process.env),
    silent: false
  });
  server.stdout.on('data', x => process.stdout.write(x));
  server.stderr.on('data', x => process.stderr.write(x));

  process.on('exit', () => {
    server.kill('SIGTERM');
    client.kill('SIGTERM');
  });
}

run();