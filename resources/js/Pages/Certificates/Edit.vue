<script setup>
import AppLayout from "@/sakai/layout/AppLayout.vue";
import InputText from "primevue/inputtext";
import { DatePicker } from "primevue";
import { computed, reactive, ref } from "vue";
import axios from "axios";
import pkg from "lodash";
import moment from "moment";

const { _, debounce, pickBy } = pkg;

const props = defineProps({
    certificate: Object,
    layouts: Array,
    quizzes: Array,
});
const data = reactive({
    title: {
        value: props.certificate.title,
        error: null,
    },
    slug: {
        value: props.certificate.slug,
        error: null,
    },
    date: {
        value: props.certificate.date,
        error: null,
    },
    quiz_id: {
        value: props.certificate.quiz_id,
        error: null,
    },
    layout_id: {
        value: props.certificate.layout_id,
        error: null,
    },
});

const url = computed(() => {
    return window.location.origin + "/c/" + data.slug.value;
});

const openUrl = () => {
    window.open(url.value, "_blank").focus();
};

const update = debounce(() => {
    axios
        .post(route("admin.certificates.update", props.certificate.id), {
            title: data.title.value,
            slug: data.slug.value,
            date: data.date.value ? moment(data.date.value).format("YYYY-MM-DD") : null,
            quiz_id: data.quiz_id.value,
            layout_id: data.layout_id.value,
        })
        .then((response) => {
            console.log(response);
        });
}, 500);
</script>

<template>
    <app-layout>
        <div class="card">
            <div class="font-semibold text-xl mb-3">
                <a :href="route('admin.certificates.index')">
                    <Button
                        icon="pi pi-chevron-left"
                        outlined
                        rounded
                        class="mr-2"
                    />
                </a>
                Edycja certyfikatu (linku)
            </div>

            <div class="grid grid-cols-12 gap-2">
                <label
                    class="flex items-center col-span-12 mb-2 md:col-span-1 md:mb-0"
                    >Tytuł:</label
                >
                <InputText
                    class="col-span-12 md:col-span-11"
                    v-model="data.title.value"
                    placeholder="Name"
                    @keyup="update"
                    @change="update"
                />
            </div>
            <div class="grid grid-cols-12 gap-2 mt-2">
                <label
                    for="email3"
                    class="flex items-center col-span-12 mb-2 md:col-span-1 md:mb-0"
                    >Slug:</label
                >
                <div class="col-span-12 md:col-span-11">
                    <input
                        type="text"
                        class="p-inputtext p-component p-inputtext-fluid"
                        v-model="data.slug.value"
                        placeholder="Slug"
                        @change="update"
                        @keyup="update"
                    />
                    <input
                        type="text"
                        class="p-inputtext p-component p-inputtext-fluid"
                        disabled
                        :value="url"
                        @click="openUrl()"
                    />
                </div>
            </div>
            <div class="grid grid-cols-12 gap-2 mt-2">
                <label
                    for="email3"
                    class="flex items-center col-span-12 mb-2 md:col-span-1 md:mb-0"
                >
                    Data:
                </label>
                <div class="col-span-12 md:col-span-11">
                    <DatePicker v-model="data.date.value" date-format="yy-mm-dd" @update:model-value="update" />
                    <p>
                        Data, która ma się pojawić na certyfikacie. Zostaw
                        puste, aby użyć daty podejścia do testu.
                    </p>
                </div>
            </div>
            <div class="grid grid-cols-12 gap-2 mt-4">
                <label class="col-span-12"
                    >Test podpięty do certyfikatu (zostaw puste, jeśli
                    certyfikat ma być generowany bez testu):</label
                >
                <select
                    v-model="data.quiz_id.value"
                    class="col-span-12 p-select p-component p-inputwrapper p-inputwrapper-focus p-select-open p-select-fluid"
                    @change="update"
                >
                    <option value="">-- brak --</option>
                    <option
                        v-for="quiz in props.quizzes"
                        :value="quiz.id"
                        :selected="props.certificate.quiz_id == quiz.id"
                    >
                        {{ quiz.name }}
                    </option>
                </select>
            </div>
            <div class="grid grid-cols-12 gap-2 mt-4">
                <label class="col-span-12">Szablon certyfikatu:</label>
                <select
                    v-model="data.layout_id.value"
                    class="col-span-12 p-select p-component p-inputwrapper p-inputwrapper-focus p-select-open p-select-fluid"
                    @change="update"
                >
                    <option
                        v-for="layout in props.layouts"
                        :value="layout.id"
                        :selected="props.certificate.layout_id == layout.id"
                    >
                        {{ layout.name }}
                    </option>
                </select>
            </div>
        </div>
    </app-layout>
</template>

<style scoped lang="scss"></style>
