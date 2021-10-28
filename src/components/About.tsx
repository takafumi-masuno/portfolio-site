
import React from "react";
import { Box, Typography } from "@material-ui/core";

const About: React.FC = () => {
    return (
        <>
            <Box p={2}>
                <Box display='flex' justifyContent='center' p={1}>
                    <Typography variant='h6'>
                        ABOUT ME
                    </Typography>
                </Box>
                <Box display='flex' justifyContent='center' p={1}>
                    <Typography variant='subtitle1'>
                        NAME: TAKAFUMI MASUNO
                    </Typography>
                </Box>
                <Box display='flex' justifyContent='center' p={1}>
                    <Typography variant='body1' align='left'>
                        大阪出身、都内在住<br />
                        都内でWebエンジニアとして働いています。<br />
                        現在業務で使用している言語・フレームワークは、typescript・Reactです。
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

export default About;