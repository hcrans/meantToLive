export default [
  {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:solid/typescript",
        "standard-with-typescript"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": ["./tsconfig.json"]
    },
    "plugins": [
        "solid"
    ],
    "rules": {
    }
  }
];
