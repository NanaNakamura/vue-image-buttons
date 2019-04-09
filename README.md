# vue-image-buttons

🦉写真サムネイルリンクボタン🦉  
とりあえず、2種類  

🦉<a href="https://nananakamura.github.io/c/vue-image-buttons/index.html" target="_blank">Demo</a>


## Usage

### type 1の場合
#### HTML
```
<template>
  <button-image-type1
    url="リンク先"
    title="タイトル"
    subdescription="ちょっとした一言"
    imagePath="画像パス"
  />
</template>
```

*新規ウィンドウとかには対応してない
*タイトルや、ちょっとした一言の文字量にも対応していないので、ある程度調整は必要

#### scripts

.vueファイルコンポーネントフォルダーにコピペして、  
componentsに追加？

```
import ButtonImageType1 from './components/ButtonImageType1'

export default {
  components: {
    'button-image-type1' : ButtonImageType1,
  }
}
```


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# SCSSを有効化
npm install sass-loader node-sass --save-dev

<style lang="scss">
/* write SASS! */
</style>
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
