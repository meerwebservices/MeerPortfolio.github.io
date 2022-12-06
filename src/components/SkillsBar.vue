<template>
  <!-- skills progress bar -->
  <div class="skillsBar">
    <ul>
      <li v-for="skill in skills " :key="skill">
        <div class="lang">{{ skill.lang }} <span class="percent">{{ skill.percent }}%</span></div>
        <div class="bar">
          <div class="progress" v-bind:style="{'background':skill.color, 'width':skill.percent+'%'}"></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SkillsBar",
  data() {
    return {
      skills: [
        {lang: "HTML5", percent: 90, color: "#d79d4b"},
        {lang: "CSS3", percent: 70, color: "#d79d4b"},
        {lang: "SCSS", percent: 60, color: "#d79d4b"},
        {lang: "BOOTSTRAP", percent: 60, color: "#d79d4b"},
        {lang: "JAVASCRIPT", percent: 50, color: "#d79d4b"},
        {lang: "JQUERY", percent: 50, color: "#d79d4b"},
        {lang: "VUE JS", percent: 50, color: "#d79d4b"}
      ]
    }
  },
};
</script>

<style lang="scss" scoped>
.skillsBar {
  ul {
    li {
      list-style-type: none;
      padding:0 10px;
      &:not(:last-of-type){
        margin-bottom: 10px;
      }
      .lang {
        font-size: 16px;
        font-weight: 600;
        color: white;
      }
      .percent {
        float: right;
        font-weight: 600;
        height: 30px;
        line-height: 30px;
      }
      .bar {
        width: 100%;
        background: #dfdfdf;
        overflow: hidden;
        height: 5px;
        margin-top: 15px;
        border-radius:5px ;
      }
      .progress {
        height: 6px;
      }
    }
  }
}


</style>