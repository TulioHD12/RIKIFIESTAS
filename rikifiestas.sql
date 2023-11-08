CREATE TABLE persona (
    idPersona SERIAL PRIMARY KEY,
    NombrePersona VARCHAR(30) NOT NULL,
    Apellido1 VARCHAR(15) NOT NULL,
    Apellido2 VARCHAR(15) NOT NULL,
    Sexo VARCHAR(15) NOT NULL,
    Telefono INTEGER NOT NULL
);

CREATE TABLE usuario (
    idUsuario SERIAL PRIMARY KEY,
    NombreUsuario VARCHAR(255) NOT NULL,
    Tipo Variant VARCHAR(25) NOT NULL
    idPersona INTEGER REFERENCES persona(idPersona)
);

CREATE TABLE servicios (
    idServicios SERIAL PRIMARY KEY,
    NombreServicio VARCHAR(100) NOT NULL,
    Descripcion VARCHAR(255) NOT NULL,
    imagen VARCHAR(255) NOT NULL,
    Estado VARCHAR(10) NOT NULL DEFAULT 'activo'
);

CREATE TABLE categoria (
    idCategoria SERIAL PRIMARY KEY,
    NombreCategoria VARCHAR(255) NOT NULL,
    idServicios INTEGER REFERENCES servicios(idServicios)
);

CREATE TABLE producto (
    idProducto SERIAL PRIMARY KEY,
    nombreProducto VARCHAR(255) NOT NULL,
    cantidad INTEGER NOT NULL,
    Precio FLOAT NOT NULL,
    idCategoria INTEGER REFERENCES categoria(idCategoria)
);