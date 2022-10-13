<template>
  <div class="main">
    <Header 
      :content="content.header" 
      :progress="progress" 
    />
    <div class="cvc">
      <Summary
        ref="summaries"
        @goToSummary="goToSummary"
        :content="content"
      >
        <!-- <template 
          v-for="(item, key, i) in content"
        >
          <li 
            :key="key"
            :ref="item.name"
            class="summary__content__item relative"
            v-if="(key !== 'summary') && (key.toLowerCase() === item.component.toLowerCase()) && (i <= 14) && item.component !== 'Header' && item.component !== 'Footer'"
            :class="selectedSection == item.name ? 'summary__content__item--active' : ''"
            @click="setProgress( item.name)"
          >
            <component :is="item.component" :content="item" class="summary__content__section"></component>
            <svg width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="summary__content__icon block lg:hidden">
              <rect width="22" height="11" fill="white"/>
              <path d="M2.75 1.83301L10.8889 9.16634L19.0279 1.83301" stroke="#237FD0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </li>
        </template> -->

        <!-- 1. AboutUs -->
        <li 
          ref="about-us"
          class="summary__content__item relative"
          :class="selectedSection == 'about-us' && isActive ? 'summary__content__item--active': ''"
          @click="setProgress('about-us')"
        >
          <AboutUs :content="content.aboutUs"/>
          <svg width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="summary__content__icon block lg:hidden">
            <rect width="22" height="11" fill="white"/>
            <path d="M2.75 1.83301L10.8889 9.16634L19.0279 1.83301" stroke="#237FD0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </li>
        <!-- 2. DocumentPurpose -->
        <li 
          ref="document-purpose"
          class="summary__content__item relative"
          :class="selectedSection == 'document-purpose' && isActive ? 'summary__content__item--active': ''"
          @click="setProgress('document-purpose')"
        >
          <DocumentPurpose :content="content.documentPurpose"/>
          <svg width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="summary__content__icon block lg:hidden">
            <rect width="22" height="11" fill="white"/>
            <path d="M2.75 1.83301L10.8889 9.16634L19.0279 1.83301" stroke="#237FD0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </li>
        <!-- 3. PrivacyPolicy -->
        <li 
          ref="privacy-policy"
          class="summary__content__item relative"
          :class="selectedSection == 'privacy-policy' && isActive ? 'summary__content__item--active': ''"
          @click="setProgress('privacy-policy')"
        >
          <PrivacyPolicy :content="content.privacyPolicy"/>
          <svg width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="summary__content__icon block lg:hidden">
            <rect width="22" height="11" fill="white"/>
            <path d="M2.75 1.83301L10.8889 9.16634L19.0279 1.83301" stroke="#237FD0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </li>
        <!-- 4. DataController -->
        <li 
          ref="data-controller"
          class="summary__content__item relative"
          :class="selectedSection == 'data-controller' && isActive ? 'summary__content__item--active': ''"
          @click="setProgress('data-controller')"
        >
          <DataController :content="content.dataController"/>
          <svg width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="summary__content__icon block lg:hidden">
            <rect width="22" height="11" fill="white"/>
            <path d="M2.75 1.83301L10.8889 9.16634L19.0279 1.83301" stroke="#237FD0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </li>
        <!-- 5. PersonalData -->
        <li 
          ref="personal-data"
          class="summary__content__item relative"
          :class="selectedSection == 'personal-data' && isActive ? 'summary__content__item--active': ''"
          @click="setProgress('personal-data')"
        >
          <PersonalData :content="content.personalData"/>
          <svg width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="summary__content__icon block lg:hidden">
            <rect width="22" height="11" fill="white"/>
            <path d="M2.75 1.83301L10.8889 9.16634L19.0279 1.83301" stroke="#237FD0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </li>
        <!-- 6. PersonalDataPurposes -->
        <li 
          ref="personal-data-purposes"
          class="summary__content__item relative"
          :class="selectedSection == 'personal-data-purposes' && isActive ? 'summary__content__item--active': ''"
          @click="setProgress('personal-data-purposes')"
        >
          <PersonalDataPurposes :content="content.personalDataPurposes"/>
          <svg width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="summary__content__icon block lg:hidden">
            <rect width="22" height="11" fill="white"/>
            <path d="M2.75 1.83301L10.8889 9.16634L19.0279 1.83301" stroke="#237FD0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </li>
        <!-- 7. BenefitsProgram -->
        <!-- <li 
          ref="benefits-program"
          class="summary__content__item relative"
          :class="selectedSection == 'benefits-program' && isActive ? 'summary__content__item--active': ''"
          @click="setProgress('benefits-program')"
        >
          <BenefitsProgram :content="content.benefitsProgram"/>
          <svg width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="summary__content__icon block lg:hidden">
            <rect width="22" height="11" fill="white"/>
            <path d="M2.75 1.83301L10.8889 9.16634L19.0279 1.83301" stroke="#237FD0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </li> -->
        <!-- 8. PersonalDataSharing -->
        <li 
          ref="personal-data-sharing"
          class="summary__content__item relative"
          :class="selectedSection == 'personal-data-sharing' && isActive ? 'summary__content__item--active': ''"
          @click="setProgress('personal-data-sharing')"
        >
          <PersonalDataSharing :content="content.personalDataSharing"/>
          <svg width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="summary__content__icon block lg:hidden">
            <rect width="22" height="11" fill="white"/>
            <path d="M2.75 1.83301L10.8889 9.16634L19.0279 1.83301" stroke="#237FD0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </li>
        <!-- 9. PersonalDataTransfer -->
        <li 
          ref="personal-data-transfer"
          class="summary__content__item relative"
          :class="selectedSection == 'personal-data-transfer' && isActive ? 'summary__content__item--active': ''"
          @click="setProgress('personal-data-transfer')"
        >
          <PersonalDataTransfer :content="content.personalDataTransfer"/>
          <svg width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="summary__content__icon block lg:hidden">
            <rect width="22" height="11" fill="white"/>
            <path d="M2.75 1.83301L10.8889 9.16634L19.0279 1.83301" stroke="#237FD0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </li>
        <!-- 10. CookiesTechnologies -->
        <li 
          ref="cookies-technologies"
          class="summary__content__item relative"
          :class="selectedSection == 'cookies-technologies' && isActive ? 'summary__content__item--active': ''"
          @click="setProgress('cookies-technologies')"
        >
          <CookiesTechnologies :content="content.cookiesTechnologies"/>
          <svg width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="summary__content__icon block lg:hidden">
            <rect width="22" height="11" fill="white"/>
            <path d="M2.75 1.83301L10.8889 9.16634L19.0279 1.83301" stroke="#237FD0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </li>
        <!-- 11. DataStored -->
        <li 
          ref="data-stored"
          class="summary__content__item relative"
          :class="selectedSection == 'data-stored' && isActive ? 'summary__content__item--active': ''"
          @click="setProgress('data-stored')"
        >
          <DataStored :content="content.dataStored"/>
          <svg width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="summary__content__icon block lg:hidden">
            <rect width="22" height="11" fill="white"/>
            <path d="M2.75 1.83301L10.8889 9.16634L19.0279 1.83301" stroke="#237FD0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </li>
        <!-- 12. DataHolder -->
        <li 
          ref="data-holder"
          class="summary__content__item relative"
          :class="selectedSection == 'data-holder' && isActive ? 'summary__content__item--active': ''"
          @click="setProgress('data-holder')"
        >
          <DataHolder :content="content.dataHolder"/>
          <svg width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="summary__content__icon block lg:hidden">
            <rect width="22" height="11" fill="white"/>
            <path d="M2.75 1.83301L10.8889 9.16634L19.0279 1.83301" stroke="#237FD0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </li>
        <!-- 13. PersonalDataSecurity -->
        <li 
          ref="personal-data-security"
          class="summary__content__item relative"
          :class="selectedSection == 'personal-data-security' && isActive ? 'summary__content__item--active': ''"
          @click="setProgress('personal-data-security')"
        >
          <PersonalDataSecurity :content="content.personalDataSecurity"/>
          <svg width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="summary__content__icon block lg:hidden">
            <rect width="22" height="11" fill="white"/>
            <path d="M2.75 1.83301L10.8889 9.16634L19.0279 1.83301" stroke="#237FD0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </li>
        <!-- 14. Validity and 15. Contact -->
        <li class="grid grid-cols-1 lg:grid-cols-2">
          <div 
            ref="validity"
            class="summary__content__item relative"
            :class="selectedSection == 'validity' && isActive ? 'summary__content__item--active': ''"
            @click="setProgress('validity')"
          >
            <Validity :content="content.validity"/>
            <svg width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="summary__content__icon block lg:hidden">
              <rect width="22" height="11" fill="white"/>
              <path d="M2.75 1.83301L10.8889 9.16634L19.0279 1.83301" stroke="#237FD0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div 
            ref="contact"
            class="summary__content__item relative"
            :class="selectedSection == 'contact' && isActive ? 'summary__content__item--active': ''"
            @click="setProgress('contact')"
          >
            <Contact :content="content.contact"/>
            <svg width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="summary__content__icon block lg:hidden">
              <rect width="22" height="11" fill="white"/>
              <path d="M2.75 1.83301L10.8889 9.16634L19.0279 1.83301" stroke="#237FD0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </li>
        <!-- 16. Faq -->
        <li 
          ref="faq"
          class="summary__content__item relative"
          :class="selectedSection == 'faq' && isActive ? 'summary__content__item--active': ''"
          @click="setProgress('faq')"
        >
          <Faq :content="content.faq"/>
          <svg width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="summary__content__icon block lg:hidden">
            <rect width="22" height="11" fill="white"/>
            <path d="M2.75 1.83301L10.8889 9.16634L19.0279 1.83301" stroke="#237FD0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </li>
      </Summary>
    </div>
    <Footer :content="content.footer" />
  </div>
