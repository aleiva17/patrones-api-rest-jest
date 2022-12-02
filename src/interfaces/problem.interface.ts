export interface testCase {
  input: string;
  output: string;
}

export interface Problem {
  title: string;
  statement: string;
  level: "Easy" | "Medium" | "Hard";
  testCases: testCase[];
};