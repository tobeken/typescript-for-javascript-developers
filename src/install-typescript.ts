let message: string = Last login: Wed Jun 16 17:43:36 on ttys000
/Users/tobiokaken/.zshrc:source:1: no such file or directory: /Users/tobiokaken/anaconda3/etc/profile.d/conda.sh
tobiokaken@tobiokakennoAir ~ % code ./
zsh: command not found: code
tobiokaken@tobiokakennoAir ~ % git clone https://github.com/tobeken/typescript-for-javascript-developers.git
Cloning into 'typescript-for-javascript-developers'...
remote: Enumerating objects: 3, done.
remote: Counting objects: 100% (3/3), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), done.
tobiokaken@tobiokakennoAir ~ % cd typescript-for-javascript-developers/
tobiokaken@tobiokakennoAir typescript-for-javascript-developers % git branch
* main
tobiokaken@tobiokakennoAir typescript-for-javascript-developers % git checkout -b create-package-jason
Switched to a new branch 'create-package-jason'
tobiokaken@tobiokakennoAir typescript-for-javascript-developers % git branch
* create-package-jason
  main
tobiokaken@tobiokakennoAir typescript-for-javascript-developers % npm init -y
Wrote to /Users/tobiokaken/typescript-for-javascript-developers/package.json:

{
  "name": "typescript-for-javascript-developers",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/tobeken/typescript-for-javascript-developers.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/tobeken/typescript-for-javascript-developers/issues"
  },
  "homepage": "https://github.com/tobeken/typescript-for-javascript-developers#readme"
}


tobiokaken@tobiokakennoAir typescript-for-javascript-developers % git status
On branch create-package-jason
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	package.json

nothing added to commit but untracked files present (use "git add" to track)
tobiokaken@tobiokakennoAir typescript-for-javascript-developers % git add .
tobiokaken@tobiokakennoAir typescript-for-javascript-developers % git st
git: 'st' is not a git command. See 'git --help'.

The most similar commands are
	status
	reset
	stage
	stash
tobiokaken@tobiokakennoAir typescript-for-javascript-developers % git status
On branch create-package-jason
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	new file:   package.json

tobiokaken@tobiokakennoAir typescript-for-javascript-developers % git commit -m "create package.json"
[create-package-jason 0788f02] create package.json
 1 file changed, 20 insertions(+)
 create mode 100644 package.json
tobiokaken@tobiokakennoAir typescript-for-javascript-developers % git push -u origin HEAD
Username for 'https://github.com': tobeken
Password for 'https://tobeken@github.com': 
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 547 bytes | 547.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0)
remote: 
remote: Create a pull request for 'create-package-jason' on GitHub by visiting:
remote:      https://github.com/tobeken/typescript-for-javascript-developers/pull/new/create-package-jason
remote: 
To https://github.com/tobeken/typescript-for-javascript-developers.git
 * [new branch]      HEAD -> create-package-jason
Branch 'create-package-jason' set up to track remote branch 'create-package-jason' from 'origin'.
tobiokaken@tobiokakennoAir typescript-for-javascript-developers % git status
On branch create-package-jason
Your branch is up to date with 'origin/create-package-jason'.

nothing to commit, working tree clean
tobiokaken@tobiokakennoAir typescript-for-javascript-developers % git branch
* create-package-jason
  main
tobiokaken@tobiokakennoAir typescript-for-javascript-developers % main
zsh: command not found: main
tobiokaken@tobiokakennoAir typescript-for-javascript-developers % cd typescript-for-javascript-developers
cd: no such file or directory: typescript-for-javascript-developers
tobiokaken@tobiokakennoAir typescript-for-javascript-developers %  cd typescript-for-javascript-developers/
cd: no such file or directory: typescript-for-javascript-developers/
tobiokaken@tobiokakennoAir typescript-for-javascript-developers % git branch
* create-package-jason
  main
tobiokaken@tobiokakennoAir typescript-for-javascript-developers % /
zsh: permission denied: /
tobiokaken@tobiokakennoAir typescript-for-javascript-developers % git beanch
git: 'beanch' is not a git command. See 'git --help'.

The most similar command is
	branch
tobiokaken@tobiokakennoAir typescript-for-javascript-developers % git branch
* create-package-jason
  main
tobiokaken@tobiokakennoAir typescript-for-javascript-developers % cd..
zsh: command not found: cd..
tobiokaken@tobiokakennoAir typescript-for-javascript-developers % git checkout -
Switched to branch 'main'
Your branch is up to date with 'origin/main'.
tobiokaken@tobiokakennoAir typescript-for-javascript-developers % git branch
  create-package-jason
