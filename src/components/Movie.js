import React from 'react';
import { Grid, Typography } from '@mui/material';
import { IMAGES_PATH } from '../config';
import { styled } from "@mui/system";

const GridStyled = styled(Grid)(({ theme }) => ({
    marginTop: theme.spacing(3),


}));
const ImgStyled = styled('img')({
    width: '100%',

})
const Movie = ({ movie }) => {
    return (
        <GridStyled container={true} spacing={2}>
            <Grid item={true} md={3}>
                {
                    movie.poster_path ?
                        <ImgStyled src={`${IMAGES_PATH}/w300${movie.poster_path}`}
                            alt={movie.title}
                        />
                        :
                        <ImgStyled />
                }
            </Grid>
            <Grid item={true} md={9}>
                <Typography component={"h1"} variant="h3">
                    {movie.title}
                </Typography>
                <Typography component={"h3"} variant='h6'> Tagline:

                </Typography>
                <Typography variant="body1">
                    {movie.tagline}
                </Typography>
                {movie.overview && (<>
                    <Typography component={"h3"} variant='h6'> Overview:

                    </Typography>
                    <Typography variant="body1">
                        {movie.overview
                        }
                    </Typography>
                </>
                )
                }
                {movie.genres && (<>
                    <Typography component={"h3"} variant='h6'> Genre:

                    </Typography>
                    <Typography variant="body1">
                        {movie.genres
                            .map((genre) => genre.name)
                            .join(",")}
                    </Typography>
                </>
                )
                }
                {movie.release_date && (<>
                    <Typography component={"h3"} variant='h6'> Relase Date:

                    </Typography>
                    <Typography variant="body1">
                        {movie.release_date
                        }
                    </Typography>
                </>
                )
                }
                {movie.vote_average && (<>
                    <Typography component={"h3"} variant='h6'> Avarage Vote:

                    </Typography>
                    <Typography variant="body1">
                        {movie.vote_average
                        }
                    </Typography>
                </>
                )
                }
            </Grid>

        </GridStyled>

    );
};

export default Movie;