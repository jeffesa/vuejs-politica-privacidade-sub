<template>
  <section class="validity">
    <div class="flex flex-col w-full">
      <div class="validity__title">
        <h1 v-html="content.title" />
      </div>
      <div class="validity__container">
        <div class="validity__container__content">
          <p v-html="content.text" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
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
@import "~assets/css/main";

.validity {
  @include media("<=lg") {
    background: #fff;
  }
  @include media(">=lg") {
    background: #f4f9fd;
  }
  @include media(">=xl") {}
  @include media(">=2xl") {}

  .validity__title {
    @include media(">=lg") {
      width: 668px !important;
      height: 133px;
      margin: 48px 0 calc(32px - 16px) 0;
    }
    @include media(">=xl") {}
    @include media(">=2xl") {}
  }

  .validity__container {
    margin: auto;
    margin-bottom: 49px;
    line-height: 21px;

      ::v-deep p {
        margin-bottom: 10px;
      }

    @include media(">=lg") {
      width: 424px;
      margin-bottom: 84px !important;
      line-height: 21px;
      margin: 0;
    }
    @include media(">=xl") {
      width: 540px;
    }
    @include media(">=2xl") {}

    .validity__container__content {
      ::v-deep p {
        span {
          color: $tertiary;
          font-weight: bold;
        }

        strong {
          color: $primary; 
        }
      }
    }
  }
}
</style>