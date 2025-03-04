<script setup>
import GuestLayout from "@/Layouts/GuestLayout.vue";
import Quiz from "@/Components/Front/Quiz.vue";
import { reactive } from "vue";
import pkg from "lodash";

const { _, debounce, pickBy } = pkg;

const props = defineProps({
    certificate: Object,
    attempt: Object,
});

const data = reactive({});
</script>

<template>
    <guest-layout>
        <h1
            class="mb-4 text-lg font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-xl dark:text-white"
        >
            {{ certificate.title }}
        </h1>
        <p>
            Rozwiązujesz test jako: {{ props.attempt.name }} ({{
                props.attempt.email
            }})
        </p>

        <Quiz :quiz="certificate.quiz" />

    </guest-layout>
</template>

<style scoped lang="scss"></style>
