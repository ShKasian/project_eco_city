// /* eslint-disable import/newline-after-import */
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Box, CardActionArea, CardActions } from '@mui/material';
// import type {
//   ComentInitiativeTypesFormType,
//   ComentInitiativeTypes,
// } from 'src/types/comentInitiativeTypes';

// export type CardComentPropsType = {
//   comentInitiative: ComentInitiativeTypes;
// };

// export default function CardNews({ comentInitiative }: CardComentPropsType): JSX.Element {
//   return (
//     <Card sx={{ maxHeight: 'auto', maxWidth: 600 }}>
//       <CardContent>
//       </Typography>
//       <Box
//         sx={{
//           display: 'flex',
//         }}
//       >
//         <Grid container spacing={2}>
//           <Avatar
//             //   alt=""
//             //   src=""

//             sx={{ width: 250, height: 250 }}
//           />
//         <CardActionArea>
//         <CardMedia
//           sx={{ objectFit: 'cover', height: '250px' }}
//           component="img"
//           image={comentInitiative.img}
//         />

//           <Typography gutterBottom variant="h5" component="div">
//             {comentInitiative.name}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {comentInitiative.body}
//           </Typography>

//       </CardActionArea>
//       <CardActions>
//         <Typography variant="body2" color="text.secondary">
//           {comentInitiative.createdAt}
//         </Typography>
//       </CardActions>
//      </Grid>
//     </Card>
//     </Box>
//   );
// }
