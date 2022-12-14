const components = {
    responses: {
        401: {
            description: 'Unauthorized',
            schema: {
                $ref: '#/definitions/401',
            },
        },
        400: {
            description: 'Bad request',
            schema: {
                $ref: '#/definitions/400',
            },
        },
        404: {
            description: 'The resource was not found',
            schema: {
                $ref: '#/definitions/404',
            },
        },
        406: {
            description: 'Admin registration conflict. Admin already exists',
            schema: {
                $ref: '#/definitions/406',
            },
        },
        500: {
            description: 'Internal Server Error',
            schema: {
                $ref: '#/definitions/500',
            },
        },
    },
};

export default components;