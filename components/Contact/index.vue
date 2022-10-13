<template>
  <section class="contact">
    <div class="flex flex-col w-full">
      <div class="contact__title">
        <h1 v-html="content.title" />
      </div>
      <div class="contact__container">
        <div class="contact__container__wrapper">
          <ResponsiveImage
            :lazyload="false"
            :sources="content.imageSun.src"
            class="contact__container__image"
          />
          <div class="contact__container__text">
            <p v-html="content.text" />
          </div>
        </div>
      </div>
    </div>
  </section>
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
@import "~assets/css/main";


.contact {
  @include media("<=lg") {
    background: #fff;
  }
  @include media(">=lg") {
    background: #f4f9fd;
  }
  @include media(">=xl") {}
  @include media(">=2xl") {}

  @include media(">=lg") {
    align-items: flex-start !important;
  }

  @include media(">=xl") {}

  @include media(">=2xl") {}

  .contact__title {
    @include media(">=lg") {
      width: 528px;
      height: 133px;
      margin: 48px 0 calc(32px - 16px) 0;
    }
    @include media(">=xl") {
      margin: 48px 0 calc(32px - 16px) 0;
    }
    @include media(">=2xl") {
      width: 528px !important;
    }
  }

  .contact__container {
    margin-bottom: 60px;

    @include media(">=lg") {
      width: 424px;
    }
    @include media(">=xl") {
      width: 540px;
      margin-bottom: 0;
    }
    @include media(">=2xl") {}
    
    .contact__container__wrapper {
      display: flex;
      justify-content: center;
      margin-bottom: 30px;

      @include media(">=lg") {
        width: 424px;
        margin-top: 100px;
        margin-bottom: 0;
        justify-content: flex-start;
      }
      @include media(">=xl") {
      width: 540px;
      margin-bottom: 0;
      }
      @include media(">=2xl") {}

      .contact__container__image {
        width: 77px;
        height: 75px;

        @include media(">=lg") {
          width: 130px;
          height: 130px;
          position: absolute !important;
          margin-top: -53px;
          margin-left: 53px;
        }
        @include media(">=xl") {
          width: 540px;
          margin-bottom: 0;
        }
        @include media(">=2xl") {
          margin-left: 69px;
        }
      }

      .contact__container__text {
        display: flex;
        align-items: center;
        background: #6633CC;
        position: absolute;
        width: 343px;
        height: 95px;
        border-radius: 15px;
        padding: 16px;
        margin-top: 40px;
        z-index: 999;

        ::v-deep p {
          color: #fff;
        }

        ::v-deep a {
          color: #fff;
          text-decoration: underline;
        }
        @include media("<=lg") {
          width: calc(343px + 32px);
          margin-right: -32px;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }

        @include media(">=lg") {
          font-weight: bold;
          width: calc(100% - 120px);
          height: 109px;
          right: 0;
          padding: 0 70px;
          line-height: 24px;
          border-radius: 60px 0 0 60px;
          margin-top: 0;
          margin-bottom: 0;
        }
        @include media(">=xl") {
          width: calc(100% - 140px);
        }
        @include media(">=2xl") {
          width: calc(100% - 160px);
        }
      }
    }
  }
}
</style>