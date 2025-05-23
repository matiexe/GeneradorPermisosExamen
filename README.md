## Project Title: Exam Request PDF Generator

### Overview
This application allows students to generate a formal PDF document ("Solicitud Mesa de examen" or "Exam Request Form") to request special exams. Users fill out a web form with their personal details and the subjects they wish to be examined on, and the application generates a downloadable/printable PDF.

### Features
*   Generates a PDF document for exam requests.
*   Web-based form for data input.
*   Uses PDFKit for PDF generation.

### Technology Stack
*   **Backend:** Node.js, Express.js
*   **Templating Engine:** EJS (Embedded JavaScript templates)
*   **PDF Generation:** PDFKit
*   **Frontend:** HTML, Bootstrap CSS, JavaScript (with jQuery for Bootstrap components)

### Project Structure
```
.
├── app.js              # Express application setup
├── bin/
│   └── www             # Script to start the application
├── package.json        # Project dependencies and scripts
├── public/             # Static assets (CSS, images, client-side JS)
│   ├── images/
│   ├── javascripts/    # (Currently missing, but good practice to have)
│   └── stylesheets/
│       └── style.css   # Custom styles
├── routes/             # Route definitions
│   ├── index.js        # Handles the main page route
│   └── nota.js         # Handles PDF generation route
├── views/              # EJS templates
│   ├── index.ejs       # Main form page
│   └── error.ejs       # Error page template
└── README.md           # This file
```

### Setup and Installation
1.  **Prerequisites:**
    *   Node.js and npm (Node Package Manager) installed.
2.  **Clone the repository (if applicable):**
    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Run the application:**
    ```bash
    npm start
    ```
    The application will typically be available at `http://localhost:3000`.

### How to Use
1.  Open your web browser and navigate to the application's URL (e.g., `http://localhost:3000`).
2.  Fill in the required personal information:
    *   Nombre (First Name)
    *   Apellido (Last Name)
    *   N° DNI (ID Number)
    *   Año de egreso (Graduation Year)
    *   Telefono (Phone Number - optional)
3.  Enter the names of the subjects you wish to request an exam for (up to 3).
4.  Click the "Generar Nota" (Generate Note) button.
5.  A PDF document will be generated and displayed in your browser, which you can then download or print.

### Notes
*   The application is designed for the "Instituto de Educación Austro" as indicated in the generated PDF.
*   Specific rules for exam requests are mentioned on the form and in the PDF footer.
