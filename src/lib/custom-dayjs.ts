import 'dayjs/locale/th'
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale('th')

dayjs().tz("Asia/Bangkok")

const customDayjs = dayjs
export { customDayjs }