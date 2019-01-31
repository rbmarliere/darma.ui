/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

import mojs from "mo-js";



class Unicorn extends React.Component {

  async componentDidMount () {


    // taken from mo.js demos
    	function isIOSSafari() {
    		var userAgent;
    		userAgent = window.navigator.userAgent;
    		return userAgent.match(/iPad/i) || userAgent.match(/iPhone/i);
    	};

    	// taken from mo.js demos
    	function isTouch() {
    		var isIETouch;
    		isIETouch = navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    		return [].indexOf.call(window, 'ontouchstart') >= 0 || isIETouch;
    	};

    	// taken from mo.js demos
    	var isIOS = isIOSSafari(),
    		clickHandler = isIOS || isTouch() ? 'touchstart' : 'click';

    	function extend( a, b ) {
    		for( var key in b ) {
    			if( b.hasOwnProperty( key ) ) {
    				a[key] = b[key];
    			}
    		}
    		return a;
    	}



      function Animocon(el, options) {
        this.el = el;
        this.options = extend( {}, this.options );
        extend( this.options, options );

        this.checked = false;

        this.timeline = new mojs.Timeline();

        for(var i = 0, len = this.options.tweens.length; i < len; ++i) {
          this.timeline.add(this.options.tweens[i]);
        }

        var self = this;
        this.el.addEventListener(clickHandler, function() {
          if( self.checked ) {
            self.options.onUnCheck();
          }
          else {
            self.options.onCheck();
            self.timeline.replay();
          }
          self.checked != self.checked;
        });
        }

        Animocon.prototype.options = {
        tweens : [
          new mojs.Burst({})
        ],
        onCheck : function() { return false; },
        onUnCheck : function() { return false; }
        };
    /* Icon 17 */
    // grid items:
        var items = [].slice.call(document.querySelectorAll('.grid__item'));


    		var el17 = items[0].querySelector('.icobutton'), el17SVG = el17.querySelector('svg');
    		var translationCurve17 = mojs.easing.path('M0,100 C0,72 10,-0.1 50,0 C89.6,0.1 100,72 100,100');
    		new Animocon(el17, {
    			tweens : [
    				// burst animation (line1)
    				new mojs.Burst({
    					parent: el17,

    					count: 		5,

    					angle: 		69,
    					degree:   17,
    					children: {
    						shape: 				'line',
    						scale: 				1,
    						radius: 			{20:0},
    						stroke: 			['#bf62a6', '#f28c33', '#f5d63d', '#79c267', '#78c5d6'],
    						duration: 		600,
    						easing: 			mojs.easing.bezier(0.1, 1, 0.3, 1)
    					},
    				}),
    				// burst animation (circles)
    				new mojs.Burst({
    					parent: el17,

    					count: 		4,
    					radius: 	{20:50},
    					degree: 	20,
    					angle: 		70,
    					opacity: 	0.6,
    					children: {
    						fill: 			['#bf62a6','#f28c33','#f5d63d','#79c267','#78c5d6'],
    						scale: 			1,
    						radius: 		{'rand(5,20)':0},
    						isSwirl: 		true,
    						swirlSize: 	4,
    						duration: 	1600,
    						delay: 			[0,350,200,150,400],
    						easing: 		mojs.easing.bezier(0.1, 1, 0.3, 1)
    					}
    				}),
    				// icon scale animation
    				new mojs.Tween({
    					duration : 800,
    					easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
    					onUpdate: function(progress) {
    						var translationProgress = translationCurve17(progress);
    							el17SVG.style.WebkitTransform = el17SVG.style.transform = 'translate3d(' + -20 * translationProgress + '%,0,0)';
    					}
    				})
    			],
    			onCheck : function() {
    				el17SVG.style.fill = '#F198CA';
    			},
    			onUnCheck : function() {
    				el17SVG.style.fill = '#C0C1C3';
    			}
    		});
    		/* Icon 17 */

  }


