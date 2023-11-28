import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Rating } from "@smastrom/react-rating";

const MeetOurGuide = ({ guideCo }) => {
    return (
        <div className="flex mb-5">
            <Card>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={guideCo?.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {guideCo?.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">{guideCo?.details}</Typography>
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={guideCo.rating}
                        readOnly
                    />
                </CardContent>
                <CardActions className="flex-grow">
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default MeetOurGuide;