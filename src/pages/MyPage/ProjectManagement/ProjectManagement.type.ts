export type ProjectDataType = {
  title: string;
  field: string;
  type: string;
  appNum?: number;
  appResult?: boolean;
  infoList: {
    infoKey: string;
    infoValue: string;
  }[];
  leader?: number;
};
