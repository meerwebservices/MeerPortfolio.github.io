<template>
  <div class="Portfolio">
    <!-- filter btn -->
    <div class="row">
      <ul class="filter-btn">
        <li class="active">All</li>
        <li>HTML/CSS</li>
        <li>VUE JS</li>
        <li>REACT JS</li>
        <li>WORDPRESS</li>
      </ul>
    </div>
    <!-- portfolio items -->
    <div class="row mt-5">
      <div class="col-lg-3 col-md-4 col-sm-6 wordpress mt-4" v-for="item in items" :key="item">
        <div class="work-image">
          <img :src="require(`../assets/images/portfolio/${item.img}`)" :alt="item.alt"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioGallery",
  data() {
    return {
      items: [
        {
          img: "portfolio-1.jpg",
          alt:"Img-1",
        },
        {
          img: "portfolio-2.jpg",
          alt:"Img-2",
        },
        {
          img: "portfolio-3.jpg",
          alt:"Img-3",
        },
        {
          img: "portfolio-4.jpg",
          alt:"Img-4",
        },
        {
          img: "portfolio-5.jpg",
          alt:"Img-5",
        },
        {
          img: "portfolio-6.jpg",
          alt:"Img-6",
        },
        {
          img: "portfolio-4.jpg",
          alt:"Img-4",
        },
        {
          img: "portfolio-2.jpg",
          alt:"Img-2",
        },
      ],
    }
  }
}
</script>
<style lang="scss" scoped>
.Portfolio {
  .filter-btn {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
    li {
      text-transform: uppercase;
      text-align: center;
      outline: none !important;
      border: 1px solid;
      border-color: var(--main-color) !important;
      padding: 8px;
      font-weight: 600;
      border-radius: 5px;
      color: var(--main-color) !important;
      transition: all 0.3s ease;
      &:hover, &.active {
        color: var(--white) !important;
        background-color: var(--main-color);
        cursor: pointer;
      }
    }
  }
  .work-image {
    width: 100%;
    border-radius: 8px;
    border: .5px solid white;
    transition: all .2s ease-in-out;
    &:hover{
      transform: translateY(-5px);
      border-color:goldenrod;
    }
    img {
      border-radius: 8px;
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>