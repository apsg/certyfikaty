<script>
import Question from "@/Components/Front/Question.vue";

export default {
    name: "Quiz",
    methods: {
        next() {
            if (this.current >= this.questionsCount - 1) {
                this.current = this.questionsCount - 1;
                return;
            }

            this.current += 1;
        },
        prev() {
            if (this.current <= 0) {
                this.current = 0;
                return;
            }

            this.current -= 1;
        },
        questionAnswered(ev) {
            console.log(ev);
            let index = this.answers.findIndex((element) => {
                return element.id === ev.id;
            });

            console.log(ev.id, index);

            if (index > -1) {
                this.answers.splice(index, 1);
            }

            if (ev.selected.length > 0) {
                this.answers.push(ev);
            }
        },
        finish() {
            this.error = null;
            axios
                .post(location.href, {
                    answers: this.answers,
                })
                .then((res) => {
                  window.location.reload();
                })
                .catch((res) => {
                    this.error = res.response.data.message;
                });
        },
    },
    props: {
        quiz: null,
    },
    components: {
        Question,
    },
    data() {
        return {
            current: 0,
            questionsCount: 0,
            answers: [],
            error: null,
        };
    },
    mounted() {
        this.questionsCount = this.quiz.questions.length;
    },
    computed:{
        hasAllAnswers(){
            return this.answers.length === this.quiz.questions.length;
        }
    }
};
</script>

<template>
    <div>
        <div class="py-3 flex mt-3">
            <div class="flex-1">
                <Button
                    icon="pi pi-chevron-left"
                    label="Wstecz"
                    outlined
                    :disabled="current === 0"
                    @click="prev"
                />
            </div>
            <div class="text-center flex-1">
                Pytanie {{ current + 1 }} z {{ questionsCount }}
            </div>
            <div class="flex-1 text-right">
                <Button
                    icon="pi pi-chevron-right"
                    label="Dalej"
                    outlined
                    :disabled="current >= questionsCount - 1"
                    icon-pos="right"
                    @click="next"
                />
            </div>
        </div>

        <Question
            v-for="(question, id) in this.quiz.questions"
            :question="question"
            v-show="id === this.current"
            @change="questionAnswered"
        />
        <div class="text-right"
             v-if="this.hasAllAnswers"
        >
            <Button
                icon="pi pi-forward"
                icon-pos="right"
                label="Zakończ test"
                @click="finish"
            />
        </div>
        <div
            v-if="error"
            class="mt-3 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
        >
            {{ error }}
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
