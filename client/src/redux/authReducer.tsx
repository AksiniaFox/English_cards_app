

    interface AuthState {
        user: any;
        isAuth: boolean;
        isLoading: boolean;
        access: any | null;
    
    }
    
    interface AuthAction {
        type: string;
        payload: any;
    
    }
    
    const initialState: AuthState = {
        user: {},
        isAuth: false,
        isLoading: false,
        access: null
    }
    
    export const authReducer = (state = initialState, action: AuthAction): AuthState => {
        switch (action.type) {
            case 'SET_AUTH':
                return { ...state, isAuth: action.payload };

            case 'SET_USER':
                return { ...state, user: action.payload };

            case 'SET_LOADING':
                return { ...state, isLoading: action.payload };

            default:
                return state;
        }
    }
