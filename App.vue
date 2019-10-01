<template>
    <div class="wrapper-app">
        Animated Slider:<br>
        <SliderAnimated :options='["Male","Female","Other"]' selected="Male"></SliderAnimated>
        <hr>
        <SliderAnimated :options='["Male","Female","Other"]' selected="Female" small></SliderAnimated>
        <hr>
        <SliderAnimated :options='["Male","Female","Other"]'></SliderAnimated>
        <hr>
        <SliderAnimated :options='["e","q","w"]'></SliderAnimated>
        <hr>
        <SliderAnimated :options='[1,2,3]'></SliderAnimated>
        <hr>
        <SliderAnimated :options='[true,false]'></SliderAnimated>
        <hr>
        <SliderAnimated :options='["selected", true, 20, 21, "eita", "falhou"]' small></SliderAnimated>
    </div>
</template>

<script>
import Slider from "./Slider"
import SliderAnimated from "./SliderAnimated"

export default {
    components: {
        Slider,
        SliderAnimated
    }
}
</script>
<style lang="scss" scoped>
.wrapper-app {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>