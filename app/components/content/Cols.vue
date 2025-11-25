<template>
    <UPageSection orientation="horizontal" variant="naked" :ui="{ container: 'p-0!' }">
        <template #header>
            <slot name="left" />
        </template>
        <div>
            <slot name="right" />
        </div>
    </UPageSection>
</template>
