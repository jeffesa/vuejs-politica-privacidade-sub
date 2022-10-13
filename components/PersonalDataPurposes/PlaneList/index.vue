<template>
  <div class="plane-list m-auto">
    <div 
      class="plane-list__container"
      v-for="(planeList, p) in content"
      :key="p"
    >
      <p 
        v-if="planeList.description"
        v-html="planeList.description" class="plane-list__description block lg:hidden"
      />
      <p 
        class="plane-list__title text-center m-auto" 
        v-html="planeList.title" 
      />
      <div class="plane-list__content relative">
        <div 
          class="grid grid-cols-1 lg:grid-cols-2 h-full"
          v-if="planeList.topList"
        >
          <ResponsiveImage
            :lazyload="false"
            :sources="planeList.image.src"
            :alt="planeList.image.alt"
            class="plane-list__image"
          />
          <ul 
            class="plane-list__top flex flex-col relative z-10"
            v-for="(topList, t) in planeList.topList"
            :key="t"
          >
            <li>
              <ResponsiveImage
                :lazyload="false"
                :sources="topList.pointImage.src"
                :alt="topList.pointImage.alt"
                class="plane-list__point"
                v-if="topList.pointImage"
              />
            </li>
            <li 
              v-for="(item, i) in topList.list"
              :key="i"
              class="plane-list__item">
              <p
                class="plane-list__item__text" 
                v-html="item.text" 
              />
            </li>
          </ul>
        </div>
        <div 
          class="plane-list__bottom__container grid grid-cols-1 lg:grid-cols-4 relative"
          v-if="planeList.bottomList"
        > 
          <ResponsiveImage
            :lazyload="false"
            :sources="planeList.bottomList.pointImage.src"
            :alt="planeList.bottomList.pointImage.alt"
            class="plane-list__point"
            v-if="planeList.bottomList.pointImage"
          />
          <ul
            v-for="(bottomList, b) in planeList.bottomList.list"
            :key="b" 
            class="plane-list__bottom flex flex-col"
          >
            <li
              v-for="(item, i) in bottomList"
              :key="i" 
              class="plane-list__item"
            >
              <p
                class="plane-list__item__text" 
                v-html="item.text" 
              />
              </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/sizes";
