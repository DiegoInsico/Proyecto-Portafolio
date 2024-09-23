import { Schema, Document, Types } from 'mongoose';

export interface Notificacion extends Document {
  idUsuario: Types.ObjectId;
  tipoNotificacion: string;
  fechaProgramada: Date;
  estado: string;
}

export const NotificacionSchema = new Schema({
  idUsuario: { type: Types.ObjectId, ref: 'Usuario', required: true },
  tipoNotificacion: { type: String, required: true },
  fechaProgramada: { type: Date, required: true },
  estado: { type: String, default: 'pendiente' },
});
