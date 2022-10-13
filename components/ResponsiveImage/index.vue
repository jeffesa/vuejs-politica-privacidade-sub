<template>
  <picture class="responsive-image" :class="lazyload ? 'lazyload' : ''">
    <source
      v-for="(source, index) in sources"
      :key="index"
      :data-srcset="lazyload ? source.src : null"
      :srcset="lazyload ? null : source.src"
      :media="source.query"
      :type="source.type"
    >
    <img
      v-if="lazyload"
      class="lazyload"
      :class="imgClass"
      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
      data-srcset="data:image/gif;base64, R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
      typeof="foaf:Image"
      @lazyloaded="loaded"
      loading="lazy"
      :alt="alt"
      :title="title"
      :role="role"
    >
    <img
      v-else
      class="hide-on-noscript"
      :class="imgClass"
      :src="sources[0].src.split(',')[0]"
      :srcset="sources[0].src"
      :alt="alt"
      :title="title"
      :role="role"
      @load="loaded"
    >
    <no-script-span v-if="lazyload">
      <img
        class="is-hidden-desktop"
        loading="lazy"  
        :class="imgClass"
        :src="sources[0].src.split(',')[0]"
        :srcset="sources[0].src"
        :alt="alt"
        :role="role"
      >
      <img
        class="is-hidden-touch"
        loading="lazy"
        :class="imgClass"
        :src="sources[1] ? sources[1].src.split(',')[0] : sources[0].src.split(',')[0]"
        :srcset="sources[1] ? sources[1].src : sources[0].src"
        :alt="alt"
        :role="role"
      >
    </no-script-span>
  </picture>
</template>

<script>

export default {
  props: {
    sources: {
      type: Array,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    title: {
      type: String,
      requered: true
    },
    imgClass: {
      type: String,
      required: false
    },
    lazyload: {
      type: Boolean,
      required: false,
      default: true
    },
    role: {
      type: String,
      required: false,
    },
  },
  methods: {
    loaded (e) {
      let _img = e.currentTarget.src
      this.$emit('img-load', _img)
    }
  }
};
</script>
