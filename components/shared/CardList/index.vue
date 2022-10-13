<template>
  <div class="card-list">
    <div class="card-list__container flex flex-col">
      <div class="flex card-list__content">
        <span v-html="content.number" class="card-list__number"/>
        <p class="card-list__text" v-html="content.text" />
      </div>
      <ul class="card-list__exceptions" v-if="content.exceptions">
        <li 
          class="card-list__exceptions__items" 
          v-for="(item, i) in content.exceptions"
          :key="i"
          v-html="item"
        />
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    content: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/sizes";
@import "~assets/css/colors";
.card-list {
  .card-list__container {
    .card-list__number {}
    .card-list__text {}
  }
}
</style>