import { Schema,Document, Types } from "mongoose";

export interface Anomailas extends Document{
    idUsuario: Types.ObjectId;
    descripcion: string,
    fechaEvento: Date,
    estado: string,
}

export const AnomailasSchema = new Schema({
    idUsuario: {type: Types.ObjectId, ref: 'Usuario', required: true},
    descripcion: {type: String, required: true},
    fechaEvento: {type: Date, required: true},
    estado: {type: String, required: true},
});