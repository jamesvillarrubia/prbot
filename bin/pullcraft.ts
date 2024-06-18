#!/usr/bin/env node

import PullCraft from '../src/index'; // Adjust the path to where your PullCraft class is located
import dotenv from 'dotenv';

import { Command } from 'commander';

// Load environment variables from a .env file if it exists
dotenv.config();
const program = new Command();

program
  .version('1.0.0')
  .arguments('[baseBranch] [compareBranch]')
  .option('-n, --base-branch <baseBranch>', 'Base branch')
  .option('-c, --compare-branch <compareBranch>', 'Compare branch')
  .option('-e, --exclusions <patterns>', 'File exclusion patterns (comma-separated)', (value) => value.split(','))
  .option('-o, --open-pr', 'Open the PR webpage automatically')
  .option('-g, --github-strategy <strategy>', 'GitHub strategy')
  .option('-p, --placeholder-pattern <pattern>', 'Placeholder Pattern')
  .option('-s, --system-prompt <prompt>', 'System Prompt')
  .option('-t, --title-template <title>', 'Title Template')
  .option('-d, --description-template <body>', 'Description Template')
  .option('--api-key <key>', 'OpenAI API Key')
  .option('--url <url>', 'OpenAI URL')
  .option('--model <model>', 'OpenAI Model')
  .option('--max-tokens <tokens>', 'OpenAI Max Tokens')
  .option('--n <n>', 'OpenAI N')
  .option('--stop <stop>', 'OpenAI Stop')
  .option('--temp <temperature>', 'OpenAI Temperature')
  .parse(process.argv);

const options = program.opts();
const baseBranch = program.args[0] || options.baseBranch;
const compareBranch = program.args[1] || options.compareBranch;

// Convert to nested option
const nested = {
  exclusions: options.exclusions,
  openPr: options.openPr,
  githubStrategy: options.githubStrategy,
  openai: {
    apiKey: options.apiKey,
    url: options.url,
    model: options.model,
    maxTokens: options.maxTokens,
    n: options.n,
    stop: options.stop,
    temp: options.temp,
    systemPrompt: options.systemPrompt,
    placeholderPattern: options.placeholderPattern,
    titleTemplate: options.titleTemplate,
    bodyTemplate: options.bodyTemplate
  }
};

const pullCraft = new PullCraft(nested);
pullCraft.createPr(baseBranch, compareBranch).catch((error: any) => {
  console.error(`Error creating PR: ${error.message}`);
  process.exit(1);
});
