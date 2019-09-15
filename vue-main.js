let elements = document.querySelectorAll('.slider-selector');
elements.forEach(el => {
    new Vue({
        el: el,
        data() {
            return {
                selected: null,
                ballPosition: null,
                options: JSON.parse(el.getAttribute('data-options'))
            }
        },
        watch: {
            selected(value){
                let index = this.options.indexOf(value)
                this.ballPosition = (200 * index)
            }
        }
    });
})