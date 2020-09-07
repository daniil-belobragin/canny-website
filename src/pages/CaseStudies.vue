<template>
  <div class="screen">
    <div class="header">
      <div class="header-wrapper">
        <navigation-bar />
      </div>
    </div>
    <div class="body">
      <div class="body-wrapper">
        <ul class="wrapper">
          <li class="el">
            <div class="element">
              <span class="text">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span>
            </div>
          </li>
          <li class="el">
            <div class="element">
              <span class="text">aaaaaaaaaaaaaaaaaaa</span>
            </div>
          </li>
          <li class="el">
            <div class="element">
              <span class="text">aaaaaaaaaaaaaaaaaaa</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <footer-block />
  </div>
</template>

<script>
import NavigationBar from "../components/NavigationBar";
import FooterBlock from "@/components/FooterBlock";
export default {
  name: "CaseStudies",
  components: {FooterBlock, NavigationBar}
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
   background: #7edb75;
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

 .wrapper {
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
 }

 .element {
   padding: 20px;
   box-sizing: border-box;
   background: #525df9;
   border: 1px solid red;
   text-align: center;
 }

 .el {
   width: 31%;
 }

 .text {
   width: 100%;
 }

</style>