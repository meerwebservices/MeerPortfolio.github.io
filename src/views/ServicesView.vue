<template>
  <div>
    <section id="services">
      <div class="container">
        <div class="section-title">
          <strong class="h4">SERVICES</strong>
          <h2>Services <span>I Provide</span></h2>
        </div>
        <div class="row mt-5">
          <div class="col-lg-4 col-md-6"  v-for="Service in Services " :key="Service">
            <div class="service-item">
              <div class="icon">
                <i :class="Service.Icon"></i>
              </div>
              <h3>{{ Service.Heading }}</h3>
              <p>{{Service.Information}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: "ServicesView",
  components: {},
  data() {
    return {
      Services:[
        {
          Icon: "fas fa-code",
          Heading: "Web Development",
          Information: "I Provide Services About Front End Development And WordPress Development"
        },
        {
          Icon: "fas fa-code",
          Heading: "XD TO HTML",
          Information: "I Will Convert Adobe XD Design To Responsive HTML Webpage With Clean Code"
        },
        {
          Icon: "fas fa-code",
          Heading: "FIGMA TO HTML",
          Information: "I Will Convert Figma Design To Responsive HTML Webpage With Clean Code"
        },
        {
          Icon: "fas fa-code",
          Heading: "PSD TO HTML",
          Information: "I Will Convert PSD Design To Responsive HTML Webpage With Clean Code"
        },
        {
          Icon: "fas fa-code",
          Heading: "VUE JS",
          Information: "I Will Convert Your Design And HTML  Webpage To Vue Js With Clean Code"
        },
        {
          Icon: "fas fa-code",
          Heading: "REACT JS",
          Information: "I Will Convert Your Design And HTML  Webpage To React Js With Clean Code"
        },
        {
          Icon: "fas fa-code",
          Heading: "HTML TO WORDPRESS",
          Information: "I will Convert Your Html Web To WordPress Website."
        },
        {
          Icon: "fas fa-code",
          Heading: "WORDPRESS",
          Information: "I Will Convert Your Design To WordPress Website With Elementor"
        },
        {
          Icon: "fas fa-code",
          Heading: "WORDPRESS THEME",
          Information: "I can Make Themes For WordPress According to Your Needs."
        },
      ]
    };
  },
};
</script>
<style lang="scss" scoped>


</style>