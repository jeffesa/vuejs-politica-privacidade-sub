<template>
  <section class="personal-data">
    <div class="flex flex-col w-full">
      <div class="personal-data__title">
        <h1 v-html="content.title" />
      </div>
      <div class="personal-data__container">
        <div class="personal-data__container__content">
          <StorePlatform :content="content.storePlatform" />
          <DataProvided 
            :content="content.dataProvided"
            class="personal-data__store-platform"
          >
            <li
              v-for="(item, i) in content.dataProvided.list"
              :key="i"
            >
              <span v-html="item.title" />
              <p v-html="item.description" />
            </li>
          </DataProvided>
          <DataProvided 
            :content="content.dataPlatform" 
            class="personal-data__data-provided"
          >
            <li
              v-for="(item, i) in content.dataPlatform.list"
              :key="i"
              class="personal-data__data-provided__item"
            >
              <span v-html="item.title" />
              <p v-html="item.description" />
              <div 
                class="personal-data__data-related flex flex-col justify-center m-auto"
                v-if="content.dataPlatform.dataRelated"
              >
                <div 
                  class="personal-data__data-related__item" 
                  v-html="content.dataPlatform.dataRelated.title" 
                />
                <div 
                  class="personal-data__data-related__item"
                  v-for="(item, i) in content.dataPlatform.dataRelated.list"
                  :key="i"
                  v-html="item.example"
                />
              </div>
              <p 
              class="personal-data__data-provided__moreinformation"
                v-html="content.dataPlatform.moreInformation" 
              />
            </li>
          </DataProvided>
          <DataProvided 
            :content="content.dataShared" 
            class="personal-data__data-shared"
          >
            <li
              v-for="(item, i) in content.dataShared.list"
              :key="i"
              class="personal-data__data-shared__item"
            >
              <span v-html="item.title" />
              <p v-html="item.description" />
            </li>
          </DataProvided>
          <div class="personal-data__text-LGPD">
            <p v-html="content.lgpd" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import StorePlatform from "./StorePlatform";
import DataProvided from "./DataProvided";

