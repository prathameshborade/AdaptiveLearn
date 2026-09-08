export type Topic = "Python Basics" | "Variables" | "Conditions" | "Loops" | "Lists" | "Functions" | "OOP" | "Recursion";
export type Difficulty = "Easy" | "Medium" | "Hard";
export type Status = "Strong" | "Developing" | "Weak";

export const TOPICS: Topic[] = ["Python Basics", "Variables", "Conditions", "Loops", "Lists", "Functions", "OOP", "Recursion"];
export const INITIAL_MASTERY: Record<Topic, number> = { "Python Basics": 92, Variables: 88, Conditions: 82, Loops: 64, Lists: 58, Functions: 38, OOP: 31, Recursion: 25 };
export const statusFor = (score: number): Status => score >= 80 ? "Strong" : score >= 50 ? "Developing" : "Weak";
export const nextDifficulty = (current: Difficulty, correct: boolean): Difficulty => {
  const steps: Difficulty[] = ["Easy", "Medium", "Hard"];
  return steps[Math.max(0, Math.min(2, steps.indexOf(current) + (correct ? 1 : -1)))];
};
export function recommend(mastery: Record<Topic, number>) {
  // Foundations are prioritized first; after Functions is strengthened, OOP becomes actionable.
  const topic: Topic = mastery.Functions >= 70 ? "OOP" : "Functions";
  const score = mastery[topic];
  return { topic, difficulty: score < 45 ? "Easy" as Difficulty : "Medium" as Difficulty,
    reason: topic === "Functions" ? "Functions is one of your weakest Python foundations. Strengthening it unlocks more advanced topics." : "Functions has improved significantly. Object-Oriented Programming is now your highest-priority remaining foundation." };
}
export function learningPath(mastery: Record<Topic, number>): Topic[] {
  const first = recommend(mastery).topic;
  return [first, ...TOPICS.filter(t => t !== first).sort((a,b) => mastery[a] - mastery[b])].slice(0,5);
}
export function updatedFunctionsMastery(previous: number, correct: number, total: number) {
  // Weighted demonstration update: a perfect five-question run moves the demo from 38% to 78%.
  const accuracy = total ? correct / total : 0;
  return Math.round(Math.min(82, previous + 24 + accuracy * 16));
}
