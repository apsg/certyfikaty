<script setup>
import AppLayout from "@/sakai/layout/AppLayout.vue";
import InputText from "primevue/inputtext";
import { reactive, ref } from "vue";
import axios from "axios";
import pkg from "lodash";
const { _, debounce, pickBy } = pkg;

const props = defineProps({
    quiz: Object,
});
const data = reactive({
    name: {
        value: props.quiz.name,
        error: null,
    },
    slug: {
        value: props.quiz.slug,
        error: null,
    },
});

const update = () => {
    debounce(() => {
        axios.post(route('admin.quizzes.update', props.quiz.id), {
            name: data.name.value,
            slug: data.slug.value,
        }).then((response) => {
            console.log(response);
        });
    }, 150);
};
</script>

<template>
    <app-layout>
        <div class="card">
            <div class="font-semibold text-xl mb-3">
                <a :href="route('admin.quizzes.index')">
                    <Button
                        icon="pi pi-chevron-left"
                        outlined
                        rounded
                        class="mr-2"
                    />
                </a>
                Edycja testu
            </div>

            <div class="grid grid-cols-12 gap-2">
                <label
                    class="flex items-center col-span-12 mb-2 md:col-span-1 md:mb-0"
                    >Nazwa:</label
                >
                <InputText
                    class="col-span-12 md:col-span-11"
                    v-model="data.name.value"
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
                </div>

                <div class="col-span-12">
                    <InputText
                        disabled
                        type="text"
                        class="p-inputtext p-component p-inputtext-fluid"
                        :value="route('quiz.show', data.slug.value)"
                    />
                </div>
            </div>
        </div>
    </app-layout>
</template>

<style scoped lang="scss"></style>
