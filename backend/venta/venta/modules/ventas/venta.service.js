(function () {
    'use strict';

    module.exports = {
        createVenta: createVenta,
        fetchVenta: fetchVenta,
        fetchVentaById: fetchVentaById,
        updateVenta: updateVenta,
        deleteVenta: deleteVenta
    };

    var VentaModel = require('./venta.module')().VentaModel;

    function createVenta(venta) {
        return VentaModel.create(venta);
    }

    function fetchVenta() {
        return VentaModel.find({})
            .exec();
    }

    function fetchVentaById(ventaId) {
        return VentaModel.findById(VentaId)
            .exec();
    }

    function updateVenta(ventaId, venta) {
        return VentaModel
            .findByIdAndUpdate(ventaId, venta, {new: true})
            .exec();
    }

    function deleteVenta(ventaId) {
        return VentaModel
            .findByIdAndRemove(ventaId)
            .exec();
    }

})();