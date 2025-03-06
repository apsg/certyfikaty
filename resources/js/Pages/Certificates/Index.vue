<script setup>
import AppLayout from "@/sakai/layout/AppLayout.vue";
import { loadToast } from "@/composables/loadToast";
import {usePage} from "@inertiajs/vue3";

const props = defineProps({
    title: String,
    certificates: Array,
});

loadToast();

const page = usePage();
</script>

<template>
    <app-layout>
        <div class="card">
            <div
                v-if="page.props.flash.error"
                class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                {{ page.props.flash.error }}
            </div>

            <a :href="route('admin.certificates.create')">
                <Button icon="pi pi-plus" label="Dodaj certyfikat" />
            </a>

            <DataTable :value="certificates" tableStyle="min-width: 50rem">
                <template #header>
                    <div class="flex justify-end"></div>
                </template>
                <template #empty> No data found.</template>
                <template #loading> Loading data. Please wait.</template>

                <Column header="No">
                    <template #body="slotProps">
                        {{ slotProps.index + 1 }}
                    </template>
                </Column>

                <Column field="title" header="Nazwa"></Column>
                <Column field="created_at" header="Dodany"></Column>
                <Column :exportable="false" style="min-width: 12rem">
                    <template #body="slotProps">
                        <a
                            :href="
                                route(
                                    'admin.certificates.edit',
                                    slotProps.data.id,
                                )
                            "
                        >
                            <Button
                                icon="pi pi-pencil"
                                class="p-button-rounded p-button-success p-button-outlined"
                            />
                        </a>
                        <a
                            :href="
                                route(
                                    'admin.certificates.destroy',
                                    slotProps.data.id,
                                )
                            "
                        >
                            <Button
                                icon="pi pi-trash"
                                class="p-button-rounded p-button-danger p-button-outlined"
                            />
                        </a>
                    </template>
                </Column>
            </DataTable>
        </div>
    </app-layout>
</template>

<style scoped lang="scss"></style>
