import { Controller, Post, Body, Get, Put, HttpStatus, Res} from '@nestjs/common';
import { CreateMensajeDto } from 'src/DTO/create-mensaje-dto/create-mensaje-dto';
import { MensajesService } from './mensajes.service';


@Controller('mensajes')
export class MensajesController {

    constructor(private mensajeService: MensajesService) {
        
        
    }

    @Post()
    create(@Body() createMensajeDto: CreateMensajeDto, @Res() response ){
        this.mensajeService.createMensaje(createMensajeDto).then(
            mensaje =>{
                response.status(HttpStatus.CREATED).json(mensaje);
            }
        ).catch(()=>{
            response.status(HttpStatus.FORBIDDEN).json({mensaje:'error en la creacion del mensaje'});
        }
            
        );
    }

    @Get()
    getAll(@Res() response){
        this.mensajeService.getAll().then(mensajeList =>{
            response.status(HttpStatus.OK).json(mensajeList);
        }).catch(()=>{
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'error en la obtención de datos'});
        })
    }

    @Put('/:id')
    update(@Body() updateMensajeDto: CreateMensajeDto){
        return 'Mensaje actualizado';
    }
}



