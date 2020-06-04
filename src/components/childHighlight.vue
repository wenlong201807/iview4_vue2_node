<template>
  <div v-highlight>
    <pre>
        <code class="javascript" >{{aa}}</code>
        <!-- <code class="javascript" >{{contentJosn}}</code> -->
        <!-- <code class="javascript" v-html="content"></code> -->
      </pre>
  </div>
</template>

<script>
export default {
  props: ['aa'],
  data () {
    return {
      contentJosn: `console.log(666)
      `
    }
  }
}
</script>
