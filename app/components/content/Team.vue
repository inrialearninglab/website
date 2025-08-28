<script setup lang="ts">
const { team } = useAppConfig();
</script>

<template>
    <UPage>
        <UPageBody>
            <UPageGrid class="xl:grid-cols-4">
                <UPageCard
                    v-for="(user, index) in team"
                    :key="index"
                    :title="user.name"
                    :description="user.title"
                    :ui="{
                        container: 'gap-y-3',
                        leading: 'flex justify-center',
                        wrapper: 'items-center',
                        title: 'text-center',
                        description: 'text-center',
                    }"
                    variant="subtle"
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