  render() {
    return (
      <Col>
      <span className="grid__item">
        <a className="icobutton icobutton--unicorn">
          <svg viewBox="0 0 448.546 448.546" width="86px" height="86px">
            <path d="M385.7,172.2c-9.7-7.9-19.2-12.4-27.3-14.9c-9.9-3.1-17.5-3.2-20.6-3.2c-16.2,0-32.3,5.5-45.5,15.6c-6,4.6-12.6,8.3-19.5,11c-0.4-56.9-23-110.5-59.3-139.5c-2.3-4.1-5.1-7.9-8.5-11.3l-6-6.1l-4.6,5.2c-14.9-7.2-30.6-9.5-45.7-6.9c-11,2-20.2,9.2-24.6,19.5c-3.1,7.2-3.5,15.2-1.4,22.5c-1.7,0.8-3.3,1.6-4.8,2.6L9.3,1.5l80.4,107.4l-22.6,49.4c-5,10.9-4,23.3,2.6,33.2c6.4,9.5,17,15.2,28.5,15.2c6.1,0,12.2-1.7,17.4-4.8l17.3-10.3c-8.1,18.2-16.9,41-16.9,53.1c0,22.7,7.9,44.7,22.4,61.7c5,6,10.8,11.2,17.1,15.8V450h33h15h42v-110c23.5-2,55.1-15.9,83.1-30.8c-0.1,3.4-0.1,6.4-0.1,9.2V450h32h16h41l-0.6-201.4c0,0-0.6-34.4-8-47.2C401.9,189.5,396.1,180.7,385.7,172.2z M242.6,108.6c9.7,23.5,14.5,49.8,14.1,76.4c-4.1,0.7-8.3,1-12.6,1h-9.4c-2.3-16.2-8.9-56.5-22.2-87.7c5.1-8.3,7.7-17.9,8-27.5C229.2,81.6,236.8,94.4,242.6,108.6z M138.9,48c2.3-5.4,6.9-9.1,12.7-10.1c10.5-1.9,21.2-0.6,31.8,3.7L172.5,54c-1.2,1.1-2.8,1.7-4.8,1.7c-6.8,0-18.5,1.6-29.6,3.9C137,55.8,137.2,51.8,138.9,48z M70.9,57.2l32.5,19.5l-6.2,15.7L70.9,57.2z M107.5,188.2c-2.8,1.7-6,2.6-9.3,2.6c-6.1,0-11.8-3-15.2-8.1c-3.5-5.2-4-12-1.4-17.7l32.3-70.6c4.1-9,12-15.5,21.6-17.9c11.5-2.8,25.4-4.9,32.3-4.9c6.2,0,11.9-2.3,16.1-6.5L199,48c7.9,13.4,7.5,32.2-1.9,44.7l-2.9,3.8l2,4.3c0.6,1.2,1.1,2.5,1.7,3.8c4.2,9.9,4.5,21.3,0,31.1c-3.8,8.3-10.3,15-19.7,19.8c-13.2,6.9-27.2,7.7-27.4,7.7l0,0c-1.3,0.1-2.5,0.5-3.6,1.2L107.5,188.2z M188.4,337.4V409h-17v-77.5C176.8,334,182.5,336,188.4,337.4z M171.4,434v-9h17v9H171.4z M204.4,434v-9h25v9H204.4z M239.9,324.3c-0.7,0-1.4,0-2.1-0.1l-8.4-0.5V409h-25v-84.9l-6.6-1.1c-18.5-3.2-35.3-12.7-47.2-26.9c-12-14.2-18.6-32.5-18.6-51.4c0-10.8,12.4-41,24.6-65.9c6.2-0.8,17.4-3.1,28.5-8.8c9.2-4.7,19.3-12.3,25.8-24.4c6.2,26.1,8.9,48.9,8.9,49.2l0.8,7.1h23.6c21,0,41-6.8,57.8-19.7c10.4-7.9,23.1-12.3,35.7-12.3c6.3,0,12.5,1.1,18.4,3.2c1.9,0.7,3.4,1.3,4.5,2c6.4,3.6,12.2,8,17.3,13.1c15.1,15.1,23.2,30.7,23.2,52l0.1,168.7h-25v-83.4l-4.8-2.1c-10.4-4.5-17.2-14.8-17.2-26.4v-20.9l-12,7C296.8,309.7,260.5,324.3,239.9,324.3z M360.4,335.9V409h-16v-89.3C348.2,326.3,353.7,331.9,360.4,335.9z M344.4,434v-9h16v9H344.4z M376.4,434v-9h25v9H376.4z" />
            <path d="M161,128.1c7.4-10.7,4.6-25.5-6.1-32.8c-3.9-2.7-8.6-4.1-13.3-4.1c-7.8,0-15.1,3.8-19.5,10.3c-7.4,10.7-4.6,25.5,6.1,32.8c3.9,2.7,8.6,4.1,13.3,4.1h0C149.3,138.4,156.6,134.5,161,128.1z M147.8,119.1c-1.4,2.1-3.8,3.3-6.3,3.3c-1.5,0-3-0.5-4.3-1.3c-3.5-2.4-4.3-7.1-2-10.6c1.4-2.1,3.8-3.3,6.3-3.3c1.5,0,3,0.5,4.3,1.3c1.7,1.1,2.8,2.9,3.2,4.9C149.4,115.4,148.9,117.4,147.8,119.1z" />
            <path d="M363.3,171.6c-0.6,0-1.2,0-1.9-0.1c-6.6-0.5-18.3-3.7-21.8-9.8c-1.4-2.6-1.6-5.5-0.3-8v0c19.7-39.5,10.4-90.8,10.3-91.3l-2.7-14.4l78.3,37.2l-2.1,6.3c-0.3,0.8-6.8,20.1-17,39.4C391.7,158.2,377.6,171.6,363.3,171.6z M352.7,160.3C352.7,160.3,352.7,160.3,352.7,160.3C352.7,160.3,352.7,160.3,352.7,160.3L352.7,160.3z M355.2,154.9c2,0.7,4.6,1.4,7.4,1.6c0.2,0,0.4,0,0.6,0c13.9,0,33.1-35.7,43.4-63.7l-40.5-19.2C367.7,92,368.1,125.2,355.2,154.9z" /></svg>
        </a>
      </span>
      </Col>
    );
  }
}

Unicorn.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool
};

export default Unicorn;
