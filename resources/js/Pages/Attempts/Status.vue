<script setup>
import GuestLayout from "@/Layouts/GuestLayout.vue";
import { reactive } from "vue";
import axios from "axios";
import pkg from "lodash";
import TextInput from "@/Components/TextInput.vue";
import {router} from "@inertiajs/vue3";
import moment from "moment";

const { _, debounce, pickBy } = pkg;

const props = defineProps({
    attempt: Object,
});

const data = reactive({
    name: "",
    email: "",
    error: null,
});

</script>

<template>
    <guest-layout>

        <div v-if="attempt.is_passed" class="text-center">
            <p class="pi pi-check-square  text-green-700 my-4" style="font-size: 6rem;"></p> <br />
            Gratulacje! Uzyskano certyfikat:
        </div>
        <div v-else class="text-center">
            <p class="pi pi-times  text-red-600 my-4" style="font-size: 6rem;"></p> <br />
            Niestety, nie udało Ci się uzyskać certyfikatu
        </div>

        <h1
            class="mb-4 text-center text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white"
        >
            {{ attempt.title }}
        </h1>

        <div class="grid grid-cols-12 items-end">
            <div class="col-span-3 font-bold">
                Imię i nazwisko:
            </div>
            <div class="col-span-9 pl-2">
                {{ attempt.name }}
            </div>
            <div class="col-span-3 font-bold">
                Email:
            </div>
            <div class="col-span-9 pl-2">
                {{ attempt.email }}
            </div>
            <div class="col-span-3 font-bold">
                Data podejścia:
            </div>
            <div class="col-span-9 pl-2">
                {{ attempt.date }}
            </div>
            <div class="col-span-3 font-bold" v-if="attempt.has_quiz">
                Prawidłowe odpowiedzi:
            </div>
            <div class="col-span-9 pl-2" v-if="attempt.has_quiz">
                {{ attempt.score ?? 0 }} ({{ attempt.percentage }}%)
            </div>
        </div>

        <div v-if="attempt.is_passed" class="mt-5 text-center">
            <a :href="attempt.download_link" target="_blank">
                <Button
                    label="Pobierz certyfikat"
                    icon="pi-download pi"
                    size="large"
                    />
            </a>
        </div>
        <div v-else>
            <div class="mt-5 flex items-center p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert">
                <svg class="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <span class="sr-only">Info</span>
                <div>
                    Możesz ponownie podejść do uzyskania tego certyfikatu po upływie 14 dni od daty ostatniego podejścia.
                </div>
            </div>
        </div>

    </guest-layout>
</template>

<style scoped lang="scss"></style>
