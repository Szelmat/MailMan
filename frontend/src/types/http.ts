export type ReponseType = {
  Code: number;
  Body: string;
  Error: any;
  Time: any;
  Size: {
    Sum: number,
    HeaderSize: number,
    BodySize: number,
  };
};
