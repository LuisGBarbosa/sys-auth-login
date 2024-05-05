import prismaClient from "../../prisma"
import { compare } from "bcryptjs"
import { sign } from 'jsonwebtoken'

interface LoginRequest {
    email: string,
    password: string
}

class AuthUserService {
    async execute({ email, password }: LoginRequest ){

        //verificando se tem o user
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        });


        if(!user){
            throw new Error("Email ou senha incorretos!")
        };


        //comparando senha passada com a senha criptografada do usuário encontrado (usando bcrypt)
        const matchPassword = await compare(password, user.password);

        if(!matchPassword) {
            throw new Error("Email ou senha incorretos!")
        }

        //gerar token JWT
        const tokenJWT = sign(
            //payload
            {
                name: user.name,
                email: user.email
            },
            process.env.SECRET_KEY_JWT,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        )

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: tokenJWT
        }
    }
}

export default AuthUserService;