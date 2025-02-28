import { Client } from "@elastic/elasticsearch";
import chalk from 'chalk';

const APP_MAX_HITS = Number(process.env.APP_MAX_HITS || 200);
const PLATFORM_SEARCH_INDEX = `${process.env.ELASTICSEARCH_NAMESPACE}.transactions`;

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
    const results = await getData(query);
    const resultCount = (typeof results?.hits?.total === 'number') ? results?.hits?.total : results?.hits?.total?.value;
    const colorFunc = (resultCount && resultCount > 0) ? chalk.bgGreen : chalk.bgRed;
    console.log(`IP: ${client}, QUERY: ${JSON.stringify(query)}`, colorFunc(`RESULT: ${resultCount}`));
    return Response.json(results);
}

async function getData(query: object) {
    const results = await esclient.search({
        index: PLATFORM_SEARCH_INDEX,
        body: {
            query,
            sort: [
                { "ledger_index": {"order": "desc"} },
                "_score"
            ]
        },
        size: APP_MAX_HITS,
    })
    return results;
}