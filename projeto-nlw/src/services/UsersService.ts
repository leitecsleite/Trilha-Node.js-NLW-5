import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositores/UsersRepository";



class UsersService {
    private usersRepository:  Repository<User>
     constructor(){
         this.usersRepository = getCustomRepository(UsersRepository);
     }

    async create(email: string) {
        // verificar se o usuário existe 

        const userExists = await this.usersRepository.findOne({
            email,
        })
        // se não existor, salvar no 
        if(userExists){
            return userExists; 
        }
        
        const user = this.usersRepository.create({
            email,
        })

        await this.usersRepository.save(user); 
        // se existir, retornar user
        return user; 
    }
   
}


export {UsersService}; 