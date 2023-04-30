<script>
import {useScoreStore} from "@/stores/score";
import {defineComponent, onMounted, ref} from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const loading = ref(true);
    const store = useScoreStore();

    onMounted(async () => {
      await store.fetchData();
      setInterval(store.fetchData, 10000);

      setTimeout(() => loading.value = false, 500);

    });

    return {
      store,
      loading,
    };
  },
});
window.addEventListener('load', function() {
  var spinner = document.getElementById('spinner');
  spinner.parentNode.removeChild(spinner);
});


</script>
<template v-cloak>
  <div class="app-wrapper">
    <div class="spinner-overlay" v-if="loading">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div class="app-content" v-else>
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
              <transition appear>
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
                </transition>
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
    </div>
  </div>
</template>

<style scoped>
.app-wrapper {
  position: relative; /* set the position of the wrapper element to relative */
}

.spinner-overlay {
  position: fixed; /* set the position of the spinner to fixed */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* add a semi-transparent background color */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; /* set a high z-index to make sure the spinner is on top of everything else */
}

header {
  line-height: 1.5;
}
[v-cloak] {
  display: none;
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
