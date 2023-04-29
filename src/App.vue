<script>
import {useScoreStore} from "@/stores/score";
import {defineComponent, onMounted, ref} from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const store = useScoreStore();
    const loading = ref(true);

    onMounted(async () => {
      await store.fetchData();
      loading.value = false;
      setInterval(store.fetchData, 10000);
    });

    return {
      store,
      loading,
    };
  },
});
</script>
<template>
  <transition name="page-transition">

    <div class="container-fluid pb-5 ps-0 ms-0 w-100">
      <div v-if="loading" class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else>
        <div class="container-fluid pb-5 ps-0 ms-0 w-100">
          <div class="row">
            <transition name="sponsors" appear>
              <div class="d-none d-md-block col-md-2">
                <img src="/img/MrsWaffle-LOGO-tav-01.png" class="img-fluid" alt="...">
                <img src="/img/studio.png" class="img-fluid" alt="...">
                <img src="/img/aloha_logo_5tarni.png" class="img-fluid" alt="...">
                <img src="/img/lemongym.png" class="img-fluid" alt="...">
                <img src="/img/alecoq.png" class="img-fluid" alt="...">
                <img src="/img/kohvikrein.png" class="img-fluid" alt="...">
                <img src="/img/aasageko.jpg" class="img-fluid" alt="...">
                <img src="/img/ElamusGolf_logo_est_white.png" class="img-fluid" alt="...">
                <img src="/img/Wpark.png" class="img-fluid" alt="...">
                <img src="/img/INGame.png" class="img-fluid" alt="...">
                <img src="/img/Vendy.png" class="img-fluid" alt="...">
                <img src="/img/ElamusGolf_logo_est_white.png" class="img-fluid" alt="...">
                <img src="/img/MrsWaffle-LOGO-tav-01.png" class="img-fluid" alt="...">
                <img src="/img/studio.png" class="img-fluid" alt="...">
                <img src="/img/aloha_logo_5tarni.png" class="img-fluid" alt="...">
                <img src="/img/lemongym.png" class="img-fluid" alt="...">
                <img src="/img/alecoq.png" class="img-fluid" alt="...">
                <img src="/img/kohvikrein.png" class="img-fluid" alt="...">
                <img src="/img/aasageko.jpg" class="img-fluid" alt="...">
                <img src="/img/ElamusGolf_logo_est_white.png" class="img-fluid" alt="...">
                <img src="/img/Wpark.png" class="img-fluid" alt="...">
                <img src="/img/INGame.png" class="img-fluid" alt="...">
                <img src="/img/Vendy.png" class="img-fluid" alt="...">
                <img src="/img/ElamusGolf_logo_est_white.png" class="img-fluid" alt="...">
                <img src="/img/MrsWaffle-LOGO-tav-01.png" class="img-fluid" alt="...">
                <img src="/img/studio.png" class="img-fluid" alt="...">
                <img src="/img/aloha_logo_5tarni.png" class="img-fluid" alt="...">
                <img src="/img/lemongym.png" class="img-fluid" alt="...">
                <img src="/img/alecoq.png" class="img-fluid" alt="...">
                <img src="/img/kohvikrein.png" class="img-fluid" alt="...">
                <img src="/img/aasageko.jpg" class="img-fluid" alt="...">
                <img src="/img/ElamusGolf_logo_est_white.png" class="img-fluid" alt="...">
                <img src="/img/Wpark.png" class="img-fluid" alt="...">
                <img src="/img/INGame.png" class="img-fluid" alt="...">
                <img src="/img/Vendy.png" class="img-fluid" alt="...">
                <img src="/img/ElamusGolf_logo_est_white.png" class="img-fluid" alt="...">
                <img src="/img/MrsWaffle-LOGO-tav-01.png" class="img-fluid" alt="...">
                <img src="/img/studio.png" class="img-fluid" alt="...">
                <img src="/img/aloha_logo_5tarni.png" class="img-fluid" alt="...">
                <img src="/img/lemongym.png" class="img-fluid" alt="...">
                <img src="/img/alecoq.png" class="img-fluid" alt="...">
                <img src="/img/kohvikrein.png" class="img-fluid" alt="...">
                <img src="/img/aasageko.jpg" class="img-fluid" alt="...">
                <img src="/img/ElamusGolf_logo_est_white.png" class="img-fluid" alt="...">
                <img src="/img/Wpark.png" class="img-fluid" alt="...">
                <img src="/img/INGame.png" class="img-fluid" alt="...">
                <img src="/img/Vendy.png" class="img-fluid" alt="...">
                <img src="/img/ElamusGolf_logo_est_white.png" class="img-fluid" alt="...">


              </div>
            </transition>
            <div class="col-sm-12 col-md-8">
              <div>
                          <img src="/img/GAMENIGHT.png" class="img-fluid" alt="...">
                <table class="table table-dark table-striped edetabel">
                  <thead>
                  <tr class="table-dark">
                    <th scope="col" class="text-center"><strong>#</strong></th>
                    <th scope="col"><strong>Nimi</strong></th>
                    <th scope="col"><strong>Punktid</strong></th>
                    <th scope="col"><strong>Auhinnad</strong></th>
                  </tr>
                  </thead>
                  <transition name="fade" appear>
                    <tbody v-show="store.fullData.length > 0">
                    <tr v-for="(row, i) in store.fullData" :key="i">
                      <th scope="row" class="text-center">{{ store.fullData[i][0] }}</th>
                      <td class="text-capitalize">{{ store.fullData[i][1] }}</td>
                      <td>{{ store.fullData[i][2] }}</td>
                      <td>{{ store.fullData[i][3] }}</td>
                    </tr>
                    </tbody>
                  </transition>
                </table>
              </div>
            </div>
            <transition name="sponsors" appear>
              <div class="d-none d-md-block col-md-2">
                <img src="/img/MrsWaffle-LOGO-tav-01.png" class="img-fluid" alt="...">
                <img src="/img/studio.png" class="img-fluid" alt="...">
                <img src="/img/aloha_logo_5tarni.png" class="img-fluid" alt="...">
                <img src="/img/lemongym.png" class="img-fluid" alt="...">
                <img src="/img/alecoq.png" class="img-fluid" alt="...">
                <img src="/img/kohvikrein.png" class="img-fluid" alt="...">
                <img src="/img/aasageko.jpg" class="img-fluid" alt="...">
                <img src="/img/ElamusGolf_logo_est_white.png" class="img-fluid" alt="...">
                <img src="/img/Wpark.png" class="img-fluid" alt="...">
                <img src="/img/INGame.png" class="img-fluid" alt="...">
                <img src="/img/Vendy.png" class="img-fluid" alt="...">
                <img src="/img/ElamusGolf_logo_est_white.png" class="img-fluid" alt="...">
                <img src="/img/MrsWaffle-LOGO-tav-01.png" class="img-fluid" alt="...">
                <img src="/img/studio.png" class="img-fluid" alt="...">
                <img src="/img/aloha_logo_5tarni.png" class="img-fluid" alt="...">
                <img src="/img/lemongym.png" class="img-fluid" alt="...">
                <img src="/img/alecoq.png" class="img-fluid" alt="...">
                <img src="/img/kohvikrein.png" class="img-fluid" alt="...">
                <img src="/img/aasageko.jpg" class="img-fluid" alt="...">
                <img src="/img/ElamusGolf_logo_est_white.png" class="img-fluid" alt="...">
                <img src="/img/Wpark.png" class="img-fluid" alt="...">
                <img src="/img/INGame.png" class="img-fluid" alt="...">
                <img src="/img/Vendy.png" class="img-fluid" alt="...">
                <img src="/img/ElamusGolf_logo_est_white.png" class="img-fluid" alt="...">
                <img src="/img/MrsWaffle-LOGO-tav-01.png" class="img-fluid" alt="...">
                <img src="/img/studio.png" class="img-fluid" alt="...">
                <img src="/img/aloha_logo_5tarni.png" class="img-fluid" alt="...">
                <img src="/img/lemongym.png" class="img-fluid" alt="...">
                <img src="/img/alecoq.png" class="img-fluid" alt="...">
                <img src="/img/kohvikrein.png" class="img-fluid" alt="...">
                <img src="/img/aasageko.jpg" class="img-fluid" alt="...">
                <img src="/img/ElamusGolf_logo_est_white.png" class="img-fluid" alt="...">
                <img src="/img/Wpark.png" class="img-fluid" alt="...">
                <img src="/img/INGame.png" class="img-fluid" alt="...">
                <img src="/img/Vendy.png" class="img-fluid" alt="...">
                <img src="/img/ElamusGolf_logo_est_white.png" class="img-fluid" alt="...">
                <img src="/img/MrsWaffle-LOGO-tav-01.png" class="img-fluid" alt="...">
                <img src="/img/studio.png" class="img-fluid" alt="...">
                <img src="/img/aloha_logo_5tarni.png" class="img-fluid" alt="...">
                <img src="/img/lemongym.png" class="img-fluid" alt="...">
                <img src="/img/alecoq.png" class="img-fluid" alt="...">
                <img src="/img/kohvikrein.png" class="img-fluid" alt="...">
                <img src="/img/aasageko.jpg" class="img-fluid" alt="...">
                <img src="/img/ElamusGolf_logo_est_white.png" class="img-fluid" alt="...">
                <img src="/img/Wpark.png" class="img-fluid" alt="...">
                <img src="/img/INGame.png" class="img-fluid" alt="...">
                <img src="/img/Vendy.png" class="img-fluid" alt="...">
                <img src="/img/ElamusGolf_logo_est_white.png" class="img-fluid" alt="...">


              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>

    <!-- your app content here -->
  </transition>
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
