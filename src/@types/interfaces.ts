export enum NotificationTypes {
  NORMAL = 1,
  PROMOTION = 2,
  CALENDAR = 3,
}

export interface User {
  student_id: string;
  gym_id: number;
  student_name: string;
  student_email: string;
  student_cpf: string;
  student_birth: string;
  student_phone: string;
  objective_id: number;
  student_height: number | null;
  student_initial_weight: number | null;
  student_actual_weight: number | null;
  deleted_date: string | null;
  updated_date: string;
  created_date: string;
  student_wished_weight: number | null;
  training_id: number | null;
}

export interface initialStateAuthInterface {
  userInfo: User | null;
  loading: boolean;
}

export interface notification {
  notifications_user_id: number;
  notifications_type: number;
  notifications_title: string;
  notifications_text: string;
}

export interface exercise {
  exercise_id: number;
  gym_id: number;
  exercise_name: string;
  exercise_url: string;
  exercise_qtd_serie: number;
  exercise_qtd_rep: number;
  exercise_obs: string;
  exercise_rest_time: number;
  type: string;
}

export interface division {
  training_division_id: number;
  training_serie_name: string;
  letter: string;
  exercises: exercise[];
}

export interface initialStateUserInterface {
  notifications: notification[] | [];
  loading: boolean;
  trainings: division[] | [];
  selectedTraining: division | null;
}

export interface LoginProps {
  email: string;
  password: string;
  navigation: any;
}

export interface getNotificationsProps {
  gymId: number;
}

export interface getTrainingsProps {
  gymId: number;
  userId: string;
}

export interface updateUserProps {
  userId: string;
  emailLocal: string;
  emailBase: string;
  newPassword: string;
  nameLocal: string;
  nameBase: string;
  objectiveLocal: number;
  objectiveBase: number;
  birthdayLocal: string;
  birthdayBase: string;
}
