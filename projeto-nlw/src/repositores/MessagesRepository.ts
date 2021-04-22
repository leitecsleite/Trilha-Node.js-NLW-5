import { EntityRepository, Repository } from "typeorm";
import { Messages } from "../entities/Messages";



@EntityRepository(Messages)
class MessagesRepository extends Repository<Messages> {
    
}

export {MessagesRepository}