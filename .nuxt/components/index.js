export { default as AboutUs } from '../../components/AboutUs/index.vue'
export { default as Contact } from '../../components/Contact/index.vue'
export { default as BenefitsProgram } from '../../components/BenefitsProgram/index.vue'
export { default as CookiesTechnologies } from '../../components/CookiesTechnologies/index.vue'
export { default as DataController } from '../../components/DataController/index.vue'
export { default as DataHolder } from '../../components/DataHolder/index.vue'
export { default as DataStored } from '../../components/DataStored/index.vue'
export { default as DocumentPurpose } from '../../components/DocumentPurpose/index.vue'
export { default as Faq } from '../../components/Faq/index.vue'
export { default as Footer } from '../../components/Footer/index.vue'
export { default as Header } from '../../components/Header/index.vue'
export { default as PersonalData } from '../../components/PersonalData/index.vue'
export { default as PersonalDataPurposes } from '../../components/PersonalDataPurposes/index.vue'
export { default as PersonalDataSecurity } from '../../components/PersonalDataSecurity/index.vue'
export { default as PersonalDataSharing } from '../../components/PersonalDataSharing/index.vue'
export { default as PersonalDataTransfer } from '../../components/PersonalDataTransfer/index.vue'
export { default as PrivacyPolicy } from '../../components/PrivacyPolicy/index.vue'
export { default as ResponsiveImage } from '../../components/ResponsiveImage/index.vue'
export { default as Summary } from '../../components/Summary/index.vue'
export { default as Validity } from '../../components/Validity/index.vue'
export { default as PersonalDataDataProvided } from '../../components/PersonalData/DataProvided/index.vue'
export { default as PersonalDataStorePlatform } from '../../components/PersonalData/StorePlatform/index.vue'
export { default as PersonalDataPurposesPlaneList } from '../../components/PersonalDataPurposes/PlaneList/index.vue'
export { default as SharedCard } from '../../components/shared/Card/index.vue'
export { default as SharedCardList } from '../../components/shared/CardList/index.vue'
export { default as SharedProgress } from '../../components/shared/Progress/index.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
