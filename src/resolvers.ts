import { User } from './entity/User'
import { ResolverMap } from './types/resolverMap'

export const resolvers: ResolverMap = {
    Query: {
        hello: async (_: any, { name }: GQL.IHelloOnQueryArguments) => `Hello ${name || 'World'}`,
        // getAll: async () => {
        //     const res = await User.find()
        //     return res
        // },
    },
    Mutation: {
        register: async (_: any, { email, password }: GQL.IRegisterOnMutationArguments) => {
            try {
                const user = User.create({
                    email,
                    password
                })
                await user.save()
                return true
            } catch (error) {
                console.log(error)
                return false
            }

        }
    }
}