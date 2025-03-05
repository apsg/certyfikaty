<script setup>
import AppLayout from "@/sakai/layout/AppLayout.vue";
import InputText from "primevue/inputtext";
import { reactive, ref } from "vue";
import axios from "axios";
import pkg from "lodash";
import Question from "@/Components/Quizzes/Question.vue";

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
    min_percentage: {
        value: props.quiz.min_percentage,
        error: null,
    },
});

const update = debounce(() => {
    axios
        .post(route("admin.quizzes.update", props.quiz.id), {
            name: data.name.value,
            slug: data.slug.value,
            min_percentage: data.min_percentage.value,
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
<!--                <div class="col-span-12 md:col-span-11">-->
<!--                    <input-->
<!--                        type="text"-->
<!--                        class="p-inputtext p-component p-inputtext-fluid"-->
<!--                        v-model="data.slug.value"-->
<!--                        placeholder="Slug"-->
<!--                        @change="update"-->
<!--                        @keyup="update"-->
<!--                    />-->
<!--                </div>-->

                <div class="col-span-12">
                    <p>Procent poprawnych odpowiedzi wymagany, aby zdać: <span class="font-bold">{{ data.min_percentage.value }}%</span>
                    </p>
                    <Slider
                        class="mt-5"
                        :min="0"
                        :max="100"
                        v-model="data.min_percentage.value"
                        @change="update"
                    />
                </div>
            </div>
        </div>

        <Question
            v-for="question in props.quiz.questions"
            :question="question"
        />

        <div class="card">
            <div class="col-span-12">
                <a :href="route('admin.quizzes.add_question', props.quiz.id)">
                    <Button
                        label="Dodaj pytanie"
                        icon="pi pi-plus"
                        class="mr-2"
                    />
                </a>
            </div>
        </div>
    </app-layout>
</template>

<style scoped lang="scss"></style>
