module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended'  ,
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  parserOptions: {        //指定ESLint可以解析JSX语法
    "ecmaVersion": 2019,
    "sourceType": 'module',
    "ecmaFeatures":{
        jsx:true
    }
  },
  settings: {             //自动发现React的版本，从而进行规范react代码
    "react": {
        "pragma": "React",
        "version": "detect"
    }
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
  }
}
