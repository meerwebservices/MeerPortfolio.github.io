<template>
  <div class="container">
    <div class="AnimationBg">
      <div class="animated-bg-line">
        <div class="line-item"></div>
        <div class="line-item"></div>
        <div class="line-item"></div>
        <div class="line-item"></div>
        <div class="line-item"></div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'AnimationBg',
  props: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$primary:#d79d4b;
$border-color:rgba(255, 255, 255, 0.1);
/*-- Background Animations--*/
.AnimationBg{
  position: relative;
  .animated-bg-line {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    height: 100vh;
    border-left: 1px solid $border-color;
    width: 100%;
    margin: 0 auto;
    z-index: -1;
    position: absolute;
    &::before {
      content: "";
      top: -27px;
      width: 1px;
      left: 0;
      height: 25px;
      position: absolute;
      -webkit-animation: scroll1 30s ease-out infinite;
      animation: scroll1 30s ease-out infinite;
      background-color: $primary;
    }
    .line-item {
      position: relative;
      border-left: 1px solid $border-color;
      &::before {
        content: "";
        bottom: -27px;
        width: 1px;
        right: -1px;
        height: 25px;
        position: absolute;
        background-color: $primary;
      }
      &:last-child {
        border-right: 1px solid $border-color;
      }
      &:nth-child(1)::before {
        -webkit-animation: scroll2 30s ease-out infinite;
        animation: scroll2 30s ease-out infinite;
      }
      &:nth-child(2)::before {
        -webkit-animation: scroll1 30s ease-out infinite 4s;
        animation: scroll1 30s ease-out infinite 4s;
      }
      &:nth-child(3)::before {
        -webkit-animation: scroll2 30s ease-out infinite 3s;
        animation: scroll2 30s ease-out infinite 3s;
      }

      &:nth-child(4)::before {
        -webkit-animation: scroll1 30s ease-out infinite 2s;
        animation: scroll1 30s ease-out infinite 2s;
      }

      &:nth-child(5)::before {
        -webkit-animation: scroll1 30s ease-out infinite 6s;
        animation: scroll1 30s ease-out infinite 6s;
      }
    }
    @-webkit-keyframes scroll1 {
      0% {
        top: -30px;
      }
      50% {
        top: 100%;
      }
      100% {
        top: -30px;
      }
    }

    @keyframes scroll1 {
      0% {
        top: -30px;
      }
      50% {
        top: 100%;
      }
      100% {
        top: -30px;
      }
    }

    @-webkit-keyframes scroll2 {
      0% {
        top: -30px;
      }
      50% {
        bottom: 100%;
      }
      100% {
        bottom: -30px;
      }
    }

    @keyframes scroll2 {
      0% {
        top: -30px;
      }
      50% {
        bottom: 100%;
      }
      100% {
        bottom: -30px;
      }
    }
  }
}
</style>
