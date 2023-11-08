import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import type { FactoryModelTypes } from 'src/types/factoryTypes';
import { Box, Button, CardActions, Modal } from '@mui/material';

export type FactoryPropsTypes = {
  factory: FactoryModelTypes;
};

const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function CardFactory({ factory }: FactoryPropsTypes): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (): void  => setOpen(true);
  const handleClose = (): void  => setOpen(false);
  return (
    <Card sx={{ maxWidth: 340, margin: '1rem' }}>
      <CardMedia
        sx={{ height: 190 }}
        component="img"
        src={`http://localhost:3001/img${factory.img}`}
      />
      <CardContent style={{ textAlign: 'center' }}>
        <Typography gutterBottom variant="h5" component="div">
          {factory.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {factory.description}
        </Typography>
      </CardContent>
      <CardActions >
        <Button onClick={handleOpen} >График работы</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              График работы
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
             Понедельник: 09:00 - 18:00
             <br/>
             Вторник: 09:00 - 18:00
             <br/>
             Среда: 09:00 - 18:00
             <br/>
             Четверг: 09:00 - 18:00
             <br/>
             Пятница: 09:00 - 18:00
             <br/>
             Суббота: выходной
             <br/>
             Воскресенье: выходной
            </Typography>
          </Box>
        </Modal>
      </CardActions>
    </Card>
  );
}

export default React.memo(CardFactory);
