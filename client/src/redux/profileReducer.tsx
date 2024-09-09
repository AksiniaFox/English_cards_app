
interface FormState {
    [key: string]: any;
  }
  
  interface FormAction {
    type: string;
    payload: {
      field: string;
      value: any;
    };
  }
  
  const initialState: FormState = {};
  
  export const formReducer = (state = initialState, action: FormAction): FormState => {
    switch (action.type) {
      case 'UPDATE_FIELD':

      return {
          ...state,
          [action.payload.field]: action.payload.value,
        };
      default:
        return state;
    }
  };
  
  