import prismaClient from "../../prisma";
import { hash } from "bcryptjs";


//tipagem da requisição de usuário
interface UserRquest {
    name: string;
    email: string;
    password: string;
    group_id: string
};


class CreateUserService {
    async execute({name, email, password, group_id}: UserRquest){
        
        //verificando se informou o email
        if(!email){
            throw new Error("Email incorreto");
        }

        //buscando email informado na requisição, armazenando na const.
        const emailAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        });

        //se ela não estiver vazia, significa que foi encontrado o email informado, logo, ele já existe no banco.
        if(emailAlreadyExists){
            throw new Error("Email já cadastrado!")
        }

        //gerando senha criptografada
        const hashPassword = await hash(password, 8);


        //criando registro no banco
        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: hashPassword,
                group_id: group_id
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        })

        return user;
    }
}

export { CreateUserService }