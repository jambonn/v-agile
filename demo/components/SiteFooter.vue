<template>
  <footer class="site-footer">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="copyright">
            <span> Copyright © {{ currentYear }} <strong>Jambon</strong> </span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <div class="license">Licensed under the MIT license</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "SiteFooter",
  setup() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
