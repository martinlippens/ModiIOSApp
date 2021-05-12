import React from 'react';
import { Box } from '../../../UI';

const Left = (props) => {
    return (
        <Box marginLeft={5}>
            {props.children}
        </Box>
    );
}

export default Left;