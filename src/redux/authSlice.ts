import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {storeData} from '../../utils/storage';
import {LoginProps, initialStateAuthInterface} from '../@types/interfaces';
import {api, apiAuth} from '../api/base';
import {RootState} from './store';

const initialState: initialStateAuthInterface = {
  userInfo: null,
  loading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateUserEmail: (state, action) => {
      if (state.userInfo && state.userInfo.student_email) {
        state.userInfo.student_email = action.payload;
      }
    },
    updateUserName: (state, action) => {
      if (state.userInfo && state.userInfo.student_name) {
        state.userInfo.student_name = action.payload;
      }
    },
    updateUserObjective: (state, action) => {
      if (state.userInfo && state.userInfo.objective_id) {
        state.userInfo.objective_id = action.payload;
      }
    },
    updateUserBirthday: (state, action) => {
      if (state.userInfo && state.userInfo.student_birth) {
        state.userInfo.student_birth = action.payload;
      }
    },
    updateUserHeight: (state, action) => {
      if (state.userInfo && state.userInfo.student_height) {
        state.userInfo.student_height = action.payload;
      }
    },
    updateUserWeight: (state, action) => {
      if (state.userInfo && state.userInfo.student_actual_weight) {
        state.userInfo.student_actual_weight = action.payload;
      }
    },
    updateUserWishedWeight: (state, action) => {
      if (state.userInfo && state.userInfo.student_wished_weight) {
        state.userInfo.student_wished_weight = action.payload;
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(login.pending, state => {
      state.loading = true;
    });
    builder.addCase(getStudentData.fulfilled, (state, action) => {
      if (action.payload && action.payload.created_date) {
        state.userInfo = action.payload;
      }
    });
    builder.addCase(login.fulfilled, (state, action) => {
      console.log(action.payload);
      if (action.payload && action.payload.data && action.payload.data.login) {
        storeData('id', action.payload.data.login.student_id);
        state.userInfo = action.payload.data.login;
      } else {
        state.userInfo = null;
      }
      state.loading = false;
    });
  },
});

export const userData = (state: RootState) => state.auth.userInfo;
export const isLoading = (state: RootState) => state.auth.loading;

export const {
  updateUserBirthday,
  updateUserEmail,
  updateUserName,
  updateUserObjective,
  updateUserHeight,
  updateUserWeight,
  updateUserWishedWeight,
} = authSlice.actions;

export const getStudentData = createAsyncThunk(
  'user/getStudentData',
  async () => {
    try {
      const {data} = await api.get('getUserData');
      return data;
    } catch (error: any) {
      console.log(error.response.data.message);
    }
  },
);

export const login = createAsyncThunk(
  'auth-user/login',
  async ({email, password, navigation}: LoginProps) => {
    try {
      let loginResponse = await apiAuth.post('login', {
        email,
        password,
      });

      navigation.navigate('Dashboard');

      return loginResponse;
    } catch (error: any) {
      console.log({error});
      switch (error.response.data.message) {
        case 'Error: FirebaseError: Firebase: Error (auth/invalid-email).':
          Alert.alert('Erro de login', 'Email inválido');
          break;
        case 'Error: FirebaseError: Firebase: Error (auth/invalid-login-credentials).':
          Alert.alert('Erro de login', 'Senha ou e-mail inválido(s)');
          break;
        case 'Error: FirebaseError: Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).':
          Alert.alert(
            'Erro de login',
            'Tentativas de login atingida, por favor aguarde alguns minutos e tente novamente.',
          );
          break;
        default:
          Alert.alert('Erro de login');
          break;
      }
    }
  },
);

export default authSlice.reducer;
