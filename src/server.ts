import { apiServer } from "./api";

apiServer.listen(8000, () =>
{
   console.log("server is up and running on port 8000");
});