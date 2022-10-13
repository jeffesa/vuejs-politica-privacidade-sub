<template>
  <section class="personal-data-transfer">
    <div class="flex flex-col w-full">
      <div class="personal-data-transfer__title">
        <h1 v-html="content.title" />
      </div>
      <div class="personal-data-transfer__container">
        <div class="personal-data-transfer__container__content">
          <div class="personal-data-transfer__grid grid grid-cols-1 lg:grid-cols-2">
            <div class="personal-data-transfer__text__card order-2 lg:order-1">
              <div class="personal-data-transfer__text" v-html="content.text" />
              <div class="personal-data-transfer__card">
                <Card :content="content.card" />
              </div>
            </div>
            <div class="personal-data-transfer__image order-1 lg:order-2">
              <ResponsiveImage 
                :lazyload="false" :sources="content.image.src" :alt="content.image.alt"
                class="benefits-program__image order-1 lg:order-2 flex justify-end" 
              />
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
    },
    components: { Card }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/sizes";
@import "~assets/css/main";
@import "~assets/css/colors";

.personal-data-transfer {
  background: #fff;

  @include media(">=lg") {
    background: #f4f9fd;
  }
  .personal-data-transfer__title {
    @include media(">=lg") {
      width: 500px !important;
      height: 133px;
      margin: 48px 0 calc(32px - 16px) 0;
    }
    @include media(">=xl") {
      width: 590px !important;
      margin: 48px 0 calc(32px - 16px) 0;
    }
    @include media(">=2xl") {
      width: 668px !important;
      margin: 90px 0 42px 0;
    }
  }
  .personal-data-transfer__container {
    .personal-data-transfer__container__content {
      .personal-data-transfer__grid {
        @include media(">=lg") {
          grid-template-columns: 424px auto;
          gap: 20px;
        }
        @include media(">=xl") {
          grid-template-columns: 540px auto;
          gap: 60px;
        }
        @include media(">=2xl") {}
        .personal-data-transfer__text__card {
          .personal-data-transfer__text {
            margin: 40px 0 30px 0;
            
            ::v-deep strong {
              color: $primary;
            }

            @include media(">=lg") {
              line-height: 24px;
              margin-bottom: 90px;
            }
          }
          .personal-data-transfer__card {
            margin-bottom: 62px;
            @include media("<=lg") {
              padding: 0;
            }
            @include media(">=lg") {
              padding: 0 16px;
            }
            .card{
              background: #6C3BCE;
              width: calc(100% + 28px);
              margin-left: -14px;

              @include media(">=lg") {
                width: 532px;
                border-radius: 8px;
                margin: 0;
              } 
            }

            @include media(">=lg") {
              /*width: 532px;*/
              line-height: 24px;
              margin-bottom: 96px; 
              padding: 0;
            } 
          }
        }
        .personal-data-transfer__image {
          margin: 15px auto 0 auto;

          @include media(">=lg") {
            margin-top: 0px;
          }
          @include media(">=xl") {
            margin-top: -90px;
          }
          @include media(">=2xl") {
            margin-top: -110px;
          }
        }
      }
    }
  }
}
</style>