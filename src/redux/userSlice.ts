import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {
  getNotificationsProps,
  getTrainingsProps,
  initialStateUserInterface,
} from '../@types/interfaces';
import {RootState} from './store';
import {api} from '../api/base';

const initialState: initialStateUserInterface = {
  notifications: [],
  trainings: [],
  loading: false,
  selectedTraining: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    selectTraining: (state, action) => {
      console.log(action.payload);
      state.selectedTraining = action.payload.exercise;
      action.payload.navigation.navigate('TrainingPlay');
    },
  },
  extraReducers: builder => {
    builder.addCase(getNotifications.pending, state => {
      state.loading = true;
    });
    builder.addCase(getNotifications.fulfilled, (state, action) => {
      if (action.payload && action.payload.data) {
        state.notifications = action.payload.data;
      } else {
        state.notifications = [];
      }
      state.loading = false;
    });
    builder.addCase(getExercises.pending, state => {
      state.loading = true;
    });
    builder.addCase(getExercises.fulfilled, (state, action) => {
      console.log({payload: action.payload, title: 'exer'});
      if (action.payload && action.payload.data) {
        state.trainings = action.payload.data;
      } else {
        state.trainings = [];
      }
      state.loading = false;
    });
    builder.addCase(getAll.pending, state => {
      state.loading = true;
    });
    builder.addCase(getAll.fulfilled, (state, action) => {
      console.log({payload: action.payload, name: 'get All'});
      if (action.payload && action.payload.notification.data) {
        state.notifications = action.payload.notification.data;
      } else {
        state.notifications = [];
      }
      if (action.payload && action.payload.exercise.data) {
        state.trainings = action.payload.exercise.data;
      } else {
        state.trainings = [];
      }
      state.loading = false;
    });
  },
});

export const notification = (state: RootState) => state.user.notifications;
export const training = (state: RootState) => state.user.trainings;
export const isLoading = (state: RootState) => state.user.loading;
export const selectedTraining = (state: RootState) =>
  state.user.selectedTraining;

export const {selectTraining} = userSlice.actions;

export const getNotifications = createAsyncThunk(
  'user/getNotifications',
  async ({gymId}: getNotificationsProps) => {
    try {
      let notificationsResponse = await api.get(
        `getUserNotifications/${gymId}`,
      );

      return notificationsResponse;
    } catch (error: any) {
      console.log(error);
    }
  },
);

export const getExercises = createAsyncThunk(
  'user/getExercises',
  async ({gymId, userId}: getTrainingsProps) => {
    try {
      let exercisesResponse = await api.get(
        `getUserTraining/${gymId}?userId=${userId}`,
      );

      return exercisesResponse;
    } catch (error: any) {
      console.log(error);
    }
  },
);

export const getAll = createAsyncThunk(
  'user/getAll',
  async ({gymId, userId}: getTrainingsProps) => {
    try {
      let exercisesResponse = await api.get(
        `getUserTraining/${gymId}?userId=${userId}`,
      );

      let notificationsResponse = await api.get(
        `getUserNotifications/${gymId}`,
      );

      return {exercise: exercisesResponse, notification: notificationsResponse};
    } catch (error: any) {
      console.log(error);
    }
  },
);

export default userSlice.reducer;
