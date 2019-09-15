<template>
    <div class="d-flex wrapper">
        <div class="ball" :style="{left:ballPosition + 'px'}" v-if="ballPosition!=null"></div>
        <div v-for="(option, i) in options" :key="i">
            <label :class="{selected: selected == option}">
                <input type="radio" name="gender" :value="option" v-model="selected"> {{option}}
            </label>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selected: null,
            ballPosition: null,
            options: [
                "Male",
                "Female",
                "Other"
            ]
        }
    },
    watch: {
        selected(value){
            let index = this.options.indexOf(value)
            this.ballPosition = (200 * index)
        }
    }
}
</script>

<style scoped lang="scss">
@import "./BaseStyle.scss";

$animation-time:0.5s;


.wrapper {
    position: relative;
    z-index: 0;
}


.ball{
    position: absolute;
    top: 0;
    left:0;
    background-color: tomato;
    z-index: -1;

    transition: left $animation-time;
}

label {
    transition: color $animation-time;
}
</style>