import instance from "./instance";

export const signin = (user) => {
    const url = "/login";
    return instance.post(url, user);
};
export const signup = (user) => {
    const url = `/signup`;
    return instance.post(url, user);
};
export const getAll = () => {
    const url = "/users";
    return instance.get(url);
};
export const remove = (id) => {
    const url = `users/${id}`;
    return instance.delete(url);
};
export const get = (id) => {
    const url = `/users/${id}`;
    return instance.get(url);
}
export const update = (post) => {
    const url = `/users/${post.id}`;
    return instance.put(url, post);
}