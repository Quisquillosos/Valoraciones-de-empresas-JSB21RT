# Valoraciones-de-empresas-JSB21RT

Este es el repositorio del proyecto "Valoraciones de Empresas", un portal de búsqueda de empresas con información histórica de empleados para que los aspirantes a trabajar en ellas encuentren la empresa perfecta, basado en las valoraciones y opiniones de empleados anteriores.Este es el repositorio del proyecto "Valoraciones de Empresas", un portal de búsqueda de empresas con información histórica de empleados para que los aspirantes a trabajar en ellas encuentren la empresa perfecta, basado en las valoraciones y opiniones de empleados anteriores.

## Configuración e instalación

1. Instalas dependencias necesarias.
2. Crear archivo .env y configurar las variables de entorno necesarias. / .env.example.
3. Ejecutar 'npm run initDb' para crear las tablas necesarias en la base de datos.
4. Iniciar el servidor.

## Base de datos

### USERS

| Campo      | Tipo         | Descripción                            |
| ---------- | ------------ | -------------------------------------- |
| id         | CHAR(36)     | Identificador único del usuario        |
| email      | VARCHAR(100) | Correo electrónico del usuario         |
| password   | VARCHAR(100) | Contraseña del usuario (hash)          |
| firstName  | VARCHAR(50)  | Nombre del usuario                     |
| lastName   | VARCHAR(100) | Apellidos del usuario                  |
| photo      | CHAR(40)     | Nombre de la imagen                    |
| bio        | TEXT         | Biografia del usuario                  |
| createdAt  | DATETIME     | Fecha y hora de creación del usuario   |
| modifiedAt | DATETIME     | Fecha y hora de la última modificación |

### COMPANIES

| Campo      | Tipo         | Descripción                            |
| ---------- | ------------ | -------------------------------------- |
| id         | CHAR(36)     | Identificador único del usuario        |
| photo      | CHAR(40)     | Nombre de foto de la empresa           |
| name       | VARCHAR(100) | Nombre de la empresa                   |
| country    | VARCHAR(100) | Pais de la empresa                     |
| city       | VARCHAR(100) | Nombre de la ciudad de la empresa      |
| userId     | CHAR(36)     | Id del usuario (foreign key)           |
| createdAt  | DATETIME     | Fecha y hora de creación del usuario   |
| modifiedAt | DATETIME     | Fecha y hora de la última modificación |

### RATINGCOMPANIES

| Campo               | Tipo     | Descripción                          |
| ------------------- | -------- | ------------------------------------ |
| id                  | CHAR(36) | Identificador único del usuario      |
| photo               | CHAR(40) | Nombre de foto de la empresa         |
| salaries            | TINYINT  | Salarios                             |
| workEnvironment     | TINYINT  | Ambiente de trabajo                  |
| promotionPosibility | TINYINT  | Posibilidad de ascenso               |
| accesibility        | TINYINT  | Accesibilidad de la empresa          |
| companyId           | CHAR(36) | Id de la empresa (foreign key)       |
| userId              | CHAR(36) | Id del usuario (foreign key)         |
| createdAt           | DATETIME | Fecha y hora de creación del usuario |

### EMPLOYEES

| Campo     | Tipo        | Descripción                                         |
| --------- | ----------- | --------------------------------------------------- |
| id        | CHAR(36)    | Identificador único del empleado                    |
| userId    | CHAR(36)    | ID del usuario asociado al empleado (foreign key)   |
| companyId | CHAR(36)    | ID de la empresa asociado al empleado (foreign key) |
| position  | VARCHAR(50) | Puesto del empleado                                 |
| createdAt | DATETIME    | Fecha y hora de creación de la empleado             |

## Endpoints

## Endpoints del usuario➡️ `Token` ✅

- **POST** - [`/users/register`] - Permite que los usuarios se registren dando nombre, email, contraseña, bio y foto.
- **PUT** - [`/users/validate/:registrationCode`] - Valida a un usuario recién registrado.
- **POST** - [`/users/login`] - Permite que los usuarios inicien sesión con email y contraseña.
- **GET** - [`/users/profile`] - Obtiene el perfil del usuario autenticado. ➡️ `Token`
- **PUT** - [`/users/email`] - Actualiza email del perfil del usuario autenticado. ➡️ `Token`
- **PUT** - [`/users/password`] - Actualiza contraseña del perfil del usuario autenticado. ➡️ `Token`
- **POST** - [`/users/password/recover`] - Envía al usuario un correo de recuperación de contraseña.
- **PUT** - [`/users/password/reset`] - Actualiza la contraseña de un usuario mediante un código de recuperación.
- **PUT** - [`/users/photo`] - Actualiza foto del perfil del usuario autenticado. ➡️ `Token`
- **PUT** - [`/users/bio`] - Actualiza bio del perfil del usuario autenticado. ➡️ `Token`
- **POST** - [`/users/employees`] - Permite que los usuarios registrados se aniadan como empleados a una empresa proporcionando ID de empresa y puesto.

## Endpoints de las empresas

- **GET** - [`/companies`] - Obtiene una lista de empresas (se pueden filtrar por ciudad, país).
- **POST** - [`/companies`] - Permite que los usuarios registrados publiquen una nueva empresa proporcionando nombre, ciudad y país.
- **GET** - [`/companies/:companyId/ratings`] - Obtiene todas las valoraciones realizadas para una empresa específica.
- **GET** - [`/companies/:companyId/employees`] - Obtiene una lista de los empleados de una empresa.

## Endpoints de las valoraciones

- **POST** - [`/ratings`] - Permite que los empleados validados realicen una valoración de la empresa dando ID del empleado y valoraciones por aspectos (ambiente de trabajo, accesibilidad, sueldos, posibilidad de ascenso).
- **GET** - `/ratings/:employeeId` - Obtiene todas las valoraciones realizadas por un empleado específico.

## Endpoints Adicionales

### Valoraciones de una Empresa Específica

- **GET** - [`/companies/:companyId/ratings`] - Devuelve una lista de todas las valoraciones asociadas a la empresa con el ID proporcionado.

### Valoraciones de un Empleado Específico

- **GET** [`/ratings/:employeeId`] - Devuelve una lista de todas las valoraciones realizadas por el empleado con el ID proporcionado.

## NOTAS DEL EQUIPO

    - Preguntar sobre el modified de la compañia.
    - Consultar base de datos.
    - Duda sobre búsqueda por filtros
