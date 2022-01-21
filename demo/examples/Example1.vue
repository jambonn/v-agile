<template>
  <section class="section section--demo-1">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h2 class="section__title">
            <strong>#1</strong> demo
          </h2>
          <p class="section__description">v-agile with default settings and minimal styles</p>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <agile>
            <div v-for="n in 6" :key="n" :class="`slide slide--${n}`">
              <h3>{{ n }}</h3>
            </div>
            <template #prevButton>
              <i class="fas fa-chevron-left"></i>
            </template>
            <template #nextButton>
              <i class="fas fa-chevron-right"></i>
            </template>
          </agile>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Example-1'
}
</script>

<style lang="scss">
.section--demo-1 {
  .agile {
    &__actions {
      margin-top: 20px;
    }
    &__nav-button {
      background: transparent;
      border: none;
      color: #ccc;
      cursor: pointer;
      font-size: 24px;
      transition-duration: .3s;
      &:hover {
        color: #888;
      }
    }
    &__dot {
      margin: 0 10px;

      button {
        background-color: #eee;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: block;
        height: 10px;
        font-size: 0;
        line-height: 0;
        margin: 0;
        padding: 0;
        transition-duration: .3s;
        width: 10px;
      }
      &--current,
      &:hover {
        button {
          background-color: #888;
        }
      }
    }
  }
  .slide {
    height: 400px;
    align-items: center;
    color: #fff;
    display: flex;
    justify-content: center;
    padding: 40px;

    h3 {
      font-size: 32px;
      font-weight: 300;
    }
  }


  $colors: #f1c40f #e67e22 #e74c3c #9b59b6 #3498db #2ecc71;
  @for $i from 1 through length($colors) {
    $color: nth($colors, $i);
    .slide--#{$i} {
      background-color: $color;
    }
  }
}
</style>
