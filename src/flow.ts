export type Topic = 'Travel & time zones' | 'Sleep changes' | 'Stress' | 'Something else';
export const topics: Topic[] = ['Travel & time zones', 'Sleep changes', 'Stress', 'Something else'];
export function validateAnswer(value: string, max: number): string | null {
  if (!value.trim()) return 'Add a few words, or choose Skip for now';
  if (value.length > max) return `Please keep your answer within ${max} characters`;
  return null;
}
export function toggleTopic(selected: Topic[], topic: Topic): Topic[] {
  return selected.includes(topic) ? selected.filter(t => t !== topic) : [...selected, topic];
}
export type Config = { freeText: boolean; limit: number; prompt: string };
export const defaultConfig: Config = {freeText: true, limit: 400, prompt: 'Is there anything else you’d like to tell us?'};
// Context is explicitly selected by the user, never inferred from their text.
export function summary(answer: string, selected: Topic[]) {
  return { note: answer.trim(), topics: [...selected], interpretation: 'User-reported context. No cause has been established.' };
}
