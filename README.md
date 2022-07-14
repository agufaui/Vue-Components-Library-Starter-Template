# Vue Components Library Starter Template

-   Opinionated Vue 3 Components Library Starter Template
-   Also with Vue 3 Composables Library support
-   A monorepo with multiple version-controlled packages
-   TypeScript support

## Features

-   💨 [Unocss](https://github.com/unocss/unocss) - The instant on-demand Atomic CSS engine.  Next generation utility css with css icons and many useful features.
-   🏛️ [Iconify](https://github.com/iconify/iconify) - Universal icon framework with 100+ icon sets, 100,000+ icons.
-   🪀 [Vitepress](https://vitepress.vuejs.org/) - Vite & Vue Powered Static Site Generator (for documents site)

## Lint

-   ⌛ [Vue Eslint TypeScript](https://github.com/vuejs/eslint-config-typescript) - Lint for typescript/javascript
-   💯 [Prettier](https://github.com/prettier/prettier) - Opinionated Code Formatter

## Test

-   ♨️ [Vitest](https://github.com/vitest-dev/vitest) - A blazing fast unit test framework powered by Vite
-   🎈 [Testing Library](https://testing-library.com/) - Simple and complete testing utilities for testing user interactions
-   🏓 [Happy DOM](https://github.com/capricorn86/happy-dom) - A JavaScript implementation of a web browser without its graphical user interface

## Auto Imports

-   🏗️ [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) - Auto import API (for javascript/typescript exports)  
-   🎯 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) - On-demand components auto importing for Vue (for vue components)

## Utilities

-   🪅 [Pug](https://pugjs.org/api/getting-started.html) - Write simpler html
-   🧩 [Ni](https://github.com/antfu/ni) - Automatically use the right package manager (npm, yarn, pnpm) based on package lock file
-   ⛸️ [Rimraf](https://github.com/isaacs/rimraf) - The UNIX command "rm -rf" for node
-   🛶 [tsx](https://github.com/esbuild-kit/tsx) - Node.js enhanced with esbuild to run TypeScript & ESM files

## CI/CD

-   🛠️ [Husky](https://github.com/typicode/husky) - Modern native Git hooks made easy
-   🤹 [CommitLint](https://commitlint.js.org/) - Helps your team adhering to a commit convention
-   🏒 [Lint Staged](https://github.com/okonet/lint-staged) - Run linters on git staged files
-   🥅 [Release Please](https://github.com/googleapis/release-please) - Generate release PRs based on the conventionalcommits.org spec, automates CHANGELOG generation, the creation of GitHub releases, and version bumps
-   🚀 [changelogithub](https://github.com/antfu/changelogithub) - Generate changelog for GitHub releases from Conventional Commits

## ToDo

- [ ] Wait for release-please to support pnpm in order for "node-workspace" plugin to work.  [This feature to be released](https://github.com/googleapis/release-please/issues/1098)


## Setup

#### clone project

```bash
git clone https://github.com/agufaui/vue-components-lib-starter-template.git
```

#### install [@antfu/Ni](https://github.com/antfu/ni)

```bash
npm i -g @antfu/ni
```

#### install dependencies:

```bash
ni
```

#### Run dev:

```bash
nr dev
```

#### Setup github access token:

GITHUB_TOKEN will not allow workflow to be triggered by another workflow, because it might cause loops, however, it kills the "auto" part of CI transit to CD.  You'll need to create a PCA ([Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)) or [Deploy keys](https://docs.github.com/en/developers/overview/managing-deploy-keys#deploy-keys) with only "public_repo" access under "Repo".  PCA can also be set on organization level, so basically go to repository or organization Settings -> Secret -> Actions, create a token named "WORKFLOW_TOKEN"

Manual operation required to prevent loops, see below Release-Please section

> [How to use Deploy Keys to trigger another workflow](https://medium.com/prompt/trigger-another-github-workflow-without-using-a-personal-access-token-f594c21373ef) or [here](https://github.community/t/github-actions-workflow-not-triggering-with-tag-push/17053/8)

- If you change `${{secrets.GITHUB_TOKEN}}` in .github/workflows/ci.yml to your PAT (personal access token), etc. `${{secrets.GH_TOKEN}}`, you can trigger workflow from another workflow, it may cause loops though, etc. trigger same workflow (trigger workflow A from workflow A)

#### Setup NPM_TOKEN for auto publishing:

Go to [NPM](https://npmjs.org), [get your token](https://docs.npmjs.com/creating-and-viewing-access-tokens), then set it at organization level or repository level.


## Project Structure

    .
    └── .github                     # Github files
        └── workflows               # Github workflow files
            └── ci.yml              # Github ci workflow
    ├── .husky                      # Husky files folder
    └── packages                    # Multiple packages folder
        ├── .vitepress              # Vitepress config and theme files (this is your documents site)
        ├── core                    # Your core vue components library source files (this is a package)
        ├── use                     # Your vue composables library source files, used by your core components library (this is a package)
        └── index.md                # Entry file for vitepress

> Your final build files will be in "dist" folder under these 3 folders:<br/>
> - .vitepress/dist (deploy to a static web server) <br/>
> - core/dist (publish to npm registry) <br/>
> - use/dist (publish to npm registry) <br/>


## Files to change before first commit:

#### .release-please-manifest.json

change all versions to 0.0.1

```
{
  "packages/core": "0.0.1",
  "packages/use": "0.0.1",
  ".": "0.0.1"
}

```

#### release-please-config.json

```
{
  "packages": {
    "packages/core": {
      "releaseType": "node",
      "draft": false,
      "prerelease": false,
      "bumpMinorPreMajor": true,
      "bumpPatchForMinorPreMajor": true,
      "changelogPath": "CHANGELOG.md",
      "versioning": "default"
    },
    "packages/use": {
      "releaseType": "node",
      "skip-github-release": true,
      "draft": false,
      "prerelease": false,
      "bumpMinorPreMajor": true,
      "bumpPatchForMinorPreMajor": true,
      "changelogPath": "CHANGELOG.md",
      "versioning": "default"
    },
    ".": {
      "releaseType": "node",
      "skip-github-release": true,
      "draft": false,
      "prerelease": false,
      "bumpMinorPreMajor": true,
      "bumpPatchForMinorPreMajor": true,
      "changelogPath": "CHANGELOG.md",
      "versioning": "default"
    }
  }
}
```

#### Remove 3 CHANGELOG.md files in "./", "./packages/core", "./packages/use", if they exit


## Commitlint

need to use single quote explicitly, double quote will cause error on exclamation mark "!":

```bash
git commit -m 'feat!: new feat'
```


## Release-please

-   Multiple version-controlled packages: [Manifest Driven release-please](https://github.com/googleapis/release-please/blob/main/docs/manifest-releaser.md)
-   Single package: [Release Please Action](https://github.com/google-github-actions/release-please-action)

> This Template uses multiple version-controlled packages, but you can convert to single package easily: <br/>
> - Remove two release-please json files mentioned above <br/>
> - Change .github/workflows/ci.yml (also make release-please update all package.json versions) <br/>
> - remove config files and index.ts in use folder <br/>
> - change scripts/publish.ts <br/>

- Release-please will auto create a commit for Pull Request to auto update changelog and version, so you need to do a "git pull" after every release.  If you forgt to pull, and there are changes in your local, conficts will occur, it's safe to merge, but will create a new merge commit.  If you don't want that merge commit to pollute commit history, you probably want to do a rebase pull with stash option (stash is to preserve uncommitted changes).  However, your local commits must be truly local, if some of them are already pushed to remote, and someone else has it, you probably don't want to do a rebase.  Here are the rebase commands:

```bash
git pull --rebase <remote-name> <branch-name> --autostash
```

if remote and local branch is same, you can just do:

```bash
git pull --rebase --autostash
```

or if you are working on a "private branch" (a branch that you never pushed, but only merge or rebase on a public branch, one that you will push), you can set git global configuration with following two commands, these configurations will affect all "git pull" though:

```bash
git config --global pull.rebase true
git config --global rebase.autostash true
```

- This template also tracks monorepo version but skip releases for it.  If pull request contains only monorepo version changes, manual operation is required to change pull request label from "autorelease: pendding" to "autorelease: tagged" after successful merge, otherwise you will get error, subsequent release-please will not run.  Change it after CI is finished running, otherwise there will be loop.

If you don't want to track monorepo version, just remove the "." {...} block in release-please-config.json, then you don't need to do manual operation.

> You can create new labels "autorelease: tagged not released" and "autorelease: published" for public clarification

- github requires single quote in workflow .yml files


## After publish to NPM, project installation:

```bash
ni @vuelib/core
```

#### Vue 3

-   in src/main.js or src/main.ts:

```
import { createApp } from "vue";
import App from "./App.vue";
import VuePlugin from "@vuelib/core";
import "@vuelib/core/dist/style.css";

createApp(App).use(VuePlugin).mount("#app");
```

#### Nuxt 3

-   create plugins folder, create a .js or .ts file, it will be automatically read and loaded by Nuxt:

```
import VuePlugin from '@vuelib/core'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VuePlugin)
})
```


## Reference

#### How to setup Auto Imports

-   unplugin-vue-components for components, UI framework components, etc.

    1. ni -D unplugin-vue-components
    2. in vite.config.js:

    ```
    import Components from "unplugin-vue-components/vite";

    export default defineConfig({
        plugins: [
            ...
            Components({
                dts: resolve(__dirname, ".vitepress/components.d.ts"),
                include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
                dirs: [
                    resolve(__dirname, ".vitepress/theme/components"),
                    resolve(__dirname, "core/components"),
                ],
            }),
        ],
    })
    ```

    3. in tsconfig.json:

    ```
    {
        "include": ["components.d.ts"],
    }
    ```

-   unplugin-auto-import for Vue API (ref, computed, etc.), composables, etc.

    1. ni -D unplugin-auto-import
    2. in vite.config.js:

    ```
    import AutoImport from "unplugin-auto-import/vite";

    export default defineConfig({
        plugins: [
            ...
            AutoImport({
                dts: true,
                include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
                dirs: [resolve(__dirname, "use")],
                imports: ["vitest", "vitepress", "vue"],
                vueTemplate: true,
            }),
        ],
    })
    ```

    3. in tsconfig.json:

    ```
    {
        "include": ["auto-imports.d.ts"],
    }
    ```


#### How to setup Prettier+eslint+typescript

1. ni -D @vue/eslint-config-typescript eslint eslint-plugin-vue eslint-config-prettier eslint-plugin-prettier prettier typescript
2. In root, create file ".eslintrc.js":

```
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "@vue/eslint-config-typescript",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
  },
};
```

3. In root, create file ".eslintignore":

```
node_modules
.dist
.git
components.d.ts
auto-imports.d.ts
```

4. In package.json, add commands:

```
"scripts": {
  ...
  "lint": "eslint --ext .js,.ts,.vue --ignore-path .eslintignore .",
  "lintfix": "nr lint --fix"
}
```

5. In your favorite IDE, eg. vscode, install or enable prettier+eslint extension


## Recommended IDE Setup

-   [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

#### Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).


## Useful Resources and Commands

#### Emoji Site

[emojipedia.org](https://emojipedia.org/)

#### Add husky git hook command example:

```
npx husky add .husky/post-merge 'pnpm install'
```

#### Add dependency to workspace package

```bash
cd "package-root-folder"
pnpm add "dependency-package-name" --workspace
```
or
```bash
pnpm add "dependency-package-name" --filter "workspace-package-name"
```

#### Line break in .md for github

-   `<br />` at end of line
-   leave two spaces at end of Line

#### Spaces in .md for github

`&nbsp;` - 1 space <br />
`&ensp;` - 2 spaces <br />
`&emsp;` - 4 spaces <br />

#### To fix typescript "Cannot find type definition file" for components error, you'll need standalone types/env.d.ts file

```
import AiButton from "./AiButton.vue"           # Cannot find type definition file for "AiButton.vue" error
```

#### To fix vitest typescript "cannot find name" error, make sure your parent folders name doesn't include 2 symbols, ie. vue-components-lib will cause this error, but vue-componentslib will not cause this error

```
describe.concurrent("AiButton Test", async () => { ... }            # Cannot find name "describe" error
```

#### Auto signoff commit

- [Use gpg key](https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key)
    If you encounter problems, check here [How to debug gpg key info](https://stackoverflow.com/questions/39494631/gpg-failed-to-sign-the-data-fatal-failed-to-write-commit-object-git-2-10-0)

- gpg-agent, edit your ~/.gnupg/gpg-agent.conf, add these three lines:

```
default-cache-ttl 34560000      # 400 days
max-cache-ttl 34560000          # 400 days
```

then run

```bash
gpgconfig --reload gpgagent     # restart gpg-agent
```

or

```bash
gpgconf --kill gpg-agent        # kill gpg-agent
gpg-agent --daemon              # start gpg-agent
```

- If you use an unattended machine, you can use gpg-preset-passphrase, but it still requires you to enter passphrase manually if gpg-agent is restarted, so it's not worth it, better off with above gpg-agent.conf option.  I'll just put steps here for reference, run below script to cache your passphrase.  You need to change $Your_Key_ID to your key id, which is last 8 characters of 2nd line when you display the whole key "gpg --list-secret-keys":

edit your ~/.gnupg/gpg-agent.conf

```
allow-preset-passphrase         # allow use of gpg-preset-passphrase
```

```bash
#!/bin/bash
GPG_PRESET_PASS="/usr/lib/gnupg/gpg-preset-passphrase"

KEY_GRIP=$(gpg --with-keygrip --list-secret-keys $Your_Key_ID | grep -Pom1 '^ *Keygrip += +\K.*')

read -s -p "[gpg-preset-passphrase]: Enter passphrase to cache into gpg-agent: " PASSPHRASE; echo

$GPG_PRESET_PASS -c $KEY_GRIP <<< $PASSPHRASE

RETVAL=$?

if [ $RETVAL = 0 ]; then
    echo "OK"
else
    echo "NOT OK"
fi
```