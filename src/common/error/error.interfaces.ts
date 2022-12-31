interface ErrorPayload {
  name: string;
  message: string;
  target?: string;
  details?: ErrorPayload[];
}

export interface ErrorResponse {
  error: ErrorPayload;
}
