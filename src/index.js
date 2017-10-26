import CoverFlow from './CoverFlow'
import CoverFlowSlide from './CoverFlowSlide'

if (typeof $.flipster == "undefined") { 
  require('jquery.flipster')
}

export default CoverFlow

export {CoverFlow, CoverFlowSlide}
