<template>
  <section class="personal-data-sharing">
    <div class="flex flex-col w-full">
      <div class="personal-data-sharing__title">
        <h1 v-html="content.title" />
      </div>
      <div class="personal-data-sharing__container">
        <div class="personal-data-sharing__container__content">
          <div class="personal-data-sharing__a__grid grid grid-cols-1 lg:grid-cols-2">
            <ResponsiveImage 
              :lazyload="false" :sources="content.topics[0].image.src" :alt="content.topics[0].image.alt"
              class="personal-data-sharing__a__image order-3 lg:order-1" 
            />
            <p 
              class="personal-data-sharing__a__information order-1 lg:order-2" 
              v-html="content.topics[0].information" 
            />
            <p 
              class="personal-data-sharing__a__topic order-2 lg:order-3" 
              v-html="content.topics[0].title" 
            />
            <p 
              class="personal-data-sharing__a__description order-4 lg:order-4" 
              v-html="content.topics[0].description" 
            />
          </div>
          <ul class="personal-data-sharing__partner__grid grid">
            <li
              v-for="(item, i) in content.topics[0].services"
              :key="i"
              :class="`personal-data-sharing__partner_item relative`"
            >
              <CardList class="personal-data-sharing__card-list" :content="item" />
            </li>
          </ul>
          <div class="personal-data-sharing__b__grid grid grid-cols-1 lg:grid-cols-2">
            
              <p 
                class="personal-data-sharing__b__topic text-center" 
                v-html="content.topics[1].title" 
              />
              <p 
                class="personal-data-sharing__b__description" 
                v-html="content.topics[1].description" 
              />
              <ul class="personal-data-sharing__b__list flex flex-col">
                <li 
                  class="personal-data-sharing__b__list__item flex"
                  v-for="(item, i) in content.topics[1].list"
                  :key="i"
                >
                  <p class="personal-data-sharing__b__list__item__number" v-html="item.number" />
                  <p class="personal-data-sharing__b__list__item__text" v-html="item.text" />
                </li>
              </ul>
              <ResponsiveImage 
                :lazyload="false" :sources="content.topics[1].image.src" :alt="content.topics[1].image.alt"
                class="personal-data-sharing__b__image order-3 lg:order-1" 
              />
          </div>
          <div class="personal-data-sharing__c__grid grid grid-cols-1 lg:grid-cols-2">
            <ResponsiveImage 
              :lazyload="false" :sources="content.topics[2].image.src" :alt="content.topics[1].image.alt"
              class="personal-data-sharing__c__image" 
            />
            <div class="personal-data-sharing__c__topics">
              <div>
                <p 
                  class="personal-data-sharing__c__title"
                  v-html="content.topics[2].title"
                />
              </div>
              <div class="personal-data-sharing__cd__container">
                <p 
                  class="personal-data-sharing__c__description"
                  v-html="content.topics[2].description"
                />
                <p 
                  class="personal-data-sharing__d__title text-center"
                  v-html="content.topics[3].title"
                />
                <p 
                  class="personal-data-sharing__d__description"
                  v-html="content.topics[3].description"
                />
                <div class="personal-data-sharing__d__provider">
                  <ul 
                    class="personal-data-sharing__d__provider__list flex justify-center items-center"
                  >
                    <li 
                      v-for="(item, i) in content.topics[3].provider"
                      :key="i"
                      class="personal-data-sharing__d__provider__list__item"
                    >
                      <p v-html="item" />
                    </li>
                  </ul>
                </div>
                <p 
                  class="personal-data-sharing__d__information"
                  v-html="content.topics[3].information"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ResponsiveImage from "~/components/ResponsiveImage";
