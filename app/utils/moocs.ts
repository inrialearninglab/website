export const statuses = ["open", "closed", "archived"] as const;

export type Filters = Partial<{
    search: string;
    lang: string[];
    status: (typeof statuses)[number][];
}>;

export const DEFAULT_FILTERS = {
    search: "",
    lang: ["fr", "en"],
    status: ["open", "closed", "archived"],
} satisfies Filters;
