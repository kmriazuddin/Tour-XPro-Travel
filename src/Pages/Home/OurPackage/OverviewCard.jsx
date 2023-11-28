import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";

const OverviewCard = ({ items }) => {
    return (
        <div>
            <div className="flex mb-5">
                <Card>
                    <iframe width="400" height="315" className="text-center m-auto" src={items?.src} title="YouTube video player" allow="fullscreen;"></iframe>
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
        </div>
    );
};

export default OverviewCard;