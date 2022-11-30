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
    this.store.fetchData()
    this.interval = setInterval(this.store.fetchData, 10000)
  },
  beforeUnmount() {
    clearInterval(this.interval)
  }
})
</script>

<template>
  <div class="container-fluid pb-5 ps-0 ms-0 w-100">
    <div class="row">
      <transition name="sponsors" appear>
        <div class="col-1 sponsors">
          <img src="/img/mustluik.jpg" class="img-fluid" alt="...">
          <img src="/img/hotlipsNewLogo.png" class="img-fluid" alt="...">
          <img src="/img/INGame.png" class="img-fluid" alt="...">
          <img src="/img/kohvikrein.png" class="img-fluid" alt="...">
          <img src="/img/Maori.png" class="img-fluid" alt="...">
          <img src="/img/MrsWaffle-LOGO-tav-01.png" class="img-fluid" alt="...">
          <img src="/img/soorikukohvik.png" class="img-fluid" alt="...">
          <img src="/img/studio.png" class="img-fluid" alt="...">
        </div>
      </transition>
      <div class="col-10">
        <div>
          <img src="/img/GAMENIGHT.png" class="img-fluid" alt="...">
          <table class="table table-dark table-striped edetabel">
            <thead>
            <tr class="table-dark">
              <th scope="col"><strong>#</strong></th>
              <th scope="col"><strong>Nimi</strong></th>
              <th scope="col"><strong>Punktid</strong></th>
            </tr>
            </thead>
            <transition name="fade" appear>
              <tbody v-show="store.fullData.length > 0">
              <tr v-for="(row, i) in store.fullData.length" :key="i">
                <th scope="row">{{ store.fullData[i][0] }}</th>
                <td class="text-capitalize">{{ store.fullData[i][1] }}</td>
                <td>{{ store.fullData[i][2] }}</td>
              </tr>
              </tbody>
            </transition>
          </table>
        </div>
      </div>
      <transition name="sponsors" appear>
        <div class="col-1 sponsors">
          <img src="/img/studio.png" class="img-fluid" alt="...">
          <img src="/img/soorikukohvik.png" class="img-fluid" alt="...">
          <img src="/img/MrsWaffle-LOGO-tav-01.png" class="img-fluid" alt="...">
          <img src="/img/Maori.png" class="img-fluid" alt="...">
          <img src="/img/kohvikrein.png" class="img-fluid" alt="...">
          <img src="/img/INGame.png" class="img-fluid" alt="...">
          <img src="/img/hotlipsNewLogo.png" class="img-fluid" alt="...">
          <img src="/img/mustluik.jpg" class="img-fluid" alt="...">
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
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

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .sponsors-enter-active,
  .sponsors-leave-active {
    transition: opacity 2.5s ease;
  }

  .sponsors-enter-from,
  .sponsors-leave-to {
    opacity: 0;
  }
}
</style>
