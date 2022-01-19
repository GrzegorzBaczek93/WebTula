
export const encodeRequestBody = data => {
    return Object.keys(data)
        .filter((key) => {
            if (key === null || data[key] === null) {
                return false;
            } else {
                return true;
            }
        })
        .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
};