(function () {
    'use strict';

    module.exports = {
        addVenta: addVenta,
        getVentas: getVentas,
        getVentaById: getVentaById,
        modifyVenta: modifyVenta,
        removeVenta: removeVenta
    };

    var VentaService = require('./venta.module')().VentaService;
    const { BadRequest } = require('../util/errors');


    function addVenta(req, res, next) {
        const { idVenta, cantidad, valorUnitario,valorTotal,idCliente,nombreCliente,fecha,descripcion} = req.body;
        try{
            if (!idVenta || !cantidad || !valorUnitario || !valorTotal || !valorUnitario || !idCliente || !nombreCliente || !fecha) {
                throw new BadRequest('Missing required fields');
            }
            VentaService.createVenta(req.body)
            .then(success)
            .catch(failure);

            function success(data) {
                req.response = data;
                next();
            }
        
            function failure(error) {
                next(error);
            }
        }catch(err){
            next(err)
        }

        

    }

    function getVentas(req, res, next) {

        VentaService.fetchVentas()
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(err) {
            next(err);
        }

    }

    function getVentaById(req, res, next) {

        VentaService.fetchVentaById(req.params.VentaId)
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(err) {
            next(err);
        }

    }

    function modifyVenta(req, res, next) {
        VentaService.updateVenta(req.params.VentaId, req.body)
            .then(success)
            .catch(error);

        function success(data) {
            req.response = data;
            next();
        }

        function error(err) {
            next(err);
        }
    }

    function removeVenta(req, res, next) {

        VentaService.deleteVenta(req.params.VentaId)
            .then(success)
            .catch(error);

        function success(data) {
            req.response = data;
            next();
        }

        function error(err) {
            next(err);
        }

    }

})();