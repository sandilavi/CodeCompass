import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const LinkCard = ({ image, title, description, href }) => {
    return (
        <Card maxWidth={1000} sx={{ margin: '5px 0 10px 0' }}>
            <CardActionArea href={href} target="_blank" rel="noopener noreferrer">
                <CardMedia component="img" image={image} height="300" title={title} />
                <CardContent>
                    <Typography variant="h2" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" fontWeight="400" fontSize="20px" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default LinkCard;