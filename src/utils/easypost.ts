import EasyPost from "@easypost/api";

export const easypost = new EasyPost(process.env.EASYPOST_API_KEY || "");
