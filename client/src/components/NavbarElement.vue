<template>
<nav class="navbar" style="background-color: #f0f8ff;">
<p class="navbar-brand left-item">Доктор Айболит</p>
 <ul class="nav justify-content-end">
  <li class="nav-item">
    <router-link class="nav-link" :to="'/protocol'">Редактор шаблона</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" :to="'/template'">Редактор протокола</router-link>
  </li>
  <li class="nav-item">
    <a class="nav-link" target="_blank" href="https://yandex.ru/images/search?text=%D0%BC%D0%B8%D0%BB%D1%8B%D0%B5%20%D0%BA%D0%BE%D1%82%D0%B8%D0%BA%D0%B8">Поднять настроение</a>
  </li>
</ul>
</nav>
</template>

<script>
export default {

}
</script>

<style scoped>
  
  .left-item{
    margin-top: 0.4rem;
    margin-left: 2rem;
  }


</style>
