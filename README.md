# AWS SDK for JavaScript V3 の挙動を味わうリポジトリ

## Overview

DynamoDB の DocumentClient の put で、`{ hoge: undefined }`のような明示的な undefined を渡すとエラーが発生する。

オプションで `{ removeUndefinedValues: true }` をつけるとエラーにならずに key 自体が無きものとして put される。

## Deploy

```console
npm i
npx cdk deploy
```

## Confirm

```console
# v2ではエラーにならない
npx ts-node confirm-scripts/v2.ts

# v3ではエラーになる
npx ts-node confirm-scripts/v2.ts
```
