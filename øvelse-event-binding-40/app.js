const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      interval: 0
    };
  },
  methods: {
    setInterval(event) {
      this.interval = Number(event.target.value);
    },
    add(interval) {
      this.counter += interval;
    },
    reduce(interval) {
      this.counter -= interval;
    }
  },
});

app.mount("#events");