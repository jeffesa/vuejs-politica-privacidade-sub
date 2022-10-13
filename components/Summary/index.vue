<template>
  <section class="summary">
    <div class="summary__container container mx-auto mb-0 lg:mb-10 relative">
      <div 
        class="summary__arrow-up"
        @click="onScrollToUp"
      >
        <svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.5 34C10.5 34.8284 11.1716 35.5 12 35.5C12.8284 35.5 13.5 34.8284 13.5 34L10.5 34ZM13.0607 0.93934C12.4749 0.353553 11.5251 0.353553 10.9393 0.93934L1.3934 10.4853C0.807613 11.0711 0.807613 12.0208 1.3934 12.6066C1.97919 13.1924 2.92893 13.1924 3.51472 12.6066L12 4.12132L20.4853 12.6066C21.0711 13.1924 22.0208 13.1924 22.6066 12.6066C23.1924 12.0208 23.1924 11.0711 22.6066 10.4853L13.0607 0.93934ZM13.5 34L13.5 2L10.5 2L10.5 34L13.5 34Z" fill="#237FD0"/>
        </svg>
      </div>
      <h1 class="hidden lg:block summary__title" v-text="content.summary.title" />
      <ul class="summary__list m-auto hidden lg:grid grid-cols-2">
        <li 
          v-for="(item, i) in content.summary.menu" :key="i" @click="goToComponent(item.name)"
          class="summary__list__item flex items-center relative"
        >
          <p class="summary__list__item__text" v-html="`${item.title}`" />
          <svg width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="summary__list__icon">
            <rect width="22" height="11" fill="white" />
            <path d="M2.75 1.83301L10.8889 9.16634L19.0279 1.83301" stroke="#237FD0" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </li>
      </ul>
    </div>
    <ul class="summary__content container mx-auto mx-4">
      <slot />
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      resizeTimeout: null,
      useSmallBox: false,
    }
  },
  methods: {
    goToComponent(name) {
      this.$emit('goToSummary', name)
    },
    onScrollToUp(e) {
      let to = this.moveToUp
        ? this.offsetTop - 60
        : 0
      window.scroll({
        top: to,
        left: 0,
        behavior: 'smooth'
      })
      this.moveToDown = !this.moveToUp
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/sizes";
@import "~assets/css/colors";

.summary {
  .summary__arrow-up {
    display: block;
    z-index: 99999;
    position: absolute;
    right: 0;
    cursor: pointer;
    svg {
      position: fixed;
      right: 70px;
      //top: 690px;
      bottom: 200px;
      width: 50px;
      height: 52px;
      background: #E1E1EB;
      border-radius: 5px;
      padding: 13px;
      opacity: 0.8;
      @include media(">=lg") {
        width: 50px;
        height: 52px;
      }
      @include media(">=xl") {
        width: 56px;
        height: 58px;
      }
      @include media(">=2xl") {}
    }
    @include media("<=lg") {
      display: none;
    }
  }
  .summary__container {
    background: #fff;
    border-top-left-radius: 90px;
    border-bottom-right-radius: 90px;

    .summary__title {
      color: $primary;
      font-weight: 700;
      font-size: 40px;
      line-height: 115%;
      text-align: center;
      padding-top: 54px;
      @include media(">=lg") {
        font-size: 34px;
        padding-top: 54px;
      }
      @include media(">=xl") {
        font-size: 38px;
        padding-top: 64px;
      }
      @include media(">=2xl") {
        font-size: 40px;
        padding-top: 75px;
      }
    }

    .summary__list {
      counter-reset: css-counter 0;
      max-width: 980px;
      padding-top: 46px;
      padding-bottom: 74px;
      gap: 48px;
      @include media(">=lg") {
        max-width: 980px;
        padding-bottom: 74px;
        gap: 48px;
      }
      @include media(">=xl") {
        max-width: 1126px;
        padding-bottom: 84px;
        gap: 56px;
      }
      @include media(">=2xl") {
        max-width: 1218px;
        padding-bottom: 105px;
        gap: 64px;
      }

      .summary__list__item {
        counter-increment: css-counter 1;
        cursor: pointer;
        max-width: 567px;
        padding: 0 74px 0 21px;
        @include media(">=lg") {
          padding: 0 74px 0 21px;
        }
        @include media(">=xl") {
          padding: 0 80px 0 40px;
        }
        @include media(">=2xl") {
          padding: 0 93px 0 60px;
        }

        &:nth-child(1) {
          order: 1;
        }

        &:nth-child(2) {
          order: 2;
        }

        &:nth-child(3) {
          order: 3;
        }

        &:nth-child(4) {
          order: 4;
        }

        &:nth-child(5) {
          order: 5;
        }

        &:nth-child(6) {
          order: 6;
        }

        &:nth-child(7) {
          order: 7;
        }

        &:nth-child(8) {
          order: 8;
        }

        &:nth-child(9) {
          order: 9;
        }

        &:nth-child(10) {
          order: 10;
        }

        &:nth-child(11) {
          order: 11;
        }

        &:nth-child(12) {
          order: 12;
        }

        &:nth-child(13) {
          order: 13;
        }

        &:nth-child(14) {
          order: 14;
        }

        &:nth-child(15) {
          order: 15;
        }

        &:nth-child(16) {
          order: 16;
        }

        .summary__list__item__text {
          font-weight: 400;
          font-size: 18px;
          line-height: 100%;
          ::v-deep br {
            display: none;
          }
          @include media(">=lg") {
            font-size: 18px;
          }
          @include media(">=xl") {
            font-size: 20px;
          }
          @include media(">=2xl") {
            font-size: 22px;
          }
        }

        .summary__list__icon {
          transform: rotate(-90deg);
          position: absolute;
          right: 20px;
        }
      }
    }

    .summary__content {}
  }
}
</style>