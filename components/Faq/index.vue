<template>
  <section class="faq">
    <div class="flex flex-col w-full">
      <div class="faq__title">
        <h1 v-html="content.title" />
        <p v-html="content.subtitle" />
      </div>
      <div class="faq__container">
        <div class="faq__container__content">
          <p v-html="content.subtitle" />
          <ul>
            <li v-html="content.aTitle" class="faq__container__content__listTitle" />
            <li v-html="content.aText" class="faq__container__content__listText" />
          </ul>
          <ul>
            <li v-html="content.bTitle" class="faq__container__content__listTitle" />
            <li v-html="content.bText" class="faq__container__content__listText" />
          </ul>
          <ul>
            <li v-html="content.cTitle" class="faq__container__content__listTitle" />
            <li v-html="content.cText" class="faq__container__content__listText" />
          </ul>
          <ul>
            <li v-html="content.dTitle" class="faq__container__content__listTitle" />
            <li v-html="content.dText" class="faq__container__content__listText" />
          </ul>
          <ul>
            <li v-html="content.eTitle" class="faq__container__content__listTitle" />
            <li v-html="content.eText" class="faq__container__content__listText" />
          </ul>
          <ul>
            <li v-html="content.fTitle" class="faq__container__content__listTitle" />
            <li v-html="content.fText" class="faq__container__content__listText" />
          </ul>
          <ul>
            <li v-html="content.gTitle" class="faq__container__content__listTitle" />
            <li v-html="content.gText" class="faq__container__content__listText" />
          </ul>
          <ul>
            <li v-html="content.hTitle" class="faq__container__content__listTitle" />
            <li v-html="content.hText" class="faq__container__content__listText" />
          </ul>
          <ul>
            <li v-html="content.iTitle" class="faq__container__content__listTitle" />
            <li v-html="content.iText" class="faq__container__content__listText" />
          </ul>
          <ul>
            <li v-html="content.jTitle" class="faq__container__content__listTitle" />
            <li v-html="content.jText" class="faq__container__content__listText" />
          </ul>
          <ul>
            <li v-html="content.kTitle" class="faq__container__content__listTitle" />
            <li v-html="content.kText" class="faq__container__content__listText" />
          </ul>
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
@import "~assets/css/colors";

.faq {

  @include media(">=lg") {
    padding: 0 !important;
    background: $primary;
  }

  @include media(">=xl") {}

  @include media(">=2xl") {}

  .faq__title {

    ::v-deep p {
      display: none;
    }

    @include media(">=lg") {
      display: flex;
      justify-content: center;
      flex-direction: column;
      height: 161px !important;
      
      ::v-deep h1 {
        font-size: 32px !important;
        font-weight: normal !important;
        line-height: 36.8px;
        color: #fff !important;
      }
      ::v-deep p {
        display: block;
        color: #fff;
        line-height: 24px;
        margin-top: 12px;
      }
    }

    @include media(">=xl") {}

    @include media(">=2xl") {}
  }

  .faq__container {
    @include media(">=lg") {
      background: white;
      border-top-left-radius: 100px;
    }

    @include media(">=xl") {}

    @include media(">=2xl") {}

    &__content {
      @include media(">=lg") {
        margin-top: 89px;
      }

      @include media(">=xl") {}

      @include media(">=2xl") {}

      p {
        color: $cloudy-300;
        font-size: 16px;
        margin: 30px 0;

        @include media(">=lg") {
          display: none;
        }

        @include media(">=xl") {}

        @include media(">=2xl") {}
      }

      ul {
        border: 1px solid rgba(0, 0, 20, 0.12);
        border-top: 4px solid $primary;
        margin-bottom: 15px;
        border-radius: 4px;
        box-shadow: 0 1px 2px 1px rgba(0, 0, 20, 0.12);
      }

      .faq__container__content__listTitle {
        color: $primary;
        padding: 22px 16px 0 16px;
      }

      .faq__container__content__listText {
        color: $cloudy-100;
        padding: 0 10px 18px 16px;
        line-height: 21px;
      }

      @include media(">=lg") {
        display: flex;
        align-items: center;
        flex-direction: column;

        ul {
          background: #fff;
          z-index: 1;
          width: 831px;
          max-height: 132px;
          margin-bottom: 33px;
        }

        .faq__container__content__listText {
          padding: 0 16px 18px 16px;
          line-height: 24px;
        }
      
      }

      @include media(">=xl") {}

      @include media(">=2xl") {}
    }
  }
}
</style>