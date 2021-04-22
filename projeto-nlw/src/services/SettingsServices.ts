import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";
import { SettingsRepository } from "../repositores/SettingsRepository";


interface IsettingCreate {
    chat: boolean;
    username:string;

}

class SettingsServices {

    private settingsRespository: Repository<Setting>;
    constructor(){
        this.settingsRespository = getCustomRepository(SettingsRepository); 
    }

    async create({chat, username}: IsettingCreate) {
    /*Slect * from setting where username = "username" limit 1 */
    const userAlreadyExisty = await this.settingsRespository.findOne({
        username,
    });

    if(userAlreadyExisty){
        throw new Error("User already exists");
        
    }
    
    const settings = this.settingsRespository.create({
      chat, 
      username,
    });

    await this.settingsRespository.save(settings);
    
    return settings; 
   }

}

export { SettingsServices} ; 