@import "~assets/css/colors";
.plane-list {
  //background: rgba(218, 230, 245, 0.4);
  max-width: 1232px;
  @include media("<=lg") {
    width: calc(100% + 16px*2);
    margin-left: -16px;
  }
  .plane-list__description {
    @include media("<=lg") {
      padding: 19px 16px 20px; 
      background: #fff;
    }
  }
  .plane-list__title {
    background: #645AD7;
    color: #fff;
    border-radius: 8px;
    font-size: 18px;
    line-height: 100%;
    font-weight: 600;
    padding: 16px; 
    width: calc(100% - 16px*2);
    //margin-top: 16px;
    @include media(">=lg") {
      border-radius: 4px;
      width: auto;
      font-size: 24px;
      line-height: 120%;
      padding: 20px 13px 18px; 
      margin-top: 0;
      font-weight: 700;
    }
  }
  .plane-list__image {
    order: 3;
    margin: auto;
    @include media("<=lg") {
      padding: 12px 0 31px;
    }
    @include media(">=lg") {
      order: 1;
      position: absolute;
      width: 100%;
      //height: 100%;
      left: 0;
      top: 0;
      //margin-top: -20px;
      padding-left: 84px;
      ::v-deep {
        img {
          margin: auto;
        }
      }
    }
  }
  .plane-list__container {
    background: #EFEFFD;
    @include media(">=lg") {
      border-radius: 8px;
      background: rgba(218, 230, 245, 0.4);
    }
    //border-radius: 16px;
    .plane-list__content {
      //padding: 28px 16px 16px;
      @include media("<=lg") {
        max-width: calc(343px + 16px*2);
        padding: 28px 16px 16px;
        margin: auto;
      }
      @include media(">=lg") {
        padding-bottom: 32px;
        margin: 78px 20px 60px;
      }
      .plane-list__top {
        height: fit-content;
        background: #F5F4FF;
        border: 2px solid #645AD7;
        border-radius: 16px;
        padding: 16px 16px 0px;
        margin-bottom: 19px;
        @include media(">=lg") {
          border-radius: 8px;
          padding: 20px 13px 0 32px;
          margin: -15px 0 36px 0;
        }
        /*&:nth-child(1) {
          order: 3;
          @include media(">=lg") {
            order: 3;
          }
        }*/
        &:nth-child(2) {
          @include media("<=lg") {
            order: 2;
            max-width: 272px;
            margin-left: 16px;
          }
          @include media(">=lg") {
            order: 0;
            max-width: 314px;
          }
          
          .plane-list__point {
            position: absolute;
            @include media("<=lg") {
              bottom: -75px;
              left: 22px;
            }
            @include media(">=lg") {
              top: 71px;
              right: -193px;
            }
          }
        }
        &:nth-child(3) {
          @include media("<=lg") {
            order: 1;
          }
          @include media(">=lg") {
            position: relative;
            top: 44px;
            order: 2;
            max-width: 228px;
            margin: 0 0 0 auto;
            margin-bottom: -28px;
          }
          .plane-list__point {
            position: absolute;
            @include media("<=lg") {
              top: 243px;
              right: 22px;
            }
            @include media(">=lg") {
              top: 30px;
              left: -168px;
            }
          }
        }
        &:nth-child(4) {
          @include media("<=lg") {
            order: 4;
            max-width: 272px;
          }
          @include media(">=lg") {
            order: 4;
            max-width: 314px;
          }
          .plane-list__point {
            position: absolute;
            @include media("<=lg") {
              top: -111px;
              left: 30px;
            }
            @include media(">=lg") {
              top: -27px;
              right: -143px;
            }
          }
        }
        &:nth-child(5) {
          @include media("<=lg") {
            order: 4;
            max-width: 272px;
          }
          @include media(">=lg") {
            order: 4;
            max-width: 314px;
          }
          .plane-list__point {
            position: absolute;
            @include media("<=lg") {
              top: -111px;
              left: 30px;
            }
            @include media(">=lg") {
              top: -27px;
              right: -143px;
            }
          }
        }
        .plane-list__item {
          .plane-list__item__text {
            padding-bottom: 20px;
            ::v-deep span {
              color: #0A00B4;
              font-size: 18px;
              line-height: 0;
              @include media(">=lg") {
                font-size: 18px;
              }
              @include media(">=xl") {
                font-size: 22px;
              }
              @include media(">=2xl") {}
            }
          }
        }
      }
      .plane-list__bottom__container {
        background: #F5F4FF;
        border: 2px solid #645AD7;
        border-radius: 16px;
        padding: 16px 16px 8px;
        @include media(">=lg") {
          border-radius: 8px;
          padding: 20px 13px 20px 32px;
        }
        .plane-list__point {
          position: absolute;
          @include media("<=lg") {
            top: -233px;
            right: calc(50% - 160px);
          }
          @include media(">=lg") {
            top: -232px;
            right: calc(50% - 128px);
          }
        }
        .plane-list__bottom {
          &:not(:last-child) {
            padding-right: 52px;
          }
          .plane-list__item {
            .plane-list__item__text {
              padding-bottom: 11px;
              @include media(">=lg") {
                padding-bottom: 20px;
              }
              ::v-deep span {
                color: #0A00B4;
                font-size: 18px;
                line-height: 0;
                @include media(">=lg") {
                  font-size: 18px;
                }
                @include media(">=xl") {
                  font-size: 22px;
                }
                @include media(">=2xl") {}
              }
            }
          }
        }
      }
    }
  }
}
</style>