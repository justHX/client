import { useCallback } from "react";
import { useStore } from "effector-react";

import { API } from "API";

import { $feedback, setList, setItem } from "./store";

import type { FeedbackDetailItem, FeedbackListItem } from "./types";

export function useFeedback() {
  const feedback = useStore($feedback);

  const fetchFeedbackList = useCallback(async () => {
    try {
      const result = await API.get<FeedbackListItem[]>("/Admin/Feedbacks");

      setList(result?.data || []);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const fetchFeedbackById = useCallback(async (id: string) => {
    try {
      const result = await API.get<FeedbackDetailItem>(`/Admin/Feedback/${id}`);

      setItem(result?.data);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const updateFeedback = useCallback(
    async (id: string, text: string) => {
      try {
        await API.post(`/Admin/Feedback/SendAnswer/${id}`, { text });
        await fetchFeedbackList();
      } catch (e) {
        console.error(e);
      }
    },
    [fetchFeedbackList]
  );

  return {
    feedback,
    fetchFeedbackList,
    fetchFeedbackById,
    updateFeedback,
  };
}
