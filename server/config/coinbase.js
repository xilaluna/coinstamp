import coinbase from "coinbase-commerce-node"

let Client = coinbase.Client
Client.init(process.env.COINBASE_KEY)

export const Charge = coinbase.resources.Charge
export const Webhook = coinbase.Webhook
