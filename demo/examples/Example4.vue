<template>
  <section class="section section--demo-4">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h2 class="section__title">
            <strong>#4</strong> demo
          </h2>
          <p class="section__description">
            responsive settings and two related carousels
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <agile ref="main" class="main" :options="options1" :as-nav-for="asNavFor1">
            <div class="slide" v-for="(slide, index) in slides" :key="index" :class="`slide--${index}`">
              <img :src="slide" alt="" />
            </div>
          </agile>
        </div>
        <div class="col-xs-12">
          <agile ref="thumbnails" class="thumbnails" :options="options2" :as-nav-for="asNavFor2">
            <div v-for="(slide, index) in slides" :key="index" :class="`slide slide--thumbnail slide--${index}`" @click="$refs.thumbnails.goTo(index)">
              <img :src="slide" alt="" />
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
import { ref, onMounted } from 'vue';

export default {
  name: 'Example-4',
  setup() {
    const options1 = {
      dots: false,
      fade: true,
      navButtons: false
    };
    const options2 = {
      autoplay: true,
      autoplaySpeed: 5000,
      centerMode: true,
      dots: false,
      navButtons: false,
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 1000,
          settings: {
            navButtons: true
          }
        }
      ]
    };
    const slides = [
      'https://images.unsplash.com/photo-1453831362806-3d5577f014a4?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      'https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      'https://images.unsplash.com/photo-1472926373053-51b220987527?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      'https://images.unsplash.com/photo-1497534547324-0ebb3f052e88?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
    ];
    const thumbnails = ref(null);
    const main = ref(null);
    const asNavFor1 = ref([]);
    const asNavFor2 = ref([]);

    onMounted(() => {
      asNavFor1.value.push(thumbnails.value);
      asNavFor2.value.push(main.value);
    })

    return {
      options1,
      options2,
      slides,
      thumbnails,
      main,
      asNavFor1,
      asNavFor2,
    }
  }
}
</script>

<style lang="scss">
.section--demo-4 {
  .main {
    margin-bottom: 30px;
  }
  .thumbnails {
    margin: 0 -5px;
    width: calc(100% + 10px);
  }
  .agile {
    &__actions {
      position: static;
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
  .thumbnails {
    .agile__nav-button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);

      &--prev {
        left: -45px;
      }

      &--next {
        right: -45px;
      }
    }
  }
  .slide {
    align-items: center;
    box-sizing: border-box;
    color: #fff;
    display: flex;
    height: 450px;
    justify-content: center;

    &--thumbnail {
      cursor: pointer;
      height: 100px;
      padding: 0 5px;
      transition: opacity .3s;

      &:hover {
        opacity: .75;
      }
    }
    img {
      height: 100%;
      object-fit: cover;
      object-position: center;
      width: 100%;
    }
  }
}
</style>
