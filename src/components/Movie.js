import React from 'react';
import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { IMAGES_PATH } from '../config';

const GridStyled = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

const ImgStyled = styled('img')({
  width: '100%',
  borderRadius: '4px',
  objectFit: 'cover',
});

const LabelValueBlock = ({ label, value }) => (
  <>
    <Typography component="h3" variant="h6">{label}</Typography>
    <Typography variant="body1">{value}</Typography>
  </>
);

const Movie = ({ movie }) => {
  const {
    title,
    tagline,
    overview,
    genres,
    release_date,
    vote_average,
    poster_path
  } = movie;

  const posterSrc = poster_path ? `${IMAGES_PATH}/w300${poster_path}` : null;

  return (
    <GridStyled container spacing={2}>
      <Grid item xs={12} md={3}>
        <ImgStyled
          src={posterSrc || `${IMAGES_PATH}/placeholder.jpg`} // Optional fallback
          alt={title || 'Movie Poster'}
          loading="lazy"
        />
      </Grid>

      <Grid item xs={12} md={9}>
        <Typography component="h1" variant="h3">{title}</Typography>

        {tagline && <LabelValueBlock label="Tagline:" value={tagline} />}
        {overview && <LabelValueBlock label="Overview:" value={overview} />}
        {genres?.length > 0 && (
          <LabelValueBlock
            label="Genre:"
            value={genres.map((genre) => genre.name).join(', ')}
          />
        )}
        {release_date && <LabelValueBlock label="Release Date:" value={release_date} />}
        {vote_average !== undefined && <LabelValueBlock label="Average Vote:" value={vote_average} />}
      </Grid>
    </GridStyled>
  );
};

export default Movie;
