<script>
import {useScoreStore} from "@/stores/score";
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    const store = useScoreStore();
    return {
      store
    }
  },
  created() {
    this.interval = setInterval(this.store.fetchData, 5000)
  },
  beforeUnmount() {
    clearInterval(this.interval)
  }
})
</script>

<template>
  <div class="row align-items-center">
    <div class="col-1">
      <img src="/img/mustluik.jpg" class="img-fluid" alt="...">
      <img src="/img/hotlipsNewLogo.png" class="img-fluid" alt="...">
      <img src="/img/INGame.png" class="img-fluid" alt="...">
      <img src="/img/kohvikrein.png" class="img-fluid" alt="...">
      <img src="/img/Maori.png" class="img-fluid" alt="...">
      <img src="/img/MrsWaffle-LOGO-tav-01.png" class="img-fluid" alt="...">
      <img src="/img/soorikukohvik.png" class="img-fluid" alt="...">
      <img src="/img/studio.png" class="img-fluid" alt="...">
    </div>
    <div class="col-10">
      <img src="/img/GAMENIGHT.png" class="img-fluid" alt="...">
      <table class="table table-dark table-striped">
        <thead>
        <tr class="table-dark">
          <th scope="col"><strong>#</strong></th>
          <th scope="col"><strong>Nimi</strong></th>
          <th scope="col"><strong>Punktid</strong></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(row, i) in store.fullData.length" :key="i">
          <th scope="row">{{ store.loading ? 'Laeb..' : store.fullData[i][0] }}</th>
          <td class="text-capitalize">{{ !store.loading ? store.fullData[i][1] : 'Laeb..' }}</td>
          <td>{{ !store.loading ? store.fullData[i][2] : 'Laeb..' }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="col-1">
        <img src="/img/studio.png" class="img-fluid" alt="...">
        <img src="/img/soorikukohvik.png" class="img-fluid" alt="...">
        <img src="/img/MrsWaffle-LOGO-tav-01.png" class="img-fluid" alt="...">
        <img src="/img/Maori.png" class="img-fluid" alt="...">
        <img src="/img/kohvikrein.png" class="img-fluid" alt="...">
        <img src="/img/INGame.png" class="img-fluid" alt="...">
        <img src="/img/hotlipsNewLogo.png" class="img-fluid" alt="...">
        <img src="/img/mustluik.jpg" class="img-fluid" alt="...">
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