export default {
  components: {
   StorePlatform,
   DataProvided
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
.personal-data {
  background: #fff;
  .personal-data__title {
    @include media(">=lg") {
      //margin: 48px 0 calc(32px - 16px) auto !important;
      margin: 48px calc(32px - 16px) 0 !important;
      max-width: 554px;
    }
    @include media(">=xl") {
      max-width: 525px !important;
      //margin: 48px 0 calc(32px - 16px) auto !important;
      margin: 48px calc(32px - 16px) 0 !important;
    }
    @include media(">=2xl") {
      max-width: 550px !important;
      //margin: 70px 0 59px auto !important;
      margin: 70px 59px 0 !important;
    }
  }
  .personal-data__container {
    .personal-data__container__content {
      .personal-data__text-LGPD {
        background: #EFEFFD;
        width: calc(100% + 28px);
        margin-left: -14px;
        padding: 14px;
        margin-bottom: calc(61px - 16px);

        ::v-deep {
          & span {
            font-weight: bold;
            color: $primary;
          }
        }

        @include media(">=lg") {
          display: flex;
          justify-content: center;
          align-items: center;
          width: calc(100% + 110px);
          margin-left: -55px;
          height: 142px;
          background: #fff !important;
          padding: 55px;
          margin-bottom: calc(96px - 16px);

          ::v-deep p {
            width: 745px;
            height: 75px;
          }
        }
        
      }
    }
  }
  .personal-data__data-provided {
    ::v-deep {
      @include media("<=lg") {
        margin-bottom: 0 !important;
      }
      .data-provided__informations {
        background: #FF8E4D;
        @include media("<=lg") {
          background: #FF5D00 !important;
        }
      }
      .data-provided__title {
        color: #FF8E4D !important;
        background: #fff !important;
        margin-bottom: 20px !important;
        @include media("<=lg") {
          color: #FF5D00 !important;
          padding-left: 34px !important;
          padding-right: 34px !important;
        }
      }
    }
    .personal-data__data-provided__item {
      background: #FFF5F0 !important;
      margin-bottom: 0px;
      @include media(">=lg") {
        padding-top: 27px !important;
        padding-right: 80px !important;
        padding-left: 80px !important;
        padding-bottom: 34px !important;
      }
      ::v-deep {
        span {
          color: #FF5D00 !important;
        }
      }
      .personal-data__data-related {
        position: relative;
        width: 100%;
        height: 100%;
        @include media(">=lg") {
          width: 163px;
          height: 163px;
          margin-top: 75px;
          margin-bottom: 75px;
          border-radius: 50%;
          border: 2px dashed #FF8E4D;
        }
        .personal-data__data-related__item {
          @include media("<=lg") {
            ::v-deep br {
              display: none;
            }
            &:nth-child(1) {
              padding-top: 16px;
              padding-bottom: 11px;
              font-weight: 700;
              font-size: 14px;
              line-height: 150%;
              color: #FF5D00;
            }
            &:not(:nth-child(1)) {
              background: rgba(255, 93, 0, 0.2);
              //border-radius: 4px;
              margin-bottom: 4px;
              padding: 4px 0;
              text-align: center;
            }
          }
          @include media(">=lg") {
            position: absolute;
            justify-content: center;
            display: flex;
            align-items: center;
            &:not(:nth-child(1)),
            &:not(:nth-child(2)), 
            &:not(:nth-child(3)), 
            &:not(:nth-child(4)), 
            &:not(:nth-child(5)), 
            &:not(:nth-child(6)), 
            &:not(:nth-child(7)),
            &:not(:nth-child(8)) { 
              width: 100%;
              &::before {
                position: absolute;
                content: "";
                width: 10px;
                height: 10px;
                background: #FF8E4D;
                border-radius: 50%;
              }
            }
             &:nth-child(1) {
              color: #FF8E4D;
              font-weight: 700;
              font-size: 18px;
              line-height: 100%;
              &::before {
                display: none;
              }
            }
            &:nth-child(2) {
              top: -44px;
              left: calc(10px/2);
              &::before {
                bottom: -24px;
              }
            }
            &:nth-child(3) {
              top: -7px;
              left: calc(163px/2 + 33px);
              &::before {
                left: 14px;
                top: 22px;
              }
            }
            &:nth-child(4) {
              top: 57px;
              left: calc(163px/2 + 88px);
              &::before {
                left: -14px;
                top: 17px;
              }
            }
            &:nth-child(5) {
              top: 120px;
              left: calc(163px/2 + 46px);
              &::before {
                left: 2px;
                top: 14px;
              }
            }
            &:nth-child(6) {
              bottom: -44px;
              left: calc(10px/2);
              &::before {
                bottom: 38px;
              }
            }
            &:nth-child(7) {
              bottom: -7px;
              right: calc(163px/2 + 88px);
              text-align: right;
              &::before {
                bottom: 38px;
                right: -27px;
              }
            }
            &:nth-child(8) {
              top: 21px;
              right: calc(163px/2 + 62px);
              text-align: right;
              &::before {
                bottom: 17px;
                right: 5px;
              }
            }
          }
        }
      }
      .personal-data__data-provided__moreinformation {
        @include media("<=lg") {
          margin-top: 29px;
          margin-bottom: 16px;
        }   
      }
    }
  }
  .personal-data__data-shared {
    ::v-deep {
      @include media("<=lg") {
        margin-bottom: 28px !important;
      }
      .data-provided__informations {
        background: #97007C;
        opacity: 1 !important;
        @include media("<=lg") {
          background: #fff !important;
          padding-bottom: 16px !important;
        }
      }
      .data-provided__title {
        color: #97007C !important;
        padding-right: 0 !important;
        padding-left: 0 !important;
        margin-bottom: 0 !important;
        @include media("<=lg") {
          background: #EFEFFD !important;
          color: #3A3A48 !important;
        }
      }
    }
    .personal-data__data-shared__item {
      height: 100%;
      background: #fbf4fa !important;
      @include media("<=lg") {
        background: #EFEFFD !important;
      }
      @include media(">=lg") {
        padding-right: 80px !important;
        padding-left: 80px !important;
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>