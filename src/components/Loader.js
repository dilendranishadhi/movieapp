import React from 'react';
import { CircularProgress } from '@mui/material';
import styled from '@emotion/styled';

const LoadWrapper = styled('div')(({theme})=>({
    display:'flex',
    justifyContent:'center',
    marginTop: theme.spacing(3)
}));


const Loader = () => {
    return (
        <LoadWrapper>
            <CircularProgress/>
        </LoadWrapper>
    );
};

export default Loader;