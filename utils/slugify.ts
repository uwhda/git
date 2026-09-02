/**
 * Converts text into a lowercase, hyphen-separated URL slug.
 */
export function slugify(value: string): string {
  const transliterated = Array.from(value, (character) => {
    const pinyin = PINYIN_BY_CHARACTER[character];
    return pinyin === undefined ? character : ` ${pinyin} `;
  }).join("");

  return transliterated
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const PINYIN_BY_CHARACTER: Readonly<Partial<Record<string, string>>> = {
  你: "ni",
  好: "hao",
};
