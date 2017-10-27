let template = 
`<div class="cover-flow">
  <div class="my-flipster" ref="el">
    <div class="cover-flow-slides">
        <slot />
    </div>
  </div>
</div>`


  export default {
    template,
    props: {
      // ['center'|number]
      // Zero based index of the starting item, or use 'center' to start in the middle
      start: {
        default() {
          return 'center'
        }
      },
      // [milliseconds]
      // Speed of the fade in animation after items have been setup
      fadeIn: {
        default() {
          return 400
        }
      },
      // [true|false]
      // Loop around when the start or end is reached
      loop: {
        default() {
          return false
        }
      },
      // [false|milliseconds]
      // If a positive number, Flipster will automatically advance to next item after that number of milliseconds
      autoplay: {
        default() {
          return false
        }
      },
      // [true|false]
      // If true, autoplay advancement will pause when Flipster is hovered
      pauseOnHover: {
        default() {
          return true
        }
      },
      // [coverflow|carousel|flat|...]
      // Adds a class (e.g. flipster--coverflow) to the flipster element to switch between display styles
      // Create your own theme in CSS and use this setting to have Flipster add the custom class
      theme: {
        default() {
          return 'coverflow'
        }
      },
      // [number]
      // Space between items relative to each item's width. 0 for no spacing, negative values to overlap
      spacing: {
        default() {
          return -0.6
        }
      },
      // [true|false]
      // Clicking an item switches to that item
      click: {
        default() {
          return true
        }
      },
      // [true|false]
      // Enable left/right arrow navigation
      keyboard: {
        default() {
          return true
        }
      },
      // [true|false]
      // Enable mousewheel/trackpad navigation; up/left = previous, down/right = next 
      scrollwheel: {
        default() {
          return true
        }
      },
      // [true|false]
      // Enable swipe navigation for touch devices
      touch: {
        default() {
          return true
        }
      },
      // [true|false|'before'|'after']
      // If not false, Flipster will build an unordered list of the items
      // Values true or 'before' will insert the navigation before the items, 'after' will append the navigation after the items
      nav: {
        default() {
          return false
        }
      },
      // [true|false|'custom']
      // If true, Flipster will insert Previous / Next buttons with SVG arrows
      // If 'custom', Flipster will not insert the arrows and will instead use the values of `buttonPrev` and `buttonNext`
      buttons: {
        default() {
          return true
        }
      },
      // [text|html]
      // Changes the text for the Previous button
      buttonPrev: {
        default() {
          return 'Previous'
        }
      },
      // [text|html]
      // Changes the text for the Next button
      buttonNext: {
        default() {
          return 'Next'
        }
      }
    },
    mounted () {
      $(this.$refs.el).flipster({
        itemContainer: 'div.cover-flow-slides',
        itemSelector: 'div.cover-flow-slide',
        start: this.start,
        fadeIn: this.fadeIn,
        loop: this.loop,
        autoplay: this.autoplay,
        pauseOnHover: this.pauseOnHover,
        style: this.theme,
        spacing: this.spacing,
        click: this.click,
        keyboard: this.keyboard,
        scrollwheel: this.scrollwheel,
        touch: this.touch,
        nav: this.nav,
        buttons: this.buttons,
        buttonPrev: this.buttonPrev,
        buttonNext: this.buttonNext,
        onItemSwitch: this.onItemSwitch.bind(this)
      })
    },
    methods: {
      onItemSwitch (currentItem, previousItem) {
        this.$emit('switch', currentItem, previousItem)
      }
    }
  }
