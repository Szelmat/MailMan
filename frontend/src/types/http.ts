export type Status = {
  Code: number,
  Message: string,
}

export type ReponseType = {
  Status: Status;
  Body: string;
  Error: any;
  Time: any;
  Size: {
    Sum: number,
    Header: number,
    Body: number,
  };
};
