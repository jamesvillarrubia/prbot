"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodyTemplate = exports.titleTemplate = exports.prompt = void 0;
exports.prompt = `You will be asked to write a concise GitHub PR description based on a provided git diff. Analyze the code changes and provide a concise explanation of the changes, their context and why they were made. Do not treat imports and requires as changes or new features. Be very specific with the title, and be as concise as possible. Reference code, classes, functions, files, etc. as necessary to clarify the purpose of the commit or the changes involved. If the provided message is not a diff respond with an appropriate message. Don't surround your description in backticks but still write GitHub supported markdown. The answer should only include the text of the PR. Don't include starting or ending text because the response will be directly copied into the PR. Be brief and concise. Here is an example of the pull request template. Make sure to write a clear title. The title is required. Title must start with a # and end with two \\n's so that it is clearly separated from the rest of the body. Make sure that any necessary escaping is done with backticks or quotes when creating the template. It is CRITICAL that the JSON be valid.`;
exports.titleTemplate = `<:build,chore,ci,docs,feat,fix,perf,refactor,style,test>: <TITLE GOES HERE>\n Example: "fix: Adds a missing semicolon"`;
exports.bodyTemplate = `### Summary\n\n**Type:** [build,chore,ci,cicd,docs,feat,fix,perf,refactor,style,test] (Pick one only and start your PR title with it. Like 'feat: Adds a new widget')\n\n* **What kind of change does this PR introduce?** (Bug fix, feature, docs update, ...)\n\n* **What is the current behavior?** \n  * (You can also link to an open issue here)\n\n* **What is the new behavior?**\n  * (if this is a feature change)?\n\n* **Does this PR introduce a breaking change?** \n  * (What changes might users need to make in their application due to this PR?)\n\n* **Has Testing been included for this PR?\n  * description of testing if any\n\n### Other Information\n\nIf there's anything else that's important and relevant to your pull request, mention that information here. This could include benchmarks, or other information.\n----\n\nFor the list of commit types (build,chore,ci,docs,feat,fix,perf,refactor,style,test), here are explanations of each to help you identify the right tag, ordered from highest priority to lowest. If there are multiple purposes in a PR, choose the one higher on this list.\n\n1. feat: A new feature\n1. fix: A bug fix\n1. ci: Changes to our CI configuration files and scripts (like .github workflow files, release-it config, etc.)\n1. build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)\n1. perf: A code change that improves performance\n1. refactor: A code change that neither fixes a bug nor adds a feature, but reorganizes code.\n1. test: Adding missing tests or correcting existing tests\n1. style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)\n1. docs: Documentation only changes`;
