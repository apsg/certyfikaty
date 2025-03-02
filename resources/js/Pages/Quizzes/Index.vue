<script setup>
import AppLayout from "@/sakai/layout/AppLayout.vue";
import { router, useForm } from "@inertiajs/vue3";

import { reactive, ref } from "vue";
import pkg from "lodash";
import { loadToast } from "@/composables/loadToast";
import NavLink from "@/Components/NavLink.vue";

const props = defineProps({
    title: String,
    filters: Object,
    perPage: Number,
    quizzes: Array,
});

const data = reactive({
    params: {
        search: props.filters.search,
        field: props.filters.field,
        order: props.filters.order,
        // perPage: props.perPage,
        createOpen: false,
        editOpen: false,
    },
    user: null,
});
loadToast();

const form = useForm({});

const destroy = (id) => {
    if (confirm("Are you sure?")) {
        form.delete(route("admin.quizzes.destroy", id));
    }
};
</script>

<template>
    <app-layout>
        <div class="card">
            <NavLink
                :href="route('admin.quizzes.create')"
                class="btn btn-primary"
            >
                <Button label="Dodaj" icon="pi pi-plus" />
            </NavLink>
            <DataTable lazy :value="quizzes" tableStyle="min-width: 50rem">
                <template #header> </template>
                <template #empty> No data found.</template>
                <template #loading> Loading data. Please wait.</template>

                <Column header="No">
                    <template #body="slotProps">
                        {{ slotProps.index + 1 }}
                    </template>
                </Column>

                <Column field="name" header="Name"></Column>
                <Column :exportable="false" style="min-width: 12rem">
                    <template #body="slotProps">
                        <a
                            :href="
                                route('admin.quizzes.edit', slotProps.data.id)
                            "
                        >
                            <Button
                                icon="pi pi-pencil"
                                outlined
                                rounded
                                class="mr-2"
                                @click=""
                            />
                        </a>
                        <Button
                            icon="pi pi-trash"
                            outlined
                            rounded
                            class="p-button-danger"
                            @click="destroy(slotProps.data.id)"
                        />
                    </template>
                </Column>
            </DataTable>
        </div>
    </app-layout>
</template>

<style scoped lang="scss"></style>
