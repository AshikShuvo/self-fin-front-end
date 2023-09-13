<script setup>
import { onMounted, ref } from 'vue';
import ProductService from '@/service/ProductService';

onMounted(() => {
    ProductService.prototype.getProductsSmall().then((data) => (products.value = data));
});

const products = ref();
</script>
<template>
    <div class="card">
        <DataTable :value="products" class="w-full" scrollDirection="both">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>