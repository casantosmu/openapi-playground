import dayjs from "dayjs";

export const formatDate = (
  format?: string | undefined,
  date?: string | number | Date | undefined
) => dayjs(date).format(format);
