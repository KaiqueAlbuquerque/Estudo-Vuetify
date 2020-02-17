<template>
  <div class="hour">
    <span class="number">Expira em: </span>
    <span :class="classePisca">{{ hours }}h{{ minutes }}m{{ seconds }}s</span>
  </div>
</template>

<script>
import { store } from "../vuex";
import { mapGetters } from "vuex";

export default {
  props: ["starttime", "endtime", "trans"],
  data: () => ({
    start: "",
    end: "",
    interval: "",
    minutes: "00",
    hours: "00",
    seconds: "00"
  }),

  mounted() {
    this.start = new Date(this.starttime).getTime();
    this.end = new Date(this.endtime).getTime();
    this.timerCount(this.start, this.end);
    this.interval = setInterval(() => {
      this.timerCount(this.start, this.end);
    }, 1000);

    if (this.hours == "00" && this.minutes == "00" && this.seconds == "00") {
      store.commit("changeClassePiscaTrue");
    } else {
      store.commit("changeClassePiscaFalse");
    }
  },

  methods: {
    timerCount: function(start, end) {
      var now = new Date().getTime();

      var distance = start - now;
      var passTime = end - now;

      if (distance < 0 && passTime < 0) {
        clearInterval(this.interval);
        return;
      } else if (distance < 0 && passTime > 0) {
        this.calcTime(passTime);
      } else if (distance > 0 && passTime > 0) {
        this.calcTime(distance);
      }
    },
    calcTime: function(dist) {
      let days = Math.floor(dist / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        ((dist * 24) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.hours = days * hours;
      this.hours = this.hours < 10 ? "0" + this.hours : this.hours;
      this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
      this.minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
      this.seconds = Math.floor((dist % (1000 * 60)) / 1000);
      this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;

      if (this.hours == "00" && this.minutes == "00" && this.seconds == "00") {
        store.commit("changeClassePiscaTrue");
      } else {
        store.commit("changeClassePiscaFalse");
      }
    }
  },

  computed: {
    ...mapGetters(["classePisca"])
  }
};
</script>

<style scoped>
.hour {
  display: inline-block;
  font-weight: 500;
  text-align: center;
}
.format {
  font-weight: 300;
  font-size: 14px;
  opacity: 0.8;
  width: 60px;
}
@keyframes fa-blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
}
.fa-blink {
  -webkit-animation: fa-blink 1s linear infinite;
  -moz-animation: fa-blink 1s linear infinite;
  -ms-animation: fa-blink 1s linear infinite;
  -o-animation: fa-blink 1s linear infinite;
  animation: fa-blink 1s linear infinite;
}
</style>
