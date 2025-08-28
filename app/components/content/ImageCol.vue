<script setup lang="ts">
withDefaults(
    defineProps<{
        src: string;
        alt?: string;
        centered?: boolean;
        side: "right" | "left";
    }>(),
    { side: "left" },
);
</script>

<template>
    <div
        class="flex flex-col gap-4 md:flex-row"
        :class="{ 'md:flex-row-reverse': side === 'right', 'items-center': centered }"
    >
        <img :src="src" :alt="alt" class="w-full max-w-full md:max-w-md lg:max-w-lg object-contain" />
        <div>
            <slot />
        </div>
    </div>
</template>
