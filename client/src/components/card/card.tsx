import  { useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { IconButton } from '@mui/material';
import {Translation} from "../../api/api"

import './cards.css'

interface BasicCardProps {
  wordData: Translation;
}

const BasicCard: React.FC<BasicCardProps> = ({ wordData }) => {
  const [flipped, setFlipped] = useState(false);
  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div > 

        {!flipped ? 
        <>
        <Card sx={{ minWidth: 275, maxWidth:275, marginTop: '25px', height: 270, display:'flex'}} >
        <CardContent sx={{width:'90%'}}>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
            {wordData.head}
            </Typography>
            <Typography variant="h5" component="div">
            {wordData.word}
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{wordData.type}</Typography>
            <Typography variant="body2">
            {wordData.description}
            <br />
            {wordData.example}
            </Typography>
        </CardContent>
        <IconButton sx={{width:'10%',position:'relative', borderRadius:0}} onClick={handleFlip}> <ArrowForwardIcon/> </IconButton>
        </Card> 
        </> 


        : 


        <> 
        <Card sx={{ minWidth: 275, maxWidth:275, marginTop: '25px', height: 270, display:'flex' }} >
        <CardContent sx={{width:'90%'}}>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
            {wordData.translation_head}
            </Typography>
            <Typography variant="h5" component="div">
            {wordData.translation_word}
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{wordData.translation_type}</Typography>
            <Typography variant="body2">
            {wordData.translation_description}
            <br />
            {wordData.translation_example}
            </Typography>
        </CardContent>
        <IconButton  sx={{width:'10%',position:'relative', borderRadius:0}} onClick={handleFlip}> <ArrowForwardIcon/> </IconButton>
        </Card> 
        </>
        
        }

    </div>
  );
}

export default BasicCard;