<template>
  <div id="app">
    <div class="sidebar">
      <div class="logo">
        <div class="img-wrapper">
          <a href="/"><img src="./assets/images/profile-1.png" alt=""></a>
        </div>
        <strong>Front End Developer</strong>
      </div>
      <nav>
        <ul>
          <li>
            <router-link to="/"><i class="fa fa-home"></i><span>Home</span></router-link>
          </li>
          <li>
            <router-link  to="/about"><i class="fa fa-user"></i><span>About</span></router-link>
          </li>
          <li>
            <router-link  to="/Services"><i class="fa fa-list"></i><span>Services</span></router-link>
          </li>
          <li>
            <router-link to="/Portfolio"><i class="fa fa-briefcase"></i><span>Portfolio</span></router-link>
          </li>
          <li>
            <router-link to="/Contact"><i class="fa fa-comments" ></i><span>Contact</span></router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="main-content">
      <!--Routes-->
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
}
</script>

