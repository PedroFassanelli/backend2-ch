Este proyecto implementa un sistema de gestión de usuarios con autenticación y autorización usando Node.js, Express, MongoDB y JWT. Forma parte de la entrega N°1 del curso de Backend II.

✅ Funcionalidades implementadas
CRUD completo de usuarios (GET, POST, PUT, DELETE)
Contraseñas encriptadas con bcrypt
Autenticación con JWT
Estrategia de autenticación con Passport
Ruta /api/sessions/current protegida para validar sesión actual
Middleware isAdmin para proteger acciones sensibles

Rutas Principales
| Método | Endpoint                | Descripción                                 |
| ------ | ----------------------- | ------------------------------------------- |
| POST   | `/api/users`            | Crear usuario                               |
| GET    | `/api/users`            | Obtener todos los usuarios (requiere token) |
| GET    | `/api/users/:id`        | Obtener un usuario (requiere token)         |
| PUT    | `/api/users/:id`        | Editar usuario (solo admin)                 |
| DELETE | `/api/users/:id`        | Eliminar usuario (solo admin)               |
| POST   | `/api/sessions/login`   | Iniciar sesión y obtener token              |
| GET    | `/api/sessions/current` | Obtener info del usuario autenticado        |

⚙️ Configuración del entorno
Crear un archivo .env con el siguiente contenido:
PORT=...
MONGO_URL=mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/ecommerce?retryWrites=true&w=majority
JWT_SECRET=clave