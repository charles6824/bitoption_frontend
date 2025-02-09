
export interface Login {
  emailAddress: string;
  password: string;
}

export interface ResponseModel {
  data: any;
  status: boolean;
  message: string;
}