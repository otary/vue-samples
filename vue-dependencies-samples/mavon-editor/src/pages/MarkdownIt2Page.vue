<template>
  <div>
    <textarea v-model="original" :style="{width: '100%', height: '300px'}"/>
    <div>
      {{result}}
    </div>
  </div>
</template>

<script>


export default {
  name: "MarkdownIt2Page",
  data() {
    return {
      original: '{abc src="xxx"} \n' +
          '# 标题 \n' +
          '## 收到JFK士大夫' +
          '> 标签 \n' +
          'H~2~0 \n' +
          '![sdfsdf](https://img0.baidu.com/it/u=1596977024,2747475854&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=421)'
    }
  },
  computed: {
    result() {
      // 文档：https://markdown-it.docschina.org/
      const md = require('markdown-it')();

     /* md.core.ruler.push('first-test', (state) => {
        // 示例：属性中添加data-line-start和data-line-end属性
        state.tokens.forEach(token => {
          // token.map 即所在的行数
          if (token.map) {
            // 起始行
            const start = ["data-line-start", token.map[0].toString()]
            // 结束行
            const end = ["data-line-end", token.map[1].toString()]
            // 初始化属性
            token.attrs = token.attrs || []
            // 添加属性
            token.attrs.push(start, end)
          }
        });
        return true;
      });*/

     // 小修改（图片标签上增加个属性）
    /* md.renderer.rules.image = function(tokens, idx, options, env, self) {
       tokens[idx].attrSet('title', '你知道的太多了')
       return md.renderer.renderToken(tokens, idx, options, env, self);
     }*/

      /**
       * 修改 <h1> 标签
       * @param tokens
       * @param idx
       * @returns {string|string}
       */
     md.renderer.rules.heading_open = function(tokens, idx) {
       const token = tokens[idx];
       if (token.tag === 'h1') {
         return "<h1><tt>";
       }
        return md.renderer.renderToken(tokens, idx);
     }
      md.renderer.rules.heading_close = function(tokens, idx) {
        const token = tokens[idx];
        if (token.tag === 'h1') {
          return "</tt></h1>";
        }
        return md.renderer.renderToken(tokens, idx);
      }


     /* md.inline.ruler.after('emphasis','second-test', (state) => {
        const matched = state.src.match(/^\{abc(.*)\}$/);
        if (matched == null) {
          return false;
        }
        // console.log(matched)

        let token;
        token = state.push('abc_open', 'abc', 1);
        token.markup  = '~';

        token         = state.push('text', '', 0);
        token.content = "测试";

        token         = state.push('abc_close', 'abc', -1);
        token.markup  = '~';
        console.log(matched)

        let max = state.posMax;
        state.pos = state.posMax + 1;
        state.posMax = max;

        return true;
      });*/



      /*md.inline.ruler.after('emphasis', 'sub', (state, silent)=> {

        var UNESCAPE_RE = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;

        var found,
            content,
            token,
            max = state.posMax,
            start = state.pos;


        if (state.src.charCodeAt(start) !== 0x7E) { return false; }
        if (silent) { return false; } // don't run any pairs in validation mode
        if (start + 2 >= max) { return false; }

        state.pos = start + 1;

        while (state.pos < max) {
          if (state.src.charCodeAt(state.pos) === 0x7E) {
            found = true;
            break;
          }

          state.md.inline.skipToken(state);
        }

        if (!found || start + 1 === state.pos) {
          state.pos = start;
          return false;
        }

        content = state.src.slice(start + 1, state.pos);

        // don't allow unescaped spaces/newlines inside
        if (content.match(/(^|[^\\])(\\\\)*\s/)) {
          state.pos = start;
          return false;
        }

        // found!
        state.posMax = state.pos;
        state.pos = start + 1;

        // Earlier we checked !silent, but this implementation does not need it
        token         = state.push('sub_open', 'sub', 1);
        token.markup  = '~';

        token         = state.push('text', '', 0);
        token.content = content.replace(UNESCAPE_RE, '$1');

        token         = state.push('sub_close', 'sub', -1);
        token.markup  = '~';

        state.pos = state.posMax + 1;
        state.posMax = max;
        return true;
      });*/

      return md.render(this.original)
    }
  }
}
</script>

<style scoped>

</style>
