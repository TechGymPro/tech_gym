import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {
  LoginEmailProps,
  LoginPhoneProps,
  initialStateAuthInterface,
} from '../@types/interfaces';
import {api, apiAuth} from '../api/base';
import {RootState} from './store';
import {convertPhoneNumber} from '../../utils/indext';

const initialState: initialStateAuthInterface = {
  userInfo: {
    gym_id: null,
    objective_id: null,
    student_actual_weight: '',
    student_birth: '',
    student_cpf: '',
    student_email: '',
    student_height: '',
    student_id: null,
    student_initial_weight: '',
    student_name: '',
    student_phone: '',
    student_wished_weight: null,
    training_id: null,
    contract_signed: 0,
    gateway_id: '',
    payment_type_id: null,
  },
  loading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateUserPhone: (state, action) => {
      state.userInfo.student_phone = action.payload;
    },
    updateUserEmail: (state, action) => {
      if (state.userInfo) {
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
    builder.addCase(sendPhoneToken.pending, state => {
      state.loading = true;
    });
    builder.addCase(sendPhoneToken.fulfilled, state => {
      state.loading = false;
    });
    builder.addCase(confirmPhoneToken.pending, state => {
      state.loading = true;
    });
    builder.addCase(confirmPhoneToken.fulfilled, state => {
      state.loading = false;
    });
    builder.addCase(verifyGymToken.pending, state => {
      state.loading = true;
    });
    builder.addCase(verifyGymToken.fulfilled, state => {
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
  updateUserPhone,
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

export const sendPhoneToken = createAsyncThunk(
  'auth-user/sendPhoneToken',
  async ({phone}: LoginPhoneProps) => {
    try {
      let response = await apiAuth.post('check-phone', {
        phone: convertPhoneNumber(phone),
      });

      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  },
);

export const confirmPhoneToken = createAsyncThunk(
  'auth-user/confirmPhoneToken',
  async ({phone, code}: LoginPhoneProps) => {
    try {
      console.log({phone: convertPhoneNumber(phone), code});
      let result = await apiAuth.post('check-phone-token', {
        phone: convertPhoneNumber(phone),
        code,
      });
      return result;
    } catch (error: any) {
      return error;
    }
  },
);

export const sendEmailToken = createAsyncThunk(
  'auth-user/sendPhoneToken',
  async ({email}: LoginEmailProps) => {
    try {
      let token = await apiAuth.get(`check-email/${email}`);

      return token;
    } catch (error: any) {
      return error;
    }
  },
);

export const confirmEmailToken = createAsyncThunk(
  'auth-user/confirmPhoneToken',
  async ({code, token}: LoginEmailProps) => {
    try {
      let result = await apiAuth.get(`check-email-token/${code}`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });

      return result;
    } catch (error: any) {
      return error;
    }
  },
);

export const verifyGymToken = createAsyncThunk(
  'auth-user/verifyGymToken',
  async ({code}: LoginEmailProps) => {
    try {
      let result = await apiAuth.post(`check-gym-token/${code}`);

      return result;
    } catch (error: any) {
      return error;
    }
  },
);

export default authSlice.reducer;
