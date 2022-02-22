import instance from "./instance";

export const getAll = () => {
    const url = "/products";
    return instance.get(url);
}

export const get = (id) => {
    const url = `/products/${id}`;
    return instance.get(url);
}

export const add = (post) => {
    const url = `/products`;
    return instance.post(url, post);
}
export const remove = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url);
}
export const update = (post) => {
    const url = `/products/${post.id}`;
    return instance.put(url, post);
}



export const getAllCate = () => {
    const url = "/categorys";
    return instance.get(url);
}

export const getCate = (id) => {
    const url = `/categorys/${id}?_embed=products`;
    return instance.get(url);
}
export const addCate = (post) => {
    const url = `/categorys`;
    return instance.post(url, post);
}
export const removeCate = (id) => {
    const url = `/categorys/${id}`;
    return instance.delete(url);
}
export const updateCate = (post) => {
    const url = `/categorys/${post.id}`;
    return instance.put(url, post);
}