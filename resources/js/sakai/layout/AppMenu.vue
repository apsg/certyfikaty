<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/admin/dashboard' }]
    },
    {
        items: [{ label: 'Testy', icon: 'pi pi-fw pi-book', to: '/admin/quizzes' }]
    },
    {
        items: [
            {
                label: 'Template Source',
                icon: 'pi pi-fw pi-github',
                url: 'https://sakai.primevue.org/',
                target: '_blank'
            }
        ]
    }
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
