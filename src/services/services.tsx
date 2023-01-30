import { GetUserActivityById } from "./api/activityApi";
import { GetUserPerformanceById } from "./api/performanceApi";
import { GetUserSessionById } from "./api/sessionApi";
import { GetUserDataById } from "./api/userApi";

const getInstance = {
    GetUserDataById,
    GetUserActivityById,
    GetUserSessionById,
    GetUserPerformanceById,

}

export default getInstance;
