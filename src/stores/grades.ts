import { computed, reactive, type ComputedRef } from 'vue';
import { defineStore } from 'pinia';
import { PshsTerm, PshsTerms } from '@/utils/terms-pshs';
import type { TermPydantic } from '@/api';

type IndexedNumbers = { [id: string]: number };

interface GradesStore {
  grades: IndexedNumbers;
  units: IndexedNumbers;
  term: TermPydantic;
  average: ComputedRef<number>;
  setGrade: (id: string, value: number) => void;
  getGrade: (id: string) => number;
  resetGrades: () => void;
  setTerm: (term: TermPydantic) => void;
}

const createEmptyGrades = (term: TermPydantic) => {
  return Object.fromEntries(
    term.courses.map((course) => {
      const defaultGrade = course.gradePointScale[0];
      return [course.id, defaultGrade];
    })
  );
};

const extractUnits = (term: TermPydantic) => {
  return Object.fromEntries(term.courses.map((course) => [course.id, course.units]));
};

const computeAverage = (grades: IndexedNumbers, units: IndexedNumbers) => {
  const weightedGrades = Object.entries(grades).map(([id, grade]) => grade * units[id]);
  const totalWeightedGrades = weightedGrades.reduce(
    (total, weightedGrade) => total + weightedGrade,
    0
  );
  const totalUnits = Object.values(units).reduce((total, unit) => total + unit, 0);
  const result = totalWeightedGrades / totalUnits;

  return isNaN(result) ? 0 : result;
};

const createGradesStore = (): GradesStore => {
  const term = reactive<TermPydantic>(PshsTerms[PshsTerm.GRADE_7]);
  const grades = reactive<IndexedNumbers>(createEmptyGrades(term));
  const units = reactive<IndexedNumbers>(extractUnits(term));
  const average = computed(() => computeAverage(grades, units));

  const setGrade = (id: string, value: number) => {
    grades[id] = value;
  };

  const getGrade = (id: string) => {
    return grades[id] || 1;
  };

  const resetGrades = () => {
    Object.assign(grades, createEmptyGrades(term));
  };

  const setTerm = (term: TermPydantic) => {
    Object.assign(term, term);
    Object.assign(units, extractUnits(term));
  };

  return { grades, units, term, average, setGrade, getGrade, resetGrades, setTerm };
};

export const useGradesStore = defineStore('grades', createGradesStore);
