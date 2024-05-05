import prismaClient from "../../prisma";

interface GroupRequest {
    name: string
}

class CreateGroupService {
    async execute({ name }: GroupRequest) {

        //verificando se foi informado nome do grupo
        if(!name) {
            throw new Error("Nome incorreto ou em falta!");
        }

        //verificando se já existe grupo com o mesmo nome
        const groupAlreadyExists = await prismaClient.userGroup.findFirst({
            where: {
                name_group: name
            }
        })

        if(groupAlreadyExists) {
            throw new Error("Este grupo já existe!");
        }

        //registrando no banco
        const group = await prismaClient.userGroup.create({
            data: {
                name_group: name
            },
            select: {
                name_group: true
            }
        });

        return group;
    }
}

export default CreateGroupService;