export interface IAddEducationParams {
  userId: string;
  url?: string;
}

export interface IDeleteEducationParams {
  userId: string;
  educationId: string;
}

export interface IUpsertTranslationParams {
  userId: string;
  educationId: string;
  lang: string;
  title: string;
  content: string;
}

export interface IPatchUrlParams {
  userId: string;
  educationId: string;
  url: string;
}
