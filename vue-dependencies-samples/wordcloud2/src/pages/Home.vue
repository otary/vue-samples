<template>
  <div>
    <div id="test1" style="width: 500px; height: 500px; border: 1px solid #ccc;">

    </div>
  </div>
</template>

<script>
import WordCloud from 'wordcloud';

const list = [
  [ '民主', 12],
  ['文明', 20],
  ['和谐', 30],
  ['开放', 30],
  ['223', 30],
  ['受到的辐射的开发螺', 8],
  ['受到的辐射的开发螺丝钉解就', 8],
  ['受到的辐射', 2],
  ['受到的辐射的开', 1],
]

export default {
  name: "Home",

  mounted() {
    WordCloud(document.getElementById('test1'), {list: list});
  }
}
</script>

<style scoped>

</style>
