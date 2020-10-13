import { createConnection, getConnectionOptions } from "typeorm"

export const typeormConnection = async () => {
    const options = await getConnectionOptions(process.env.NODE_ENV)
    const connection = createConnection({ ...options, name: 'default' })
    return connection
}