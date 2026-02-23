# Generador de Permisos de Examen - Instituto Austro

Esta aplicación web permite a los alumnos egresados del **Instituto de Educación Austro** generar automáticamente una nota formal en formato PDF para solicitar mesas de examen extraordinarias.

## 🚀 Funcionalidades

- **Formulario Inteligente:** Recopila datos personales (Nombre, Apellido, DNI, Teléfono) y académicos (Año de egreso, materias).
- **Generación de PDF en Tiempo Real:** Crea un documento formal con el formato institucional requerido, incluyendo fecha automática y cláusulas legales.
- **Validación de Datos:** Asegura que los campos críticos estén completos antes de generar el documento.
- **Interfaz Responsiva:** Diseñada con Bootstrap para funcionar en dispositivos móviles y computadoras de escritorio.

## 🛠️ Tecnologías Utilizadas

- **Backend:** Node.js & Express.js
- **Motor de Plantillas:** EJS (Embedded JavaScript)
- **Generación de Documentos:** [PDFKit](http://pdfkit.org/)
- **Estilos:** Bootstrap 4 & CSS3 personalizado.
- **Despliegue:** Preparado para Firebase Hosting / App Engine.

## 📋 Estructura del Proyecto

- `app.js`: Configuración principal del servidor Express.
- `routes/node.js`: Lógica principal para procesar los datos y generar el PDF.
- `views/index.ejs`: Interfaz de usuario (formulario).
- `public/`: Contiene archivos estáticos como imágenes y estilos CSS.

## ⚙️ Instalación y Uso Local

1. Clonar el repositorio.
2. Ejecutar `npm install` para instalar las dependencias.
3. Iniciar la aplicación con `npm start` o `node bin/www`.
4. Acceder a `http://localhost:3000`.

## 📈 Puntos de Mejora Implementados

En el análisis reciente, se realizaron las siguientes optimizaciones:
1. **Corrección de Errores HTML:** Se eliminaron IDs duplicados en el formulario y se corrigieron los valores del selector de año de egreso.
2. **Refactorización de Lógica:** Se simplificó el manejo de fechas en el backend y se activaron validaciones básicas para evitar PDF vacíos.
3. **Nombres de Archivo Dinámicos:** Ahora los PDFs se descargan con el nombre del alumno (ej: `Solicitud_Mesa_Apellido_Nombre.pdf`).
4. **Mejora Visual:** Se ajustó el layout para ser más moderno y limpio, y se corrigieron enlaces rotos en el pie de página.

---
*Desarrollado para el Instituto de Educación Austro.*
