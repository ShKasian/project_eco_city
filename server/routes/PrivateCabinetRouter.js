const express = require('express');
const { User } = require('../db/models');

const PrivateCabinetRouter = express.Router();

PrivateCabinetRouter.get('/:id', async (req, res) =>{
    const userPrivateCabinetRouter = await User.findOne({where: {id: req.session.id}})
    res.json(userPrivateCabinetRouter)
})

PrivateCabinetRouter.post('/:id', upload.single('file'), async (req, res) => {

    try {
        const { id } = req.params;
        const { userName, img } = req.body;

        const checkUser = await User.findOne({ where: { id } });

        if (checkUser) {
          






        }
        const name = `${Date.now()}.webp`;

        const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();

        await fs.writeFile(`./public/img/${name}`, outputBuffer);


        const data = await Post.create({
            title,
            description,
            price,
        });
        res.status(200).json(data);
    } catch (error) {
        console.error("Ошибка при добавлении поста:", error);
    }
});

module.exports = PrivateCabinetRouter;
