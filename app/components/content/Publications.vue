<script setup lang="ts">
import type { TabsItem } from "@nuxt/ui";

const items = [
    {
        label: "Publications d'Inria Learning Lab",
        slot: "main" as const,
    },
    {
        label: "Autres publications scientifiques en lien avec Inria Learning Lab",
        slot: "other" as const,
    },
] satisfies TabsItem[];
</script>

<template>
    <iframe
        class="w-full"
        style="height: 6230px"
        src="https://haltools.inria.fr/Public/afficheRequetePubli.php?struct=476527+%3B+444860+&CB_auteur=oui&CB_titre=oui&CB_article=oui&CB_vignette=oui&langue=Francais&tri_exp=annee_publi&tri_exp2=typdoc&tri_exp3=date_publi&ordre_aff=TA&Fen=Aff&css=../css/styles_publicationsHAL.css"
    />
</template>
