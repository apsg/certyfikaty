<script setup>
import AppLayout from "@/sakai/layout/AppLayout.vue";
import Create from "@/Pages/AdminAttempts/Create.vue";
import { usePage, useForm } from '@inertiajs/vue3';

import { onMounted, reactive, ref, watch, computed } from "vue";
import pkg from "lodash";
import { router } from "@inertiajs/vue3";
const { _, debounce, pickBy } = pkg;
import { loadToast } from '@/composables/loadToast';
import moment    from "moment";
const props = defineProps({
    title: String,
    filters: Object,
    attempts: Object,
    certificates: Object,
    perPage: Number,
});

loadToast();

const resetDialog = ref(false);
const form = useForm({});

const data = reactive({
    params: {
        search: props.filters.search,
        field: props.filters.field,
        order: props.filters.order,
        // perPage: props.perPage,
        createOpen: false,
        editOpen: false,
    },
    attempt: null,
});

const roles = props.roles?.map((role) => ({
    name: role.name,
    code: role.name,
}));

const onPageChange = (event) => {
    router.get(route('admin.attempts.index'), { page: event.page + 1 }, { preserveState: true });
};

watch(
    () => _.cloneDeep(data.params),
    debounce(() => {
        let params = pickBy(data.params);
        router.get(route("admin.attempts.index"), params, {
            replace: true,
            preserveState: true,
            preserveScroll: true,
        });
    }, 150)
);

const resetTime = () => {
    resetDialog.value = false;

    form.delete(route("admin.attempts.reset", data.attempt?.id), {
        preserveScroll: true,
        onSuccess: () => {
            form.reset();
        },
        onError: () => null,
        onFinish: () => null,
    });
};

const resendMail = (id) => {
    form.post(route("admin.attempts.resend", id), {
        preserveScroll: true,
        onSuccess: () => {
            form.reset();
        },
        onError: () => null,
        onFinish: () => null,
    });
};

</script>

<template>
    <app-layout>
        <div class="card">
            <Create
                :show="data.createOpen"
                @close="data.createOpen = false"
                :certificates="certificates"
                :title="props.title"
            />
            <Button label="Przyznaj certyfikat ręcznie" @click="data.createOpen = true" icon="pi pi-plus" />
            <DataTable lazy :value="attempts.data" paginator :rows="attempts.per_page" :totalRecords="attempts.total" :first="(attempts.current_page - 1) * attempts.per_page" @page="onPageChange" tableStyle="min-width: 50rem">
                <template #header>
                    <div class="flex justify-end">
                        <IconField>
                            <InputIcon>
                                <i class="pi pi-search" />
                            </InputIcon>
                            <InputText v-model="data.params.search" placeholder="Wyszukaj" />
                        </IconField>
                    </div>
                </template>
                <template #empty> No data found. </template>
                <template #loading> Loading data. Please wait. </template>

                <Column header="ID">
                    <template #body="slotProps">
                        {{ slotProps.data.id }}
                    </template>
                </Column>
                <Column field="number" header="Numer"></Column>
                <Column field="name" header="Imię"></Column>
                <Column field="email" header="Email"></Column>
                <Column field="finished_at" header="Ukończono/podejście">
                    <template #body="slotProps">
                        {{ slotProps.data.finished_at ? moment(slotProps.data.finished_at).format('YYYY-MM-DD') :  moment(slotProps.data.updated_at).format('YYYY-MM-DD')}}
                    </template>
                </Column>
                <Column field="certificate.title_cleaned" header="Certyfikat"></Column>
                <Column field="is_passed" header="Zdał">
                    <template #body="slotProps">
                        <span v-if="slotProps.data.is_passed" class="text-green-500">Tak</span>
                        <span v-else class="text-red-500">Nie</span>
                    </template>
                </Column>
                <Column :exportable="false" style="min-width: 12rem">
                    <template #body="slotProps">
                        <Button icon="pi pi-envelope" outlined rounded class="mr-2"
                                @click="resendMail(slotProps.data.id)"
                                label="Wyślij maila"
                                v-if="slotProps.data.is_passed"
                        />
                        <Button icon="pi pi-refresh" outlined rounded severity="danger"
                                @click="resetDialog = true; data.attempt = slotProps.data"
                                label="Resetuj czas"
                                v-if="!slotProps.data.is_passed"
                        />
                    </template>
                </Column>
            </DataTable>

            <Dialog v-model:visible="resetDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">
                <div class="flex items-center gap-4">
                    <i class="pi pi-exclamation-triangle !text-3xl" />
                    <span v-if="data.attempt"
                        >Na pewno chcesz zresetować czas oczekiwania?</span
                    >
                </div>
                <template #footer>
                    <Button label="Nie" icon="pi pi-times" text @click="resetDialog = false" />
                    <Button label="Tak" icon="pi pi-check" @click="resetTime" />
                </template>
            </Dialog>
        </div>
    </app-layout>
</template>

<style scoped lang="scss">

</style>
