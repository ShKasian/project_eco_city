// // InitiativeDetailsPage.js
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios'; // Импортируйте Axios
// import { BASE_URL } from './constants'; // Замените на ваш URL-адрес сервера

// function InitiativeComentsPage() {
//   const { id } = useParams();
//   const [card, setCard] = useState(null);
//   const [comments, setComments] = useState([]);

//   useEffect(() => {
//     // Запрос данных о карточке
//     axios
//       .get(`${BASE_URL}/cards/${id}`)
//       .then((response) => {
//         setCard(response.data);
//       })
//       .catch((error) => {
//         // Обработка ошибки
//       });

//     // Запрос комментариев
//     axios
//       .get(`${BASE_URL}/cards/${id}/comments`)
//       .then((response) => {
//         setComments(response.data);
//       })
//       .catch((error) => {
//         // Обработка ошибки
//       });
//   }, [id]);

//   return (
//     <div>
//       {card && (
//         <div>
//           <h1>{card.title}</h1>
//           <p>{card.body}</p>
//         </div>
//       )}
//       {comments.map((comment) => (
//         <div key={comment.id}>
//           <p>{comment.text}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default InitiativeDetailsPage;
