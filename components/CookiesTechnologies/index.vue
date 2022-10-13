<template>
  <section class="cookies-technologies">
    <div class="flex flex-col w-full">
      <div class="cookies-technologies__title">
        <h1 v-html="content.title" />
      </div>
      <div class="cookies-technologies__container">
        <div class="cookies-technologies__container__content">
          <div class="cookies-technologies__grid grid grid-cols-1 lg:grid-cols-2">
            <div>
              <p class="cookies-technologies__text" v-html="content.text" />
              <Card class="cookies-technologies__card" :content="content.card" />
            </div>
            <div class="cookies-technologies__todo">
              <p class="cookies-technologies__todo__title" v-html="content.todo.title" />
              <div class="grid grid-cols-1 lg:grid-cols-2">
                <div class="cookies-technologies__todo__image order-2 lg:order-1">
                  <ResponsiveImage 
                    :lazyload="false" :sources="content.todo.image.src" :alt="content.todo.image.alt"
                    class="benefits-program__image order-1 lg:order-2 flex justify-start lg:justify-end" 
                  />
                </div>
                <ul class="cookies-technologies__todo__list order-1 lg:order-2">
                  <li 
                    class="cookies-technologies__todo__item text-center"
                    v-for="(item, i) in content.todo.list"
                    :key="i"
                    v-html="item"
                  />
                </ul>
              </div>
              <p class="cookies-technologies__todo__description" v-html="content.todo.description" />
            </div>
          </div>
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
.cookies-technologies {
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
  .cookies-technologies__title {
    @include media(">=lg") {
      max-width: 420px;
    }
    @include media(">=xl") {
      max-width: 490px;
    }
    @include media(">=2xl") {
      margin-bottom: 30px;
      max-width: 600px;
    }
  }
  .cookies-technologies__container {
    .cookies-technologies__container__content {
      .cookies-technologies__grid {
        @include media(">=lg") {
          grid-template-columns: auto 600px;
          gap: 40px;
        }
        @include media(">=xl") {
          grid-template-columns: auto 610px;
          gap: 100px;
        }
        @include media(">=2xl") {
          grid-template-columns: auto 640px;
          gap: 135px;
        }
        .cookies-technologies__text {
          margin-top: calc(30px - 16px);
          margin-bottom: 27px;
          @include media(">=lg") {
            margin-bottom: 37px;
          }
          ::v-deep strong {
            color: $primary;
          }
        }
        .cookies-technologies__card {
          background: #855CD6;
          @include media("<=lg") {
            width: 100%;
            margin-left: 0;
            border-radius: 16px;
          }
        }
        .cookies-technologies__todo {
          @include media(">=lg") {
            margin-top: -40px;
          }
          @include media(">=xl") {
            margin-top: -90px;
          }
          @include media(">=2xl") {
            margin-top: -90px;
          }
          .cookies-technologies__todo__title {
            color: #000014;
            font-weight: 700;
            @include media("<=lg") {
              background: #f9f9fe;
              padding: 15px 49px;
              border-radius: 16px;
              border-bottom-left-radius: 0;
              border-bottom-right-radius: 0;
            }
            @include media(">=lg") {
              background: #E1E1EB;
              text-align: right;
              border-radius: 8px;
              padding: 11px 20px
            }
          }
          .cookies-technologies__todo__description {
            margin: 30px 0 calc(54px - 16px) auto;

            ::v-deep {
              & span {
                color: $primary !important;
                font-weight: bold;
              }
            }
            @include media(">=lg") {
              max-width: 456px;
              margin: 39px 0 0 auto;
            }
            @include media(">=xl") {
              max-width: 508px;
            }
            @include media(">=2xl") {
              max-width: 554px;
            }
          }
          .cookies-technologies__todo__image {
            margin-top: -19px;
            @include media(">=lg") {
              margin-top: -46px;
            }
          }
          .cookies-technologies__todo__list {
            @include media("<=lg") {
              background: #f9f9fe;
              padding: 0 24px 43px;
              border-radius: 16px;
              border-top-left-radius: 0;
              border-top-right-radius: 0;
            }

            @include media(">=lg") {
              margin: 29px 0 0 auto;
            }
            .cookies-technologies__todo__item {
              background: #FFFFFF;
              border: 1px solid #000014;
              border-radius: 4px;
              padding: 8px;
              &:not(:last-child) {
                margin-bottom: 12px;
              }
              @include media("<=lg") {
                font-size: 16px;
              }
              @include media(">=lg") {
                max-width: 265px;
                padding: 3px 36px 10px;
                &:not(:last-child) {
                  margin-bottom: 16px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>