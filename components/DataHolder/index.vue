<template>
  <section class="data-holder">
    <div class="flex flex-col w-full">
      <div class="data-holder__title">
        <h1 v-html="content.title" />
      </div>
      <div class="data-holder__container">
        <div class="data-holder__container__content">
          <p class="data-holder__description" v-html="content.description" />
          <ul class="data-holder__list grid grid-rows-1 lg:grid-rows-4 grid-flow-row lg:grid-flow-col relative">
            <li 
              class="data-holder__list__item relative"
              v-for="(item, i) in content.list"
              :key="i"
            >
              <CardList :content="item" />
            </li>
          </ul>
        </div>
        <div class="data-holder__more-information flex items-end flex-col lg:flex-row relative">
            <div class="data-holder__more-information__image relative">
              <ResponsiveImage 
                :lazyload="false" :sources="content.moreInformation.image.src" :alt="content.moreInformation.image.alt"
                class="" 
              />
          </div>
          <div class="data-holder__more-information__text" v-html="content.moreInformation.text" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CardList from "~/components/shared/CardList";
import ResponsiveImage from "~/components/ResponsiveImage";
export default {
  components: {
    CardList,
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
.data-holder {
  background: #fff;
  @include media(">=lg") {
    background: #fff;
    padding-top: 48px;
    padding-bottom: 59px;
  }
  @include media(">=xl") {
    padding-top: 48px;
  }
  @include media(">=2xl") {
    padding-top: 65px;
  }
  .data-holder__title {
    @include media(">=lg") {
      max-width: 600px;
    }
  }
  .data-holder__container {
    .data-holder__container__content {
      .data-holder__description {
        @include media("<=lg") {
          ::v-deep span {
            color: $primary;
            border-bottom: 2px solid $primary;
            display: revert;
          }
        }
        @include media(">=lg") {
          max-width: 551px;
          ::v-deep span {
            color: $primary;
            font-weight: 700;
            font-size: 16px;
            line-height: 150%;
            border-bottom: 2px solid $primary;
            display: revert;
          }
        }
      }
      .data-holder__list {
        padding-top: 73px;
        padding-bottom: 21px;
        gap: 35px;
        @include media(">=lg") {
          padding: 73px 0 132px;
          grid-template-columns: auto auto auto;
          gap: 60px 30px;
        }
        @include media(">=xl") {
          grid-template-columns: auto auto auto;
          gap: 90px 60px;
        }
        @include media(">=2xl") {
          grid-template-columns: 392px 392px 392px;
          gap: 110px 68px;
        }
        .data-holder__list__item {
          background: #FFFFFF;
          border: 2px solid $primary;
          border-radius: 4px;
          font-weight: 700;
          font-size: 16px;
          line-height: 150%;
          min-height: 89px;
          @include media(">=lg") {
            //padding-right: 11px;
            height: 108px;
          }
          &:nth-child(1) {
            position: relative;
            @include media("<=lg") {
              z-index: 11;
              /*&::after {
                content: "";
                width: 74px;
                position: absolute;
                top: calc(-74px/2 - 2px);
                left: 141px;
                border-top: 2px dashed $primary;
                transform: rotate(90deg);
              }*/
              &::before {
                content: "";
                width: 140px;
                height: 46px;
                position: absolute;
                border: 2.8px dashed $primary;
                border-radius: 10px;
                left: calc(50% - 140px + 3px);
                top: -46px;
                border-bottom: 0;
                border-left: 0;
                border-top-left-radius: 0;
                border-bottom-right-radius: 0;
              }
              &::after {
                content: "";
                width: 20px;
                height: 20px;
                position: absolute;
                border: 2.8px dashed $primary;
                border-radius: 10px;
                top: -64px;
                border-right: 0;
                border-bottom: 0;
                border-top-left-radius: 0;
                border-top: 0;
                left: calc(50% - 140px - 4px);
              }
            }
            @include media(">=lg") {
              order: 1;
              z-index: 11;
              &::after {
                content: "";
                width: 74px;
                position: absolute;
                top: calc(-74px/2 - 2px);
                left: 30px;
                border-top: 2px dashed $primary;
                transform: rotate(90deg);
              }
            }
            @include media(">=xl") {
              &::after {
                left: 78px;
              }
            }
            @include media(">=2xl") {
              &::after {
                left: 141px;
              }
            }
          }
          &:nth-child(2) {
            @include media("<=lg") {
              z-index: 10;
              &::after {
                content: "";
                width: 80px;
                position: absolute;
                top: calc(-80px/2 - 2px);
                left: calc(50% - 80px/2 + 2px);
                border-top: 2px dashed $primary;
                transform: rotate(90deg);
              }
            }
            @include media(">=lg") {
              order: 5;
              z-index: 10;
              position: relative;
              &::before {
                content: "";
                width: 100px;
                position: absolute;
                top: 50%;
                left: -100px;
                border-top: 2px dashed $primary;
              }
            }
          }
          &:nth-child(3) {
            @include media("<=lg") {
              z-index: 9;
              &::after {
                content: "";
                width: 80px;
                position: absolute;
                top: calc(-80px/2 - 2px);
                left: calc(50% - 80px/2 + 2px);
                border-top: 2px dashed $primary;
                transform: rotate(90deg);
              }
            }
            @include media(">=lg") {
              order: 9;
              z-index: 9;
              &::before {
                content: "";
                width: 100px;
                position: absolute;
                top: 50%;
                left: -100px;
                border-top: 2px dashed $primary;
              }
               &::after {
                content: "";
                width: 130px;
                position: absolute;
                bottom: calc(-130px/2 + -2px);
                left: calc(392px/2 - 110px/2);
                border-top: 2px dashed $primary;
                transform: rotate(90deg);
              }
            }
          }
          &:nth-child(4) {
            @include media("<=lg") {
              z-index: 8;
              &::after {
                content: "";
                width: 80px;
                position: absolute;
                top: calc(-80px/2 - 2px);
                left: calc(50% - 80px/2 + 2px);
                border-top: 2px dashed $primary;
                transform: rotate(90deg);
              }
            }
            @include media(">=lg") {
              order: 10;
              z-index: 10;
              &::before {
                content: "";
                width: 100px;
                position: absolute;
                top: 50%;
                left: -100px;
                border-top: 2px dashed $primary;
              }
            }
          }
          &:nth-child(5) {
            @include media("<=lg") {
              z-index: 7;
              &::after {
                content: "";
                width: 80px;
                position: absolute;
                top: calc(-80px/2 - 2px);
                left: calc(50% - 80px/2 + 2px);
                border-top: 2px dashed $primary;
                transform: rotate(90deg);
              }
            }
            @include media(">=lg") {
              order: 6;
              z-index: 11;
              &::before {
                content: "";
                width: 100px;
                position: absolute;
                top: 50%;
                left: -100px;
                border-top: 2px dashed $primary;
              }
            }
            ::v-deep .card-list__number {
              
            }
          }
          &:nth-child(6) {
            @include media("<=lg") {
              z-index: 6;
              &::after {
                content: "";
                width: 80px;
                position: absolute;
                top: calc(-80px/2 - 2px);
                left: calc(50% - 80px/2 + 2px);
                border-top: 2px dashed $primary;
                transform: rotate(90deg);
              }
            }
            @include media(">=lg") {
              order: 2;
              z-index: 12;
              &::after {
                content: "";
                width: 130px;
                position: absolute;
                bottom: calc(-130px/2 + -2px);
                left: calc(392px/2 - 110px/2);
                border-top: 2px dashed $primary;
                transform: rotate(90deg);
              }
            }
          }
          &:nth-child(7) {
            @include media("<=lg") {
              z-index: 5;
              &::after {
                content: "";
                width: 80px;
                position: absolute;
                top: calc(-80px/2 - 2px);
                left: calc(50% - 80px/2 + 2px);
                border-top: 2px dashed $primary;
                transform: rotate(90deg);
              }
            }
            @include media(">=lg") {
              order: 3;
              z-index: 13;
              &::after {
                content: "";
                width: 130px;
                position: absolute;
                bottom: calc(-130px/2 + -2px);
                left: calc(392px/2 - 110px/2);
                border-top: 2px dashed $primary;
                transform: rotate(90deg);
              }
            }
          }
          &:nth-child(8) {
            @include media("<=lg") {
              z-index: 4;
              &::after {
                content: "";
                width: 80px;
                position: absolute;
                top: calc(-80px/2 - 2px);
                left: calc(50% - 80px/2 + 2px);
                border-top: 2px dashed $primary;
                transform: rotate(90deg);
              }
            }
            @include media(">=lg") {
              order: 4;
              z-index: 14;
            }
          }
          &:nth-child(9) {
            @include media("<=lg") {
              z-index: 3;
              &::after {
                content: "";
                width: 80px;
                position: absolute;
                top: calc(-80px/2 - 2px);
                left: calc(50% - 80px/2 + 2px);
                border-top: 2px dashed $primary;
                transform: rotate(90deg);
              }
            }
            @include media(">=lg") {
              order: 8;
              z-index: 13;
              &::before {
                content: "";
                width: 100px;
                position: absolute;
                top: 50%;
                left: -100px;
                border-top: 2px dashed $primary;
              }
            }
          }
          &:nth-child(10) {
            @include media("<=lg") {
              z-index: 2;
              &::after {
                content: "";
                width: 80px;
                position: absolute;
                top: calc(-80px/2 - 2px);
                left: calc(50% - 80px/2 + 2px);
                border-top: 2px dashed $primary;
                transform: rotate(90deg);
              }
            }
            @include media(">=lg") {
              order: 7;
              z-index: 2;
              &::after {
                content: "";
                width: 130px;
                position: absolute;
                bottom: calc(-130px/2 + -2px);
                left: calc(392px/2 - 110px/2);
                border-top: 2px dashed $primary;
                transform: rotate(90deg);
              }
              &::before {
                content: "";
                width: 32px;
                position: absolute;
                top: calc(50% - 10px);
                right: -32px;
                border-top: 2px dashed $primary;
              }
              @include media(">=xl") {
                &::before {
                  width: 60px;
                  right: -60px;
                }
              }
              @include media(">=2xl") {
                &::before {
                  width: 70px;
                  right: -70px;
                }
              }
            }
          }
          &:nth-child(11) {
            @include media("<=lg") {
              z-index: 1;
              &::after {
                content: "";
                width: 80px;
                position: absolute;
                top: calc(-80px/2 - 2px);
                left: calc(50% - 80px/2 + 2px);
                border-top: 2px dashed $primary;
                transform: rotate(90deg);
              }
            }
            @include media(">=lg") {
              order: 11;
              z-index: 1;
            }
          }
          &:not(:last-child) {
            padding-left: 53px;
            .card-list {
              display: flex;
              //justify-content: center;
              align-items: center;
              height: 100%;
              ::v-deep .card-list__text {
                padding-right: 11px;
              }
            }
          }
          &:last-child {
            @include media("<=lg") {
              .card-list {
                padding: 14px 13px 0;
                ::v-deep .card-list__text {
                  padding-left: 53px;
                  padding-bottom: 21px;
                }
              }
              /*::v-deep .card-list__text {
                padding-left: 41px;
              }*/
            }
            @include media(">=lg") {
              position: relative;
              border: 0px;
              ::v-deep .card-list__text {
                padding-left: 53px;
                padding-bottom: 21px;
              }
              .card-list {
                //background: #f9f9fe;
                position: absolute;
                border: 2px solid $primary;
                border-radius: 4px;
                padding: 14px 13px 0;
              }
            }
            ::v-deep .card-list__exceptions {
              width: calc(100% + 13px*2);
              margin-left: -13px;
              .card-list__exceptions__items {
                padding: 10px 13px;
                &:nth-child(2n + 1) {
                  background: #eef4fd;
                }
              }
            }
          }
          ::v-deep .card-list__number {
            color: #fff;
            background: $primary;
            border: 0.489796px solid $primary;
            border-radius: 5px;
            position: absolute;
            width: 24px;
            height: 22px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 700;
            font-size: 12px;
            line-height: 100%;
            left: 18px;
            margin-top: 13px;
          }
          ::v-deep .card-list__text {
            @include media("<=lg") {
              font-size: 16px;
              padding: 10px;
            }
          }
        }
      }
    }
    .data-holder__more-information {
      @include media("<=lg") {
        width: calc(100% + 14px*2);
        margin-left: -14px;
      }
      @include media(">=lg") {
        background: #f8f7fe;
        width: 100%;
        height: 174px;
        padding: 0 55px;
        width: calc(100% + 55px * 2);
        margin-left: -55px;
      }
      .data-holder__more-information__text,
      .data-holder__more-information__image {
        @include media("<=lg") {
          padding: 0 14px 28px;
          margin: auto;
        }
        @include media(">=lg") {
          width: 451px;
          top: 10px;
        }
      }
      .data-holder__more-information__text {
        width: 100%;
        @include media("<=lg") {
          width: 100%;
          background: #F6F6FF;
          padding: 16px;
          margin-bottom: 58px;
        }
        @include media(">=lg") {
          height: 174px;
          padding: 28px 0;
        }
        ::v-deep a {
          color: $primary;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>