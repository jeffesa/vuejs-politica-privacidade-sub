<template>
  <div class="header mx-auto overflow-hidden px-3">
    <Progress :progress="progress" />
    <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 relative">
      <div class="header__container flex justify-center lg:justify-between items-center lg:items-start flex-col text-center lg:text-left">
        <!-- <img :src="content.imageLogo" class="header__logo" alt=""> -->
        <ResponsiveImage
          :lazyload="false"
          :sources="content.imageLogo.src"
          :alt="content.imageLogo.alt"
          class="header__logo"
        />
        <div>
          <h1 v-text="content.title" class="header__title"/>
          <p v-html="content.subtitle" class="header__subtitle"/>
        </div>
      </div>
      <ResponsiveImage
        :lazyload="false"
        :sources="content.imageLocation.src"
        :alt="content.imageLocation.alt"
        class="header__image-location hidden lg:block"
      />
    </div>
  </div>
</template>

<script>
import ResponsiveImage from "~/components/ResponsiveImage";
import Progress from "~/components/shared/Progress";

export default {
  components: {
    ResponsiveImage,
    Progress
  },
  props: {
    content: {
      type: Object,
      required: true
    },
    progress: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/sizes";
@import "~assets/css/colors";
.header {
  background: $primary;
  @include media("<=lg") {
    padding-top: 110px;
  }
  @include media(">=lg") {
    padding: 55px 60px 16px;
  }
  .header__container {
    width: 100%;
    height: 197px;
    @include media(">=lg") {
      width: 747px;
      height: 280px;
    }
    @include media(">=xl") {
      width: 747px;
      height: 314px;
    }
    @include media(">=2xl") {
      width: 747px;
      height: 383px;
    }
    .header__logo {
      //width: 59px;
      padding-bottom: 23px;
      @include media(">=lg") {
        padding-bottom: 0px;
        width: 120px;
      }
      @include media(">=xl") {
        padding-bottom: 0px;
        width: 124px;
      }
      @include media(">=2xl") {
        padding-bottom: 0px;
        width: 168px;
      }
    }
    .header__title {
      color: #fff;
      font-weight: 700;
      font-size: 18px;
      line-height: 120%;
      @include media(">=lg") {
        font-weight: 850;
        font-size: 46px;
        line-height: 54px;
      }
      @include media(">=xl") {
        font-size: 50px;
        line-height: 66px;
      }
      @include media(">=2xl") {
        font-size: 66px;
        line-height: 79px;
      }
    }
    .header__subtitle {
      color: #fff;
      font-weight: 400;
      font-size: 12px;
      line-height: 150%;
      font-weight: 300;
      ::v-deep {
        strong {
          font-weight: 700;
        }
      }
      @include media(">=lg") {
        font-size: 14px;
      }
      @include media(">=xl") {
        font-size: 14px;
      }
      @include media(">=2xl") {
        font-size: 18px;
        line-height: 22px;
      }
    }
  }
  .header__image-location {
    position: absolute;
    @include media(">=lg") {
      top: -118px;
      right: -92px;
    }
    @include media(">=xl") {
      top: -118px;
      right: -92px;
    }
    @include media(">=2xl") {
      width: auto;
      top: -118px;
      right: -92px;
    }
  }
}
</style>