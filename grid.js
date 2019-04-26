let smartgrid = require('smart-grid');

let settings = {
    outputStyle: 'scss',
    columns: 12,
    offset: '30px',
    mobileFirst: false,
    container: {
        maxWidth: '1170px',
        fields: '15px'
    },
    breakPoints: {
        lg: {
            width: '1200px'
        },
        md: {
            width: '992px'
        },
        sm: {
            width: '768px'
        },
        xs: {
            width: '576px'
        },
        xxs: {
            width: '360px'
        }
    }
};

smartgrid('./src/sass/sass_components', settings);