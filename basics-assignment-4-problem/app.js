const app = Vue.createApp({
    data() {
        return {
            selected: null,
            pStyle: {
                visibility: 'hidden'
            },
            pStyleSecond: {
                background: '#eee'
            }
        };
    },
    methods: {
        toggleP() {
           if (this.pStyle.visibility == 'hidden') {
              this.pStyle.visibility = 'visible'
           } else {
             this.pStyle.visibility = 'hidden';
           }
        }
    },
    computed: {
        selectedCssClass() {
            if (this.selected !== null) {
                return this.selected;
            }
            return '';
        }
    }
});
app.mount('#assignment');