export type Status = {
  Code: number,
  Message: string,
}

export type Headers = {
  [key: string]: string,
}

export type ReponseType = {
  Status: Status;
  Headers: Headers;
  Body: string;
  Error: any;
  Time: any;
  Size: {
    Sum: number,
    Header: number,
    Body: number,
  };
};
