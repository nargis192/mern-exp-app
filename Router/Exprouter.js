const { Router} = require('express')
const router= Router()


const { save, get, update ,Delete} = require('../Controller/exp-controller');

// Define the route
router.get('/', get)
router.post('/save', save); // Corrected route path
router.post('/update', update);
router.post('/delete', Delete);


module.exports = router;
