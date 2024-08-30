import { Client } from "@elastic/elasticsearch";

const MAX_HITS = 200;

const esclient = new Client({
    node: process.env.ELASTICSEARCH_URL,
    auth: {
        apiKey: {
            id: process.env.ELASTICSEARCH_API_KEY_ID || "",
            api_key: process.env.ELASTICSEARCH_API_KEY || "",
        }
    },
    // TODO: Passing caFingerprint parameter throws signature mismatch error
    // caFingerprint: process.env.ELASTICSEARCH_FINGERPRINT,
    tls: {
        rejectUnauthorized: false,
    },
})

export async function GET(request: Request) {
    return Response.json({ error: "GET unsupported" });
}

export async function POST(request: Request) {
    const client = request.headers.get("x-forwarded-for");
    const query = await request.json();
    console.log(`IP: ${client}, QUERY: ${JSON.stringify(query)}`);
    const results = await getData(query);
    return Response.json(results);
}

// TODO: Fix any
async function getData(query: any) {
    const results = await esclient.search({
        index: "platform.transactions",
        body: { query },
        size: MAX_HITS,
    })
    return results;
}