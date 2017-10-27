Vue Flipster
------------

Vue wrapper for coverflow library, [jquery-flipster](https://github.com/drien/jquery-flipster).

Requires `jquery`.  😕

#### [See the jquery-flipster demo here](http://brokensquare.com/Code/jquery-flipster/demo/)

### Example

```HTML
<cover-flow 
    :loop="true" 
    :autoplay="4000" 
    theme="flat" 
    :spacing="0" 
    :buttons="true"
>
    <cover-flow-slide>
        <img src="http://via.placeholder.com/500x500">
    </cover-flow-slide>
    <cover-flow-slide>
        <img src="http://via.placeholder.com/500x500">
    </cover-flow-slide>
    <cover-flow-slide>
        <img src="http://via.placeholder.com/500x500">
    </cover-flow-slide>
    <cover-flow-slide>
        <img src="http://via.placeholder.com/500x500">
    </cover-flow-slide>
    <cover-flow-slide>
        <img src="http://via.placeholder.com/500x500">
    </cover-flow-slide>
</cover-flow>
```
### Installation

```bash
  npm install vue-flipster --save 

  // or

  yarn add vue-flipster
```

```js
  import {CoverFlow, CoverFlowSlide} from 'vue-flipster'
  
  Vue.component('CoverFlow', CoverFlow)
  Vue.component('CoverFlowSlide', CoverFlowSlide)
```

You should also be sure you require `jquery`, `jquery.flipster`, and `jquery.flipster` css in your project.

```js
   Wherever you bootstrap your application
   require('jquery')
   require('jquery.flipster')
```

```scss
   In your css build process
   @import('path/to/node_modules/jquery.flipster/dist/jquery.flipster.css');
```

#### Installing without a build process

See `demo/index.html` for use basic script file based setup.



### Options

All jquery-flipster options have matching props with the exception of `item-container` and `item-selector`, which are decided by the plugin.

The `style` option prop has been changed to `theme` to avoid conflict with the DOM `style` attribute.

```js
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
```

### Events
`switch`: The slide has changed.

