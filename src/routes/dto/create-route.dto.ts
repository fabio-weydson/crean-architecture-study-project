import {LatLong} from "../../@core/types/routes.type";
import {IsNotEmpty, IsNumber, IsInt} from 'class-validator';

export class CreateRouteDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    origin: LatLong;

    @IsNotEmpty()
    destination: LatLong;

    @IsNumber()
    @IsInt()
    distance?: number;
}
