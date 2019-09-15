<template>
    <div class="wrapper-app">
        Animated Slider:<br>
        <SliderAnimated></SliderAnimated>
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