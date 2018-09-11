# typescript + react + tslint + prettier on VSCode

typescript + react + tslint + prettierの環境構築例です  
tslint + prettierの連携や、VSCodeでのts保存時自動フォーマットの導入につまづきやすいため資料を作成します

## ts導入のメリット

* babel系のパッケージ導入が減る  
  ts用パッケージが代わりにやってくれる
* jsで型が使える  

## パッケージについて

reduxやrouterが必要な場合は別途導入してください  
  
* react, react-domを導入します
```
$ yarn add react react-dom
```
  
* ts用のreact, react-dom型定義ファイルを導入します  
これにより「Reactに型定義がありません」「ReactDOMに型定義がありません」といったエラーを回避します
```
$ yarn add @types/react @types/react-dom
```
  
* typescript本体とtsをwebpackでコンパイルさせるawesome-typescript-loader、  
tsのデバッグ用にsource-map-loaderを導入します
```
$ yarn add -D typescript awesome-typescript-loader source-map-loader
```
  
* eslintではなくtslintを使用します  
tslint、tslintの設定パッケージを導入します　今回はairbnbではなくstandardを導入しました
```
$ yarn add -D tslint tslint-react tslint-config-standard
```

* prettierを導入します
また、prettierとtslintの共存用パッケージを追加します
```
$ yarn add -D prettier tslint-config-prettier tslint-plugin-prettier
```

* バンドラーとしてwebpackを導入します  
webpack4から、webpackコマンドが別パッケージにwebpack-cliに分割されました  
ローカルサーバー用のwebpack-dev-serverも合わせて導入します
```
$ yarn add -D webpack webpack-cli webpack-dev-server
```  

導入後のpackage.json例です
```
package.json

{
  "dependencies": {
    "@types/react": "^16.4.13",
    "@types/react-dom": "^16.0.7",
    "react": "^16.4.2",
    "react-dom": "^16.4.2"
  },
  "devDependencies": {
    "awesome-typescript-loader": "^5.2.0",
    "prettier": "^1.14.2",
    "source-map-loader": "^0.2.4",
    "tslint": "^5.11.0",
    "tslint-config-prettier": "^1.15.0",
    "tslint-config-standard": "^8.0.0",
    "tslint-loader": "^3.6.0",
    "tslint-plugin-prettier": "^1.3.0",
    "tslint-react": "^3.6.0",
    "typescript": "^3.0.3",
    "webpack": "^4.17.1",
    "webpack-cli": "^3.1.0",
    "webpack-dev-server": "^3.1.7"
  }
}
```
  
## tsconfig.json

プロジェクトルートにtsconfig.jsonを作成し設定を記述します  
babelでいう.babelrcに該当します  

```
tsconfig.json

{
  "compilerOptions": {
    "sourceMap": true,
    "outDir": "./dist/",
    "target": "es5",
    "module": "commonjs",
    "jsx": "react"
  },
  "include": [
    "./src/**/*"
  ],
  "exclude": [
    "node_modules"
  ]
}
```
  
## tslint.json

プロジェクトルートにtslint.json設定を記述します  
prettierとの連携もこちらで設定します

```
tslint.json

{
  "rulesDirectory": [
    "tslint-plugin-prettier"
  ],
  "extends": [
    "tslint-config-standard",
    "tslint-react",
    "tslint-config-prettier"
  ],
  "linterOptions": {
    "exclude": [
      "node_modules/**/*.ts"
    ]
  },
  "plugins": [
    "prettier"
  ],
  "rules": {
    "prettier": [
      true,
      // prettierのルールを変更したい場合ここへ
      {
        "singleQuote": true,
        "semi": false
      }
    ]
  }
}
```

## VSCodeの設定

VSCode拡張機能のTSLintを導入します  
https://github.com/Microsoft/vscode-tslint

command+, でワークスペースの設定画面を開き、下記を追加します  
これで保存時にtslint + prettierが走ります
```
{
  "editor.formatOnSave": true
}
```

## 感想
やること自体はシンプルだけど、  
eslintの時と似てるのに依存パッケージが違う、設定ファイルが違う、またVSCodeの設定も微妙に違うで地味に面倒
eslintに慣れてる人ほど戸惑いそう

## 参考記事
https://qiita.com/s4kr4/items/51809ff6670b49ef917a  
https://www.bunkei-programmer.net/entry/2018/04/20/220156