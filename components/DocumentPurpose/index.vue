<template>
  <section class="document-purpose">
    <div class="flex flex-col w-full">
      <div class="document-purpose__title">
        <h1 v-html="content.title" />
      </div>
      <div class="document-purpose__container">
        <div class="document-purpose__container__content">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="document-purpose__content flex flex-col order-2 lg:order-2">
              <Card :content="content.card" class="order-2 lg:order-1" />
              <p 
                class="document-purpose__information order-1 lg:order-2" 
                v-html="content.information" 
              />
              <div class="document-purpose__list__container grid grid-cols-1 lg:grid-cols-2 order-3 lg:order-3">
                <p 
                  class="document-purpose__text m-auto"
                  v-html="content.list.text" 
                />
                <ul class="document-purpose__list relative">
                  <li 
                    v-for="(item, i) in content.list.items" 
                    :key="i"
                    v-html="item"
                    class="document-purpose__item"
                  />
                </ul>
              </div>
              <p 
                class="document-purpose__more-information order-4 order-4" 
                v-html="content.moreInformation" 
              />
            </div>
            <ResponsiveImage
              :lazyload="false"
              :sources="content.image.src"
              :alt="content.image.alt"
              class="document-purpose__image order-1 lg:order-1"
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

.document-purpose {
  background: #fff;
    
    @include media(">=lg") {
      background: #f4f9fd;
      padding-bottom: 0px;
    }
    @include media(">=xl") {
      padding-top: 0px;
    }
    @include media(">=2xl") {
      padding-top: 48px;
    }

  .document-purpose__title {
    @include media(">=lg") {
      width: 424px !important;
      height: 133px;
      margin: 48px 0 calc(32px - 16px) auto;
    }
    @include media(">=xl") {
      width: 540px !important;
      margin: 48px 0 calc(32px - 16px) auto;
    }
    @include media(">=2xl") {
      width: 554px !important;
      margin: 48px 0 calc(32px - 16px) auto;
    }
  }

  .document-purpose__container {
    .document-purpose__container__content {
      @include media(">=lg") {
        margin-bottom: calc(55px - 16px);
      }
      @include media(">=xl") {
        margin-bottom: calc(55px - 16px);
      }
      @include media(">=2xl") {
        margin-bottom: calc(55px - 16px);
      }
    }
    .document-purpose__content {
      
      @include media(">=lg") {
        max-width: 424px;
        margin: 0 0 0 auto;
      }
      @include media(">=xl") {
        max-width: 540px;
      }
      @include media(">=2xl") {
        max-width: 554px;
      }

      .card {
        background: #fff;
        color: #B428C8;
        box-shadow: none;
        padding: 0 14px;

        ::v-deep strong {
          background: #B428C8;
          color: #fff;
          border-radius: 4px;
          padding: 0 6px;
        }

        @include media(">=lg") {
          background: #f9f9fe;
          padding: 0;
        }
      }
    
      .document-purpose__information {
        padding-bottom: 29px;

        ::v-deep strong {
          color: $primary;
        }
        
        @include media(">=lg") {
          padding-bottom: 50px;
        }
        @include media(">=xl") {}
        @include media(">=2xl") {}
      }

      .document-purpose__text {
        padding-bottom: 30px;
        
        @include media(">=lg") {
          text-align: right;
          margin-right: 29px;
          padding-bottom: 0px;
        }
        @include media(">=xl") {}
        @include media(">=2xl") {}
      }

      .document-purpose__list {
        @include media(">=lg") {
          padding: 5px 0 20px;
        }
      }

      .document-purpose__list {}
      .document-purpose__list__container {
        margin-bottom: 31px;
        
        @include media(">=lg") {
          margin-bottom: 59px;
        }
        @include media(">=xl") {}
        @include media(">=2xl") {}

        .document-purpose__list {
          list-style: circle;
          padding-left: 38px;
          
          @include media(">=lg") {
            padding-left: 46px;
          }
          @include media(">=xl") {}
          @include media(">=2xl") {}
          
          &::before {          
            content: "";
            height: 100%;
            background: $primary;
            position: absolute;
            left: -14px;
            width: 12px;
            border-radius: 0px 16px 16px 0px;
            @include media(">=lg") {
              width: 2px;
              left: -6px;
              border: 0;
              height: calc(100% + 20px);
              top: -10px;
            }
          }

          .document-purpose__item {
            line-height: 34px;
            
            @include media(">=lg") {
              //line-height: 36px;
              line-height: 100%;
              height: 36px;
              padding-top: 10px;
              padding-bottom: 10px;
            }
            @include media(">=xl") {}
            @include media(">=2xl") {}
          }
        }
      }

      .document-purpose__more-information {
        ::v-deep strong {
          color: $primary;
        }

        @include media("<=lg") {
          padding-bottom: calc(59px - 16px);
        }
        @include media(">=xl") {}
        @include media(">=2xl") {}
      }
    }

    .document-purpose__image {
      padding-top: 30px;
      margin: auto;
      @include media(">=lg") {
        margin: 60px -65px 0 -28px;
      }
      @include media(">=xl") {
        margin: 60px 0 0 -55px;
      }
      @include media(">=2xl") {
        margin: -60px 0 0 -55px;
      }
    }
  }
}
</style>