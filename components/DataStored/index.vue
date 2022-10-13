<template>
  <section class="data-stored">
    <div class="flex flex-col w-full">
      <div class="data-stored__title">
        <h1 v-html="content.title" />
      </div>
      <div class="data-stored__container">
        <div class="data-stored__container__content">
          <div class="data-stored__grid grid grid-cols-1 lg:grid-cols-2">
            <ResponsiveImage 
              :lazyload="false" :sources="content.image.src" :alt="content.image.alt"
              class="data-stored__image" 
            />
            <div class="data-stored__grid__content flex flex-col">
              <p v-html="content.information" />
              <div class="data-stored__grid__content__bag grid grid-cols-1 lg:grid-cols-2">
                <ResponsiveImage 
                  :lazyload="false" :sources="content.icon.src" :alt="content.icon.alt"
                  class="data-stored__image__small" 
                />
                <ul class="data-stored__list">
                  <li 
                    class="data-stored__list__item"
                    v-for="(item, i) in content.list.items"
                    :key="i"
                    v-html="item"
                  />
                </ul>
              </div>
              <p v-html="content.description" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ResponsiveImage from "~/components/ResponsiveImage";
export default {
  component: {
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

.data-stored {
  background: #fff;
  @include media(">=lg") {
    background: #f4f9fd;
  }

  .data-stored__title {
    @include media(">=lg") {
      display: flex;
      justify-content: flex-end;
      margin-top: 68px;
      margin: 48px 0 calc(32px - 16px) auto;
      width: 540px !important;

      /*::v-deep h1 {
        width: 480px;
      }*/
    }
    @include media(">=xl") {
      margin: 48px 0 calc(32px - 16px) auto;
      width: 540px !important;
    }
    @include media(">=2xl") {
      margin: 68px 0 calc(32px - 16px) auto;
      width: 554px !important;
    }
  }

  .data-stored__container {
    .data-stored__container__content {
      padding: 30px 0 59px 0 !important;

      @include media(">=lg") {
        padding: 0;
      }
      @include media(">=xl") {}
      @include media(">=2xl") {}

      .data-stored__grid__content__bag {
        @include media(">=lg") {
          grid-template-columns: auto 363px;
          gap: 24px;
        }
        @include media(">=xl") {}
        @include media(">=2xl") {}
      }

      .data-stored__grid {
        @include media(">=lg") {
          grid-template-columns: auto 540px;
          gap: 40px;
        }
        @include media(">=xl") {
          grid-template-columns: auto 540px;
          gap: 60px;
        }
        @include media(">=2xl") {
          grid-template-columns: auto 554px;
          gap: 75px;
        }

        .data-stored__grid__content {
          ::v-deep strong {
            color: $primary;
          }
          @include media(">=lg") {
            width: 100%;
            gap: 20px;
          }
          @include media(">=xl") {
            width: 100%;
            gap: 28px;
          }
          @include media(">=2xl") {
            gap: 28px;
          }        
        }

        .data-stored__image__small {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 21px 0 40px 0;

          @include media(">=lg") {
            border-right: 2px solid #645AD7;
            margin: 0;
          }
          @include media(">=xl") {}
          @include media(">=2xl") {}  
        }

        .data-stored__image {
          margin: 0 auto 30px auto;

          @include media(">=lg") {
            //margin: 0 75px 0 0;
          }
          @include media(">=xl") {}
          @include media(">=2xl") {} 
        }

        .data-stored__list {
          display: grid;
          gap: 7px 0;

          &::before {          
            content: "";
            width: calc(100% + 28px);
            margin-left: -14px;
            height: 2px;
            background: #645AD7;
            display: block;
          }

          &::after {          
            content: "";
            width: calc(100% + 28px);
            margin-left: -14px;
            height: 2px;
            background: #645AD7;
            display: block;
            margin-bottom: 30px;
          }

          @include media(">=lg") {
            display: grid;
            border: 0;
            gap: 43px 0;
            margin-left: 15px;

            &::before {
              display: none;
            }

            &::after {
              display: none;
            } 
          }
          @include media(">=xl") {}
          @include media(">=2xl") {} 

          .data-stored__list__item {
            //margin-bottom: 7px;
            font-size: 14px;

            ::v-deep span {
              font-size: 22px;
              color: #645AD7;
              line-height: 0;
            }

            @include media(">=lg") {
              border-top: 0;
              //font-size: 16px;
              margin: 0;
            }
            @include media(">=xl") {}
            @include media(">=2xl") {} 
          }  
        }
      }
    }
  }
}
</style>