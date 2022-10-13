<template>
  <section class="progress">
    <div class="progress__container">
      <div class="progress__shadow flex relative">
        <svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="progress__icon">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.72574 0.18573C9.05505 0.462998 9.09319 0.95 8.81092 1.27348L2.06872 9L8.81092 16.7265C9.09319 17.05 9.05505 17.537 8.72574 17.8143C8.39642 18.0915 7.90063 18.0541 7.61836 17.7306L-9.53674e-07 9L7.61836 0.269403C7.90063 -0.0540764 8.39642 -0.091538 8.72574 0.18573Z" fill="#0A00B4"/>
        </svg>
        <p class="progress__title flex justify-center items-center w-full">Política de privacidade</p>
      </div>
      <div class="progress__percent">
        <p class="progress__text">Progresso {{progress}}%</p>
        <div 
          class="progress__bar" 
          :class="`progress__bar__${progress}`" 
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true
    },
    progress: {
      type: Number,
      required: true
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import "~assets/css/sizes";
@import "~assets/css/colors";
.progress {
  background: #FFFFFF;
  width: calc(100% + 16px*2);
  margin-left: -16px;
  @include media(">=lg") {
    display: none !important;
  }
  .progress__container {
    position: fixed;
    width: 100%;
    z-index: 9999;
    right: 0;
    top: 0;
    .progress__shadow {
      background: #FFFFFF;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
      .progress__icon {
        position: absolute;
        top: calc(50% - 18px/2);
        left: 28px;
      }
      .progress__title {
        font-family: 'CVCSans-Regular';
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
        color: #3E3E3E;
        height: 50px;
      }
    }
    .progress__percent {
      background: #FFFFFF;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      height: 60px;
      padding: 13px 15px;
      .progress__text {
        font-weight: 600;
        font-size: 14px;
        line-height: 100%;
      }
      .progress__bar {
        position: relative;
        background: #EFEFFD;
        border-radius: 120px;
        width: 100%;
        height: 8px;
        margin-top: 6px;
        margin-bottom: 16px;
        &::after {
          content: "";
          height: 100%;
          background: $primary;
          position: absolute;
          border-radius: 120px;
        }
        &.progress__bar__0 {
          &::after {
            width: 0%;
          }
        }
        &.progress__bar__6 {
          &::after {
            width: 6%;
          }
        }
        &.progress__bar__12 {
          &::after {
            width: 12%;
          }
        }
        &.progress__bar__19 {
          &::after {
            width: 19%;
          }
        }
        &.progress__bar__25 {
          &::after {
            width: 25%;
          }
        }
        &.progress__bar__31 {
          &::after {
            width: 31%;
          }
        }
        &.progress__bar__37 {
          &::after {
            width: 37%;
          }
        }
        &.progress__bar__43 {
          &::after {
            width: 43%;
          }
        }
        &.progress__bar__50 {
          &::after {
            width: 50%;
          }
        }
        &.progress__bar__56 {
          &::after {
            width: 56%;
          }
        }
        &.progress__bar__62 {
          &::after {
            width: 62%;
          }
        }
        &.progress__bar__68 {
          &::after {
            width: 68%;
          }
        }
        &.progress__bar__74 {
          &::after {
            width: 74%;
          }
        }
        &.progress__bar__80 {
          &::after {
            width: 80%;
          }
        }
        &.progress__bar__86 {
          &::after {
            width: 86%;
          }
        }
        &.progress__bar__93 {
          &::after {
            width: 93%;
          }
        }
        &.progress__bar__100 {
          &::after {
            width: 100%;
          }
        }
        
      }
    }
  }
}
</style>