<template>
  <section class="about-us">
    <div class="flex flex-col w-full">
      <div class="about-us__title">
        <h1 v-html="content.title" />
      </div>
      <div class="about-us__container block">
        <div class="about-us__container__content">
          <div class="about-us__column1__informations flex flex-col lg:flex-col justify-between relative">
            <ResponsiveImage
              :lazyload="false"
              :sources="content.image.src"
              :alt="content.image.alt"
              class="about-us__image m-auto"
            />
            <p class="about-us__column1__description" v-html="content.column1.description" />
            <div class="about-us__column2">
              <p class="about-us__column2__description pb-6" v-html="content.column2.description" />
              <ul class="about-us__list flex flex-col mb-4">
                <li 
                  v-for="(item, i) in content.column2.list"
                  :key="i"
                  class="about-us__list__item grid grid-cols-2"
                >
                  <ResponsiveImage
                    :lazyload="false"
                    :sources="item.icon.src"
                    :alt="item.icon.alt"
                    class="about-us__list__icon pr-6 m-auto"
                  />
                  <p class="about-us__list__information" v-html="item.text" />
                </li>
              </ul>
              <p class="about-us__column2__information m-auto text-left text-left" v-html="content.column2.information" />
            </div>
            <div class="about-us__submarine__grid relative m-auto">
              <div class="about-us__submarine__container m-auto">
                <p class="about-us__submarine__text" v-html="content.submarine.text" />
                <ResponsiveImage
                  :lazyload="false"
                  :sources="content.submarine.image.src"
                  :alt="content.submarine.image.alt"
                  class="about-us__submarine__image m-auto"
                />
              </div>
              <p class="about-us__submarine__description" v-html="content.submarine.description" />
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

.about-us {
  background: #fff;
  @include media(">=lg") {
    padding: 48px 0 48px;
  }
  @include media(">=xl") {
    padding: 48px 0 48px;
  }
  @include media(">=2xl") {
    padding: 94px 0 65px;
  }

  .about-us__title {
    @include media("<=lg") {
      font-weight: 400;
      font-size: 16px !important;
      line-height: 100%;
    }
  }

  .about-us__container {
    margin-top: 0px;
    @include media(">=lg") {
      margin-top: 12px;
    }
    @include media(">=xl") {
      margin-top: 16px;
    }
    @include media(">=2xl") {
      margin-top: 26px;
    }
    .about-us__image {
      position: absolute;
      left: -19px;
      top: 2px;
      @include media(">=lg") {
        //left: -62px;
        top: 116px;
        width: 100%;
        ::v-deep {
          img {
            height: 414px;
            margin: auto;
          }
        }
      }
      @include media(">=xl") {
        left: -51px;
        top: 133px;
        width: auto;
        ::v-deep {
          img {
            height: auto;
            margin: auto;
          }
        }
      }
      @include media(">=2xl") {
        left: -57px;
        top: 132px;
        width: auto;
        ::v-deep {
          img {
            height: auto;
            margin: auto;
          }
        }
      }
    }
    .about-us__container__content {
      max-width: 1320px;
      padding-top: 24px !important;
      @include media("<=lg") {
        padding-bottom: 58px !important;
      }
      .about-us__column1__description {
        ::v-deep {
          strong {
            color: $primary;
          }
        }
        max-width: 460px;
        @include media("<=lg") {
          padding-right: 6px;
        }
      }
      .about-us__column1__informations {
        @include media("<=lg") {
          max-width: 338px;
          margin: auto;
        }
        .about-us__column2 {
          max-width: 338px;
          margin: 0 0 0 auto;
          padding-top: 250px;
          padding-left: 10px;
          @include media(">=lg") {
            max-width: 460px;
            padding-top: 0px;
            margin-top: 326px;
          }
          @include media(">=xl") {
            margin-top: 410px;
          }
          @include media(">=2xl") {
            margin-top: 52px;
          }
          .about-us__column2__description {
            padding-top: 16px;
            @include media(">=lg") {
              padding-top: 60px;
            }
          }
          .about-us__list {
            .about-us__list__item {
                grid-template-columns: auto 1fr;
                padding-bottom: 8px;
                @include media(">=lg") {
                  padding-bottom: 24px;
                }
                @include media(">=xl") {
                  padding-bottom: 28px;
                }
                @include media(">=2xl") {
                  padding-bottom: 37px;
                }
              .about-us__list__icon {}
              .about-us__list__information {}
            }
          }
          .about-us__column2__information {
            width: 316px;
            ::v-deep {
              span {
                font-weight: 700;
                color: $primary;
              }
            }
          }
        }
        .about-us__submarine__grid {
          @include media("<=lg") {
            max-width: 784px;
            margin-top: 14px;
          }
          @include media(">=lg") {
            max-width: 784px;
            margin-top: 100px;
          }
          .about-us__submarine__container {
            @include media("<=lg") {
              width: calc(100% + 12px*2 + 14px*2);
              margin-left: calc(12px - 14px);
            }
            .about-us__submarine__text {
              position: absolute;
              color: #fff;
              font-weight: 400;
              @include media("<=lg") {
                max-width: 292px;
                font-size: 12px;
                line-height: 150%;
                right: -17px;
                top: 67px;
              }
              @include media(">=lg") {
                max-width: 508px;
                font-size: 16px;
                line-height: 150%;
                margin-top: 100px;
                margin-left: 175px;
              }
            }
            .about-us__submarine__image {}
          }
          .about-us__submarine__description {
            color: #333;
            font-weight: 700;
            @include media("<=lg") {
              position: relative;
              top: -43px;
              right: -122px;
              font-size: 14px;
              line-height: 150%;
              max-width: 229px;
            }
            @include media(">=lg") {
              position: relative;
              top: -68px;
              right: -150px;
              font-size: 18px;
              line-height: 120%;
            }
          }
        }
      }
    }
  }
}
</style>