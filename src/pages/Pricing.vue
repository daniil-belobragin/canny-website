<template>
  <div class="screen" v-on:mousemove="moving" v-on:mouseup="mouseUP">
    <div class="header">
      <div class="header-wrapper">
        <navigation-bar />
      </div>
    </div>

    <div class="body">
      <div class="body-wrapper">
        <div class="pricing-wrapper">
          <div class="pricing-title">
            <content-block :only-text="true" text-font-size="15px">
              <span slot="title">Costs less than building the wrong features</span>
              <span slot="text">Use Canny with your whole team at no additional cost</span>
            </content-block>
          </div>
          <ul class="pricing">
            <li class="pricing-block" v-for="(pricingBlock, index) in pricingBlocks" :key="pricingBlock.id">
              <span class="name">
                {{ pricingBlock.name }}
              </span>
              <div class="price">
                  <span class="per-month">
                    {{ pricingBlock.price }}
                    <span class="month" v-show="!isLast(index)"> / mo</span>
                  </span>
                <span class="user-count">
                    {{ pricingBlock.userCount }} tracked users
                  </span>
                <span class="additional-price" v-if="!isLast(index)">
                    + {{ pricingBlock.additionalPrice }} / additional {{ pricingBlock.userCount }} tracked users
                  </span>
                <div class="additional-price" v-else>
                  <span class="additional-price">{{ pricingBlock.additionalPrice.split("\n")[0] }}</span>
                  <span class="additional-price">{{ pricingBlock.additionalPrice.split("\n")[1] }}</span>
                </div>
              </div>
              <div class="register" v-if="!isLast(index)">
                <filled-button :label="pricingBlock.buttonLabel.toUpperCase()" button-type="pricing" />
                <span class="register-text">Free 14-day trial</span>
              </div>
              <div class="custom-register" v-else>
                <filled-button :label="pricingBlock.buttonLabel.toUpperCase()" button-color="black" button-type="pricing" />
              </div>
            </li>
          </ul>
          <div class="details-wrapper">
            <div class="details">
              <content-block title-font-size="15px" text-font-size="15px" text-align="left" top-margin="5px" :only-text="true">
                <span slot="title">What is a tracked user?</span>
                <span slot="text">A tracked user is anyone who posts, votes, or comments on feedback.</span>
              </content-block>
            </div>
            <div class="slider-wrapper">
              <span class="estimate-label">Estimate your spend:</span>
              <div class="estimation">
                <span class="percentage">5% </span>
                <span> of </span>
                <span class="total-users">total users</span>
                <span> = </span>
                <span class="tracked-users">tracked users</span>
                <div class="slider">
                  <div class="slider-fill">
                  </div>
                  <div class="slider-handle" v-bind:style="{left: position + 'px'}">
                    <div class="slider-button" v-on:mousedown="logger" v-on:mouseup="mouseUP">
                    </div>
                    <span class="slider-price">$90/mo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer-block />
  </div>
</template>

<script>
import NavigationBar from "../components/NavigationBar";
import FooterBlock from "../components/FooterBlock";
import ContentBlock from "../components/ContentBlock";
import FilledButton from "../components/buttons/FilledButton";
export default {
  name: "Pricing",

  components: {FilledButton, ContentBlock, FooterBlock, NavigationBar},

  data () {
    return {
      pricingBlocks: [{name: "Starter", price: "$50", userCount: "100", additionalPrice: "$20", buttonLabel: "get started"},
                      {name: "Growth", price: "$200", userCount: "1000", additionalPrice: "$100", buttonLabel: "get started"},
                      {name: "Business", price: "Custom", userCount: "Unlimited",
                        additionalPrice: "Dedicated account manager \n 99.9% uptime SLA", buttonLabel: "contact us"}],
      position: "100",
      mouseDown: false,
      min: 0,
      max: 100,
    }
  },

  methods: {
    isLast (itemIndex) {
      return itemIndex === this.pricingBlocks.length - 1
    },
    logger () {
      this.mouseDown = true;
      console.log('42')
    },
    moving () {
      if (this.mouseDown) {
        this.position = event.clientX - 450
      }
    },
    mouseUP () {
      this.mouseDown = false
      console.log("hui")
    }
  },

  mounted() {
    document.title = "Pricing | Canny"
    console.log(window.innerWidth)
    console.log()
  },

  watch: {
    sliderButtonPosition (newPosition) {
      this.position = newPosition
      console.log(newPosition)
    }
  }
}
</script>

<style scoped>
  .screen {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f8f8f8;
  }

  .header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #efefef;
  }

  .header-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    padding: 0 30px;
    box-sizing: border-box;
  }

  .body {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .body-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    padding: 0 30px;
    box-sizing: border-box;
  }

  .pricing-wrapper {
    width: 100%;
  }

  .pricing {
    display: flex;
    justify-content: space-between;
    width: 100%;
    line-height: 22px;
  }

  .pricing-title {
    width: 100%;
    margin: 80px 0;
    padding: 0 30px;
    box-sizing: border-box;
  }

  .pricing-block {
    font-size: 15px;
    color: #333333;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    border: 1px solid #efefef;
    background: #ffffff;
    width: 31%;
    border-radius: 10px;
    box-sizing: border-box;
  }

  .name {
    margin-bottom: 20px;
  }

  .price {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .per-month {
    color: #525df9;
    font-size: 24px;
    font-weight: normal;
    margin-bottom: 10px;
  }

  .month {
    font-size: 15px;
    font-weight: 600;
  }

  .user-count {
    color: #666666;
    font-weight: normal;
    margin-bottom: 20px;
  }

  .additional-price {
    color: #666666;
    font-weight: normal;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
  }

  .register {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .custom-register {
    margin-top: 40px;
    margin-bottom: 22px;
  }

  .register-text {
    margin-top: 5px;
    font-size: 12px;
    color: #666666;
    font-weight: normal;
  }

  .details-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 50px;
    padding: 0 30px;
    box-sizing: border-box;
    line-height: 22px;
  }

  .details {
    width: 31%;
    min-width: 250px;
    margin-right: 3.5%;
    margin-bottom: 30px;
  }

  .slider-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
    color: #333333;

  }

  .estimate-label {
    font-size: 15px;
    margin-bottom: 5px;
  }

  .percentage {
    background: #efefef;
    padding: 0 5px;
    border-radius: 5px;
  }

  .total-users {
    font-weight: 600;
  }

  .tracked-users {
    font-weight: 600;
  }

  .slider {
    height: 8px;
    width: 100%;
    background: #efefef;
    border-radius: 8px;
    position: relative;
  }

  .slider-fill {
    width: 200px;
    background: #525df9;
    height: 8px;
    border-radius: 8px;
  }

  .slider-handle {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100px;
    top: -8px;
    transform: translateX(-50px);
  }

  .slider-button {
    width: 18px;
    height: 18px;
    background: #ffffff;
    margin-top: -10px;
    border: 3px solid #dddddd;
    border-radius: 100%;
    cursor: grab;
  }

  .slider-price {
    color: #525df9;
    margin-top: 5px;
  }

</style>