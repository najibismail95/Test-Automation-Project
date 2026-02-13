const { spawn } = require('child_process');

const args = process.argv.slice(2);

// Check for -t flag and extract it
const tIndex = args.indexOf('-t');
if (tIndex !== -1 && args.length > tIndex + 1) {
    // Set the TAG environment variable for wdio.conf.ts
    process.env.TAG = args[tIndex + 1];
    // Remove -t and the tag value from args passed to wdio so it doesn't complain
    args.splice(tIndex, 2);
}

// Run WDIO
const wdio = spawn('yarn', ['wdio', 'run', './wdio.conf.ts', ...args], {
    stdio: 'inherit',
    env: process.env,
    shell: true
});

wdio.on('close', (code) => {
    process.exit(code);
});
