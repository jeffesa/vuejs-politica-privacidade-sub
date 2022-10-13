<template>
  <section class="benefits-program">
    <div class="flex flex-col w-full">
      <div class="benefits-program__title">
        <h1 v-html="content.title" />
      </div>
      <div class="benefits-program__container">
        <div class="benefits-program__container__content">
          <div class="benefits-program__grid grid grid-cols-1 lg:grid-cols-2 relative">
            <div class="order-2 lg:order-1">
              <div class="flex flex-col lg:flex-row overflow-hidden lg:overflow-visible">
                <Card :content="content.card.text" class="benefits-program__card relative z-10">
                  <svg width="110" height="24" viewBox="0 0 110 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="benefits-program__grid__svg">
                    <path d="M1.75525 10.5C0.926822 10.5 0.255249 11.1716 0.255249 12C0.255249 12.8284 0.926822 13.5 1.75525 13.5L1.75525 10.5ZM64.992 12L64.992 10.5L64.992 12ZM108.963 13.0607C109.549 12.4749 109.549 11.5251 108.963 10.9393L99.4174 1.39341C98.8316 0.80762 97.8818 0.80762 97.296 1.39341C96.7103 1.97919 96.7103 2.92894 97.296 3.51473L105.781 12L97.296 20.4853C96.7103 21.0711 96.7103 22.0208 97.296 22.6066C97.8818 23.1924 98.8316 23.1924 99.4174 22.6066L108.963 13.0607ZM1.75525 13.5L64.992 13.5L64.992 10.5L1.75525 10.5L1.75525 13.5ZM64.992 13.5L107.903 13.5L107.903 10.5L64.992 10.5L64.992 13.5Z" fill="#0A00B4"/>
                  </svg>
                </Card>
                <p class="benefits-program__card__information text-center lg:text-left" v-html="content.card.information" />
              </div>
              <p class="benefits-program__description" v-html="content.description" />
            </div>
            <ResponsiveImage 
              :lazyload="false" :sources="content.image.src" :alt="content.image.alt"
              class="benefits-program__image order-1 lg:order-2 flex justify-end" 
            />
          </div>
          <ul class="benefits-program__list grid grid-cols-1 lg:grid-cols-4">
            <li v-for="(item, i) in content.list" :key="i" class="benefits-program__list__item flex items-center" v-html="item" />
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Card from "~/components/shared/Card";
import ResponsiveImage from "~/components/ResponsiveImage";
export default {
  components: {
    ResponsiveImage,
    Card
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
.benefits-program {
  background: #fff;
  @include media(">=lg") {
    padding-top: 48px;
    padding-bottom: 59px;
  }
  @include media(">=xl") {
    padding-top: 48px;
  }
  @include media(">=2xl") {
    padding-top: 65px;
  }
  .benefits-program__title {}
  .benefits-program__container {
    .card {
      @include media("<=lg") {
        margin-bottom: 53px !important;
      }
    }
    .benefits-program__container__content {
      @include media("<=lg") {
        margin-bottom: 59px;
        padding-top: 30px !important;
      }
      @include media(">=lg") {
        margin-top: calc(59px - 16px);
      }
      .benefits-program__grid {
        @include media(">=lg") {
          grid-template-columns: 714px auto;
          margin-bottom: 58px;
        }
        @include media(">=xl") {
          grid-template-columns: 714px auto;
          margin-bottom: 58px;
        }
        @include media(">=2xl") {
          grid-template-columns: 792px auto;
          margin-bottom: 58px;
        }
        .benefits-program__card {
          height: fit-content;
          @include media("<=lg") {
            width: 100%;
            margin-left: 0;
            border-radius: 16px;
          }
          @include media(">=lg") {
            max-width: 430px;
          }
          @include media(">=xl") {
            max-width: 494px;
          }
          @include media(">=2xl") {
            max-width: 554px;
          }
        }
        .benefits-program__card__information {
          color: $primary;
          font-weight: 700;
          font-size: 14px;
          line-height: 120%;
          padding-bottom: 27px;
          @include media(">=lg") {
            width: 150px;
            position: relative;
            right: -69px;
            bottom: -94px;
            padding-bottom: 0;
            font-size: 15px;
          }
          @include media(">=xl") {
            width: 164px;
            right: -69px;
            font-size: 18px;
            font-size: 16px;
          }
          @include media(">=2xl") {
            width: 164px;
            right: -95px;
            font-size: 18px;
            font-size: 16px;
          }
        }
        .benefits-program__description {
          padding-bottom: 27px;
          @include media(">=lg") {
            padding-bottom: 0;
            max-width: 430px;
          }
          @include media(">=xl") {
            max-width: 494px;
          }
          @include media(">=2xl") {
            max-width: 554px;
          }
        }
        .benefits-program__grid__svg {
          position: absolute;
          z-index: -1;
          @include media("<=lg") {
            right: calc(50% - 110px/2);
            bottom: 19px;
            transform: rotate(90deg);
          }
          @include media(">=lg") {
            right: -47px;
          }
          @include media(">=xl") {
            right: -47px;
          }
          @include media(">=2xl") {
            right: -80px;
          }
        }
      }
      .benefits-program__image {
        @include media("<=lg") {
          margin-right: -14px;
          padding-bottom: 60px;
        }
        @include media(">=lg") {
          position: absolute;
          right: 0px;
          top: -60px;
          max-width: 380px;
        }
        @include media(">=xl") {
          position: absolute;
          right: 0px;
          top: -120px;
          max-width: 500px;
        }
        @include media(">=2xl") {
          position: absolute;
          right: 0px;
          top: -140px;
          max-width: fit-content;
        }
        ::v-deep {
          img {
            @include media(">=lg") {
              margin-right: -55px;
              //margin-top: -170px;
            }
          }
        }
      }
    }
    .benefits-program__list {
      gap: 30px 0;
      justify-content: center;
      grid-template-columns: 270px;
      @include media(">=lg") {
        grid-template-columns: 280px 280px 280px;
        gap: 25px;
        //justify-content: flex-start;
      }
      @include media(">=xl") {
        grid-template-columns: auto auto auto auto;
        gap: 25px;
      }
      @include media(">=2xl") {
        grid-template-columns: 271px 271px 271px 271px;
        gap: 42px 79px;
      }
      .benefits-program__list__item {
        @include media(">=lg") {
          background: rgba(225, 225, 235, 0.3);
        }
        border: 2px solid $primary;
        border-radius: 8px;
        font-weight: 400;
        line-height: 150%;
        text-align: center;
        color: $primary;
        padding: 16px;
        font-size: 14px;
        @include media(">=lg") {
          min-height: 225px;
          padding: 0 24px;
          font-size: 14px;
        }
        @include media(">=xl") {
          font-size: 14px;
        }
        @include media(">=2xl") {
          font-size: 16px;
        }
      }
    }
  }
}
</style>