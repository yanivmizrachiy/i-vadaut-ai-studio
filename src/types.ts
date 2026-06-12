/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum QuestionType {
  OPEN = 'open',
  MULTIPLE_CHOICE = 'multiple-choice',
  TRUE_FALSE = 'true-false',
  TABLE_COMPLETION = 'table-completion',
  MATCHING = 'matching',
}

export interface Choice {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface MatchingPair {
  id: string;
  source: string;
  target: string;
}

export interface Question {
  id: string;
  number: number;
  type: QuestionType;
  text: string; // The markdown-supported text in Hebrew
  points?: number;
  hint?: string;
  choices?: Choice[]; // For MULTIPLE_CHOICE
  matchingPairs?: MatchingPair[]; // For MATCHING
  correctAnswer?: string; // Standard answer representation
  solutionStepByStep: string; // Step by step detailed Hebrew explanation
  placeholderLines?: number; // How many lined grids to draw for printing
  tableHeaders?: string[]; // For TABLE_COMPLETION
  tableData?: any[][]; // Row contents for TABLE_COMPLETION
  graphType?: 'bar' | 'pie' | 'line' | 'scatter';
  graphData?: any; // Custom data for diagrams
}

export interface Worksheet {
  id: string;
  number: number;
  title: string;
  topic: string;
  classLevel: 'ה' | 'ו' | 'ז' | 'ח' | 'ט' | 'ז-ח';
  durationMinutes: number;
  instructions: string;
  summary: string;
  pedagogicalObjective: string;
  questions: Question[];
}

export interface TeacherGuideSection {
  title: string;
  content: string;
}
