const app = Vue.createApp({
    data() {
      return { 
        number: 0,
        message: 'Not there yet',
        resetTimer: 0,
        timeout: null,
        lastClick: 0,
       };
    },
    methods: {
      addFive() {
        this.resetTimer = 0;
        this.increaseTimer();
        this.number = this.number+5;
      },
      addOne() {
        this.resetTimer = 0;
        this.increaseTimer();
        this.number++;
      },
      increaseTimer() {
        // Don't increase the timer unless at least 1 second has passed (Allow first iteration to finish)
        if ((new Date()).getTime()-this.lastClick >= 1000) {
          this.lastClick = (new Date()).getTime();
          this.timeout = setTimeout(() => {
            this.resetTimer++;
            if (this.resetTimer < 5) {
              this.increaseTimer();
            } else {
                this.resetTimer = 0;
                this.number = 0;
                this.timeout = null;
            }
          }, 1000);
        }
      }
    },
    computed: {
        calculatedResetCount() {
          if (this.timeout !== null) {
            return 5-this.resetTimer;
          } else {
            return 'N/A';
          }
        }
    },
    watch: {
      number(newValue) {
        if (newValue < 37) {
            this.message = 'Not there yet'
        } else {
            this.message = 'Too much!';
        }
      }
    }
  });
  app.mount('#assignment');