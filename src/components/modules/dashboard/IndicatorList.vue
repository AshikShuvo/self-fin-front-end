<script setup>
import BaseIndicator from "@/components/Base/BaseIndicator.vue";
</script>

<template>
    <div class="grid">
        <BaseIndicator
          title="Bank Balance"
        >
            <template v-slot:icon>
                <i class="pi pi-credit-card text-blue-500 text-xl" />
            </template>
        </BaseIndicator>
        <BaseIndicator
          title="Hand Cash"
        >
            <template v-slot:icon>
                <i class="pi pi-eye text-green-500 text-xl" />
            </template>
        </BaseIndicator>
        <BaseIndicator
          title="Today Spent"
        >
            <template v-slot:icon>
                <i class="pi pi-eraser text-red-500 text-xl" />
            </template>
        </BaseIndicator>
        <BaseIndicator title="Today Deposit">
            <template v-slot:icon>
                <i class="pi pi-check-circle text-green-700 text-xl" />
            </template>
        </BaseIndicator>
    </div>
</template>
