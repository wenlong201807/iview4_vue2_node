<template>
  <div>

    <Tree :data="data5"
          :render="renderContent"></Tree>
    <div class="menuZoon">
      <div @contextmenu.stop="showMenu()"
           class=""
           v-for="(n) in contextMenuData.menulists"
           :key="n.title">
        <vue-context-menu :contextMenuData="contextMenuData"
                          :transferIndex="transferIndex">
        </vue-context-menu>
      </div>
    </div>
    <Button @click="cancelNodeHighLight">取消选中</Button>
  </div>
</template>
<script>
import { EventBus } from './event_bus'
import Vue from 'vue'
import VueContextMenuComponent from './VueContextMenu.vue'
const VueContextMenu = {
  install: function (Vue) {
    Vue.component('VueContextMenu', VueContextMenuComponent)
  }
}
Vue.use(VueContextMenu)
export default {
  data () {
    return {
      h: null,
      w: null,
      isContextMenu: false,
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
      },
      data5: [
        {
          title: 'parent 1',
          expand: true,
          children: [
            {
              title: 'child 1-1',
              expand: true,
              children: [
                {
                  title: 'leaf 1-1-1',
                  expand: true
                },
                {
                  title: 'leaf 1-1-2',
                  expand: true
                }
              ]
            },
            {
              title: 'child 1-2',
              expand: true,
              children: [
                {
                  title: 'leaf 1-2-1',
                  expand: true
                },
                {
                  title: 'leaf 1-2-1',
                  expand: true
                }
              ]
            }
          ]
        }
      ]
      // buttonProps: {
      //   type: 'default',
      //   size: 'small'
      // }
    }
  },
  mounted () {
    EventBus.$on('express_any_vue', item => {
      console.log(item)
      let kk = true
      if (kk) {
        console.log(666) // 这里写应用
      }
    })
    EventBus.$on('keepOpen', item => {
      console.log('keepOpen', item)
      if (item.one === '第一层') {
        // this.w = event.clientX
        // this.h = event.clientY
        console.log('我是第一层有子标签的')
      }
      this.showMenu()
    })
  },
  methods: {
    showMenu () {
      this.transferIndex = 1 // tranfer index to child component
      event.preventDefault()
      // var x, y
      // var x = event.clientX
      // var y = event.clientY
      console.log('开始xy', this.h, this.w)
      if (this.h && this.w) {
        console.log('我已已经存在了')
      } else {
        this.w = event.clientX
        this.h = event.clientY
      }
      this.contextMenuData.axis = {
        x: this.w,
        y: this.h
      }
      console.log('结束xy', this.h, this.w)
    },
    cancelNodeHighLight () {
      let aa = 'show selectTreeCla'
      let allCla = document.getElementsByClassName('show')
      let i
      for (i in allCla) {
        if (allCla[i].className === aa) {
          allCla[i].className = 'show'
        }
      }
    },
    renderContent (h, { root, node, data }) {
      return h('span', {
        style: {
          display: 'inline-block'
        }
      }, [
        h('span', [
          h('span', {
            style: {
              display: 'inline-block',
              // background: 'yellow',
              cursor: 'pointer',
              position: 'relative'
            },
            attrs: {
              class: 'show'
            },
            on: {
              mouseout: (e) => {
                // e.target.className = 'show'
                // console.log('click--E。targetclassName--mouseout', e.target.className)
              },
              click: (e) => {
                if (data.expand) {
                  this.$set(data, 'expand', false)
                } else {
                  this.$set(data, 'expand', true)
                }
                console.log('click', e)
                this.cancelNodeHighLight()
                // let aa = 'show selectTreeCla'
                // let allCla = document.getElementsByClassName('show')

                let allCla = document.getElementsByTagName('span')[0].getAttribute('class')
                // console.log('all', allCla)
                // let obj = document.getElementsByClassName('show')
                // // let obj = document.getElementsByTagName('span')
                // // let cla = 'show'
                // let i
                // for (i in obj) {
                //   if (obj[i].className === aa) {
                //     obj[i].className = 'show'
                //     console.log(obj[i].className)
                //   }
                //   // obj[i].className = 'show'
                //   // console.log(i, obj[i].className, obj[i].innerHTML)
                // }
                Array.from(allCla).map((item, ind) => {
                  // console.log(item, ind)
                  // let node = document.getElementsByTagName(item)
                  // let node = document.getElementsByTagName(item).getAttribute('class')
                  // console.log(node, typeof node, node.style)
                  // console.log(node.classList.contains('selectTreeCla'))
                })

                if (!node.hasOwnProperty('children')) {
                  console.log('click--E。targetclassName11', e.target.className)
                  e.target.className = 'show selectTreeCla'
                  console.log('click--E。targetclassName22', e.target.className)
                }
                // console.log('click--E。target', e.target)
                // console.log('click--E。target', document.getElementsByTagName('span')[0].getAttribute('class'))
                // $('.show').removeClass('selectTreeCla')
                // $(e.target).parents('.show').addClass('selectTreeCla')
              },
              contextmenu: e => {
                e.preventDefault()
                console.log('666')
                this.w = event.clientX
                this.h = event.clientY
                this.showMenu()
              }
            }
          }, data.title)
        ])

      ])
    }

  }
}
</script>
<style>
.selectTreeCla {
  background: blue;
}
.show:hover {
  background: red;
}
.menuZoon {
  position: absolute;
  left: 0px;
  top: 0;
}

* {
  margin: 0;
  padding: 0;
}
</style>
