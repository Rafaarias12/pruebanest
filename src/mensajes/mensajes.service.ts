import { CreateMensajeDto } from './../DTO/create-mensaje-dto/create-mensaje-dto';
import { Injectable, Optional, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mensaje } from 'src/entidades/mensaje/mensaje.entity';
import { Repository } from 'typeorm';


@Injectable()
export class MensajesService {
    
    constructor(@InjectRepository(Mensaje) private mensajeRepository : Repository<Mensaje>) {
        
        
    }

    async getAll(){
        return await this.mensajeRepository.find();
    }

    async createMensaje(model: CreateMensajeDto ){
        const nuevo = new Mensaje();
        nuevo.mensaje = model.mensaje;
        nuevo.nick = model.nick;

        this.mensajeRepository.save(nuevo);
    }

    async updateMensaje(idMensaje: number, mensajeActualizar: CreateMensajeDto){
        const mensajeUpdate = await this.mensajeRepository.findOneById(idMensaje);
        mensajeUpdate.nick = mensajeActualizar.nick;
        mensajeUpdate.mensaje = mensajeActualizar.mensaje;

        return await this.mensajeRepository.save(mensajeUpdate);
    }

    async deleteMensaje(idMensaje: number){
        return await this.mensajeRepository.delete(idMensaje);
    }
}
