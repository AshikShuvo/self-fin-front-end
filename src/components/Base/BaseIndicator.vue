<script setup>
const { title, amount, subTitle, helperText } = defineProps({
    title: {
        type: String,
        default: ''
    },
    amount: {
        type: Number,
        default: 0
    },
    subTitle: {
        type: String,
        default: ''
    },
    helperText: {
        type: String,
        default: ''
    }
});
</script>
<template>
    <div class="col-12 lg:col-6 xl:col-3">
        <div class="card mb-0">
            <div class="flex justify-content-between mb-3">
                <div>
                    <span class="block text-500 font-medium mb-3">{{ title }}</span>
                    <div class="text-900 font-medium text-xl">{{ amount }}</div>
                </div>
                <div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width: 2.5rem; height: 2.5rem">
                    <slot name="icon"></slot>
                </div>
            </div>
            <span class="text-green-500 font-medium">{{ subTitle }}</span>
            <span class="text-500">{{ helperText }}</span>
        </div>
    </div>
</template>
