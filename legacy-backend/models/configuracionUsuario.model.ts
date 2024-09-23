import { Schema, Document, Types } from 'mongoose';

export interface ConfiguracionUsuario extends Document {
  idUsuario: Types.ObjectId;
  modoOscuro: boolean;
  idiomaPreferido: string;
  notificacionesActivadas: boolean;
}

export const ConfiguracionUsuarioSchema = new Schema({
  idUsuario: { type: Types.ObjectId, ref: 'Usuario', required: true },
  modoOscuro: { type: Boolean, default: false },
  idiomaPreferido: { type: String, default: 'es' },
  notificacionesActivadas: { type: Boolean, default: true },
});
