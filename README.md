# Flux Note

[![Build Status](https://travis-ci.org/remylii/flux-note.svg?branch=release)](https://travis-ci.org/remylii/flux-note)

## Stack

- package manager: yarn
- framework: react, flux/utils, react-router-dom
- transpiler: babel
- linter: eslint, flow, stylelint
- test: ava
- coverage: nyc
- build: webpack
- css: webpack use postcss

## Usage

first of all,

```
$ yarn install
```

### Development

```
& yarn start
```

### Generating Distribution

```
$ yarn run build
```

## Tasks

Use npm-scripts.

```
- start        # run webpack-dev-server
- build        # Generate distribution
- lint         # eslint
- typecheck    # flow
- test         # ava
- cover        # Test with coverage
```

## License

MIT
