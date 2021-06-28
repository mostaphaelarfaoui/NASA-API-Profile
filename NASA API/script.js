new Vue({
    el: '#app',
    data() {
        return {
            info: null
        }
    },
    mounted() {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=R4LKyPaummyJL3cdEbatZ4m5jWsBjWnaPZcZJ0jd')
            .then(response => (this.info = response))
    }
})