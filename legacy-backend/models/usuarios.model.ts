import { Schema, Document } from 'mongoose';

export interface Usuario extends Document {
  nombreUsuario: string;
  emailUsuario: string;
  contrasenia: string;
  estadoCuenta: string;
  fechaRegistro: Date;
  ultimaActividad: Date;
  huellaBiometrica: boolean;
}

export const UsuarioSchema = new Schema({
  nombreUsuario: { type: String, required: true },
  emailUsuario: { type: String, required: true, unique: true },
  contrasenia: { type: String, required: true },
  estadoCuenta: { type: String, default: 'activo' },
  fechaRegistro: { type: Date, default: Date.now },
  ultimaActividad: { type: Date, default: Date.now },
  huellaBiometrica: { type: Boolean, default: false },
});
