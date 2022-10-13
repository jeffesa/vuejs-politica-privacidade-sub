<template>
  <div class="data-provided">
    <div class="data-provided__grid grid grid-cols-1 lg:grid-cols-2">
      <div class="data-provided__informations">
        <p class="data-provided__title text-center" v-if="content.title" v-html="content.title" />
        <p class="data-provided__description m-auto" v-if="content.description" v-html="content.description" />
      </div>
      <ul class="data-provided__list">
        <slot />
      </ul>
    </div>
  </div>
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
@import "~assets/css/colors";
.data-provided {
  margin-bottom: calc(20px - 16px);
  @include media(">=lg") {
    margin-bottom: 45px;
  }
  .data-provided__grid {
    width: calc(100% + 14px *2);
    margin-left: -14px;
    @include media(">=lg") {
      width: auto;
      margin-left: 0;
      grid-template-columns: 420px auto;
    }
    @include media(">=xl") {
      grid-template-columns: 420px auto;
    }
    @include media(">=2xl") {
      grid-template-columns: 554px auto;
    }
    .data-provided__informations {
      background: #f4f9fd;
      opacity: 1;
      border-radius: 0;
      padding: 16px 16px 0;
      @include media(">=lg") {
        background: #4D71FF;
        border-radius: 8px;
        max-width: 554px;
        padding: 24px 24px;
      }
      @include media(">=xl") {
        padding: 24px 24px;
      }
      @include media(">=2xl") {
        padding: 48px 56px;
      }
      .data-provided__title {
        background: $primary;
        color: #fff;
        border-radius: 8px;
        font-weight: 600;
        padding: 15px 0;
        margin-bottom: 18px;
        font-size: 18px;
        line-height: 100%;
        @include media(">=lg") {
          background: #FFFFFF;
          color: $primary;
          font-size: 24px;
          line-height: 120%;
          margin-bottom: 20px;
          padding-left: 26px;
          padding-right: 26px;
          font-weight: 700;
        }
      }
      .data-provided__description {
        //color: #fff;
        //background: $primary;
        width: calc(100% + 16px*2);
        margin-left: -16px;
        margin-bottom: 28px;
        padding: 0 16px;
        @include media(">=lg") {
          color: #fff;
          width: 100%;
          max-width: 351px;
          margin-left: 0;
          margin: auto;
          padding: 0;
        }
      }
    }
    .data-provided__list {
      background: #f0f7fd;
      margin-left: 0px;
      @include media(">=lg") {
        background: #fff;
        margin-left: 20px;
      }
      li {
        background: #fff;
        min-height: 128px;
        border-radius: 0px;
        padding: 12px 16px;
        &:not(:last-child) {
          margin-bottom: 8px;
          @include media(">=lg") {
            margin-bottom: 31px;
          }
        }
        @include media(">=lg") {
          background: rgba(233, 243, 251, 0.5);
          border-radius: 8px;
          padding: 10px 32px;
        }
        span {
          font-weight: 700;
          color: #0033FF;
        }
        p {
          font-weight: 400;

          ::v-deep strong {
            color: $primary;
          }

          ::v-deep span {
            color: $primary;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>