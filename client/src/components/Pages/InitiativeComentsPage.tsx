import React, { useEffect, useState } from 'react';
import { OneCardInitiativeComPropsType } from 'src/types/oneCardInitiativeComTypes';
import { ComentInitiativeTypes } from '../../../types/comentInitiativeTypes';
import oneInitiative from '../UI/oneInitiative';
import oneCardInitiativeCom from '../UI/CardInitiative';
import AddFormInitiative from '../UI/AddFormInitiative';
import Layout from '../Layout';

export default function InitiativeComentsPage(): JSX.Element {
  const [isAdmin, _] = useState(false);
  return (
    <>
      <oneInitiative />
      {isAdmin && <AddFormInitiative />}
      <CardComentInitiative />
    </>
  );
}
