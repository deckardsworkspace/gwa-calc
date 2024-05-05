/**
 * Built-in CoursePydantic definitions for PSHS terms.
 */

import { GradingSystem, type TermPydantic as Term } from '../api';

const ADMIN_UUID = '3e2b6caa-d329-44f2-ac1c-33b5e32c3e2a';
const BOR_MEETING_DATE = new Date(1626393600000);
const BOR_MEETING_DESC = 'BOR Meeting 2021-07-16';

export enum PshsTerm {
  GRADE_7 = 'db5b3657-85b1-459a-82c0-50883b75cb7b',
  GRADE_8 = '58f470f4-a47a-45bd-951f-24b4b9cbfd1f',
  GRADE_9 = '8a1b97bf-306e-46ba-80a3-a54a48e45e88',
  GRADE_10 = '1a202c83-4624-4298-b1bd-00f760b1039e',
  GRADE_10_NO_ELECTIVE = 'e30dad1d-e307-4a37-8446-d9fe6cc1badc',
  SYP = '37bf8003-57a6-46c4-9b71-f75a49d12bb9',
}

const base_term = {
  isPublic: true,
  creatorId: ADMIN_UUID,
  createdAt: BOR_MEETING_DATE,
  updatedAt: BOR_MEETING_DATE,
  description: BOR_MEETING_DESC,
};

const base_course = {
  creatorId: ADMIN_UUID,
  gradingSystem: GradingSystem.FivePoint,
  gradePointScale: [1.0, 1.25, 1.5, 1.75, 2.0, 2.25, 2.5, 2.75, 3.0, 4.0, 5.0],
  createdAt: BOR_MEETING_DATE,
  updatedAt: BOR_MEETING_DATE,
  description: BOR_MEETING_DESC,
};

