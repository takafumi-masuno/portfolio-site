
import React from "react";
import { Box, Card, CardContent, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: 730,
        maxWidth: '100%',
    },
});

const Skills: React.FC = () => {
    const classes = useStyles();

    return (
        <>
            <Box p={2}>
                <Box display='flex' justifyContent='center' p={1} >
                    <Typography variant='h5'>
                        Skills
                    </Typography>
                </Box>
                <Box display='flex' justifyContent='center' p={1} >
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography variant="h6">
                                言語
                            </Typography>
                            <Typography color="textSecondary">
                                JavaScript / TypeScript / Python
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
                <Box display='flex' justifyContent='center' p={1} >
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography variant="h6">
                                フレームワーク
                            </Typography>
                            <Typography color="textSecondary">
                                React
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </>
    )
}

export default Skills;