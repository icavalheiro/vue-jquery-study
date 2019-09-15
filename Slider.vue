<template>
    <div class="d-flex wrapper">
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
            options: [
                "Male",
                "Female",
                "Other"
            ]
        }
    }
}
</script>

<style scoped lang="scss">
@import "./BaseStyle.scss";

label{
    &.selected{
        background-color: tomato;
    }
}
</style>