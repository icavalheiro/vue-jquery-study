<template>
    <div class="d-flex wrapper" :class="{small}">
        <div class="ball" :style="{left:ballPosition + 'px'}" v-if="ballPosition!=null"></div>
        <div v-for="(option, i) in options" :key="i">
            <label :class="{selected: currentlySelected == option}">
                <input type="radio" name="gender" :value="option" v-model="currentlySelected"> {{option}}
            </label>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        options: Array,
        selected: {},
        small: Boolean,
    },
    data() {
        return {
            currentlySelected: null,
            ballPosition: null,
        }
    },
    mounted(){
        if(this.selected){
            this.currentlySelected = this.selected
        }
    },
    watch: {
        currentlySelected(value){
            let index = this.options.indexOf(value)
            this.ballPosition = (((this.small)?70:200) * index)
        }
    }
}
</script>

<style scoped lang="scss">

$animation-time:0.5s;

label, .ball{
    margin: 0;
    padding: 0;
    height: 40px;
    width: 200px;
    border-radius: 20px;
    text-align: center;
    line-height: 2.4;
    color: #B2B2B2;
    font-weight: 500;

    &.selected{
        color: white;
    }

    &:hover{
        cursor: pointer;
    }
}

input {
    display: none;
}

.wrapper{
    background-color: #EFEFED;
    border-radius: 20px;
    min-height: 40px;
    justify-content: space-around;
    align-items: center;
    width: fit-content;
    padding: 0;
    box-shadow: 0px 0px 14px -9px black inset;

    &.small{
        min-height: 25px;

        label, .ball{
            height: 25px;
            font-size: 10px;
            width: 70px;
        }
    }
}

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
    user-select: none;
}
</style>