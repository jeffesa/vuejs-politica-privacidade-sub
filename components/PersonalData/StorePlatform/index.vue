<template>
  <div class="store-platform grid grid-cols-1 lg:grid-cols-2">
    <div class="flex flex-col items-end order-2 lg:order-1">
      <div class="store-platform__grid relative w-full">
        <div class="store-platform__rounded__content grid grid-cols-1 lg:grid-cols-3">
          <div class="store-platform__grid flex order-2 lg:order-1">
            <div class="store-platform__grid__place flex flex-col-reverse items-center lg:flex-col">
              <ResponsiveImage
                :lazyload="false"
                :sources="content.grid.data.places[0].icon.src"
                :alt="content.grid.data.places[0].icon.alt"
                class="store-platform__place__icon"
              />
              <p class="store-platform__place__label" v-html="content.grid.data.places[0].label"/>
            </div>
            <ResponsiveImage
              :lazyload="false"
              :sources="content.grid.arrow.src"
              :alt="content.grid.arrow.alt"
              class="store-platform__place__arrow hidden lg:block"
            />
          </div>
          <p 
            class="store-platform__circle order-1 lg:order-2 m-auto relative" 
            v-html="content.grid.data.text" 
          />
          <div class="store-platform__grid flex order-3">
            <ResponsiveImage
              :lazyload="false"
              :sources="content.grid.arrow.src"
              :alt="content.grid.arrow.alt"
              class="store-platform__place__arrow hidden lg:block"
            />
            <div class="store-platform__grid__place flex flex-col-reverse items-center lg:flex-col">
              <ResponsiveImage
                :lazyload="false"
                :sources="content.grid.data.places[1].icon.src"
                :alt="content.grid.data.places[1].icon.alt"
                class="store-platform__place__icon"
              />
              <p class="store-platform__place__label" v-html="content.grid.data.places[1].label"/>
            </div>
          </div>
        </div>
        <div class="store-platform__information">
          <!-- <ResponsiveImage
            :lazyload="false"
            :sources="content.grid.arrow.src"
            :alt="content.grid.arrow.alt"
            class="store-platform__information__icon hidden lg:block"
          />
          <ResponsiveImage
            :lazyload="false"
            :sources="content.grid.arrow.src"
            :alt="content.grid.arrow.alt"
            class="store-platform__information__icon hidden lg:block"
          /> -->
          <p 
            class="store-platform__information__text" 
            v-html="content.grid.information" 
            v-if="content.grid.information"
          />
        </div>
      </div>
      <p 
        class="store-platform__details"
        v-html="content.details" 
      />
    </div>
    <ResponsiveImage
      :lazyload="false"
      :sources="content.image.src"
      :alt="content.image.alt"
      class="store-platform__image order-1 lg:order-2"
    />
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
.store-platform {
  margin-bottom: 20px;
  @include media(">=lg") {
    margin-top: calc(73px - 16px);
    margin-bottom: 50px;
    grid-template-columns: 550px auto;
    gap: 20px;
  }
  @include media(">=xl") {
    margin-top: calc(73px - 16px);
    grid-template-columns: calc(530px + 50px) auto;
    gap: 50px;
  }
  @include media(">=2xl") {
    margin-top: calc(73px - 16px);
  }
  .store-platform__image {
    margin: 16px auto 51px;
    @include media(">=lg") {
      margin: -120px 0 0 auto;
    }
    @include media(">=xl") {
      margin: -120px 0 0 auto;  
    }
    @include media(">=2xl") {
      margin: -140px 0 0 auto;  
    }
  }
  .store-platform__grid {
    z-index: 1;
    margin-bottom: 14px;
    @include media(">=lg") {
      margin-bottom: 47px;
      &:before,
      &:after {
        z-index: -1;
        content: "";
        position: absolute;
        top: calc(192px/2);
        height: 277px;
      }
      /*&:before {
        left: 80px;
        border: 2px solid #FF5D00;
        border-right: 0;
        width: calc(50% - 80px);
        border-left: 0;
        border-bottom: 0;
      }
      &::after {
        border-top: 2px solid #6633CC;
        right: calc(170px/2 + 14px);
        width: 170px;
      }*/
    }

    @include media(">=lg") {
      max-width: 550px;
    }
    .store-platform__rounded__content {
      @include media("<=lg") {
        margin-bottom: 53px;
      }
      .store-platform__grid {
        .store-platform__grid__place {
          .store-platform__place__label {
            font-weight: 700;
            font-size: 14px;
            line-height: 150%;
            @include media(">=lg") {
              font-size: 18px;
              line-height: 100%;
              margin-top: 10px;
            }
          }
        }
        @include media("<=lg") {
          &:first-child {
            margin: auto;
            .store-platform__grid__place {
              position: relative;
              &::before {
                z-index: -1;
                content: "";
                width: 2px;
                height: 100%;
                background: #FF5D00;
                top: -2px;
                position: absolute;
              }
              .store-platform__place__icon {}
              .store-platform__place__label {
                padding: 33px 0 36px;
                color: #FF5D00;
              }
            }
          }
          &:last-child {
            margin: auto;
            position: relative;
            .store-platform__grid__place {
              &::before {
                z-index: -1;
                content: "";
                width: 2px;
                height: 100%;
                background: #6633CC;
                top: -2px;
                position: absolute;
              }
              .store-platform__place__icon {}
              .store-platform__place__label {
                padding: 36px 0 10px;
                color: #6633CC;
              }
            }
          }
          .store-platform__grid__place {
            .store-platform__place__icon {}
            .store-platform__place__label {
              //padding: 36px 0 6px;
            }
          }
        }
        @include media(">=lg") {
          &:first-child {
            margin: 0 0 0 auto;
            z-index: 9;
            .store-platform__grid__place {
              //margin-right: 60px;
              .store-platform__place__icon {
                margin-top: calc(192px/2 - 41px/2 - 3px);
              }
              .store-platform__place__label {
                padding: 0;
                color: #FF5D00;
              }
            }
            .store-platform__place__arrow {
              margin-right: -29px;
              margin-left: 53px;
              ::v-deep img {
                position: relative;
                right: 24px;
              }
            }
          }
          &:last-child {
            margin: 0;
            .store-platform__grid__place {
              //margin-left: 33px;
              .store-platform__place__icon {
                margin-top: calc(192px/2 - 41px/2 + 2px);
              }
              .store-platform__place__label {
                padding: 0;
                color: #6633CC;
              }
            }
            .store-platform__place__arrow {
              margin-left: -34px;
              margin-right: 59px;
              ::v-deep img {
                transform: rotate(180deg);
                position: relative;
                left: 40px;
                filter: invert(27%) sepia(97%) saturate(1595%) hue-rotate(245deg) brightness(78%) contrast(108%);
              }
            }
          }
        }
        .store-platform__grid__place {
          .store-platform__place__icon {
            ::v-deep img {
              background: #fff;
              @include media("<=lg") {
                padding: 5px 0;
              }
            }
          }
          .store-platform__place__label {
            position: relative;
            &::before {
              z-index: -1;
              content: "";
              background: #fff;
              width: 100%;
              height: 22px;
              position: absolute;
            }
          }
        }
        .store-platform__place__arrow {
          @include media(">=lg") {
            margin-top: calc(192px/2 - 20px/2 + 5px);
          }
        }
      }
      .store-platform__circle {
        z-index: 9;
        width: 159px;
        height: 159px;
        background: #e9f2fa;
        color: #237FD0;
        border-radius: 50%;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        font-size: 14px;
        line-height: 150%;
        @include media("<=lg") {
          padding: 0 22px;
          font-size: 14px;
          line-height: 100%;
        }
        @include media(">=lg") {
          width: 192px;
          height: 192px;
          font-size: 18px;
          line-height: 100%;
          padding: 0 22px;
        }
      }
    }
    .store-platform__information {
      position: relative;
      .store-platform__information__icon {
        &:first-of-type {
          position: absolute;
          top: -44px;
          left: -8px; 
          transform: rotate(-90deg);
        }
        &:last-of-type {
          position: absolute;
          left: 34px; 
          transform: rotate(180deg);
          @include media(">=lg") {
            left: 34px; 
            bottom: 41px;
          }
          @include media(">=xl") {
            bottom: 80px;
          }
          @include media(">=2xl") {
            bottom: 80px;
          }
        }
      }
      .store-platform__information__text {
        background: #fff;
        border: 2px solid #FF5D00;
        border-radius: 16px;
        padding: 16px;
        @include media(">=lg") {
          position: relative;
          z-index: 9;
          max-width: 336px;
          border-radius: 8px;
          margin-left: 64px;
          padding: 28px 25px 15px;
          margin-top: 79px;
        }
      }
    }
  }
  .store-platform__details {
    @include media(">=lg") {
      max-width: 554px;
    }
  }
}
</style>