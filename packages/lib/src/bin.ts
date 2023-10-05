#!/usr/bin/env tsx --watch

import { defaultValue, defineArgs, help, type } from '@rondymesquita/args';
import path from 'path';
import process from 'process';
import {
  loadConfigFromFile,
  ConfigEnv,
  createServer,
  InlineConfig,
} from 'vite';

(async () => {
  const { parseArgs, showHelp, showErrors } = defineArgs({
    name: 'splendid',
    usage: `
      splendid [options]          start dev server
      splendid build [options]    build for production
    `,
    options: {
      help: [type('boolean'), help('show help message'), defaultValue(false)],
    },
  });
  const { options, params, errors } = parseArgs(process.argv.splice(2));

  if (errors.length > 0 || params.length > 1) {
    showErrors();
    process.exit(0);
  }

  if (options.help) {
    showHelp();
    process.exit(0);
  }

  const mode = params.length === 0 ? 'development' : params[0];

  const configEnv: ConfigEnv = {
    mode,
    command: 'serve',
  };

  const configFile = path.join(process.cwd(), 'vite.config.ts');
  const config = (await loadConfigFromFile(configEnv, configFile))!;

  const { server: serverConfig } = config.config;

  if (mode === 'development') {
    const server = await createServer(serverConfig as InlineConfig);
    await server.listen();

    server.printUrls();
  } else {
  }
})();
