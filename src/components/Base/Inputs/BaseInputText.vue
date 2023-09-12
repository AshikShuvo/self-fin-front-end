<script setup>
const props = defineProps({
    id: {
        type: String,
        default: 'input'
    },
    label: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        default: ''
    },
    error: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'text'
    },
    modelValue: {
        type: [String, Number],
        default: ''
    },
    placeholder: {
        type: String,
        default: ''
    },
    isDisabled: {
        type: Boolean,
        default: false
    }
});
const emits = defineEmits(['update:modelValue', 'onBlur']);
const { id, label, error, type, modelValue, placeholder, isDisable } = props;
const handleBlur = () => {
    emits('onBlur');
};
</script>

<template>
    <div class="flex flex-column justify-content-start align-items-start">
        <label :for="id" class="block text-900 text-xl font-medium mb-2">
            {{ label }}
        </label>
        <InputText :id="id" :type="type" :placeholder="placeholder" class="w-full md:w-30rem mb-5" style="padding: 1rem" :value="modelValue" @blur="handleBlur" :disabled="isDisable" />
        <small class="text-red-100" v-if="error">{{ error }}</small>
    </div>
</template>