* main
tobiokaken@tobiokakennoAir typescript-for-javascript-developers % git merge -
Updating 74de81a..0788f02
Fast-forward
 package.json | 20 ++++++++++++++++++++
 1 file changed, 20 insertions(+)
 create mode 100644 package.json
tobiokaken@tobiokakennoAir typescript-for-javascript-developers % git push origin HEAD
Total 0 (delta 0), reused 0 (delta 0)
To https://github.com/tobeken/typescript-for-javascript-developers.git
   74de81a..0788f02  HEAD -> main
tobiokaken@tobiokakennoAir typescript-for-javascript-developers % sudo npm install -g npm
Password:
/usr/local/bin/npm -> /usr/local/lib/node_modules/npm/bin/npm-cli.js
/usr/local/bin/npx -> /usr/local/lib/node_modules/npm/bin/npx-cli.js
+ npm@7.17.0
added 62 packages from 25 contributors, removed 242 packages and updated 193 packages in 7.545s
tobiokaken@tobiokakennoAir typescript-for-javascript-developers % npm -v
7.17.0
tobiokaken@tobiokakennoAir typescript-for-javascript-developers % git checkout -b install-typescript
Switched to a new branch 'install-typescript'
tobiokaken@tobiokakennoAir typescript-for-javascript-developers % git branch
  create-package-jason
* install-typescript
  main
tobiokaken@tobiokakennoAir typescript-for-javascript-developers % npm info typescript

typescript@4.3.3 | Apache-2.0 | deps: none | versions: 1984
TypeScript is a language for application scale JavaScript development
https://www.typescriptlang.org/

keywords: TypeScript, Microsoft, compiler, language, javascript

bin: tsc, tsserver

dist
.tarball: https://registry.npmjs.org/typescript/-/typescript-4.3.3.tgz
.shasum: 5401db69bd3203daf1851a1a74d199cb3112c11a
.integrity: sha512-rUvLW0WtF7PF2b9yenwWUi9Da9euvDRhmH7BLyBG4DCFfOJ850LGNknmRpp8Z8kXNUPObdZQEfKOiHtXuQHHKA==
.unpackedSize: 60.7 MB

maintainers:
- typescript-bot <typescript@microsoft.com>
- weswigham <wwigham@gmail.com>
- sanders_n <ncsander@indiana.edu>
- andrewbranch <andrew@wheream.io>
- minestarks <mineyalc@microsoft.com>
- rbuckton <rbuckton@chronicles.org>
- sheetalkamat <shkamat@microsoft.com>
- orta <orta.therox@gmail.com>
- typescript-deploys <ortam@microsoft.com>

dist-tags:
beta: 4.3.0-beta
dev: 3.9.4
insiders: 4.2.0-insiders.20210210
latest: 4.3.3
next: 4.4.0-dev.20210616
rc: 4.3.1-rc
tag-for-publishing-older-releases: 4.1.6

published 6 hours ago by typescript-bot <typescript@microsoft.com>
tobiokaken@tobiokakennoAir typescript-for-javascript-developers % npm install --save-dev typescript@3.7.5

added 1 package, and audited 2 packages in 3s

found 0 vulnerabilities
tobiokaken@tobiokakennoAir typescript-for-javascript-developers % git status
On branch install-typescript
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   package.json

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	package-lock.json

no changes added to commit (use "git add" and/or "git commit -a")
tobiokaken@tobiokakennoAir typescript-for-javascript-developers % git diff
diff --git a/package.json b/package.json
index 02c9827..48804fe 100644
--- a/package.json
+++ b/package.json
@@ -16,5 +16,8 @@
   "bugs": {
     "url": "https://github.com/tobeken/typescript-for-javascript-developers/issues"
   },
-  "homepage": "https://github.com/tobeken/typescript-for-javascript-developers#readme"
+  "homepage": "https://github.com/tobeken/typescript-for-javascript-developers#readme",
+  "devDependencies": {
+    "typescript": "^3.7.5"
+  }
 }
tobiokaken@tobiokakennoAir typescript-for-javascript-developers % git add.
git: 'add.' is not a git command. See 'git --help'.

The most similar command is
	add
tobiokaken@tobiokakennoAir typescript-for-javascript-developers % git add .
tobiokaken@tobiokakennoAir typescript-for-javascript-developers % mkdir src
tobiokaken@tobiokakennoAir typescript-for-javascript-developers % touch src/install-typescript.ts
tobiokaken@tobiokakennoAir typescript-for-javascript-developers % vim src/install-typescript.ts

let message: string = 'Hello, Typescript'
console.log({ message }); 
