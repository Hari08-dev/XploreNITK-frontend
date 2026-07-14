import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3008/api/admin",
    withCredentials: true
});

// Dashboard

export const getDashboard = async () => {
    try{
        const res = await api.get("/dashboard");
        console.log(res.data);
        return res.data;
    } catch(err){
        console.log(err);
        throw err;
    }
};

// Entities

export const getEntities = async () => {
    const res = await api.get("/entities");
    return res.data.entities;
};

export const createEntity = async (entity) => {
    const res = await api.post("/entities", entity);
    return res.data;
};

export const updateEntity = async (id, entity) => {
    const res = await api.put(`/entities/${id}`, entity);
    return res.data;
};

export const deleteEntity = async (id) => {
    const res = await api.delete(`/entities/${id}`);
    return res.data;
};

// Users

export const getUsers = async()=>{

    const res = await api.get("/users");

    return res.data.users;

};

export const updateUserRole = async(id,role)=>{
    const res = await api.patch(`/users/${id}`, {role});
    return res.data;
};

export const deleteUser = async (id) => {
    const res = await api.delete(`/users/${id}`);
    return res.data;
};