import { readdirSync, existsSync, mkdirSync, symlinkSync } from "fs";
import { join, relative, dirname } from "path";

const EN_DIR = "content/en/moocs";
const FR_DIR = "content/fr/moocs";

function walk(dir) {
    return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
        const full = join(dir, entry.name);
        return entry.isDirectory() ? walk(full) : [full];
    });
}

for (const enFile of walk(EN_DIR)) {
    const rel = relative(EN_DIR, enFile);
    const frFile = join(FR_DIR, rel);

    if (!existsSync(frFile)) {
        mkdirSync(dirname(frFile), { recursive: true });

        const target = relative(dirname(frFile), enFile);
        symlinkSync(target, frFile);
        console.log(`Created symlink: ${frFile}`);
    } else {
        console.log(`Skipped: ${frFile}`);
    }
}
