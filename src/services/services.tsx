import { UserActivityById } from "./api/activityApi";
import { UserPerformanceById } from "./api/performanceApi";
import { UserSessionById } from "./api/sessionApi";
import { UserDataById } from "./api/userApi";

const getInstance = {
    UserDataById,
    UserActivityById,
    UserSessionById,
    UserPerformanceById,

}

export default getInstance;
