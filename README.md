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
- **Estilos:** Tailwind CSS v4 (Design System personalizado).
- **Despliegue:** Preparado para [Vercel](https://vercel.com) (Serverless Functions) y Firebase Hosting.

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

En esta versión (rama `feature/mejoras-tecnicas`), se realizaron las siguientes optimizaciones:
1. **Seguridad Robusta:** Implementación de `helmet.js` para proteger la aplicación contra vulnerabilidades comunes de la web.
2. **Configuración por Entorno:** Migración de datos institucionales a variables de entorno (`.env`), permitiendo cambiar el nombre del instituto o la rectora sin tocar el código.
3. **Dependencias Modernas:** Actualización a las últimas versiones estables de Express, PDFKit y EJS.
4. **Diseño Premium:** Rediseño visual completo utilizando la fuente *Outfit*, gradientes modernos, sombras suaves y micro-animaciones para una experiencia de usuario superior.
5. **Corrección de Errores HTML:** Eliminación de IDs duplicados y corrección de lógica en los selectores del formulario.

---
*Desarrollado para el Instituto de Educación Austro.*
