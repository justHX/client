import { useReducer, useEffect, useCallback } from "react";

enum ActionTypes {
  SET_FORM_STATE,
  SET_VALUE,
}

type Action<T> = {
  type: ActionTypes;
  payload: T;
};

type Form = {
  [key: string]: unknown;
};

function reducer<T>(state: T, action: Action<any>): T {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.SET_FORM_STATE:
      return payload;

    case ActionTypes.SET_VALUE:
      const { key, value } = payload;
      return { ...state, [key]: value };

    default:
      return state;
  }
}

export function useForm<T extends Form>(defaultState: T) {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const resetForm = useCallback(() => {
    dispatch({ type: ActionTypes.SET_FORM_STATE, payload: defaultState });
  }, [defaultState]);

  const setFormValue = useCallback((key: keyof T, value: unknown) => {
    const payload = { key, value };
    dispatch({ type: ActionTypes.SET_VALUE, payload });
  }, []);

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return { state, resetForm, setFormValue };
}
