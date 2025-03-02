<script setup>
import AppLayout from "@/sakai/layout/AppLayout.vue";
import InputText from "primevue/inputtext";
import { InputGroup, InputGroupAddon } from "primevue";
import { reactive, ref } from "vue";
import axios from "axios";
import pkg from "lodash";

const { _, debounce, pickBy } = pkg;

const props = defineProps({
    layout: Object,
});
const data = reactive({
    name: {
        value: props.layout.name,
        error: null,
    },
    date_position_top: {
        value: props.layout.date_position_top,
        error: null,
    },
    date_position_left: {
        value: props.layout.date_position_left,
        error: null,
    },
    date_font_size: {
        value: props.layout.date_font_size,
        error: null,
    },
    name_position_top: {
        value: props.layout.name_position_top,
        error: null,
    },
    name_position_left: {
        value: props.layout.name_position_left,
        error: null,
    },
    name_font_size: {
        value: props.layout.name_font_size,
        error: null,
    },
    title_position_top: {
        value: props.layout.title_position_top,
        error: null,
    },
    title_position_left: {
        value: props.layout.title_position_left,
        error: null,
    },
    title_font_size: {
        value: props.layout.title_font_size,
        error: null,
    },
    number_position_top: {
        value: props.layout.number_position_top,
        error: null,
    },
    number_position_left: {
        value: props.layout.number_position_left,
        error: null,
    },
    number_font_size: {
        value: props.layout.number_font_size,
        error: null,
    },
});

const extractData = (data) => {
    let extracted = {};
    Object.keys(data).forEach((key) => {
        extracted[key] = data[key].value;
    });

    return extracted;
};

const update = debounce(() => {
    axios
        .post(route("admin.layouts.update", props.layout.id), extractData(data))
        .then((response) => {
            console.log(response);
        });
},500);
</script>

<template>
    <app-layout>
        <div class="card">
            <div class="font-semibold text-xl mb-3">
                <a :href="route('admin.layouts.index')">
                    <Button
                        icon="pi pi-chevron-left"
                        outlined
                        rounded
                        class="mr-2"
                    />
                </a>
                Edycja szablonu certyfikatu
            </div>

            <div class="grid grid-cols-12 gap-2">
                <label
                    class="flex items-center col-span-12 mb-2 md:col-span-1 md:mb-0"
                    >Nazwa:</label
                >
                <InputText
                    class="col-span-12 md:col-span-11"
                    v-model="data.name.value"
                    placeholder="Nazwa"
                    @change="update"
                />

                <label>Data:</label>
                <InputGroup class="col-span-12">
                    <InputGroupAddon>Góra:</InputGroupAddon>
                    <InputNumber @input="update" v-model="data.date_position_top.value" placeholder="góra" show-buttons :min="0" :max="1000" />
                    <InputGroupAddon>Lewo:</InputGroupAddon>
                    <InputNumber allow-empty @input="update" v-model="data.date_position_left.value" placeholder="(zostaw puste żeby wyśrodkować)"  show-buttons :min="0" :max="1000"/>
                    <InputGroupAddon>Font:</InputGroupAddon>
                    <InputNumber @input="update" v-model="data.date_font_size.value" placeholder="font"  show-buttons :min="0" :max="1000" />
                    <InputGroupAddon>px</InputGroupAddon>
                </InputGroup>

                <label>Tytuł:</label>
                <InputGroup class="col-span-12">
                    <InputGroupAddon>Góra:</InputGroupAddon>
                    <InputNumber @input="update" v-model="data.title_position_top.value" placeholder="góra" show-buttons :min="0" :max="1000" />
                    <InputGroupAddon>Lewo:</InputGroupAddon>
                    <InputNumber allow-empty @input="update" v-model="data.title_position_left.value" placeholder="(zostaw puste żeby wyśrodkować)"  show-buttons :min="0" :max="1000"/>
                    <InputGroupAddon>Font:</InputGroupAddon>
                    <InputNumber @input="update" v-model="data.title_font_size.value" placeholder="font"  show-buttons :min="0" :max="1000" />
                    <InputGroupAddon>px</InputGroupAddon>
                </InputGroup>

                <label class="col-span-12">Imię i nazwisko:</label>
                <InputGroup class="col-span-12">
                    <InputGroupAddon>Góra:</InputGroupAddon>
                    <InputNumber @input="update" v-model="data.name_position_top.value" placeholder="góra" show-buttons :min="0" :max="1000" />
                    <InputGroupAddon>Lewo:</InputGroupAddon>
                    <InputNumber allow-empty @input="update" v-model="data.name_position_left.value" placeholder="(zostaw puste żeby wyśrodkować)"  show-buttons :min="0" :max="1000"/>
                    <InputGroupAddon>Font:</InputGroupAddon>
                    <InputNumber @input="update" v-model="data.name_font_size.value" placeholder="font"  show-buttons :min="0" :max="1000" />
                    <InputGroupAddon>px</InputGroupAddon>
                </InputGroup>

                <label>Numer:</label>
                <InputGroup class="col-span-12">
                    <InputGroupAddon>Góra:</InputGroupAddon>
                    <InputNumber @input="update" v-model="data.number_position_top.value" placeholder="góra" show-buttons :min="0" :max="1000" />
                    <InputGroupAddon>Lewo:</InputGroupAddon>
                    <InputNumber allow-empty @input="update" v-model="data.number_position_left.value" placeholder="(zostaw puste żeby wyśrodkować)"  show-buttons :min="0" :max="1000"/>
                    <InputGroupAddon>Font:</InputGroupAddon>
                    <InputNumber @input="update" v-model="data.number_font_size.value" placeholder="font"  show-buttons :min="0" :max="1000" />
                    <InputGroupAddon>px</InputGroupAddon>
                </InputGroup>
            </div>
            <div class="pt-3">
            <a :href="route('admin.layouts.test', props.layout.id)">
                <Button
                    icon="pi pi-eye"
                    label="Podgląd"
                    class="p-button-rounded p-button-success p-button-outlined"
                />
            </a>
            </div>
        </div>
    </app-layout>
</template>

<style scoped lang="scss"></style>
