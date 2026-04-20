export interface IAddExperienceParams {
  userId: string;
  companyName: string;
  startDate: string;
  endDate?: string;
}

export interface IDeleteExperienceParams {
  userId: string;
  experienceId: string;
}

export interface IPatchCompanyNameParams {
  userId: string;
  experienceId: string;
  companyName: string;
}

export interface IPatchActivePeriodParams {
  userId: string;
  experienceId: string;
  startDate: string;
  endDate: string;
}

export interface IPatchInfoParams {
  userId: string;
  experienceId: string;
  lang: string;
  position?: string;
  tasks?: { _id?: string; task: string }[];
}

export interface IAddTaskParams {
  userId: string;
  experienceId: string;
  lang: string;
  task: string;
}

export interface IPatchTaskParams {
  userId: string;
  experienceId: string;
  lang: string;
  taskId: string;
  task: string;
}

export interface IDeleteTaskParams {
  userId: string;
  experienceId: string;
  lang: string;
  taskId: string;
}
