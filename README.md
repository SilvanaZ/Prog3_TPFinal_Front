# 🌟 TRABAJO FINAL INTEGRADOR

## 💻 PROGRAMACIÓN III - 2024 – 2do Cuatrimestre

### 🎓 Tecnicatura Universitaria en Desarrollo Web

---

### 🎯 Objetivos

Los objetivos de este **Trabajo Final Integrador** son que el estudiante:

- 🧠 Ponga en práctica todos los conocimientos adquiridos durante el cursado de la asignatura desarrollando una **API REST**.
- 📄 Defina la estructura de los documentos y las relaciones entre estos.
- 🔄 Interactúe con una API REST intercambiando información.

---

### 📝 Condiciones de Entrega

- 🚫 Para poder realizar la entrega y presentación del **Trabajo Final Integrador**, el alumno **NO** debe estar suspendido en el campus.
- 📂 El Trabajo Final Integrador deberá ser:
  - **Realizado en forma grupal**.
  - Los grupos deberán contar con un **mínimo de 4** y un **máximo de 6 alumnos**.
  - Cargado en la sección correspondiente del **Campus Virtual** en un archivo comprimido en formato **ZIP, RAR, TAR.GZ** u otro formato similar. También se acepta subir un archivo **TXT** con una URL al repositorio de **GitHub**. Deberá indicarse el **apellido y nombre** de los integrantes del grupo.
  - 🗓 **Entregado antes de la fecha límite** informada en el campus.
- 🚨 Las soluciones del grupo deben ser de **autoría propia**. Aquellas que se detecten como idénticas entre diferentes grupos o que evidencien ser copias de terceros (incluyendo sitios web) serán **desaprobadas** para todos los involucrados.
- ✔️ Se valorarán la **exactitud, eficiencia y prolijidad** (indentación y otras buenas prácticas) de las soluciones planteadas, así como la **calidad de la exposición** realizada.
- 📅 La exposición se realizará en forma **sincrónica** en la fecha informada en el campus. **Todos los integrantes del grupo deben estar presentes**, salvo casos excepcionales coordinados previamente.
- 🏆 El Trabajo Final Integrador, junto con la exposición, serán calificados con **nota numérica**, lo cual determinará si el alumno **desaprueba, regulariza o promociona** la asignatura.

---

## 📑 Enunciado - API REST para la Gestión de Reclamos

La concesionaria de automóviles **Prog.III**, para la cual usted trabaja en el área de desarrollo web, ha identificado problemas en el control de la atención post-venta de los vehículos comercializados. Por ello, han decidido iniciar un nuevo proyecto a implementarse antes de fin de año, con las siguientes fechas clave:

- 📅 **10/10/2024**: Primera entrega de avances en el desarrollo.
- 📅 **05/11/2024**: Entrega y exposición final del API REST.

El proyecto consiste en desarrollar una **API REST** para gestionar reclamos, que deberá incluir un sistema de **autenticación y autorización** con tres perfiles distintos: **administrador, empleado y cliente**. 

La API Rest debe asegurar un manejo **eficiente y seguro** de los reclamos, garantizando que cada perfil tenga acceso únicamente a las funciones correspondientes a sus responsabilidades. Además, se espera que sea **segura, eficiente y fácil de integrar** con los sistemas actuales de la empresa.

---

### ⚙️ Funciones por Perfil:

#### 👤 1. Clientes:
- 🔐 Iniciar sesión (**autenticación**).
- 📝 Crear reclamos.
- 🔍 Consultar el estado y detalles de sus reclamos (determinar qué datos se expondrán a los clientes).
- 📧 Recibir notificaciones ante los cambios de estado de sus reclamos.
- ❌ Cancelar un reclamo con estado **"creado"**.
- 🔄 Actualizar la información de su perfil.

#### 🧑‍💻 2. Empleados:
- 🔐 Iniciar sesión (**autenticación**).
- 🛠 Atender los reclamos de su oficina (cambiar el estado).
- 📋 Listar los reclamos asignados de su oficina.

#### 👨‍💼 3. Administradores:
- 🔐 Iniciar sesión (**autenticación**).
- 🛠 Gestionar los tipos de reclamos (**ABM o CRUD**).
- 👥 Gestionar los empleados (**ABM o CRUD**).
- 🏢 Gestionar las oficinas, incluyendo agregar o quitar empleados (**ABM o CRUD**).
- 📊 Ver información estadística sobre los reclamos (usar **stored procedures**).
- 📥 Descargar informes sobre reclamos en formato **PDF/CSV**.

### 🚨 Aspectos a Tener en Cuenta:
- 🏢 Las oficinas solo atienden **un tipo de reclamo**.
- 👥 Las oficinas pueden tener **más de un empleado**.
- ✅ Solo los empleados pueden **finalizar un reclamo** de la oficina a la que pertenecen.

---

## 🗂 Modelo de Datos

Se necesita registrar los siguientes datos:

- **Usuarios**: Nombre, apellido, correo electrónico, contraseña, tipo de usuario (cliente, empleado, administrador), imagen.
- **Oficinas**: Nombre, usuarios incluidos en la oficina.
- **Reclamos**: Asunto, descripción, fecha de creación, fecha de finalización, fecha de cancelación (puede ser nula), estado del reclamo, tipo de reclamo, cliente que inició el reclamo, usuario que finalizó el reclamo.

---

## 🛠 Registro y Almacenamiento de Información

- Toda la información deberá ser almacenada en una **base de datos relacional**.

---

## 🌐 Opcional - Aplicación Web Cliente

La aplicación web cliente debe contar con **interfaces de usuario interactivas** que permitan acceder a las siguientes opciones:

### 🌍 Parte Pública:
- 🏠 **Portada**.
- 🏢 **Información institucional** de la empresa.
- 📞 **Contacto**.

### 🔒 Parte Privada para Clientes y Personal:
- 💻 Interfaces para gestionar los requerimientos de la parte privada.

---

**🚀 Programación III - Trabajo Integrador Final**