export const PshsTerms: Record<PshsTerm, Term> = {
  [PshsTerm.GRADE_7]: {
    ...base_term,
    id: PshsTerm.GRADE_7,
    name: 'PSHS Grade 7',
    courses: [
      {
        ...base_course,
        id: '3e6b2916-d6d7-4b99-b0af-8688440755d3',
        name: 'Integrated Science 1',
        units: 1.7,
      },
      {
        ...base_course,
        id: 'c82b43e4-97e4-48f1-9e33-cee0198e5110',
        name: 'Mathematics 1',
        units: 1.7,
      },
      { ...base_course, id: 'ee37426b-626b-4047-bad0-9799db01c616', name: 'English 1', units: 1.3 },
      { ...base_course, id: '27cca693-9d3f-455c-a310-ac1d21b1e8df', name: 'Filipino 1', units: 1 },
      {
        ...base_course,
        id: '1868d407-9dc1-4771-838c-1e6cc5037732',
        name: 'Social Science 1',
        units: 1,
      },
      { ...base_course, id: '83bfe37f-d2d2-49c3-b54d-4dc1fb1e6817', name: 'PEHM 1', units: 1 },
      {
        ...base_course,
        id: 'e3401e3c-0020-40e1-9138-7aa93fb7230f',
        name: 'Values Education 1',
        units: 0.7,
      },
      { ...base_course, id: '8b684fa0-26a8-499f-9053-219152657289', name: 'AdTech 1', units: 1 },
      {
        ...base_course,
        id: '8bf47683-0500-48bd-91e8-fa5860fe9cf2',
        name: 'Computer Science 1',
        units: 1,
      },
    ],
  },

  [PshsTerm.GRADE_8]: {
    ...base_term,
    id: PshsTerm.GRADE_8,
    name: 'PSHS Grade 8',
    courses: [
      {
        ...base_course,
        id: 'ae80cf74-e3b6-419c-806f-3a0f82f81df6',
        name: 'Integrated Science 2',
        units: 2,
      },
      {
        ...base_course,
        id: '10c04382-459b-4812-941b-79bae01ca3b1',
        name: 'Mathematics 2',
        units: 1.7,
      },
      { ...base_course, id: '67a5c41d-c7b9-4ae4-be82-822b9332685d', name: 'English 2', units: 1.3 },
      { ...base_course, id: '5131e38e-ee97-48d1-8d2d-e53719b4a5f3', name: 'Filipino 2', units: 1 },
      {
        ...base_course,
        id: 'f0cb15d0-da71-48c5-8eff-ca5cc7729eb9',
        name: 'Social Science 2',
        units: 1,
      },
      { ...base_course, id: 'eb3832b7-d6ab-463f-b376-3ec5d4953a39', name: 'PEHM 2', units: 1 },
      {
        ...base_course,
        id: 'fd78aeab-544d-41ac-9651-a5609d49864a',
        name: 'Values Education 2',
        units: 0.7,
      },
      { ...base_course, id: 'f4ca867a-a3d8-4926-bfeb-78f51d90f341', name: 'AdTech 2', units: 1 },
      {
        ...base_course,
        id: '01b8d21c-3511-4a4a-9c91-69a784cc8763',
        name: 'Computer Science 2',
        units: 1,
      },
      {
        ...base_course,
        id: 'b5e239e5-2c0f-4ac5-a191-b0723f254ece',
        name: 'Earth Science',
        units: 0.7,
      },
    ],
  },

  [PshsTerm.GRADE_9]: {
    ...base_term,
    id: PshsTerm.GRADE_9,
    name: 'PSHS Grade 9',
    courses: [
      { ...base_course, id: 'e68a1b46-ecc7-403e-8e74-d57ea8cfdf8b', name: 'Biology 1', units: 1 },
      { ...base_course, id: 'b3a46f0b-2ed0-412a-81c3-82c622c0e262', name: 'Chemistry 1', units: 1 },
      { ...base_course, id: '35bfab56-de92-4db2-93ae-8f674fe900b7', name: 'Physics 1', units: 1 },
      {
        ...base_course,
        id: '3256bff4-1f44-4e34-83e0-28d900a63d84',
        name: 'Mathematics 3',
        units: 1,
      },
      { ...base_course, id: '73deee09-8b9d-4bfe-94c2-56f01d05b85d', name: 'English 3', units: 1 },
      { ...base_course, id: '16411630-89ef-4b89-9d17-8a2b2db4811b', name: 'Filipino 3', units: 1 },
      {
        ...base_course,
        id: 'b034674a-e740-4044-b4ee-42dcdc34c797',
        name: 'Social Science 3',
        units: 1,
      },
      { ...base_course, id: '6e22fac2-c835-4ea5-8614-76cdba44b1d3', name: 'PEHM 3', units: 1 },
      { ...base_course, id: 'dd4b7891-b2c1-4966-99d0-155ccdedaec5', name: 'Statistics', units: 1 },
      {
        ...base_course,
        id: '9944fb24-92bf-43e5-a70a-211eadd5b1f4',
        name: 'Computer Science 3',
        units: 1,
      },
    ],
  },

  [PshsTerm.GRADE_10]: {
    ...base_term,
    id: PshsTerm.GRADE_10,
    name: 'PSHS Grade 10',
    courses: [
      { ...base_course, id: 'b563fb11-dfa0-424b-b543-6a95a22c71bb', name: 'Biology 2', units: 1 },
      { ...base_course, id: 'b11b963b-b174-4706-bc25-7d3b63a459de', name: 'Chemistry 2', units: 1 },
      { ...base_course, id: '7a582d99-a56b-443c-bcec-f0a2269905ee', name: 'Physics 2', units: 1 },
      {
        ...base_course,
        id: '93c8a136-21dc-4c5c-a6fd-de07dc72089f',
        name: 'Mathematics 4',
        units: 1.3,
      },
      { ...base_course, id: 'eee3aed3-7e15-4856-83b6-6a6b1f0348f0', name: 'English 4', units: 1 },
      { ...base_course, id: '61ce94cb-54f0-4dd6-b76d-c0380123d957', name: 'Filipino 4', units: 1 },
      {
        ...base_course,
        id: '4dfb1f00-4513-4d8c-94d9-ba365aa56f09',
        name: 'Social Science 4',
        units: 1,
      },
      { ...base_course, id: '3a81feef-4315-4732-86d6-89de9aeca3b3', name: 'PEHM 4', units: 1 },
      {
        ...base_course,
        id: 'bc238f9b-cd24-4e4d-89fb-af0c95d2b7f9',
        name: 'STEM Research 1',
        units: 1,
      },
      {
        ...base_course,
        id: '9da06fbb-61a7-4e4f-9d9d-287477bd7658',
        name: 'Computer Science 4',
        units: 1,
      },
      { ...base_course, id: '3fde97e5-c7e2-4bd2-a4c7-3836df126596', name: 'Elective', units: 1 },
    ],
  },

  [PshsTerm.GRADE_10_NO_ELECTIVE]: {
    ...base_term,
    id: PshsTerm.GRADE_10_NO_ELECTIVE,
    name: 'PSHS Grade 10 (no elective)',
    courses: [
      { ...base_course, id: 'b563fb11-dfa0-424b-b543-6a95a22c71bb', name: 'Biology 2', units: 1 },
      { ...base_course, id: 'b11b963b-b174-4706-bc25-7d3b63a459de', name: 'Chemistry 2', units: 1 },
      { ...base_course, id: '7a582d99-a56b-443c-bcec-f0a2269905ee', name: 'Physics 2', units: 1 },
      {
        ...base_course,
        id: '93c8a136-21dc-4c5c-a6fd-de07dc72089f',
        name: 'Mathematics 4',
        units: 1.3,
      },
      { ...base_course, id: 'eee3aed3-7e15-4856-83b6-6a6b1f0348f0', name: 'English 4', units: 1 },
      { ...base_course, id: '61ce94cb-54f0-4dd6-b76d-c0380123d957', name: 'Filipino 4', units: 1 },
      {
        ...base_course,
        id: '4dfb1f00-4513-4d8c-94d9-ba365aa56f09',
        name: 'Social Science 4',
        units: 1,
      },
      { ...base_course, id: '3a81feef-4315-4732-86d6-89de9aeca3b3', name: 'PEHM 4', units: 1 },
      {
        ...base_course,
        id: 'bc238f9b-cd24-4e4d-89fb-af0c95d2b7f9',
        name: 'STEM Research 1',
        units: 1,
      },
      {
        ...base_course,
        id: '9da06fbb-61a7-4e4f-9d9d-287477bd7658',
        name: 'Computer Science 4',
        units: 1,
      },
    ],
  },

  [PshsTerm.SYP]: {
    ...base_term,
    id: PshsTerm.SYP,
    name: 'PSHS SYP',
    courses: [
      {
        ...base_course,
        id: 'ffeac2ce-fa25-45e8-85cc-ed6a01d4a314',
        name: 'Core Science 3 / 4',
        units: 1.7,
      },
      {
        ...base_course,
        id: '9ffabab5-6210-4908-8e35-97cd27e048e6',
        name: 'Mathematics 5 / 6',
        units: 1,
      },
      {
        ...base_course,
        id: '1cd17751-5f95-4148-b684-4d4210dbb32a',
        name: 'English 5 / 6',
        units: 1,
      },
      {
        ...base_course,
        id: 'ee8d7715-3f56-41b8-ae49-83cbc6001211',
        name: 'Filipino 5 / 6',
        units: 1,
      },
      {
        ...base_course,
        id: '2d7a54da-9463-48eb-bf8e-e2734d8dee6a',
        name: 'Social Science 5 / 6',
        units: 1,
      },
      {
        ...base_course,
        id: 'f3aa16e5-a1c8-43e3-bd23-3c27fe3b1055',
        name: 'STEM Research 2 / 3',
        units: 2,
      },
      { ...base_course, id: '12222c3f-7018-4ec7-8861-5fedbe2fd492', name: 'Elective', units: 1.7 },
    ],
  },
};
