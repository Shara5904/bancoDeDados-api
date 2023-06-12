const express= require('express');

const router = express.Router();
router.use(express.json());


router.get('/', (req, res) => {
    res.send(`GET ALL`);
});

router.get('/:id', (req, res) => {
    res.send(`GET ID: ${req.params.id}`);
});

router.get('/:matricula/:matricula', (req, res) => {
    res.send(`GET matricula: ${req.params.matricula}`);
});

router.put('/:id', (req, res) => {//atualizar
    res.send(`PUT: ${req.body}`);
});

router.post('/', (req, res) => {//salvar
    res.send(`POST: ${req.body}`);
});

router.delete('/:id', (req, res) => {//deletar
    res.send(`DELETE: ${req.body}`);
});

module.exports = router;