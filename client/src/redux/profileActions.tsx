
export const UPDATE_FIELD = 'UPDATE_FIELD';

export const updateField = (field: string, value: any) => ({
  type: UPDATE_FIELD,
  payload: { field, value },
});
