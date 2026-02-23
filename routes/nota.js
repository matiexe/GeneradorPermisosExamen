const express = require('express');
const router = express.Router();
const PDFDocument = require('pdfkit');

router.post('/', (req, res) => {
    const { nombre, apellido, dni, egreso, telefono, materia1, materia2, materia3 } = req.body;

    // Basic validation
    if (!nombre || !apellido || !dni) {
        return res.status(400).send('Faltan datos obligatorios (Nombre, Apellido, DNI)');
    }

    const doc = new PDFDocument();
    const filename = `Solicitud_Mesa_${apellido}_${nombre}.pdf`;

    res.setHeader('Content-disposition', 'inline; filename="' + encodeURIComponent(filename) + '"');
    res.setHeader('Content-type', 'application/pdf');

    const date = new Date();
    const day = date.getDate();
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const month = meses[date.getMonth()];
    const year = date.getFullYear();

    // PDF styling
    doc.fontSize(10);

    // Header
    const ciudad = process.env.INSTITUCION_CIUDAD || "Río Gallegos";
    const institucion = process.env.INSTITUCION_NOMBRE || "Instituto de Educación Austro";
    const rectora = process.env.INSTITUCION_RECTORA || "Prof. Ana Barria Zamorano";

    doc.text(`${ciudad}, ${day} de ${month} de ${year}`, 100, 50, { align: "right" });
    doc.text(`Al ${institucion}`, 50, 70, { align: "left" });
    doc.text("Sra Rectora", 50, 85, { align: "left" });
    doc.text(rectora, 50, 100, { align: "left" });
    doc.text("S     /       D", 50, 115, { align: "left" });

    // Student Info
    doc.text(`Ref: Nombre y Apellido: ${nombre} ${apellido}`, 50, 180, { align: "right" });
    doc.text(`DNI: ${dni}`, 50, 195, { align: "right" });
    doc.text(`Año de Egreso: ${egreso || 'No especificado'}`, 50, 210, { align: "right" });

    // Body
    doc.text("Me dirijo a Ud. por medio de la presente a fin de solicitar Mesa de Examen Extraordinaria para las siguientes materias adeudadas:",
        50, 250, { align: "justify", indent: 40 }
    );

    const materias = [materia1, materia2, materia3].filter(m => m && m.trim() !== "");
    let currentY = 275;
    materias.forEach((materia, index) => {
        doc.text(`${index + 1}.- ${materia}`, 50, currentY, { align: "left", indent: 160 });
        currentY += 15;
    });

    // Closure
    doc.text("Sin más, me despido de Ud. Atte.", 50, 320, { align: "left", indent: 40 });
    doc.text("____________________", 50, 340, { align: "right" });
    doc.text("Firma", 50, 360, { align: "right", indent: 40 });
    doc.text(`Teléfono: ${telefono || 'No especificado'}`, 100, 380, { align: "right" });

    // Footer / Legal notes
    doc.fontSize(8);
    doc.text("*Las mesas se solicitan de Abril a Noviembre", 40, 600, { align: "left" });
    doc.moveDown();
    doc.text("*Las notas de pedido de mesa deben ser presentadas en la institución antes del 10 de cada mes", { align: "left" });
    doc.moveDown();
    doc.text("*La fecha será informada al alumno una vez que la mesa esté conformada", { align: "left" });
    doc.moveDown();
    doc.text("*Si el alumno no se presentara a la mesa solicitada, no podrá pedir mesa para el mes siguiente", { align: "left" });

    doc.pipe(res);
    doc.end();
});

module.exports = router;





