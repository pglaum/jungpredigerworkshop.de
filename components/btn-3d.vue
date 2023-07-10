<template>
    <button
        class="group
         relative
         cursor-pointer
         select-none
         p-0
         outline-none
         outline-offset-4
         transition-all
         duration-[250]
         hover:brightness-110
         focus:[&:not(:focus-visible)]:outline-none"
        style="-webkit-tap-highlight-color: transparent;"
        @click="$emit('clicked')"
    >
        <span
            class="absolute
             left-0
             top-0
             h-full
             w-full
             -translate-y-0.5
             rounded-xl
             bg-black/25
             blur-sm
             transition-transform
             duration-[600]
             ease-[cubic-bezier(.3,.7,.4,.1)]
             will-change-transform
             group-hover:translate-y-1
             group-hover:duration-[250]
             group-hover:ease-[cubic-bezier(.3,.7,.4,1.5)]
             group-active:translate-y-[1]
             group-active:duration-[34]
             "
        />
        <span
            class="absolute left-0 top-0 h-full w-full rounded-xl"
            :style="btnBgStyle"
        />
        <span
            class="relative
             block
             -translate-y-1
             rounded-xl
             px-10
             py-3
             transition-transform
             duration-[600]
             ease-[cubic-bezier(.3,.7,.4,.1)]
             will-change-transform
             group-hover:-translate-y-1.5
             group-hover:duration-[250]
             group-hover:ease-[cubic-bezier(.3,.7,.4,1.5)]
             group-active:-translate-y-0.5
             group-active:duration-[34]
             "
            :class="{
                'bg-san-juan text-white': color === 'san-juan',
                'bg-rajah text-neutral': color === 'rajah',
                'text-xl': size === 'xl',
                'text-lg': size === 'lg',
                'text-base': !['lg', 'xl'].includes(size),
            }"
        >
            <slot />
        </span>
    </button>
</template>

<script setup lang="ts">
const props = defineProps({
    color: {
        type: String,
        default: 'san-juan',
    },
    size: {
        type: String,
        default: 'xl',
    },
})
const { color, } = toRefs(props)

defineEmits([ 'clicked', ])
const btnBgStyle = color.value === 'san-juan'
    ? 'background: linear-gradient( to left, #182736 0%, #23394F 8%, #23394F 92%, #182736 100%);'
    : 'background: linear-gradient( to left, #AD700D 0%, #F0AB3A 8%, #F0AB3A 92%, #AD700D 100%);'

</script>
