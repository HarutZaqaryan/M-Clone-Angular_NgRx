const http = require("http")
const stoppable = require("stoppable")
const pEvent = require("p-event")
const util = require("util")

module.exports = async function createServerAndListen(app, port, host) {

  // app.use(async (ctx, next) => {
  //   ctx.set("Access-Control-Allow-Origin", "*");
  //   ctx.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  //   ctx.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

  //   if (ctx.method === "OPTIONS") {
  //     ctx.status = 204;
  //     return;
  //   }

  //   await next();
  // });

  const server = stoppable(http.createServer(app.callback()), 7000)

  server.listen(port, host)

  server.stop = util.promisify(server.stop)

  await pEvent(server, "listening")

  return server
}
