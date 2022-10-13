<template>
  <section class="privacy-policy">
    <div class="flex flex-col w-full">
      <div class="privacy-policy__title">
        <h1 v-html="content.title"/>
      </div>
      <div class="privacy-policy__container">
        <div class="privacy-policy__container__content">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="privacy-policy__information order-2 lg:order-1">
              <p v-html="content.informations[0]" class="privacy-policy__information__text"/>
              <ul class="privacy-policy__list flex flex-col m-auto">
                <li
                  v-for="(item, i) in content.list"
                  :key="i" 
                  class="privacy-policy__item grid grid-cols-1 lg:grid-cols-2 items-center"
                >
                  <ResponsiveImage
                    :lazyload="false"
                    :sources="item.icon.src"
                    :alt="item.icon.alt"
                    class="privacy-policy__list__icon"
                  />
                  <p v-html="item.text" class="text-center lg:text-left"/>
                </li>
              </ul>
              <p v-html="content.informations[1]" class="mb-6 privacy-policy__information__description"/>
              <Card :content="content.card" class="privacy-policy__information__card" />
              <p v-html="content.informations[2]" class="mb-8 lg:mb-0"/>
            </div>
            <ResponsiveImage
              :lazyload="false"
              :sources="content.image.src"
              :alt="content.image.alt"
              class="privacy-policy__image pt-4 lg:pt-0 pb-6 lg:pb-0 order-1 lg:order-2"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ResponsiveImage from "~/components/ResponsiveImage";
import Card from "~/components/shared/Card";

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
.privacy-policy {
  background: #fff;
  @include media(">=lg") {
    padding-top: 48px;
    padding-bottom: 0px;
  }
  @include media(">=xl") {
    padding-top: 48px;
  }
  @include media(">=2xl") {
    padding-top: 87px;
  }

  .privacy-policy__title {
    @include media(">=lg") {
      margin: auto 0 0 0;
      margin-bottom: 32px;
      max-width: 480px;
    }
    @include media(">=xl") {
      max-width: 540px;
    }
    @include media(">=2xl") {
      max-width: 559px;
    }
  }
  .privacy-policy__container {
    .privacy-policy__container__content {
      .grid {
        &:first-child {
          @include media(">=lg") {
            grid-template-columns: 480px auto;
          }
          @include media(">=xl") {
            grid-template-columns: 540px auto;
          }
          @include media(">=2xl") {
            grid-template-columns: 559px auto;
          }
        }
      }
      .privacy-policy__image {
        position: relative;
        margin: auto;
        ::v-deep img {
          margin: auto;
          /*@include media(">=lg") {
            position: absolute;
            left: -6px;
            margin-top: 40px;
          }*/
        }
        @include media(">=lg") {
          margin-right: -55px;
          bottom: -56px;
        }
        @include media(">=xl") {
          margin-right: -55px;
          bottom: -56px;
        }
        @include media(">=2xl") {
          margin-right: -55px;
          bottom: 10px;
        }
      }
      .privacy-policy__information {
        .privacy-policy__information__description {
          ::v-deep {
            strong {
              color: $primary;
            }
          }
        }
        .privacy-policy__information__card {
          background: #B428C8;
          margin-left: -55px;
          border-radius: 16px;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          @include media("<=lg") {
            width: calc(100% + 32px);
            margin-left: -16px;
            border-radius: 0;
          }
        }
        .privacy-policy__information__text {
          margin-bottom: 37px;
          @include media(">=lg") {
            margin-bottom: 39px;
          }
          ::v-deep {
            strong {
              color: $primary;
            }
          }
        }
        .privacy-policy__list {
          //border-radius: 39px;
          padding: 23px 32px;
          column-gap: 29px;
          //max-width: 286px;
          margin-bottom: 37px;
          @include media("<=lg") {
            border-top: 10px solid #237FD0;
            border-bottom: 10px solid #237FD0;
            width: calc(100% + 32px);
            margin-left: -16px;
          }
          @include media(">=lg") {
            border-left: 4px solid #237FD0;
            margin-bottom: 39px;
            max-width: 100%;
            grid-template-columns: 192px 129px 112px;
          }
          .privacy-policy__item {
            ::v-deep {
              strong {
                color: $primary;
              }
            }
            @include media("<=lg") {
              &:not(:last-child) {
                margin-bottom: 14px;
              }
            }
            @include media(">=lg") {
              grid-template-columns: 62px auto;
              &:not(:last-child) {
                margin-bottom: 21px;
              }
            }
            .privacy-policy__list__icon {
              @include media("<=lg") {
                margin: auto;
              }
            }
          }
        }
      }
    }
  }
}
</style>