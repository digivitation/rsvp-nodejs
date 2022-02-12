import snakecaseKeys from 'snakecase-keys';

export function build(status, message, data) {
    if (message == null) message = status;
    if (data != null) {
        data = JSON.parse(JSON.stringify(data));
        data = snakecaseKeys(data);
    }
    else data = null;
    return {
        status: status,
        message: message,
        data: data
    }
}