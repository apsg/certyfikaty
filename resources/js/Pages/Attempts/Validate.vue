<script setup>
import GuestLayout from "@/Layouts/GuestLayout.vue";
import { reactive } from "vue";
import axios from "axios";
import pkg from "lodash";
import TextInput from "@/Components/TextInput.vue";
import { router } from "@inertiajs/vue3";
import moment from "moment";

const { _, debounce, pickBy } = pkg;

const props = defineProps({
    attempt: Object,
});

const data = reactive({
    number: "",
    error: "",
    attempt: null,
});

const validate = () => {
    data.error = null;
    data.attempt = null;

    axios
        .post(route("validate.check"), {
            number: data.number,
        })
        .then((res) => {
            data.attempt = res.data;
        })
        .catch((res) => {
            data.error = res.response.data.message;
        });
};
</script>

<template>
    <guest-layout>
        <h1
            class="mb-4 text-center text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white"
        >
            Podaj numer certyfikatu do sprawdzenia
        </h1>

        <div class="grid grid-cols-12">
            <TextInput
                class="col-span-12"
                v-model="data.number"
                :model-value="data.number"
            />
            <Button
                class="col-span-12 mt-3"
                icon="pa pa-search"
                icon-pos="right"
                label="Sprawdź"
                @click="validate"
            />
        </div>

        <div class="pt-5 mt-5" v-if="data.attempt">

            <div class="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                <p class="pi pi-check-square"></p>
                <span class="sr-only">Info</span>
                <div class="pl-5">
                    <span class="font-medium">Certyfikat poprawny!</span>
                </div>
            </div>

            <div class="font-bold">Tytuł certyfikatu:</div>
            <div class="pl-2 font-bold">
                {{ data.attempt.title }}
            </div>
            <div class="font-bold">Osoba, której wystawiono certyfikat:</div>
            <div class="pl-2">
                {{ data.attempt.name }}
            </div>
            <div class="font-bold">Data wystawienia:</div>
            <div class="pl-2">
                {{ data.attempt.date }}
            </div>
        </div>
        <div
            class="mt-5 flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
            v-if="data.error"
        >
            <svg
                class="shrink-0 inline w-4 h-4 me-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
                />
            </svg>
            <span class="sr-only">Info</span>
            <div>
                {{ data.error }}
            </div>
        </div>
    </guest-layout>
</template>

<style scoped lang="scss"></style>
