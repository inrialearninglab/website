export const useTags = () => {
    const { locale } = useI18n();

    const tags = useState("tags", () => null);

    const loadTags = async () => {
        if (!tags.value) {
            const res = await queryCollection("tags").first();
            if (!res) return;

            tags.value = res.tags;
        }
    };

    const getTagLabel = async (key: string) => {
        return tags[key]?.labels?.[locale.value] || tags[key]?.labels?.["fr"] || key;
    };

    const getTagsLabels = async (keys: string[]) => {
        return keys.map((key) => ({
            key,
            label: tags[key]?.labels?.[locale.value] || tags[key]?.labels?.["en"] || key,
        }));
    };

    return { tags, getTagLabel, getTagsLabels, loadTags };
};
