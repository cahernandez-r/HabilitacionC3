(function () {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    var VentaSchema = new Schema({
        idVenta: {
            type: Number,
            required: true
        },
        Cantidad: {
            type: Number,
            required: true
        },
        valorUnitario: {
            type: Number,
            required: true
        },
        valorTotal: {
            type: Number,
            required: true
        },
        idCliente: {
            type: Number,
            required: true
        },
        nombreCliente: {
            type: String,
            required: true
        },
        fecha: {
            type: Date,
            required: true
        },  
        descripcion: String
    });

    module.exports = mongoose.model('venta', VentaSchema);
})();