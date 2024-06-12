import { create } from "zustand";

export const useAnswerStore = create((set) => ({
  answers: [],
  updateAnswer: (questionId, answer) =>
    set((state) => {
      const existingAnswerIndex = state.answers.findIndex(
        (a) => a.questionId === questionId
      );
      if (existingAnswerIndex !== -1) {
        const updatedAnswers = state.answers.map((a, index) =>
          index === existingAnswerIndex ? { questionId, answer } : a
        );
        return { answers: updatedAnswers };
      } else {
        return { answers: [...state.answers, { questionId, answer }] };
      }
    }),
}));
