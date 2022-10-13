<template>
  <div class="footer">
    <div class="container m-auto">
      <div class="footer__container relative">
        <ResponsiveImage
          :lazyload="false"
          :sources="content.imageLogo.src"
          :alt="content.imageLogo.alt"
          class="footer__logo"
        />
        <ResponsiveImage
          :lazyload="false"
          :sources="content.imageLocation.src"
          :alt="content.imageLocation.alt"
          class="footer__location"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ResponsiveImage from "~/components/ResponsiveImage";
export default {
  components: {
    ResponsiveImage
  },
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
.footer {
  @include media("<=lg") {
    margin-bottom: 41px;
  }
  @include media(">=lg") {
    margin-bottom: 66px;
  }
  .footer__container {
    @include media(">=lg") {
      background: #fff;
    }
    .footer__logo {
      ::v-deep img {
        margin: auto;
        @include media("<=lg") {
          width: 58px;
          padding: 180px 0 0 0;
        }
        @include media(">=lg") {
          width: 148px;
          padding: calc(111px - 33px - 16px) 0 77px;
        }
      }
    }
    .footer__location {
      position: absolute;
      @include media("<=lg") {
          top: 0;
          margin-left: 40px;
      }
      @include media(">=lg") {
        bottom: 0;
        margin-bottom: 145px;
      }
    }
  }
}
</style>