<script>
export default {
    name: "Question",
    props: {
        question: {
            type: Object,
        },
    },
    data() {
        return {
            selected: [],
        };
    },
    methods: {
        toggle(id) {
            const index = this.selected.indexOf(id);
            if (index > -1) {
                this.selected.splice(index, 1);
            } else {
                this.selected.push(id);
            }

            this.$emit("change", {
                id: this.question.id,
                selected: this.mapSelected(),
            });
        },
        mapSelected() {
            return this.selected.map((id) => {
                return this.question.options[id].id;
            });
        },
    },
};
</script>

<template>
    <div>
        <p class="text-lg font-bold">{{ this.question.question }}</p>
        <div class="py-3">
            <p class="mb-2">Zaznacz wszystkie pasujące odpowiedzi:</p>
            <div
                v-for="(option, id) in question.options"
                @click="toggle(id)"
                class="mb-1 cursor-pointer flex items-center p-4 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
                role="alert"
            >
                <p
                    v-if="selected.includes(id)"
                    class="pi pi-check-square text-green-600"
                ></p>
                <p v-else class="pi pi-stop"></p>
                <span class="sr-only">Info</span>
                <div
                    class="ml-3"
                    :class="selected.includes(id) ? 'text-green-600' : ''"
                >
                    {{ option.option }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
