<template>
  <div id="app">
    <div class="menu">
      <button  v-for="(category, index) in categories" :key="category"
              @click="filter(category)" :class="{active: selectedCat === category}">
        Category {{ index + 1 }}
      </button>
    </div>
    <div v-for="preview in previews" :key="preview" :class="'preview' + preview.cat">

    </div>
  </div>
</template>

<script>
export default {
  name: "GallerySet",
  data() {
    return {
      categories: [
        'cat1',
        'cat2',
        'cat3'
      ],
      previews: [
        {cat: 'cat1'},
        {cat: 'cat1'},
        {cat: 'cat1'},
        {cat: 'cat2'},
        {cat: 'cat2'},
        {cat: 'cat2'},
        {cat: 'cat2'},
        {cat: 'cat3'},
        {cat: 'cat3'},
      ],
      selectedCat: 'all',
    }
  },
  methods: {
    filter(selection) {
      this.selectedCat = selection;
    }
  },
  mounted() {
    // this.previews = _.shuffle(this.previews);
  }
}
</script>
<style lang="scss" scoped>
#app {
  background: #fff;
  max-width: 820px;
  width: 100%;
  margin: 0 auto;
  border-radius: 4px;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 10px;
}
.menu {
  grid-column-start: 1;
  grid-column-end: -1;
  display: flex;
  flex-flow: wrap;
  margin: -5px -5px;
  justify-content: center;
}
.preview {
  height: 100px;
  width: 0;
  opacity: 0;
  animation: appear .5s ease-in-out forwards;
}
button {
  cursor: pointer;
  margin: 5px 5px;
  padding: 5px 10px;
  background: #ddd;
  border: 1px solid #ddd;
  transition: .3s ease-in-out;
  transition-property: background, border, color;
  &.active{
    background: goldenrod;
    color: White;
    border: 1px solid #333;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
    background: #333;
    border: 1px solid #333;
  }
}
</style>