import snakecaseKeys from 'snakecase-keys';

export function buildResponse(data, responseKey) {
    return {
        response_key: responseKey,
        data: snakecaseKeys(data).data_values
    }
}