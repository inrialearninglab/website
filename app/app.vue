<template>
    <UApp>
        <div class="min-h-screen flex flex-col">
            <NuxtRouteAnnouncer />
            <LayoutHeader />
            <UContainer class="flex-1!">
                <NuxtPage class="w-full" />
            </UContainer>
            <LayoutFooter />
        </div>
    </UApp>
</template>
