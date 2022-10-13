<template>
  <section class="personal-data-purposes">
    <div class="flex flex-col w-full">
      <div class="personal-data-purposes__title">
        <h1 v-html="content.title" />
      </div>
      <div class="personal-data-purposes__container">
        <div class="personal-data-purposes__container__content">
          <PlaneList :content="content.PlaneListServices" class="personal-data-purposes__planelist-services"/>
          <PlaneList :content="content.PlaneListMarketing" class="personal-data-purposes__planelist-marketing"/>
          <PlaneList :content="content.PlaneListProcess" class="personal-data-purposes__planelist-process"/>
          <PlaneList :content="content.PlaneListLaws" class="personal-data-purposes__planelist-laws"/>
          <PlaneList :content="content.PlaneListRights" class="personal-data-purposes__planelist-rights"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PlaneList from "./PlaneList";
export default {
  components: {
    PlaneList
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
.personal-data-purposes {
  @include media(">=lg") {
    background: #f4f9fd;
  }
  .personal-data-purposes__title {
    @include media(">=lg") {
      margin: 48px 0 calc(60px - 32px);
      max-width: 667px;
    }
    @include media(">=xl") {
      margin: 48px 0 calc(60px - 32px);
    }
    @include media(">=2xl") {
      margin: 37px 0 calc(60px - 32px);
    }
  }
  .personal-data-purposes__container {
    .personal-data-purposes__container__content {
      @include media("<=lg") {
        padding-bottom: 0 !important;
      }
    }
    .personal-data-purposes__planelist-services {
      ::v-deep {
        .plane-list__title {
          //display: none !important;
          margin-top: 16px !important;
        }
      }
    }
    .personal-data-purposes__planelist-marketing {
      ::v-deep {
        .plane-list__container{
          background: #fff !important;
          margin-top: 44px;
        }
        .plane-list__content {
          @include media("<=lg") {
            padding-top: 36px !important;
          }
          @include media(">=lg") {
            margin-top: 60px;
            height: 746px;
          }
        }
        .plane-list__top {
          &:nth-child(2) {
            @include media("<=lg") {
              margin-left: 0px !important;
              max-width: 297px !important;
              //margin-r: auto;
              .plane-list__point {
                top: -144px !important;
                left: 22px !important;
              }
            }
            @include media(">=lg") {
              order: 0 !important;
              max-width: 395px !important;
              margin-right: auto;
              height: fit-content !important;
              .plane-list__point {
                top: 100% !important;
                right: -5px !important;
              }
            }
          }
          &:nth-child(3) {
            @include media("<=lg") {
              .plane-list__point {
                top: 120px !important;
                left: 180px !important;
              }
            }
            @include media(">=lg") {
              order: 0 !important;
              max-width: 395px !important;
              top: 1 !important;
              margin-left: auto !important;
              height: fit-content !important;
              margin-bottom: 0 !important;
              top: 0;
              left: -44px;
              .plane-list__point {
                top: 100% !important;
                left: -97px !important;
              }
            }
          } 
          &:nth-child(4) {
            @include media("<=lg") {
              .plane-list__point {
                top: -280px !important;
                right: 21px !important;
                left: auto !important;
              }
            }
            @include media("<=lg") {
              max-width: 100% !important;
            }
            @include media(">=lg") {
              order: 2 !important;
              max-width: 362px !important;
              position: absolute;
              bottom: 0;
              right: 44px;
              height: fit-content !important;
              .plane-list__point {
                top: -156px !important;
                left: -10px !important;
              }
            }
          }  
        }
        .plane-list__title {
          background: #FFC300 !important;
        }
        .plane-list__top {
          background: #FFF1CD !important;
          border: 2px solid #FFC727;
          margin-bottom: 34px;
        }
        .plane-list {
          display: none !important;
          background: #fff !important;
        }
        .plane-list__image {
          @include media("<=lg") {
            order: 2 !important;
          }
          @include media(">=lg") {
            padding-left: 0 !important;
            margin-top: 162px;
          }
        }
        .plane-list__item__text {
          span {
            color: #FFC300 !important;
          }
          strong {
            color: $primary;
          }
        }
      }
    }
    .personal-data-purposes__planelist-process {
      ::v-deep {
        .plane-list__container{
          background: #eeeef6 !important;
          margin-top: 0px;
          @include media("<=lg") {
            padding-top: 16px;
          }
        }
        .plane-list__content {
          @include media("<=lg") {
            padding-top: 36px !important;
          }
          @include media(">=lg") {
            margin-top: 92px;
            height: 582px;
          }
        }
        .plane-list__top {
          &:nth-child(2) {
            @include media("<=lg") {
              margin-left: 0px !important;
              max-width: 100% !important;
              order: 1 !important;
              .plane-list__point {
                top: 78px !important;
                left: 22px !important;
              }
            }
            @include media(">=lg") {
              order: 0 !important;
              max-width: 287px !important;
              margin-right: auto;
              height: fit-content !important;
              .plane-list__point {
                top: 41px !important;
                right: -123px !important;
              }
            }
          }
          &:nth-child(3) {
            @include media("<=lg") {
              .plane-list__point {
                top: 100px !important;
                left: 92px !important;
              }
              max-width: 216px !important;
              margin: 0 0 0 auto;
            }
            @include media(">=lg") {
              order: 2 !important;
            }
            @include media(">=lg") {
              order: 0 !important;
              max-width: 300px !important;
              top: 1 !important;
              margin-left: auto !important;
              height: fit-content !important;
              margin-bottom: 0 !important;
              top: 0;
              left: -74px;
              .plane-list__point {
                top: 35px !important;
                left: -259px !important;
              }
            }
          } 
          &:nth-child(4) {
            @include media("<=lg") {
              .plane-list__point {
                top: -51px !important;
                right: 158px !important;
                left: auto !important;
              }
            }
            @include media("<=lg") {
              max-width: 241px !important;
            }
            @include media(">=lg") {
              order: 2 !important;
              max-width: 317px !important;
              top: 40px;
              height: fit-content !important;
              .plane-list__point {
                top: 88px !important;
                left: 204px !important;
              }
            }
          }  
          &:nth-child(5) {
            @include media("<=lg") {
              max-width: 100% !important;
            }
            @include media(">=lg") {
              max-width: 317px !important;
              position: absolute;
              bottom: 56px;
              right: 74px;
            }
            .plane-list__point {
              @include media("<=lg") {
                top: -284px !important;
                right: 18px !important;
                left: auto !important;
              }
              @include media(">=lg") {
                top: -165px !important;
                left: 10px !important;
                right: auto !important;
              }
            }
          }
        }
        .plane-list__title {
          background: #A5A5B9 !important;
        }
        .plane-list__top {
          background: #F3F3F3 !important;
          border: 2px solid #A5A5B9;;
          margin-bottom: 19px;
        }
        .plane-list {
          display: none !important;
          background: #fff !important;
        }
        .plane-list__image {
          @include media("<=lg") {
            order: 2 !important;
          }
          @include media(">=lg") {
            padding-left: 0 !important;
          }
        }
        .plane-list__item__text {
          span {
            color: #A5A5B9 !important;
          }
        }
      }
    }
    .personal-data-purposes__planelist-laws {
      ::v-deep {
        .plane-list__container{
          margin-top: 0px;
          @include media("<=lg") {
            margin-top: 60px;
            background: #fff !important;
          }
          @include media(">=lg") {
            background: #eaeaf4 !important;
          }
        }
        .plane-list__content {
          @include media("<=lg") {
            padding-top: 36px !important;
          }
          @include media(">=lg") {
            margin-top: 14px !important;
            height: 582px;
          }
          .grid {
            justify-items: center;
          }
        }
        .plane-list__top {
          &:nth-child(2) {
            @include media("<=lg") {
              margin-left: 0px !important;
              max-width: 292px !important;
              order: 1 !important;
              .plane-list__point {
                top: 78px !important;
                left: 22px !important;
              }
            }
            @include media(">=lg") {
              position: absolute;
              order: 0 !important;
              max-width: 287px !important;
              margin-right: auto;
              height: fit-content !important;
              right: 66px;
              top: 184px;
              .plane-list__point {
                top: 41px !important;
                right: -123px !important;
              }
            }
          }
          &:nth-child(3) {
            @include media("<=lg") {
              .plane-list__point {
                top: 100px !important;
                left: 92px !important;
              }
              max-width: 216px !important;
              margin: 0 0 0 auto;
            }
            @include media(">=lg") {
              order: 2 !important;
            }
            @include media(">=lg") {
              order: 0 !important;
              max-width: 300px !important;
              top: 1 !important;
              margin-left: auto !important;
              height: fit-content !important;
              margin-bottom: 0 !important;
              top: 0;
              left: -74px;
              .plane-list__point {
                top: 35px !important;
                left: -259px !important;
              }
            }
          } 
          &:nth-child(4) {
            @include media("<=lg") {
              .plane-list__point {
                top: -51px !important;
                right: 158px !important;
                left: auto !important;
              }
            }
            @include media("<=lg") {
              max-width: 241px !important;
            }
            @include media(">=lg") {
              order: 2 !important;
              max-width: 317px !important;
              top: 40px;
              height: fit-content !important;
              .plane-list__point {
                top: 88px !important;
                left: 204px !important;
              }
            }
          }  
          &:nth-child(5) {
            @include media("<=lg") {
              max-width: 100% !important;
            }
            @include media(">=lg") {
              max-width: 317px !important;
              position: absolute;
              bottom: 56px;
              right: 74px;
            }
            .plane-list__point {
              @include media("<=lg") {
                top: -284px !important;
                right: 18px !important;
                left: auto !important;
              }
              @include media(">=lg") {
                top: -165px !important;
                left: 10px !important;
                right: auto !important;
              }
            }
          }
        }
        .plane-list__title {
          background: #05004B !important;
        }
        .plane-list__top {
          background: #F2F4FF !important;
          border: 2px solid #05004B;;
          margin-bottom: 19px;
        }
        .plane-list {
          display: none !important;
          background: #fff !important;
        }
        .plane-list__image {
          @include media("<=lg") {
            order: 1 !important;
          }
          @include media(">=lg") {
            padding-left: 0 !important;
            margin-top: 0px;
          }
        }
        .plane-list__item__text {
          span {
            color: #05004B !important;
          }
          strong {
            color: $primary;
          }
        }
      }
    }
    .personal-data-purposes__planelist-rights {
      ::v-deep {
        .plane-list__container{
          background: #f9f9fe !important;
          @include media("<=lg") {
            padding-top: 16px;
          }
          @include media(">=lg") {
            margin-top: 0px;
          }
        }
        .plane-list__content {
          @include media("<=lg") {
            padding-top: 36px !important;
            padding-bottom: 80px !important;
          }
          @include media(">=lg") {
            margin-top: 14px !important;
            height: 582px;
          }
          .grid {
            justify-items: center;
          }
        }
        .plane-list__top {
          &:nth-child(2) {
            @include media("<=lg") {
              margin-left: 0px !important;
              max-width: 292px !important;
              order: 1 !important;
              .plane-list__point {
                top: -193px !important;
                right: 19px !important;
                left: auto !important;
              }
            }
            @include media(">=lg") {
              position: absolute;
              order: 0 !important;
              max-width: 298px !important;
              margin-right: auto;
              height: fit-content !important;
              right: 34px;
              top: 184px;
              .plane-list__point {
                top: 134px !important;
                left: -150px !important;
                right: auto;
              }
            }
          }
          &:nth-child(3) {
            @include media("<=lg") {
              .plane-list__point {
                top: 100px !important;
                left: 92px !important;
              }
              max-width: 216px !important;
              margin: 0 0 0 auto;
            }
            @include media(">=lg") {
              order: 2 !important;
            }
            @include media(">=lg") {
              order: 0 !important;
              max-width: 300px !important;
              top: 1 !important;
              margin-left: auto !important;
              height: fit-content !important;
              margin-bottom: 0 !important;
              top: 0;
              left: -74px;
              .plane-list__point {
                top: 35px !important;
                left: -259px !important;
              }
            }
          } 
          &:nth-child(4) {
            @include media("<=lg") {
              .plane-list__point {
                top: -51px !important;
                right: 158px !important;
                left: auto !important;
              }
            }
            @include media("<=lg") {
              max-width: 241px !important;
            }
            @include media(">=lg") {
              order: 2 !important;
              max-width: 317px !important;
              top: 40px;
              height: fit-content !important;
              .plane-list__point {
                top: 88px !important;
                left: 204px !important;
              }
            }
          }  
          &:nth-child(5) {
            @include media("<=lg") {
              max-width: 100% !important;
            }
            @include media(">=lg") {
              max-width: 317px !important;
              position: absolute;
              bottom: 56px;
              right: 74px;
            }
            .plane-list__point {
              @include media("<=lg") {
                top: -284px !important;
                right: 18px !important;
                left: auto !important;
              }
              @include media(">=lg") {
                top: -165px !important;
                left: 10px !important;
                right: auto !important;
              }
            }
          }
        }
        .plane-list__title {
          background: #FFC300 !important;
        }
        .plane-list__top {
          background: #FFFBED !important;
          border: 2px solid #F9DB7B;
          margin-bottom: 19px;
          @include media(">=lg") {
            margin-top: -92px !important;
            margin-right: -59px !important;
          }
        }
        .plane-list {
          display: none !important;
          background: #fff !important;
        }
        .plane-list__image {
          @include media("<=lg") {
            order: 1 !important;
          }
          @include media(">=lg") {
            padding-left: 0 !important;
            margin-top: 0px;
          }
        }
        .plane-list__item__text {
          span {
            color: #FFC300 !important;
          }
        }
      }
    }
  }
}
</style>