const statusCodes = {
  ok: 200,
  badRequest: 400,
  forbidden: 403,
  notFound: 404,
  internalServerError: 500,
} as const;

export type StatusCodes = typeof statusCodes[keyof typeof statusCodes];

export default statusCodes;
