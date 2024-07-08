import firebase_admin
from firebase_admin import credentials, firestore

# Inicializar la app de Firebase con las credenciales del archivo JSON descargado
cred = credentials.Certificate('ruta/a/tu/archivo-de-credenciales.json')
firebase_admin.initialize_app(cred)

# Obtener una referencia a la base de datos Firestore
db = firestore.client()

# Función para agregar un empleado a Firestore
def agregar_empleado(nombre, departamento, fecha_ingreso):
    empleados_ref = db.collection('empleados')
    empleado_data = {
        'nombre': nombre,
        'departamento': departamento,
        'fecha_ingreso': fecha_ingreso
    }
    empleados_ref.add(empleado_data)

# Función para registrar la asistencia de un empleado
def registrar_asistencia(empleado_id, tipo_registro, fecha, hora):
    asistencia_ref = db.collection('registro_asistencia')
    asistencia_data = {
        'empleado_id': empleado_id,
        'tipo_registro': tipo_registro,
        'fecha': fecha,
        'hora': hora
    }
    asistencia_ref.add(asistencia_data)

# Ejemplo de uso
if __name__ == '__main__':
    agregar_empleado('Juan Pérez', 'Ventas', '2024-01-01')
    registrar_asistencia('ID_DEL_EMPLEADO', 'entrada', '2024-07-08', '08:00')