</template>

<script>
import page from "~/mockdata/pages/index.js";
import AboutUs from "~/components/AboutUs";
import DocumentPurpose from "~/components/DocumentPurpose";
import PrivacyPolicy from "~/components/PrivacyPolicy";
import DataController from "~/components/DataController";
import PersonalData from "~/components/PersonalData";
import PersonalDataPurposes from "~/components/PersonalDataPurposes";
import BenefitsProgram from "~/components/BenefitsProgram";
import PersonalDataSharing from "~/components/PersonalDataSharing";
import PersonalDataTransfer from "~/components/PersonalDataTransfer";
import CookiesTechnologies from "~/components/CookiesTechnologies";
import DataStored from "~/components/DataStored";
import DataHolder from "~/components/DataHolder";
import PersonalDataSecurity from "~/components/PersonalDataSecurity";
import Validity from "~/components/Validity";
import Contact from "~/components/Contact";
import Faq from "~/components/Faq";

import { isMobile } from 'mobile-device-detect';

export default {
  components: {
    AboutUs, // 1.
    DocumentPurpose, // 2.
    PrivacyPolicy, // 3.
    DataController, // 4.
    PersonalData, // 5.
    PersonalDataPurposes, // 6.
    BenefitsProgram, // 7.
    PersonalDataSharing, // 8.
    PersonalDataTransfer, // 9.
    CookiesTechnologies, // 10.
    DataStored, // 11.
    DataHolder, // 12.
    PersonalDataSecurity, // 13.
    Validity, // 14.
    Contact, // 15.
    Faq // 16.
  },
  data() {
    return {
      content: page,
      selectedSection: '',
      progress: 0,
      currentSection: '',
      isActive: false
    };
  },
  methods: {
    goToSummary(isActive) {
      const el = this.$el.getElementsByClassName(isActive)[0];
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })  
        // setTimeout(() => {
        //   el.scrollIntoView({ behavior: 'smooth' })  
        // }, 2000);
        
      }
    },
    setProgress(section) {
      if (!isMobile) return false
      this.selectedSection = section
      //adding progress
      if (section == 'about-us')
        this.progress = 6
      if (section == 'document-purpose')
        this.progress = 12
      if (section == 'privacy-policy')
        this.progress = 19
      if (section == 'data-controller')
        this.progress = 25
      if (section == 'personal-data')
        this.progress = 31
      if (section == 'personal-data-purposes')
        this.progress = 37
      if (section == 'benefits-program')
        this.progress = 43
      if (section == 'personal-data-sharing')
        this.progress = 50
      if (section == 'personal-data-transfer')
        this.progress = 56
      if (section == 'cookies-technologies')
        this.progress = 62
      if (section == 'data-stored')
        this.progress = 68
      if (section == 'data-holder')
        this.progress = 74
      if (section == 'personal-data-security')
        this.progress = 80 
      if (section == 'validity')
        this.progress = 86
      if (section == 'contact')
        this.progress = 93
      if (section == 'faq')
        this.progress = 100
      //setting which menu is active
      if (this.currentSection == section && this.isActive != false) 
        this.isActive = false
      else 
        this.isActive = true
      //setting currenct section
      this.currentSection = section
      //setting progress = 0 if all menus is closed
      if (this.currentSection == this.selectedSection && this.isActive == false) {
        this.progress = 0
      } else {
        setTimeout(() => {
          //gonna to the section
          this.goToSummary(section)
        }, 0);
      }
    }
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/css/sizes";
@import "~assets/css/colors";

