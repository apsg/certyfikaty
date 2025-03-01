<script>
import TextInput from "@/Components/TextInput.vue";
import InputText from "primevue/inputtext";
import { debounce } from "lodash";
import Option from "@/Components/Quizzes/Option.vue";

export default {
    name: "Question",
    components: { Option, InputText, TextInput },
    props: {
        question: Object,
    },
    data() {
        return {
            data: {
                question: "",
                is_saved: false,
                has_error: false,
            },
        };
    },
    created() {
        this.update = debounce(this._update, 500);
    },
    mounted() {
        this.data.question = this.question.question;
    },
    methods: {
        _update() {
            this.data.is_saved = false;
            this.data.has_error = false;
            axios
                .post(route("admin.questions.update", this.question.id), {
                    question: this.data.question,
                })
                .then((response) => {
                    this.data.is_saved = true;
                })
                .catch((error) => {
                    this.data.has_error = true;
                });
        },
    },
};
</script>
<template>
    <div class="card">
        <div class="grid grid-cols-12 pb-3">
            <h3 class="col-span-12 text-lg pb-2 font-bold">Pytanie:</h3>
            <TextInput
                class="col-span-11 border"
                :class="
                    data.is_saved
                        ? 'border-green-500'
                        : data.has_error
                          ? 'border-red-500'
                          : ''
                "
                placeholder="Name"
                @keyup="update"
                @change="update"
                v-model="data.question"
                label="Pytanie"
            />
            <div
                class="col-span-1 md:col-span-1 flex justify-between items-center"
            >
                <a :href="route('admin.questions.destroy', question.id)">
                    <Button icon="pi pi-trash" class="p-button-danger" />
                </a>
                <a :href="route('admin.questions.up', question.id)">
                    <Button
                        :disabled="question.order < 1"
                        icon="pi pi-chevron-up"
                        class="p-button"
                    />
                </a>
                <a :href="route('admin.questions.down', question.id)">
                    <Button icon="pi pi-chevron-down" class="p-button" />
                </a>
            </div>
        </div>
        <div class="">
            <Option
                v-for="option in question.options"
                :key="option.id"
                :option="option"
            />
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
