import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

const Package = ({ items }) => {
    console.log(items);
    return (
        <div className="flex mb-5">
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
                    <Typography variant="body2" color="text.secondary">{items?.details}</Typography>
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