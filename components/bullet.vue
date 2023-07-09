<template>
    <div :key="name" class="relative pl-16">
        <dt class="text-base font-bold leading-7">
            <div
                class="absolute
                 left-0
                 top-0
                 flex
                 h-10
                 w-10
                 items-center
                 justify-center
                 rounded-lg
                 bg-san-juan
                 text-white"
            >
                <icon :name="icon" />
            </div>
            {{ name }}
        </dt>
        <dd class="mt-2 text-base leading-7">
            {{ description }}
        </dd>
    </div>
</template>

<script setup lang="ts">
defineProps({
    icon: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
})
</script>
