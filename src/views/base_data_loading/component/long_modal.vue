<template>
  <div class="longModalWrap">
    <template v-if="parentModalIsOpen">
      <div class="selfMask" @click="ModalcloseHandler"></div>
    </template>

    <div :class="parentModalIsOpen ? 'modalShow' : 'modalHide'">
      <div class="actionHeadWrap">
        <div class="actionTitleCla">{{parentModalTitle}}</div>
        <div>
          <Icon @click="ModalcloseHandler" class="actionIconCla" type="md-close" />
        </div>
      </div>

      <div class="actionBodyWrap">
        <slot name="longModalBody"></slot>
     
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  props: ['parentModalIsOpen', 'parentModalTitle'],
  methods: {
    ModalcloseHandler() {
      this.$emit('closeLongModal', false)
    },
  },
}
</script>

<style  scoped lang="less">
@import '../styles/long_modal.less';
</style>
