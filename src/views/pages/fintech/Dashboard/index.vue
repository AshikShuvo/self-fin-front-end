<script setup>
import AppBradeCrumb from '@/layout/AppBradeCrumb.vue';
import IndicatorList from '@/components/modules/dashboard/IndicatorList.vue';
import TransictionTimeline from '@/components/modules/dashboard/TimeLine/TransictionTimeline.vue';
</script>
<template>
    <div class="h-full w-full">
        <AppBradeCrumb />
        <div class="grid">
            <div class="xxxxl:col-8 xxxl:col-8 xxl:col-8 xl:col-8 lg:col-6 md:col-7 col-12">
                <IndicatorList />
                <!--                <QuickAnalytics />-->
            </div>
            <div class="xxxxl:col-4 xxxl:col-4 xxl:col-4 xl:col-4 lg:col-6 md:col-5 col-12">
                <TransictionTimeline />
            </div>
        </div>
    </div>
</template>