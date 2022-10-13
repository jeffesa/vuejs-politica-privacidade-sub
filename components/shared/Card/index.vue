<template>
  <div class="card">
    <div v-html="content" />
    <slot />
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    content: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/sizes";
@import "~assets/css/colors";

.card {
    color: #fff;
    background: $primary;
    box-shadow: 0px 2px 8px rgba(0, 0, 20, 0.12);
    border-radius: 8px;
    padding: 32px;
    margin-bottom: 29px;
    @include media("<=lg") {
      width: calc(100% + 14px*2);
      margin-left: -14px;
      border-radius: 0px;
      padding: 16px;
    }
  }
</style>