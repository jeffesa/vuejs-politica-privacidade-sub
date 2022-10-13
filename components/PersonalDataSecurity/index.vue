<template>
  <section class="personal-data-security">
    <div class="flex flex-col w-full">
      <div class="personal-data-security__title">
        <h1 v-html="content.title" />
      </div>
      <div class="personal-data-security__container">
        <div class="personal-data-security__container__wrapper grid grid-cols-1 lg:grid-cols-2">
          <div class="personal-data-security__container__text">
            <p v-html="content.text"/>
          </div>
        
          <div class="personal-data-security__container__image">
              <ResponsiveImage
              :lazyload="false"
              :sources="content.imagePersona.src"
              />
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
@import "~assets/css/main";
@import "~assets/css/sizes";

.personal-data-security {
  background: #fff;

  .personal-data-security__title {
    @include media(">=lg") {
      width: 668px !important;
      height: 133px;
      margin: 48px 0 calc(32px - 16px) 0;
      padding-right: 150px;
    }
    @include media(">=xl") {
      margin: 48px 0 calc(32px - 16px) 0;
    }
    @include media(">=2xl") {
      margin: 87px 0 calc(32px - 16px) 0;
    }
  }

  .personal-data-security__container {
    .personal-data-security__container__wrapper {
      //display: flex;
      flex-direction: column-reverse;
      
      @include media(">=lg") {
        justify-content: space-between;
        flex-direction: row;
        grid-template-columns: 420px auto;
        gap: 20px;
      }
      @include media(">=xl") {
        grid-template-columns: 540px auto;
        gap: 20px;
      }
      @include media(">=2xl") {
        grid-template-columns: 540px auto;
        gap: 20px;
      }
    }

    .personal-data-security__container__text {
      margin: auto;
      line-height: 21px;

      ::v-deep p {
        margin-bottom: 10px;
      }

      @include media(">=lg") {
        //width: 424px;
        //margin: 0 20px 0 0;
        
        ::v-deep p {
          margin-bottom: 20px;
          line-height: 24px;
        }
      }
      @include media(">=xl") {
        //width: 540px;
      }
      @include media(">=2xl") {}
    }

    .personal-data-security__container__image {
      width: 343px;
      height: 190px;
      margin: auto;
      margin-bottom: 33px;
      
      @include media(">=lg") {
        width: 650px;
        height: 465px;
        margin: -130px 0 0 0;
      }
      @include media(">=xl") {
        margin-top: -140px;
      }
      @include media(">=2xl") {}
    }
  }
}

</style>