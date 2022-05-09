import Easypost from "@easypost/api"

const easypost = new Easypost(process.env.EASYPOST_TEST_KEY)

export default easypost
