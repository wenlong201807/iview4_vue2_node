<template>
  <div class="menuZoon" style="position: fixed;left:0px;top:0;">
    <div @contextmenu="showMenu(index)" class="" v-for="(n, index) in contextMenuData.menulists" :key="n.title">
      SADF<Button type="primary">Primary</Button>
      <vue-context-menu :contextMenuData="contextMenuData" :transferIndex="transferIndex">
      </vue-context-menu>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import VueContextMenuComponent from './VueContextMenu.vue'
const VueContextMenu = {
  install: function (Vue) {
    Vue.component('VueContextMenu', VueContextMenuComponent)
  }
}
Vue.use(VueContextMenu)
export default {
  name: 'appq',
  data () {
    return {
      transferIndex: null, // Show the menu that was clicked
      contextMenuData: {
        menuName: 'demo',
        axis: {
          x: null,
          y: null
        },
        menulists: [
          {
            title: '选项1111111第一层',
            icoName: 'fa fa-home fa-fw',
            children: [
              {
                icoName: 'fa fa-adn',
                title: '选项1-2第二层',
                children: [
                  {
                    icoName: 'fa fa-file',
                    children: [
                      {
                        icoName: 'fa fa-android',
                        fnHandler: 'Handler1',
                        title: '选项1-2-1-1最里层'
                      }
                    ],
                    title: '选项1-2-1第三层'
                  }
                ]
              }
            ]
          },
          {
            title: '选项2',
            children: [
              {
                fnHandler: 'Handler5',
                title: '选项2-1第二层，第二个'
              }
            ]
          },
          {
            title: '选项3',
            fnHandler: 'Handler333'
          },
          {
            title: '选项4',
            // disabled: true
            fnHandler: 'Handler444',
            children: [
              {
                fnHandler: 'Handler444',
                title: '选项4444第二层，第二个'
              }
            ]
          }
        ]
      }
    }
  },
  methods: {
    showMenu (index) {
      this.transferIndex = index // tranfer index to child component
      event.preventDefault()
      var x = event.clientX
      var y = event.clientY
      this.contextMenuData.axis = {
        x,
        y
      }
    }
  }
}
</script>
<style>
.menuZoon {
  position: absolute;
  left: 0px;
  top: 0;
}
.useMenu {
  width: 100px;
  height: 100px;
  background: green;
}
* {
  margin: 0;
  padding: 0;
}
</style>
