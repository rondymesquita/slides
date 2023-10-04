#!/usr/bin/env tsx

import {
  defaultValue,
  defineArgs,
  help,
  parseArgs,
  required,
  type,
} from '@rondymesquita/args';
import { log } from 'console';
import process from 'process';

(async () => {
  const callerPath = process.cwd();
  const callerFile = process.argv[2];
  // defineArgs()

  // const { options, params } = parseArgs(process.argv);
  const { parseArgs, showHelp, showErrors } = defineArgs({
    name: 'slides',
    usage: 'slides [options]',
    options: {
      help: [type('boolean'), help('show help message'), defaultValue(false)],
    },
  });
  const { options, params, errors } = parseArgs(process.argv.splice(2));

  if (errors.length > 0) {
    showErrors();
    process.exit(0);
  }

  if (options.help) {
    showHelp();
  }

  console.log({ options, params, errors });

  console.log('bin', {
    callerFile,
    callerPath,
  });
})();
