<script setup>
import QuickSpending from '@/components/modules/dashboard/DepositsSpendingsInsights/QuickSpending.vue';
import QuickDeposits from '@/components/modules/dashboard/DepositsSpendingsInsights/QuickDeposits.vue';
</script>
<template>
    <div class="grid">
        <div class="col-12 lg:col-6 xl:col-6">
            <QuickDeposits />
        </div>
        <div class="col-12 lg:col-6 xl:col-6">
            <QuickSpending />
        </div>
    </div>
</template>