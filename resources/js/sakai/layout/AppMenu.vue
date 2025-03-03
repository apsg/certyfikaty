<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/admin/dashboard' }]
    },
    {
        items: [{ label: 'Testy', icon: 'pi pi-fw pi-list', to: '/admin/quizzes' }]
    },
    {
        items: [{ label: 'Szablony certyfikatów', icon: 'pi pi-fw pi-book', to: '/admin/layouts' }]
    },
    {
        items: [{ label: 'Certyfikaty', icon: 'pi pi-fw pi-link', to: '/admin/certificates' }]
    },
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
