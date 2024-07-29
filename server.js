// Next.js server, based on https://nextjs.org/docs/pages/building-your-application/configuring/custom-server

const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
 
const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.NEXT_SERVER_HOSTNAME || "localhost";
const port = process.env.NEXT_SERVER_PORT || 3000;

// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();
 
app.prepare().then(() => {
    createServer(async (req, res) => {
        try {
            req.url = req.url.replace(/\/$/, "");
            if (req.url === "")                 {
                req.url = "/";
            }
            const parsedUrl = parse(req.url, true);
            const { pathname, query } = parsedUrl;
            await handle(req, res, parsedUrl)
        } catch (err) {
            console.error("Error occurred handling", req.url, err)
            res.statusCode = 500
            res.end("Internal Server Error")
        }
    })
    .once("error", (err) => {
        console.error(err)
        process.exit(1)
    })
    .listen(port, () => {
        console.log(`> Ready on http://${hostname}:${port}`)
    })
});
