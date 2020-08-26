<template>
  <div class="home-screen">
    <div class="header">
      <div class="header-wrapper">
        <navigation-bar/>
        <content-block :is-revert="false" :with-button="true">
          <span slot="title">Track feedback to build better products</span>
          <span slot="text">Capture feedback in one organized place to inform your product decisions.</span>
          <filled-button slot="trial-button" :label="trialButtonLabel" button-color="green" />
          <span slot="trial-description">Free 14 day trial · No credit card required</span>

          <primary-image path="https://canny.io/admin-view.jpg?52fbe67b5eaae40f9fdecaeb66bb4d7a" image-size="max" slot="image"/>
          <border-button :with-image="true" :path="require('../assets/image/play-button.svg')" image-size="width11"
                         :label="playButtonTitle" button-type="play" slot="more-button" />
        </content-block>
        <logo-buttons-block :logo-buttons="logoButtons" />
      </div>
    </div>
    <div class="body">
      <div class="body-wrapper">
        <content-block image="idea" text-width="500px" title-width="600px">
        <span slot="title">Collect feedback from customers + teammates</span>
        <span slot="text">
        Ditch your messy spreadsheets. Stop letting ideas slip through the cracks. Manage and organize all feedback in one tool.
      </span>
        <primary-image path="https://canny.io/new-landing-hero.gif?764244d20f4c018ac7b394ccc02a4d58"
                       image-size="max" slot="image"/>
        <primary-button label="Check out our full list of features →" slot="trial-button" button-type="features"/>
      </content-block>
        <primary-image path="https://canny.io/subdomain.jpg?68140bf184538a0904e016e005a44f5f" image-size="max"/>
        <content-block :is-revert="true" text-width="370px" image="chat">
          <span slot="title">Prioritize customer feedback for better product decisions</span>
          <span slot="text">See which features are most requested, and clarify use cases up front. Don’t waste time building the wrong things.</span>
          <primary-image path="https://canny.io/feature-highlight-1.png?b263200f655fda96bfb943c358cb3c8a" slot="image"
                         image-size="max" />
        </content-block>
        <content-block image="chat" text-width="370px" title-width="380px">
          <span slot="title">Keep everyone engaged with product updates</span>
          <span slot="text">
        Automatically follow up with people when you release a feature. Keep the feedback loop going strong.
      </span>
          <primary-image path="https://canny.io/feature-highlight-2.png?b979224f8b113dd7ef96bf7a998c7c1c" image-size="max"
                         slot="image"/>
        </content-block>
        <content-block :is-revert="true" image="integrations" text-width="500px" top-margin="10px">
          <span slot="title">Integrations</span>
          <span slot="text">Canny works great with tools in your existing workflow.</span>
          <primary-button slot="trial-button" label="Learn more" button-type="decorated"/>
          <logo-buttons-block slot="image" :logo-buttons="integrationLogoButtons" :is-integration="true"
          logo-button-image-size="widthMax"/>
        </content-block>
        <use-cases :use-cases="useCases"/>
      </div>
    </div>
    <footer-block />
  </div>
</template>

<script>

import NavigationBar from "../components/NavigationBar";
import ContentBlock from "../components/ContentBlock";
import PrimaryImage from "../components/PrimaryImage";
import LogoButtonsBlock from "../components/LogoButtonsBlock";
import PrimaryButton from "../components/buttons/PrimaryButton";
import FilledButton from "../components/buttons/FilledButton";
import BorderButton from "../components/buttons/BorderButton";
import UseCases from "../components/UseCases";
import FooterBlock from "@/components/FooterBlock";

export default {
  name: "HomeScreen",

  components: {
    FooterBlock,
    UseCases,
    NavigationBar, ContentBlock, PrimaryImage, LogoButtonsBlock, PrimaryButton, FilledButton, BorderButton},

  data () {
    return {
      integrationLogoButtons: [{name: "slack", logoPath: require("../assets/image/slack-logo.svg")},
        {name: "intercom", logoPath: require("../assets/image/intercom-logo.svg")},
        {name: "zapier", logoPath: require("../assets/image/zapier-logo.svg")},
        {name: "jira", logoPath: require("../assets/image/jira-logo.svg")},
        {name: "zendesk", logoPath: require("../assets/image/zendesk-logo.svg")},
        {name: "salesforce", logoPath: require("../assets/image/salesforce-logo.svg")},
        {name: "github", logoPath: require("../assets/image/github-logo.svg")}],

      playButtonTitle: "see how it works",
      trialButtonLabel: "get started",
      logoButtons: [{name: "ahrefs", logoPath: require("../assets/image/ahrefs-logo.svg")},
        {name: "compass", logoPath: require("../assets/image/compass-logo.svg")},
        {name: "lyft", logoPath: require("../assets/image/lyft_logo.svg")},
        {name: "bench", logoPath: require("../assets/image/bench-logo.svg")},
        {name: "clickup", logoPath: require("../assets/image/clickup-logo.svg")}],

      useCases: [
          {username: "Zeb Evans", position: "Founder at Clickup", comment: "“Getting Canny set up couldn’t have been easier. We started with a blank canvas and allowed our users to paint the rest.”"},
          {username: "Haya Odeh", position: "Co-founder at Reply.it", comment: "“Live chat sets unrealistic expectations for support. Canny helps us continue to support our users while we grow.”"},
          {username: "David Reed", position: "Growth at ReadMe", comment: "“Managing feature requests from our thousands of customers was something I spent a lot of time on. Canny has enabled me to focus back on my job.”"}
      ]
    }
  },

  mounted() {
    this.playButtonTitle = this.playButtonTitle.toUpperCase()
    this.trialButtonLabel = this.trialButtonLabel.toUpperCase()
  }
}
</script>

<style scoped>
  .home-screen {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f1f1f1;
  }

  .header-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #f1f1f1;
    background: #ffffff;
    max-width: 1200px;
    padding: 0 30px;
    box-sizing: border-box;
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

</style>
