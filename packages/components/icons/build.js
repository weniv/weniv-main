import run from '@weniv/esbuild-config';
import pkg from './package.json' assert { type: 'json' };

run({
  pkg,
});
