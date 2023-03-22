<template>

    <section id="Portfolio">
      <div class="container">
        <div class="section-title">
          <strong class="h4">PORTFOLIO</strong>
          <h2>our latest <span>Work</span></h2>
        </div>
        <!-- PortfolioGallery Component -->
        <PortfolioGallery></PortfolioGallery>
      </div>
    </section>
</template>
<script>
import PortfolioGallery from "@/components/PortfolioGallery";

export default {
  name: "PortfolioView",
  components: {
    PortfolioGallery,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped></style>
