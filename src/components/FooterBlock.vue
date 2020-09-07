<template>
  <div class="footer">
    <div class="footer-wrapper">
      <div class="footer-info">
        <logo-button :path="require('../assets/image/canny-logo.png')" logo="canny" image-size="widthMax"/>
        <div class="text">
          <span>© Canny 2020</span>
          <div class="copyright-buttons">
            <primary-button label="Privacy" button-type="copyright" />  ·
            <primary-button label="Terms" button-type="copyright"/>  ·
            <primary-button label="Security" button-type="copyright" />
          </div>
        </div>
      </div>

      <ul class="sections">
        <li class="section" v-for="section in sections" :key="section.id">
          <span class="section-title"> {{ section.title.toUpperCase() }}</span>
          <ul class="section-buttons">
            <li class="section-button" v-for="sectionButton in section.buttons" :key="sectionButton.id">
              <primary-button :label="sectionButton" button-type="footerButton" />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import LogoButton from "./buttons/LogoButton";
import PrimaryButton from "./buttons/PrimaryButton";

export default {
  name: "FooterBlock",

  components: {
    LogoButton,
    PrimaryButton
  },

  data () {
    return {
      sections: [
          {title: "compare", buttons: ["User Voice", "Aha Ideas", "Trello"]},
          {title: "connect", buttons: ["Book A Demo", "About Us", "Blog", "Jobs", "Twitter", "Feedback"]},
          {title: "product", buttons: ["Features", "Pricing", "Use Cases", "Integrations"]}
        ]
    }
  }
}
</script>

<style scoped>

  .footer {
    width: 100%;
    border-top: 1px solid #efefef;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    padding-top: 70px;
    padding-bottom: 80px;
  }

  .footer-wrapper {
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    box-sizing: border-box;
  }

  .footer-info {
    display: flex;
    flex-direction: column;
  }

  .text {
    font-size: 12px;
    color: #666666;
    line-height: 20px;
  }

  .copyright-buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 150px;
  }

  .sections {
    display: flex;
    flex-direction: row;
  }

  .section {
    display: flex;
    flex-direction: column;
    justify-content: left;
    padding-left: 90px;
  }

  .section-title {
    margin-bottom: 5px;
    font-size: 11px;
    color: #999999;
  }
</style>