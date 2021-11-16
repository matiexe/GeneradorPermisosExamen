const express = require('express');
const router = express.Router();
const PDFDocument =require('pdfkit');



router.post('/',(req,res)=>{
    const doc= new PDFDocument()
    /**let filename = req.body.filename
    filename=encodeURI(filename)+'.pdf'**/
    filename='Solicitud Mesa de examen.pdf'

    res.setHeader('Content-disposition','inline;filename="'+filename+'"')
    res.setHeader('Content-type','application/pdf')
    const date = new Date();
    var day = date.getDate();
    var month
    let meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Dicimebre",]
    for(var i=0 ; i<meses.length;i++ ){
        if(i===date.getMonth()){
            month = meses[i] 
        }
    }
    if(date.getMonth())
    var year =date.getFullYear();
    doc.fontSize(10)
    doc.text("Rio Gallegos "+day+" de "+month+" de "+year,100,50,{align:"right"});
    doc.text("Al Instituto de Educación Austro",50,70,{align:"left"});
    doc.text("Sra Rectora",50,85,{align:"left"});
    doc.text("Prof. Ana Barria Zamorano",50,100,{align:"left"});
    doc.text("S     /       D",50,115,{align:"left"});
    
    doc.text("Ref: Nombre y Apellido: "+req.body.nombre+" "+req.body.apellido,50,180,{align:"right"});
    doc.text("DNI: "+req.body.dni,50,195,{align:"right"});
    doc.text("Año de Egreso: "+req.body.egreso,50,210,{align:"right"});
    
    doc.text("Me dirijo a Ud.  por medio de la presente a fin de solicitar Mesa de Examen Extraordinaria para las siguientes materias adeudadas:",
        50,250,{align:"justify",indent:40}
    )
    doc.text("1.-"+req.body.materia1,50,275,{align:"left",indent:160})
    doc.text("2.-"+req.body.materia2,50,290,{align:"left",indent:160})
    doc.text("3.-"+req.body.materia3,50,305,{align:"left",indent:160})

    doc.text("Sin más, despido de Ud. Atte.",50,320,{align:"left",indent:40})
    doc.text("____________________",50,340,{align:"right"})
    doc.text("Firma",50,360,{align:"right",indent:40})
    doc.text("Telefono: "+req.body.telefono,100,380,{align:"right"})

    doc.fontSize(8)
    doc.text("*Las mesas se solicitan de Abril a Noviembre",40,600,{align:"left"})
    doc.moveDown()
    doc.text("*Las notas de pedido de mesa deben ser presentadas en la institucion antes del 10 de cada mes",{align:"left"})
    doc.moveDown()
    doc.text("*La fecha sera informada al alumno una vez que la mesa este conformada",{align:"left"})
    doc.moveDown()
    doc.text("*Si el alumno no se presentara a la mesa solicitada, no podra pedir mesa para el mes siguiente",{align:"left"})
    
    doc.pipe(res)
    doc.end()
})
module.exports=router;




