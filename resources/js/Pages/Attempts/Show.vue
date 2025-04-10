<script setup>
import GuestLayout from "@/Layouts/GuestLayout.vue";
import { reactive } from "vue";
import axios from "axios";
import pkg from "lodash";
import TextInput from "@/Components/TextInput.vue";
import { router } from "@inertiajs/vue3";

const { _, debounce, pickBy } = pkg;

const props = defineProps({
    certificate: Object,
});

const data = reactive({
    name: "",
    email: "",
    error: null,
    error_code: null,
});

const next = () => {
    data.error = null;
    data.error_code = null;

    axios
        .post(route("attempts.store", props.certificate), {
            name: data.name,
            email: data.email,
        })
        .then((res) => {
            router.visit(res.data.url);
        })
        .catch((res) => {
            data.error = res.response.data.message;
            data.error_code = res.response.status;
        });
};

const resend = () => {
    data.error = null;
    data.error_code = null;

    axios
        .post(route("resend"), {
            email: data.email,
        })
        .then((res) => {
            console.log(res);
        })
        .catch((res) => {
            data.error = res.response.data.message;
            data.error_code = res.response.status;
        });
};

</script>

<template>
    <guest-layout>
        <p>Uzyskaj certyfikat:</p>
        <h1
            class="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white"
            v-html="certificate.title_formatted"
        ></h1>
        <p>Podaj swoje dane:</p>
        <TextInput v-model="data.name" label="Imię i nazwisko" class="w-full" />
        <label>
            Powyższe dane zostaną użyte do wygenerowania certyfikatu. Upewnij
            się, że podano pełne imię i nazwisko, oraz że nie ma żadnego błędu.
        </label>

        <p class="mt-3">Email:</p>
        <TextInput
            v-model="data.email"
            label="Imię i nazwisko"
            class="w-full"
        />

        <div class="text-right mt-3">
            <Button
                icon="pi pi-chevron-right"
                label="Dalej"
                rounded
                class="mr-2"
                @click="next"
            />
        </div>
        <div
            v-if="data.error"
            class="mt-3 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
        >
            {{ data.error }}
        </div>
        <div v-if="data.error_code == 409">
            <p class="text-lg">Mail nie dotarł?</p>
            <Button
                icon="pi pi-refresh"
                label="Wyślij ponownie"
                rounded
                class="mr-2"
                @click="resend"
            />
        </div>
    </guest-layout>
</template>

<style scoped lang="scss"></style>
