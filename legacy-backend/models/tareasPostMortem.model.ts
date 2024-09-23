import { Schema, Document, Types } from 'mongoose';

export interface TareaPostMortem extends Document {
  idUsuario: Types.ObjectId;
  descripcionTarea: string;
  herederos: string;
  estadoTarea: string;
  fechaLiberacion: Date;
}

export const TareaPostMortemSchema = new Schema({
  idUsuario: { type: Types.ObjectId, ref: 'Usuario', required: true },
  descripcionTarea: { type: String, required: true },
  herederos: { type: String, required: true },
  estadoTarea: { type: String, default: 'pendiente' },
  fechaLiberacion: { type: Date, required: true },
});
