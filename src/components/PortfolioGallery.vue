<template>
  <!-- PortfolioGallery -->
  <div class="Portfolio">
    <form class="bg-black p-5 text-right">
    <input type="text" class="p-2 bg-grey-darker" placeholder="Search" v-model="search_filter" @keyup="updatePaginate">
    <button class="text-white px-4" @click.prevent="setStatus('categoryOne')">Category 1</button>
    <button class="text-white px-4" @click.prevent="setStatus('categoryTwo')">Category 2</button>
    <button class="text-white px-4" @click.prevent="setStatus('categoryThree')">Category 3</button>
       <button class="text-white px-4 font-bold" @click.prevent="setStatus('')">All</button>
  </form>
  
    <div class="flex flex-wrap">
                <div class="w-1/3"
                     v-for="item in items | filterBy search_filter in 'name' | filterBy status_filter in 'group'" 
         v-show="setPaginate($index)">
                    <div class="w-auto flex-grow flex flex-col justify-center text-white  lg:h-70 lg:p-32 p-8 bg-cover bg-center relative overlay overlay-hover"  :style="{ 'background-image': 'url(' + item.pic + ')' }">
                      <div class="z-10">
                          <h3 class="text-5xl font-medium font-serif pb-5">
                               {{ item.name }}
                          </h3>
                          <p> {{ item.group }}</p>
                          <p class="pt-5"><a class="text-white no-underline font-bold" href="">Read more <i class="fas fa-arrow-right"></i></a></p>
                      </div>
                    </div>
                </div>
              </div>
    <div id="pagination">
      <a href="#" class="btn btn-default" v-for="page_index in paginate_total" @click.prevent="updateCurrent(page_index + 1)">
        {{ page_index + 1 }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioGallery",
   created() {
     this.paginate_total = this.items.length/this.paginate;
   },
   data: {
      current: 1,
      items: [
        { name: 'Thought Catalog', group: 'categoryOne', pic: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
        { name: 'Markus Spiske', group: 'categoryTwo', pic: 'https://images.unsplash.com/photo-1534531173927-aeb928d54385?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'},
        { name: 'Barry McGee', group: 'categoryOne', pic: 'https://images.unsplash.com/photo-1528325132206-7863f64f69d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
        { name: 'Florencia Potter', group: 'categoryTwo', pic: 'https://images.unsplash.com/photo-1531700608656-7806e01d2e77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1327&q=80'},
        { name: 'Patrick Fore', group: 'categoryThree', pic: 'https://images.unsplash.com/photo-1504406438164-c0e042535100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'},
                { name: 'Patrick Fore', group: 'categoryThree', pic: 'https://images.unsplash.com/photo-1504406438164-c0e042535100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'},
                { name: 'Patrick Fore', group: 'categoryThree', pic: 'https://images.unsplash.com/photo-1504406438164-c0e042535100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'},
                { name: 'Patrick Fore', group: 'categoryThree', pic: 'https://images.unsplash.com/photo-1504406438164-c0e042535100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'},
                { name: 'Patrick Fore', group: 'categoryThree', pic: 'https://images.unsplash.com/photo-1504406438164-c0e042535100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'},
                { name: 'Patrick Fore', group: 'categoryThree', pic: 'https://images.unsplash.com/photo-1504406438164-c0e042535100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'},
                { name: 'Patrick Fore', group: 'categoryThree', pic: 'https://images.unsplash.com/photo-1504406438164-c0e042535100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'},
                { name: 'Patrick Fore', group: 'categoryThree', pic: 'https://images.unsplash.com/photo-1504406438164-c0e042535100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'},
     ],
     paginate: 5,
     paginate_total: 0,
     search_filter: '',
     status_filter: ''
   },
   methods: {
     setPaginate: function (i) {
       if (this.current == 1) {
         return i < this.paginate;
       }
       else {
         return (i >= (this.paginate * (this.current - 1)) && i < (this.current * this.paginate));
       }
     },
     setStatus: function (status) {
       this.status_filter = status;
       this.$nextTick(function () {
         this.updatePaginate();
       });
     },
     updateCurrent: function (i) {
       this.current = i;
     },
     updatePaginate: function () {
       this.current = 1;
       this.paginate_total = Math.ceil(document.querySelectorAll('tbody tr').length/this.paginate);
     }
   }
};
</script>

<style lang="scss" scoped>
.Portfolio{
  .overlay {
  &:after { 
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background:rgba(0, 0, 0, 0.32);
    transition: all 1s ease;
    animation-delay: 3s;
    z-index: 0;
  }
  &.overlay-hover:hover {
    cursor: pointer;
    &:after { 
      content: '';
      background:rgba(0, 0, 0, 0.62);
      transition: all .5s ease;
    }
  }
}
}


</style>