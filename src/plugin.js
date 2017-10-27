import CoverFlow from './CoverFlow'
import CoverFlowSlide from './CoverFlowSlide'

module.exports = {
  install: function (Vue, options) {
    Vue.component('CoverFlow', CoverFlow)
    Vue.component('CoverFlowSlide', CoverFlowSlide)
  }
};