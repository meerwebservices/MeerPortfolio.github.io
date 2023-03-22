<template>
  <div id="home">
    <AnimationBg/>
    <section class="home">
      <div class="home-content ">
        <div class="container">
          <div class="row ">
            <div class="home-text text-center">
              <strong>HELLO, I'M</strong>
              <h1>GHULAM MEER JILANI</h1>
              <p>A Freelance UI Designer & Web Developer</p>
              <div class="home-btn">
                <router-link to="/Portfolio" class="btn-style btn-1">view my work</router-link>
              </div>
              <div class="social-icon">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/ghulammeerjilani"><i class="fab fa-facebook-f"></i></a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/ghulammeerjilani"><i class="fab fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fab fa-whatsapp"></i></a>
                  </li>
                  <li>
                    <a href="https://pk.linkedin.com/in/ghulammeerjilani"><i class="fab fa-linkedin"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- header social -->
      </div>
    </section>
  </div>

</template>

<script>
import AnimationBg from "@/components/AnimationBg";

export default {
  name: 'HomeView',
  components: {AnimationBg,}
}
</script>

<style lang="scss" scoped>

</style>

