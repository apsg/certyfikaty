<script setup>
import AppLayout from "@/sakai/layout/AppLayout.vue";

import { usePage, useForm } from "@inertiajs/vue3";

import { onMounted, reactive, ref, watch, computed } from "vue";
import pkg from "lodash";
import { router } from "@inertiajs/vue3";

const { _, debounce, pickBy } = pkg;
import { loadToast } from "@/composables/loadToast";

const props = defineProps({
    title: String,
    layouts: Array,
});

loadToast();

const form = useForm({
    file: null,
});

const data = reactive({});

const upload = (e) => {
    console.log(e);
    let formData = new FormData();
    formData.append("file", e.files[0]);

    axios
        .post(route("admin.layouts.store"), formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then((response) => {
            console.log(response);
            location.href = route("admin.layouts.edit", response.data.id);
        });
};
</script>

<template>
    <app-layout>
        <div class="card">
            <FileUpload
                name="file"
                v-model="form.file"
                url="/admin/layouts"
                auto
                custom-upload
                @select="upload"
            />
            <DataTable :value="layouts" tableStyle="min-width: 50rem">
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

                <Column field="name" header="Nazwa"></Column>
                <Column field="file" header="Plik"></Column>
                <Column field="created_at" header="Dodany"></Column>
                <Column :exportable="false" style="min-width: 12rem">
                    <template #body="slotProps">
                        <a
                            :href="
                                route('admin.layouts.edit', slotProps.data.id)
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
                                    'admin.layouts.destroy',
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
