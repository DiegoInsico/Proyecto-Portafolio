import { Schema, Document, Types } from 'mongoose';

export interface Entrada extends Document {
  idUsuario: Types.ObjectId;
  titulo: string;
  contenido: string;
  fechaCreacion: Date;
  fechaEvento: Date;
  estadoAnimo: string;
  imagen: string;
  archivos: string;
  fechaUltimaModificacion: Date;
}

export const EntradaSchema = new Schema({
  idUsuario: { type: Types.ObjectId, ref: 'Usuario', required: true },
  titulo: { type: String, required: true },
  contenido: { type: String, required: true },
  fechaCreacion: { type: Date, default: Date.now },
  fechaEvento: { type: Date },
  estadoAnimo: { type: String },
  imagen: { type: String },
  archivos: { type: String },
  fechaUltimaModificacion: { type: Date, default: Date.now },
});
