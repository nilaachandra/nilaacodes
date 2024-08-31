export function capitalize(word: string): string {
    if (!word) return word; // Handle empty strings or null values
    return word.charAt(0).toUpperCase() + word.slice(1);
}