.main {
  overflow: hidden;
}
.cvc {
  p, span {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: $cloudy-100;
  }
  h1 {
    font-weight: 700;
    font-size: 40px;
    line-height: 115%;
    color: $primary;
  }
  .summary {
    counter-reset: css-counter 0;
    .summary__content__item {
      counter-increment: css-counter 1;
      @include media("<=lg") {
        background: #fff;
        padding: 0 14px;
      }
      section {
        display: flex;
        align-items: center;
        height: 100%;
        list-style-type: none;
        @include media("<=lg") {
          border-top: 1px solid #E0E0E0;
        }
        @include media(">=lg") {
          padding-left: 28px;
          padding-right: 28px;
        }
        @include media(">=xl") {
          padding-left: 55px;
          padding-right: 55px;
        }
        ::v-deep h1 {
          color: $cloudy-200;
          font-weight: 400;
          font-size: 16px;
          line-height: 100%;
          @include media(">=lg") {
            color: $primary;
            font-weight: 700;
            font-size: 34px;
            line-height: 115%;
          }
          @include media(">=xl") {}
          @include media(">=2xl") {
            font-size: 40px;
          }
        }
      }
      .summary__content__icon {
        position: absolute;
        right: 14px;
        top: calc(62px/2 - 11px/2);
      }
      ::v-deep .about-us__container,
      ::v-deep .document-purpose__container,
      ::v-deep .privacy-policy__container,
      ::v-deep .data-controller__container,
      ::v-deep .benefits-program__container,
      ::v-deep .personal-data-transfer__container,
      ::v-deep .data-holder__container,
      ::v-deep .faq__container,
      ::v-deep .personal-data-purposes__container,
      ::v-deep .personal-data-purposes__container,
      ::v-deep .personal-data-sharing__container,
      ::v-deep .cookies-technologies__container,
      ::v-deep .contact__container,
      ::v-deep .personal-data__container, 
      ::v-deep .data-stored__container,
      ::v-deep .validity__container,
      ::v-deep .personal-data-security__container {
        @include media("<=lg") {
          display: none;
        }
        .about-us__container__content,
        .document-purpose__container__content,
        .privacy-policy__container__content,
        .data-controller__container__content,
        .benefits-program__container__content,
        .personal-data-transfer__container__content,
        .data-holder__container__content,
        .faq__container__content,
        .personal-data-purposes__container__content,
        .personal-data-purposes__container__content,
        .personal-data-sharing__container__content,
        .cookies-technologies__container__content,
        .personal-data-security__container__wrapper,
        .contact__container__wrapper,
        .personal-data__container__content, 
        .data-stored__container__content,
        .validity__container__content{
          @include media("<=lg") {
            border-top: 1px solid #E0E0E0;
          }
          @apply py-4;
        }
      }
      &.summary__content__item--active {
        .summary__content__icon {
          transform: rotate(180deg);
          path {
            stroke: #A5A5B9;
          }
        }
        ::v-deep .about-us__container,
        ::v-deep .document-purpose__container,
        ::v-deep .privacy-policy__container,
        ::v-deep .data-controller__container,
        ::v-deep .benefits-program__container,
        ::v-deep .personal-data-transfer__container,
        ::v-deep .data-holder__container,
        ::v-deep .faq__container,
        ::v-deep .personal-data-purposes__container,
        ::v-deep .personal-data-purposes__container,
        ::v-deep .personal-data-sharing__container,
        ::v-deep .cookies-technologies__container,
        ::v-deep .contact__container,
        ::v-deep .personal-data__container, 
        ::v-deep .data-stored__container,
        ::v-deep .validity__container,
        ::v-deep .personal-data-security__container {
          @include media("<=lg") {
            display: block;
          }
        }
      }
      ::v-deep .about-us,
      ::v-deep .document-purpose,
      ::v-deep .privacy-policy,
      ::v-deep .data-controller,
      ::v-deep .benefits-program,
      ::v-deep .personal-data-transfer,
      ::v-deep .data-holder,
      ::v-deep .faq,
      ::v-deep .personal-data-purposes,
      ::v-deep .personal-data-purposes,
      ::v-deep .personal-data-sharing,
      ::v-deep .cookies-technologies,
      ::v-deep .contact,
      ::v-deep .personal-data, 
      ::v-deep .data-stored,
      ::v-deep .validity,
      ::v-deep .personal-data-security {
        .about-us__title,
        .document-purpose__title,
        .privacy-policy__title,
        .data-controller__title,
        .benefits-program__title,
        .personal-data-transfer__title,
        .data-holder__title,
        .faq__title,
        .personal-data-purposes__title,
        .personal-data-purposes__title,
        .personal-data-sharing__title,
        .cookies-technologies__title,
        .contact__title,
        .personal-data__title, 
        .data-stored__title,
        .validity__title,
        .personal-data-security__title {
          display: flex;
          align-items: center;
          height: 62px;
          width: calc(100% - 24px);
          @include media(">=lg") {  
            height: auto;
            width: auto;
          }
          h1 {
            &:before {
              content: counter(css-counter) ". ";
            }
            @include media("<=lg") { 
              padding-right: 40px;
              br {
                display: none;
              }
            }
          }
        }
        .faq__title {
          h1 {
            @include media(">=lg") {  
              &:before {
                content: "";
              }
            }
          }
        }
      }
    }
  }
}
</style>