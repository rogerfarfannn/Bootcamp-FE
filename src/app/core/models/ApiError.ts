export class ApiError extends Error {

  constructor(
    message: string,
    public readonly status: number,
    public readonly friendlyMessage: string,
    public readonly resolution: string,
  ) {
    super(message);
  }

}