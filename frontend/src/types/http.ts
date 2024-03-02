export type ReponseType = {
  Code: number;
  Status: string;
  Body: string;
  Error: any;
  Time: any;
  Size: {
    Sum: number,
    Header: number,
    Body: number,
  };
};
