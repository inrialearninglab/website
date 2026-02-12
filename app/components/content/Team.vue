<script setup lang="ts">
const { team } = useAppConfig();
const { locale } = useI18n();
</script>

<template>
    <UPage>
        <UPageBody>
            <UPageGrid class="xl:grid-cols-4">
                <UPageCard
                    v-for="(user, index) in team"
                    :key="index"
                    :title="user.name"
                    :description="user.title[locale]"
                    :ui="{
                        container: 'gap-y-3',
                        leading: 'flex justify-center',
                        wrapper: 'items-center',
                        title: 'text-center',
                        description: 'text-center',
                    }"
                    variant="subtle"
                    :class="{ gold: user.gold }"
                >
                    <template #leading>
                        <UAvatar :src="user.avatar" size="3xl" class="mx-auto" />
                    </template>
                    <div class="flex items-center justify-center gap-1">
                        <UButton
                            v-for="(link, key) of user.links"
                            :key="key"
                            color="neutral"
                            variant="link"
                            :to="link.to"
                            :icon="link.icon"
                            target="_blank"
                            size="sm"
                        />
                    </div>
                </UPageCard>
            </UPageGrid>
        </UPageBody>
    </UPage>
</template>

<style scoped>
.gold {
    background:
        radial-gradient(
            ellipse farthest-corner at right bottom,
            #fedb37 0%,
            #fdb931 8%,
            #9f7928 30%,
            #8a6e2f 40%,
            transparent 80%
        ),
        radial-gradient(
            ellipse farthest-corner at left top,
            #ffffff 0%,
            #ffffac 8%,
            #d1b464 25%,
            #5d4a1f 62.5%,
            #5d4a1f 100%
        );
}
.gold * {
    color: white !important;
}
</style>
