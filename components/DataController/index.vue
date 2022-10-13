<template>
  <section class="data-controller">
    <div class="flex flex-col w-full">
      <div class="data-controller__title">
        <h1 v-html="content.title" />
      </div>
      <div class="data-controller__container">
        <div class="data-controller__container__content">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="data-controller__informations order-2 lg:order-2">
              <p class="data-controller__description" v-html="content.description" />
              <div class="data-controller__list__container__scroll">
                <div class="data-controller__list__scroll">
                  <p class="data-controller__detach text-center" v-html="content.list.detach" />
                  <ul class="data-controller__list flex">
                    <li 
                      v-for="(item, i) in content.list.items"
                      :key="i"
                      class="data-controller__item"
                    >
                      <div class="data-controller__title__text">
                        <p class="data-controller__item__title flex justify-center items-center" v-html="item.title"/>
                        <p class="data-controller__item__information" v-html="item.text"/>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <Card :content="content.card" class="data-controller__card" />
            </div>
            <ResponsiveImage
              :lazyload="false"
              :sources="content.image.src"
              :alt="content.image.alt"
              class="data-controller__image m-auto order-1 lg:order-1"
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
.data-controller {
  background: #fff;
  @include media(">=lg") {
    background: #f4f9fd;
    padding-top: 48px;
  }
  @include media(">=xl") {
    padding-top: 48px;
  }
  @include media(">=2xl") {
    padding-top: 57px;
  }
  .data-controller__title {
    @include media(">=lg") {
      padding-bottom: 35px;
      max-width: 554px;
      margin: 0 0 0 auto;
    }
  }
  .data-controller__container {
    .data-controller__container__content {
      .grid {
        @include media(">=lg") {
          grid-template-columns: auto 558px;
          gap: 46px;;
        }
        @include media(">=xl") {
          gap: 46px;
        }
        @include media(">=2xl") {
          gap: 146px;
        }
      }
      .data-controller__informations {
        .data-controller__description {
          margin-bottom: 30px;
        }
        .data-controller__detach {
          background: #D6D6E6;
          border-radius: 4px;
          font-weight: 700;
          font-size: 14px;
          line-height: 17px;
          padding: 10px 0;
          margin-bottom: 19px;
        }
        .data-controller__list__container__scroll {
          @include media("<=lg") {
            display: flex;
            flex-wrap: nowrap;
            overflow-x: auto;
            margin-bottom: 28px;
          }
          .data-controller__list__scroll {
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 0;
            flex: 0 0 auto;
            @include media(">=lg") {
              margin-bottom: 48px;
            }
            .data-controller__list {
              //grid-template-columns: 173px 173px 150px;
              //column-gap: 29px;
              .data-controller__item {
                &:not(:last-child) {
                  width: 173px;
                  margin-right: 12px;
                }
                &:last-child {
                  width: 150px;
                  margin-left: 12px;
                }
                .data-controller__title__text {
                  .data-controller__item__title {
                    height: 46px;
                    background: #D6D6E6;
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 17px;
                  }
                  .data-controller__item__information {
                    height: 124px;
                    padding: 14px 16px;
                    background: #fff;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 150%;
                  }
                }
              }
            }
          }
        }
        .data-controller__card {
          background: #6633CC;
          padding: 16px;
          @include media("<=lg") {
            margin-bottom: 60px;
          }
          @include media(">=lg") {
            padding: 16px 32px;
          }
          ::v-deep {
            strong {
              text-decoration: underline;
            }
            @include media("<=lg") {
              width: 100%;
              margin-left: 0;
              border-radius: 16px;
            }
          }
        }
      }
      .data-controller__image {
        margin-top: 10px;
        margin-bottom: 32px;   
        @include media(">=lg") {
          margin-top: -130px;
          margin-right: 30px;
        }
             
      }
    }
  }
}
</style>