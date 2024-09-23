import { Schema, Document, Types } from "mongoose";

export interface Categoria extends Document{
    idUsuario: Types.ObjectId;
    nombreCategoria: string;
    tipoCategoria: string;
}

export const CategoriaSchema = new Schema({
    idUsuario: {type: Types.ObjectId, ref: 'Usuario', required: true},
    nombreCategoria: {types: String, required: true},
    tipoCategoria: {types: String, required: true},
});