import {Request, Response} from "express";
import { getCustomRepository } from "typeorm"; 
import { SettingsRepository } from "../repositores/SettingsRepository";

class SettingsController {
    async create( request: Request, response: Response){
        const { chat, username} = request.body; 
        const settingsRespository = getCustomRepository(SettingsRepository);
    
        const settings = settingsRespository.create({
          chat, 
          username
        });
    
        await settingsRespository.save(settings);
    
        return response.json(settings);

    }
}

export {SettingsController}