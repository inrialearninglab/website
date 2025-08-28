<script setup lang="ts">
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar";
defineProps<{
    name: string;
    title: string;
    avatar: string;
    links?: {
        icon: string;
        to: string;
    }[];
}>();
</script>

<template>
    <Card class="min-w-xs">
        <CardContent class="flex flex-col gap-3 text-center items-center">
            <Avatar class="size-10">
                <AvatarImage :src="avatar" :alt="name" />
                <AvatarFallback>{{ name }}</AvatarFallback>
            </Avatar>
            <div>
                <p class="text-lg font-bold">{{ name }}</p>
                <p class="text-muted-foreground text-sm">{{ title }}</p>
            </div>
            <div class="flex gap-3 mx-auto">
                <NuxtLink v-for="link of links" :to="link.to">
                    <Icon :name="link.icon" />
                </NuxtLink>
            </div>
        </CardContent>
    </Card>
</template>