import CardList from "~/components/shared/CardList";
export default {
  components: {
    ResponsiveImage,
    CardList
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
.personal-data-sharing {
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
  .personal-data-sharing__title {
    @include media(">=lg") {
      margin: 0 0 0 auto;
      margin-bottom: calc(62px - 16px);
      max-width: 554px;
    }
  }
  .personal-data-sharing__container {
    .personal-data-sharing__container__content {
      @include media("<=lg") {
        padding-top: 54px !important;
      }
      .personal-data-sharing__a__grid {
        @include media("<=lg") {
          gap: 26px;
        }
        @include media(">=lg") {
          grid-template-columns: auto 558px;
          grid-auto-rows: auto auto  auto;
          gap: 38px 98px;
        }
        .personal-data-sharing__a__image {
          ::v-deep img {
            margin: auto;
            @include media(">=lg") {
              height: auto;
            }
            @include media(">=xl") {
              height: 360px;
            }
            @include media(">=2xl") {
              height: 470px;
            }
          }
          @include media(">=lg") {
            margin-top: -84px;
            grid-column: 1;
            grid-row: 3 / 3;
          }
        }
        .personal-data-sharing__a__information {
          @include media(">=lg") {
            grid-column: 2;
            grid-row: 1 / 2;
          }
        }
        .personal-data-sharing__a__topic {
          padding: 13px;
          text-align: center;
          color: #41649B;
          border-radius: 8px;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          @include media("<=lg") {
            background: #D2E6FF;
            font-size: 14px;
            line-height: 150%;
            width: calc(100% + 14px);
            margin-right: -14px;
          }
          @include media(">=lg") {
            background: #EFEFFD;
            font-size: 18px;
            line-height: 120%;
            width: calc(100% + 55px);
            margin-right: -55px;
            grid-column: 2;
            grid-row: 2 / 2;
          }
        }
        .personal-data-sharing__a__description {
          ::v-deep strong {
              color: $primary;
          }

          ::v-deep span {
            border-bottom: 2px solid #41649B;
            display: revert;
          }
          @include media(">=lg") {
            grid-column: 2;
            grid-row: 3 / 3;
          }
        }
      }
      .personal-data-sharing__b__grid {
        ::v-deep p {
          & strong {
            color: #0A00B4;
          }
        }

        @include media("<=lg") {
          width: calc(100% + 14px*2);
          margin-left: -14px;
          padding-top: 66px;
        }
        @include media(">=lg") {
          gap: 0 20px;
          grid-template-columns: 480px auto;
          grid-auto-rows: repeat(100px, auto);
          grid-template-areas:
            "tp ."
            "dc ."
            "ls im";
          width: calc(100% + 55px*2);
          margin-left: -55px;
          padding-top: 119px;
        }
        @include media(">=xl") {
          gap: 0 20px;
          grid-template-columns: 540px auto;
          grid-auto-rows: repeat(100px, auto);
          grid-template-areas:
            "tp ."
            "dc ."
            "ls im";
          width: calc(100% + 55px*2);
          margin-left: -55px;
          padding-top: 119px;
        }
        @include media(">=2xl") {
          gap: 0 140px;
          grid-template-columns: 590px auto;
          grid-auto-rows: repeat(100px, auto);
          grid-template-areas:
            "tp ."
            "dc ."
            "ls im";
          width: calc(100% + 55px*2);
          margin-left: -55px;
          padding-top: 119px;
        }
        .personal-data-sharing__b__topic {
          background: rgba(180, 180, 240, 0.2);
          border-radius: 4px;
          color: $primary;
          font-weight: 700;
          @include media("<=lg") {
            order: 1;
            font-size: 14px;
            line-height: 150%;
            padding: 16px;
            width: calc(100% - 14px);
          }
          @include media(">=lg") {
            grid-area: tp;
            padding: 13px 0;
            font-size: 18px;
            line-height: 120%;
          }
        }
        .personal-data-sharing__b__description {
          @include media("<=lg") {
            order: 3;
            padding: 0 16px 40px;
          }
          @include media(">=lg") {
            grid-area: dc;
            padding: 29px 62px;
          }
        }
        .personal-data-sharing__b__list {
          @include media("<=lg") {
            order: 4;
          }
          @include media(">=lg") {
            grid-area: ls;
          }
          .personal-data-sharing__b__list__item {
            background: rgba(180, 180, 240, 0.2);
            @include media("<=lg") {
              width: calc(100% - 14px);
              padding: 8px 16px;
              margin-bottom: 18px;
            }
            @include media(">=lg") {
              padding: 16px 53px;
              margin-bottom: 16px;
            }
            .personal-data-sharing__b__list__item__number {
              padding-right: 24px;
              margin: auto 0;
              font-weight: 700;
              font-size: 16px;
              line-height: 100%;
              @include media(">=lg") {
                padding-right: 20px;
              }
            }
            .personal-data-sharing__b__list__item__text {}
          }
        }
        .personal-data-sharing__b__image {
          padding: 23px 28px 47px;
          @include media("<=lg") {
            order: 2;
            ::v-deep {
              img {
                margin: auto;
              }
            }
          }
          @include media(">=lg") {
            grid-area: im;
            margin-top: -224px;
          }
        }
      }
      .personal-data-sharing__c__grid {
        @include media("<=lg") {
          width: calc(100% + 14px*2);
          margin-left: -14px;
        }
        @include media(">=lg") {
          width: calc(100% + 55px*2);
          margin-left: -55px;
          grid-template-columns: auto 480px;
        }
        @include media(">=xl") {
          width: calc(100% + 55px*2);
          margin-left: -55px;
          grid-template-columns: auto 634px;
        }
        @include media(">=2xl") {
          width: calc(100% + 55px*2);
          margin-left: -55px;
          grid-template-columns: auto 634px;
        }
        .personal-data-sharing__c__image {
          @include media("<=lg") {
            margin-top: calc(63px - 18px);
            margin-bottom: 51px;
            ::v-deep {
              img {
                margin: auto;
              }
            }
          }
          @include media(">=lg") {
            margin: auto auto -31px 0;
          } 
        }
        .personal-data-sharing__c__topics {
          .personal-data-sharing__c__title {
            font-weight: 700;
            background: #FFEB6E;
            color: #A07300;
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;
            padding: 13px 42px 13px 24px;
            @include media("<=lg") {
              font-size: 14px;
              line-height: 150%;
              text-align: center;
              margin-bottom: 33px;
              //margin-right: -14px;
              position: relative;
              right: -14px;
            }
            @include media(">=lg") {
              /* margin-right: -55px; */
              font-size: 18px;
              line-height: 120%;
              margin-bottom: 30px;
            }
          }
          .personal-data-sharing__cd__container {
            @include media("<=lg") {
              //padding-left: 3px;
              //padding-right: 3px;
              margin-bottom: calc(69px - 16px);
            }
            @include media(">=lg") {
              //width: calc(100% + 55px);
              //padding-left: 20px;
              //padding-right: 59px;
            }
            .personal-data-sharing__c__description {
              @include media("<=lg") {
                margin-bottom: 46px;
                padding-left: 14px;
                padding-right: 14px;
              }
              @include media(">=lg") {
                padding: 0 59px 56px 20px;
              }
            }
            .personal-data-sharing__d__title {
              font-weight: 700;
              background: #E1E1EB;
              color: #000014;
              border-top-left-radius: 8px;
              border-bottom-left-radius: 8px;
              padding: 13px 42px 13px 24px;
              @include media("<=lg") {
                font-size: 14px;
                line-height: 150%;
                text-align: center;
                margin-bottom: 33px;
                //margin-right: -14px;
                position: relative;
                right: -14px;
              }
              @include media(">=lg") {
                //margin-right: -55px;
                font-size: 18px;
                line-height: 120%;
                margin-bottom: 30px;
              }
            }
            .personal-data-sharing__d__description {
              @include media("<=lg") {
                padding-left: 14px;
                padding-right: 14px;
              }
              @include media(">=lg") {
                padding: 0 59px 0 20px;
              }
            }
            .personal-data-sharing__d__provider {
              width: 100%;
              @include media("<=lg") {
                padding-left: 14px;
                padding-right: 14px;
              }
              .personal-data-sharing__d__provider__list {
                @include media("<=lg") {
                  margin: 22px 0;
                }
                @include media(">=lg") {
                  margin: 44px 0;
                  margin-left: -63px;
                }
                @include media(">=xl") {
                  margin-left: -66px;
                }
                @include media(">=2xl") {
                  margin-left: -66px;
                }
                position: relative;
                &:after {
                  content: '';
                  border-radius: 50%;
                  border: 2px dashed #A5A5B9;
                  @include media("<=lg") {
                    width: 66px;
                    height: 66px;
                  }
                  @include media(">=lg") {
                    width: 92px;
                    height: 92px;
                  }
                }
                .personal-data-sharing__d__provider__list__item {
                  position: relative;
                  &:first-child {
                    position: absolute;
                    @include media("<=lg") {
                      left: calc(100%/2 - 87px - 66px/2 - 16px);
                      width: 87px;
                    }
                    @include media(">=lg") {
                      left: calc(100%/2 - 98px - 92px/2 - 24px);
                      width: 98px;
                    }
                    p {
                      position: relative;
                      text-align: right;
                      @include media(">=lg") {
                        width: 98px;
                      }
                      @include media("<=lg") {
                        width: 87px;
                      }
                      &:after {
                        content: "";
                        background: #A5A5B9;
                        position: absolute;
                        border-radius: 50%;
                        @include media("<=lg") {
                          width: 10px;
                          height: 10px;
                          top: calc(100%/2 - 10px/2);
                          right: calc(-10px/2 - 1px - 16px);
                        }
                        @include media(">=lg") {
                          width: 14px;
                          height: 14px;
                          top: calc(100%/2 - 14px/2);
                          right: calc(-14px/2 - 1px - 24px);
                        }
                      }
                    }
                  }
                  &:last-child {
                    position: absolute;
                    @include media("<=lg") {
                      right: calc(100%/2 - 128px - 66px/2 - 16px);
                    }
                    @include media(">=lg") {
                      right: calc(100%/2 - 125px - 92px/2 - 24px);
                    }
                    @include media(">=xl") {
                      right: calc(100%/2 - 157px - 92px/2 - 24px);
                    }
                    @include media(">=2xl") {
                      right: calc(100%/2 - 157px - 92px/2 - 24px);
                    }
                    p {
                      position: relative;
                      text-align: left;
                      @include media("<=lg") {
                        width: 128px;
                      }
                      @include media(">=lg") {
                        width: 125px;
                      }
                      @include media(">=xl") {
                        width: 157px;
                      }
                      @include media(">=2xl") {
                        width: 157px;
                      }
                      &:after {
                        content: "";
                        background: #A5A5B9;
                        position: absolute;
                        border-radius: 50%;
                        @include media(">=lg") {
                          width: 14px;
                          height: 14px;
                          top: calc(100%/2 - 14px/2);
                          left: calc(-14px/2 - 1px - 24px);
                        }
                        @include media("<=lg") {
                          width: 10px;
                          height: 10px;
                          top: calc(100%/2 - 10px/2);
                          left: calc(-14px/2 - 1px - 16px);
                        }
                      }
                    }
                  }
                }
              }
              /*width: 92px;
              height: 92px;
              border-radius: 50%;
              border: 2px dashed #A5A5B9;
              padding-top: 100px;
              padding-top: 100px;
              position: relative;
              margin: auto;*/
              /*&:after {
                content: "";
                width: 92px;
                height: 92px;
                border-radius: 50%;
                border: 2px dashed #A5A5B9;
                position: absolute;
                top: 0;
              }*/
              li {
                &:first-child {
                  /*position: absolute;
                  width: 98px;
                  left: calc(-92px - 6px);
                  top: 50%;*/
                }
                &:last-child {
                  /*position: absolute;
                  width: 157px;
                  right: -157px;
                  top: 50%;*/
                }
              }
              /*width: 92px;
              height: 92px;*/
              //border: 2px dashed #A5A5B9;
            }
            .personal-data-sharing__d__information {
              @include media("<=lg") {
                padding-left: 14px;
                padding-right: 14px;
              }
              @include media(">=lg") {
                padding: 0 59px 0 20px;
              }
            }
          }
        }
      }
      .personal-data-sharing__partner__grid {
        @include media("<=lg") {
          gap: 31px;
        }
        @include media(">=lg") {
          gap: 20px;
          grid-template-columns: auto auto auto;
          grid-auto-rows: 1fr;
          /*grid-template-columns: repeat(4, 289px);
          grid-auto-rows: minmax(100px, auto);
          grid-template-areas:
            ". . p1 p2"
            "p5 p4 p3 ."
            "p6  p7 . .";*/
        }
        @include media(">=xl") {
          gap: 40px 20px;
          grid-template-columns: repeat(4, 289px);
          grid-auto-rows: minmax(100px, auto);
          grid-template-areas:
            ". . p1 p2"
            "p5 p4 p3 ."
            "p6  p7 p8 .";
        }
        @include media(">=2xl") {
          grid-gap: 60px;
          grid-template-columns: repeat(4, 298px);
          grid-auto-rows: minmax(100px, auto);
          grid-template-areas:
            ". . p1 p2"
            "p5 p4 p3 ."
            "p6  p7 p8 .";
        }
        .personal-data-sharing__partner_item {
          &:nth-child(1) {
            order: 1;
            position: relative;
            @include media("<=lg") {
              z-index: 7;
              &::before {
                z-index: -1;
                content: "";
                position: absolute;
                width: calc(100%/2 - 50px);
                height: 32px;
                border: 2px dashed #41649B;
                border-left: 0;
                border-bottom: 0;
                border-top-right-radius: 26px;
                right: 50%;
                top: -32px;
              }
              &::after {
                z-index: -1;
                content: "";
                position: absolute;
                width: 40px;
                height: 32px;
                border: 2px dashed #41649B;
                border-right: 0;
                border-top: 0;
                border-bottom-left-radius: 26px;
                left: calc(50% - (100%/2 - 50px) - 40px);
                top: -62px;
              }
            }
            @include media(">=lg") {
              z-index: 6;
              //grid-area: p1;
              /*&::before {
                z-index: -1;
                content: "";
                position: absolute;
                width: 30px;
                height: 35px;
                border: 2px dashed #41649B;
                border-left: 0;
                border-top: 0;
                border-bottom-right-radius: 43px;
                right: calc(-50% - 30px);
                top: -68px;
              }*/
              &::after {
                z-index: -1;
                content: "";
                position: absolute;
                width: 300px;
                height: 35px;
                border: 2px dashed #41649B;
                border-right: 0;
                border-bottom: 0;
                left: 150px;
                top: 50%;
                border-left: 0;
              }
            }
            @include media(">=xl") {
              z-index: 2;
              grid-area: p1;
              top: -95px;
              left: -47px;
              &::before {
                z-index: -1;
                content: "";
                position: absolute;
                width: 30px;
                height: 35px;
                border: 2px dashed #41649B;
                border-left: 0;
                border-top: 0;
                border-bottom-right-radius: 43px;
                right: calc(-50% - 30px);
                top: -68px;
              }
              &::after {
                z-index: -1;
                content: "";
                position: absolute;
                width: 300px;
                height: 35px;
                border: 2px dashed #41649B;
                border-right: 0;
                border-bottom: 0;
                border-top-left-radius: 43px;
                left: calc(289px/2 - 8px);
                top: -35px;
              }
            }
            @include media(">=2xl") {
              z-index: 2;
              grid-area: p1;
              top: 0;
              left: -32px;
              &::before {
                z-index: -1;
                content: "";
                position: absolute;
                width: 30px;
                height: 20px;
                border: 2px dashed #41649B;
                border-left: 0;
                border-top: 0;
                border-bottom-right-radius: 43px;
                right: calc(-50% - -48px);
                top: -43px;
              }
              &::after {
                z-index: -1;
                content: "";
                position: absolute;
                width: 220px;
                height: 23px;
                border: 2px dashed #41649B;
                border-right: 0;
                border-bottom: 0;
                border-top-left-radius: 43px;
                left: calc(300px/2);
                top: -25px;
              }
            }
          }
          &:nth-child(2) {
            order: 2;
            position: relative;
            @include media("<=lg") {
              z-index: 6;
              &::before {
                z-index: -1;
                content: "";
                position: absolute;
                width: 0;
                height: 50px;
                border: 2px dashed #41649B;
                border-left: 0;
                border-bottom: 0;
                right: 50%;
                top: -50px;
              }
            }
            @include media(">=lg") {
              z-index: 8;
              //grid-area: p2;
              //left: -48px;
              //top: 78px;
              /*&::after {
                z-index: -1;
                content: "";
                position: absolute;
                width: 300px;
                height: 100px;
                border: 2px dashed #41649B;
                border-left: 0;
                border-bottom: 0;
                border-top-right-radius: 100px;
                left: calc(-300px / 2 - 36px);
                top: -35px;
              }*/
              /*&::before {
                z-index: -1;
                content: "";
                position: absolute;
                width: 300px;
                height: 100px;
                border: 2px dashed #41649B;
                border-left: 0;
                border-top: 0;
                border-bottom-right-radius: 100px;
                left: -186px;
                bottom: -80px;
              }*/
            }
            @include media(">=xl") {
              z-index: 1;
              grid-area: p2;
              left: -48px;
              top: 21px;
              &::after {
                z-index: -1;
                content: "";
                position: absolute;
                width: 300px;
                height: 100px;
                border: 2px dashed #41649B;
                border-left: 0;
                border-bottom: 0;
                border-top-right-radius: 100px;
                left: calc(-300px / 2 - 36px);
                top: -66px;
              }
              &::before {
                z-index: -1;
                content: "";
                position: absolute;
                width: 300px;
                height: 100px;
                border: 2px dashed #41649B;
                border-left: 0;
                border-top: 0;
                border-bottom-right-radius: 100px;
                left: -186px;
                bottom: -80px;
              }
            }
            @include media(">=2xl") {
              z-index: 1;
              grid-area: p2;
              left: -48px;
              top: 34px;
              &::after {
                z-index: -1;
                content: "";
                position: absolute;
                width: 300px;
                height: 100px;
                border: 2px dashed #41649B;
                border-left: 0;
                border-bottom: 0;
                border-top-right-radius: 0;
                left: calc(-300px / 2 - 36px);
                top: 66px;
                border-right: 0;
              }
              &::before {
                z-index: -1;
                content: "";
                position: absolute;
                width: 300px;
                height: 100px;
                border: 2px dashed #41649B;
                border-left: 0;
                border-top: 0;
                border-bottom-right-radius: 100px;
                left: -186px;
                bottom: -80px;
              }
            }
          }
          &:nth-child(3) {
            order: 3;
            @include media("<=lg") {
              z-index: 5;
              &::before {
                z-index: -1;
                content: "";
                position: absolute;
                width: 0;
                height: 50px;
                border: 2px dashed #41649B;
                border-left: 0;
                border-bottom: 0;
                right: 50%;
                top: -50px;
              }
            }
            @include media(">=lg") {
              z-index: 1;
              //grid-area: p3;
              &::after {
                z-index: -1;
                content: "";
                position: absolute;
                width: 1;
                border: 2px dashed #41649B;
                border-left: 0;
                border-top: 0;
                border-bottom-right-radius: 100px;
                left: 50%;
                top: 50%;
                height: 150px;
              }
              &::before {
                z-index: -1;
                content: "";
                position: absolute;
                width: 150px;
                border: 2px dashed #41649B;
                border-left: 0;
                border-top: 0;
                border-bottom-right-radius: 100px;
                left: -150px;
                top: 50%;
              }
            }
            @include media(">=xl") {
              grid-area: p3;
              &::after {
                display: none;
              }
            }
            @include media(">=2xl") {
              grid-area: p3;
              &::after {
                display: none;
              }
            }
          }
          &:nth-child(4) {
            order: 4;
            @include media("<=lg") {
              z-index: 4;
              &::before {
                z-index: -1;
                content: "";
                position: absolute;
                width: 0;
                height: 50px;
                border: 2px dashed #41649B;
                border-left: 0;
                border-bottom: 0;
                right: 50%;
                top: -50px;
              }
            }
            @include media(">=lg") {
              z-index: 6;
              //grid-area: p4;
              /*&::before {
                z-index: -1;
                content: "";
                position: absolute;
                width: 150px;
                border: 2px dashed #41649B;
                border-left: 0;
                border-top: 0;
                border-bottom-right-radius: 100px;
                left: -150px;
                top: 50%;
              }*/
            }
            @include media(">=xl") {
              grid-area: p4;
              &::before {
                z-index: -1;
                content: "";
                position: absolute;
                width: 150px;
                border: 2px dashed #41649B;
                border-left: 0;
                border-top: 0;
                border-bottom-right-radius: 100px;
                left: -150px;
                top: 50%;
              }
            }
            @include media(">=2xl") {
              grid-area: p4;
            }
          }
          &:nth-child(5) {
            order: 5;
            @include media("<=lg") {
              z-index: 6;
              &::before {
                z-index: -1;
                content: "";
                position: absolute;
                width: 0;
                height: 50px;
                border: 2px dashed #41649B;
                border-left: 0;
                border-bottom: 0;
                right: 50%;
                top: -50px;
              }
            }
            @include media(">=lg") {
              z-index: 5;
              //grid-area: p5;
              &::before {
                z-index: -1;
                content: "";
                position: absolute;
                width: 300px;
                height: 200px;
                border: 2px dashed #41649B;
                border-right: 0;
                border-left: 0;
                border-top: 0;
                left: calc(-50% - 27px);
                bottom: 50%;
              }
            }
            @include media(">=xl") {
              grid-area: p5;
              z-index: 7;
              &::before {
                z-index: -1;
                content: "";
                position: absolute;
                width: 300px;
                height: 240px;
                border: 2px dashed #41649B;
                border-right: 0;
                border-top: 0;
                border-bottom-left-radius: 60px;
                left: calc(50% - 27px);
                bottom: calc(-50% + 30px);
              }
            }
            @include media(">=2xl") {
              grid-area: p5;
              &::before {
                z-index: -1;
                content: "";
                position: absolute;
                width: 300px;
                height: 240px;
                border: 2px dashed #41649B;
                border-right: 0;
                border-top: 0;
                border-bottom-left-radius: 60px;
                left: calc(50% - 27px);
                bottom: calc(-50% + 10px);
              }
            }
          }
          &:nth-child(6) {
            order: 6;
            @include media("<=lg") {
              z-index: 6;
              &::before {
                z-index: -1;
                content: "";
                position: absolute;
                width: 0;
                height: 50px;
                border: 2px dashed #41649B;
                border-left: 0;
                border-bottom: 0;
                right: 50%;
                top: -50px;
              }
            }
            @include media(">=lg") {
              z-index: 3;
              //grid-area: p6;
              //left: 220px;
              &::before {
                z-index: -1;
                content: "";
                position: absolute;
                width: 150px;
                border: 2px dashed #41649B;
                border-left: 0;
                border-top: 0;
                border-bottom-right-radius: 100px;
                left: -150px;
                top: 50%;
              }
            }
            @include media(">=xl") {
              grid-area: p6;
              z-index: 8;
              left: 220px;
              &::before {
                display: none;
              }
            }
            @include media(">=2xl") {
              grid-area: p6;
              left: 220px;
            }
          }
          &:nth-child(7) {
            order: 7;
            @include media("<=lg") {
              z-index: 5;
              &::before {
                z-index: -1;
                content: "";
                position: absolute;
                width: 0;
                height: 50px;
                border: 2px dashed #41649B;
                border-left: 0;
                border-bottom: 0;
                right: 50%;
                top: -50px;
              }
            }
            @include media(">=lg") {
              z-index: 5;
              //grid-area: p7;
              //left: 220px;
              //margin: auto;
              &::after {
                z-index: -1;
                content: "";
                position: absolute;
                height: 150px;
                border: 2px dashed #41649B;
                border-left: 0;
                border-top: 0;
                border-bottom-right-radius: 100px;
                left: 50%;
                top: calc(50% - 150px);
                width: 1px;
              }
            }
            @include media(">=xl") {
              grid-area: p7;
              left: 220px;
              margin: auto;
              &::after {
                display: none;
              }
              &::before {
                z-index: -1;
                content: "";
                position: absolute;
                width: 150px;
                border: 2px dashed #41649B;
                border-left: 0;
                border-top: 0;
                border-bottom-right-radius: 100px;
                left: -150px;
                top: 50%;
              }
            }
            @include media(">=2xl") {
              grid-area: p7;
              left: 220px;
              margin: auto;
              &::after {
                display: none;
              }
              &::before {
                z-index: -1;
                content: "";
                position: absolute;
                width: 150px;
                border: 2px dashed #41649B;
                border-left: 0;
                border-top: 0;
                border-bottom-right-radius: 100px;
                left: -150px;
                top: 50%;
              }
            }
          }
          &:nth-child(8) {
            order: 8;
            @include media("<=lg") {
              z-index: 4;
              &::before {
                z-index: -1;
                content: "";
                position: absolute;
                width: 0;
                height: 50px;
                border: 2px dashed #41649B;
                border-left: 0;
                border-bottom: 0;
                right: 50%;
                top: -50px;
              }
            }
            @include media(">=lg") {
              z-index: 4;
              //grid-area: p7;
              //left: 220px;
              //margin: auto;
              &::after {
                z-index: -1;
                content: "";
                position: absolute;
                height: 1px;
                border: 2px dashed #41649B;
                border-left: 0;
                border-top: 0;
                border-bottom-right-radius: 100px;
                left: -75px;
                top: calc(50%);
                width: 150px;
              }
            }
            @include media(">=xl") {
              grid-area: p8;
              left: 220px;
              margin: auto;
              &::after {
                display: none;
              }
              &::before {
                z-index: -1;
                content: "";
                position: absolute;
                width: 150px;
                border: 2px dashed #41649B;
                border-left: 0;
                border-top: 0;
                border-bottom-right-radius: 100px;
                left: -150px;
                top: 50%;
              }
            }
            @include media(">=2xl") {
              grid-area: p8;
              left: 220px;
              margin: auto;
              &::after {
                display: none;
              }
              &::before {
                z-index: -1;
                content: "";
                position: absolute;
                width: 150px;
                border: 2px dashed #41649B;
                border-left: 0;
                border-top: 0;
                border-bottom-right-radius: 100px;
                left: -150px;
                top: 50%;
              }
            }
          }
        }
        .personal-data-sharing__card-list {
          ::v-deep strong {
            color: $primary;
          }
          background: #D2E6FF;
          border: 1px solid #05004B;
          border-radius: 8px;
          padding: 16px;
          @include media(">=lg") {
            height: 100%;
          }
          @include media(">=xl") {
            height: auto;
          }
          @include media(">=2xl") {
            height: auto;
          }
          ::v-deep {
            .card-list__number {
              background: #237FD0;
              width: 20px;
              height: 20px;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 50%;
              font-size: 12px;
              line-height: 100%;
              color: #fff;
              font-weight: 700;
            }
          }
          ::v-deep {
            .card-list__content {
              display: grid;
              grid-template-columns: 20px auto;
              gap: 8px
            }
          }
        }
      }
      .personal-data-sharing__partner__grid {
        @include media("<=lg") {
          margin-top: 61px;
          padding: 0 calc(38px - 14px);
        }
        @include media(">=lg") {
          max-width: 846px;
          margin: 76px auto;
        }
        @include media(">=xl") {
          max-width: 100%;
          margin-top: 103px;
        }
        @include media(">=2xl") {
          max-width: 100%;
          margin-top: -101px;
        }
      }
    }
  }
}
</style>