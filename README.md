# GitHub Packages npm Monorepo Package Template

ESM/CJSに対応するnpmパッケージをMonorepoで作成し、GitHub Packagesにリリースできます。

## Tools

- [pnpm](https://pnpm.io/ja/)
- [TypeScript](https://www.typescriptlang.org/ja/)
- [Vite](https://ja.vite.dev/)
- [Vitest](https://vitest.dev/)
- [Biome](https://biomejs.dev/ja/)
- [publint](https://publint.dev/)
- [Changesets](https://github.com/changesets/changesets)
- [GitHub Actions](https://github.com/features/actions?locale=ja)
- [Renovate](https://renovatebot.com/)

## Getting Started 🚀

1. [`.changeset/config.json`](./.changeset/config.json)を書き換えてください。
   ```diff
   - { "repo": "kamatte-me/github-packages-npm-monorepo-template" }
   + { "repo": "<your-org>/<repository-name>" }
   ```
2. [`package.json`](./package.json)の下記項目を書き換えてください。
   - `name`
   - `description`
3. `packages/`ディレクトリ配下の各ディレクトリにある`package.json`の下記項目を書き換えてください。
   - `name`: `@<your-org>/<package-name>`
   - `version`: `0.0.0`
   - `description`
   - `keywords`
   - `homepage`
   - `repository`
4. [`.github/workflows/snapshot-release.yml`](./.github/workflows/snapshot-release.yml)のパッケージ名部分を書き換えてください。
   ```diff
   - @kamatte-me/github-packages-npm-monorepo-package-<number>
   + @<your-org>/<repository-name>
   ```
5. 各READMEを更新しましょう。
6. [changeset-bot](https://github.com/apps/changeset-bot) GitHub AppをGitHubリポジトリにインストールしてください。
7. [Renovate GitHub App](https://github.com/apps/renovate)をGitHubリポジトリにインストールしてください。
8. 🧑‍💻 開発 👩‍💻
   - `main`ブランチへの初回マージ時に`v0.0.0`のリリースが自動実行されます。GitHub Packagesの設定ページで削除して構いません。
9. リリース 🎉

### リリースフロー

[Changesets](https://github.com/changesets/changesets)のリリースフローに準拠します。

#### リリースタイプとチェンジログ

1. 次のいずれかの方法でchangesetファイルを追加します。リリースするパッケージとリリースタイプ（`major` / `minor` / `patch`）を選択したあと、変更内容を記述します。
   - `pnpm changeset`を実行して対話形式で追加
   - PRへのchangeset-botのコメントにあるリンクから追加
2. PRをマージする前に、changeset-botのコメントが `🦋 Changeset detected` となっていることを確認。
3. PRをマージする。

#### リリース

`Version Packages`というPRをマージすると自動的にリリースされます。<br>
なお、このPRのCIは権限の問題で実行されません。PRをReOpenするとCIが実行されますが、無視してマージしても構いません。

---

以下はREADMEのサンプルです。

# `@<org>/<package-name>`

パッケージの概要を記載してください。

## インストール

```shell
npm install @<org>/<package-name>
```

## 使い方

パッケージの使い方を記載してください。

## Contribute

1. corepackを有効にする。
   ```shell
   corepack enable
   ```
2. 依存パッケージのインストール
   ```shell
   pnpm install
   ```

#### ビルド

```shell
pnpm -r build
```

`/dist`にビルド成果物が出力されます。

#### テスト

```shell
pnpm -r test
```

[Vitest](https://vitest.dev/)を利用しています。VS Codeでは[拡張機能](https://marketplace.visualstudio.com/items?itemName=vitest.explorer)が提供されており、導入を推奨します。

#### Lint

```shell
pnpm lint # lint:fix
```

また、パッケージの公開設定をチェックする[publint](https://publint.dev/)を利用しています。

```shell
pnpm -r lint:package
```

### Type Check

```shell
pnpm -r typecheck
```

### リリースフロー

[Changesets](https://github.com/changesets/changesets)のリリースフローに準拠します。

#### リリースタイプとチェンジログ

1. 次のいずれかの方法でchangesetファイルを追加します。リリースするパッケージとリリースタイプ（`major` / `minor` / `patch`）を選択したあと、変更内容を記述します。
   - `pnpm changeset`を実行して対話形式で追加
   - PRへのchangeset-botのコメントにあるリンクから追加
2. PRをマージする前に、changeset-botのコメントが `🦋 Changeset detected` となっていることを確認。
3. PRをマージする。

#### リリース

`Version Packages`というPRをマージすると自動的にリリースされます。<br>
なお、このPRのCIは権限の問題で実行されません。PRをReOpenするとCIが実行されますが、無視してマージしても構いません。
