import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

const Package = ({ items }) => {
    console.log(items);
    return (
        <div className="flex">
            <Card>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={items?.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {items?.tourName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions className="flex-grow">
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default Package;