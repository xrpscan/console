export type Transaction = {
    hash: string;
}

export interface IName {
    account: string,
    username?: string,
    name?: string,
    desc?: string,
    domain?: string,
    twitter?: string,
    verified?: boolean,
}
