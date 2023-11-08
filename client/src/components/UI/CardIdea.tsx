import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import type { CardIdeaType } from '../../types/ideaTypes'

export type CardIdeaPropsType = {
  ideas: CardIdeaType;
};

export default function CardIdea({ ideas }: CardIdeaPropsType): JSX.Element {
  return (
    <Card sx={{ maxHeight: 'auto', maxWidth: 400, margin: "2rem"  }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {ideas.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {ideas.body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
