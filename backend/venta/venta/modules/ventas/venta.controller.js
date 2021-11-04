(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();


    var VentaMiddleware = require('./venta.module')().VentaMiddleware;

    /** 
    * @swagger 
    * /Ventas: 
    *   post: 
    *     description: Create an Employee 
    *     parameters: 
    *     - in: formData
    *       name: name
    *       type: string
    *       description: A person's name.
    *     - in: formData
    *       name: fav_number
    *       type: number
    *       description: A person's favorite number.
    *     - in: formData
    *       name: fav_number2
    *       type: number
    *       description: A person's favorite number.
    *     - in: formData
    *       name: fav_number3
    *       type: number
    *       description: A person's favorite number.
    *     responses:  
    *       201: 
    *         description: Created  
    *   
    */
    router.post('/',
        VentaMiddleware.addVenta,
        function (req, res) {
            res.status(201).json(req.response);
        });

    /** 
* @swagger 
* /Ventas: 
*   get: 
*     description: Get all Employee 
*     responses:  
*       200: 
*         description: Success  
*   
*/
    router.get('/',
        VentaMiddleware.getVentas,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/:idVenta',
        VentaMiddleware.getVentaById,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.put('/:idVenta',
        VentaMiddleware.modifyVenta,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.delete('/:idVenta',
        VentaMiddleware.removeVenta,
        function (req, res) {
            res.status(200).json(req.response);
        });
    module.exports = router;

})();