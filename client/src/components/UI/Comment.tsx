// import * as React from 'react';
// import axios from 'axios';
// import { Link, useParams } from 'react-router-dom';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea, CardActions } from '@mui/material';
// import { useAppSelector } from '../../features/redux/hooks';
// i;
// import type { OneCardInitiativeComTypesFormType } from '../../types/oneInitiativeTypes';
// import { useAppDispatch } from 'src/hooks/reduxHooks';
// import { getInitiativeThunk } from 'src/features/redux/thunkActions/initiativeThunkActions';

// export type OneCardInitiativeComPropsType = {
//   initiative: OneCardInitiativeComTypesFormType;
// };

// export default function oneCardInitiativeCom({
//   initiative,
// }: OneCardInitiativeComPropsType): JSX.Element {
//   const initiatives = useAppSelector((store) => store.initiatives);
//   const dispatch = useAppDispatch();
//   const { id } = useParams();
//   useEffect(() => {
//     dispatch(getInitiativeThunk());
//   }, []);

//   return (
//     <Card sx={{ maxHeight: 'auto', maxWidth: 600 }}>
//       <CardActionArea>
//         <CardMedia
//           sx={{ objectFit: 'cover', height: '250px' }}
//           component="img"
//           image={initiative.img}
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             {initiative.name}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {initiative.body}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Typography variant="body2" color="text.secondary">
//           oneCardInitiativeCom
//           {initiative.createdAt}
//         </Typography>
//       </CardActions>
//     </Card>
//   );
// }

// // <Link to={`/initiative/${id}`}>
// // </Link>
