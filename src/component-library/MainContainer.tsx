import { Box, Container, Grid } from '@mui/material';
import React from 'react';

const MainContainer: React.FC = (): JSX.Element => {
    return (
        <Container
            maxWidth={false}
            sx={{
                marginTop: '20px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px'
            }}
        >
            <Box
                sx={{
                    minWidth: '500px',
                    padding: '10px',
                    border: '1px solid black'
                }}
            >
                <Grid
                    container
                    spacing={24}
                >
                    <Grid item>
                        <p>Application ID:</p>
                    </Grid>
                    <Grid item>
                        <p>1274356</p>
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={14}
                >
                    <Grid item>
                        <p>Full Name from passport:</p>
                    </Grid>
                    <Grid item>
                        <p>Albert A. Huxley</p>
                    </Grid>
                </Grid>
            </Box>
            <Box
                sx={{
                    minWidth: '500px',
                    padding: '10px',
                    border: '1px solid black'
                }}
            >
                <Grid
                    container
                    spacing={24}
                >
                    <Grid item>
                        <p>Application ID:</p>
                    </Grid>
                    <Grid item>
                        <p>1274356</p>
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={14}
                >
                    <Grid item>
                        <p>Full Name from passport:</p>
                    </Grid>
                    <Grid item>
                        <p>Albert A. Huxley</p>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default MainContainer;