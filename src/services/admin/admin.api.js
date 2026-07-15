import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3008/api/admin",
    withCredentials: true
});

// Dashboard

export const getDashboard = async () => {
    try{
        const res = await api.get("/dashboard");
        return res.data;
    } catch(err){
        console.log(err);
        throw err;
    }
};

// Entities

export const getEntities = async () => {
    try{
        const res = await api.get("/entities");
        return res.data.entities;
    } catch(err){
        console.log(err);
    }
};

export const createEntity = async (entity) => {
    try{
        const res = await api.post("/entities", entity);
        return res.data;
    } catch(err){
        console.log(err);
    }
};

export const updateEntity = async (id, entity) => {
    try{
        const res = await api.put(`/entities/${id}`, entity);
        return res.data;
    } catch(err){
        console.log(err);
    }
};

export const deleteEntity = async (id) => {
    try{
        const res = await api.delete(`/entities/${id}`);
        return res.data;
    } catch(err){
        console.log(err);
    }
};

// Users

export const getUsers = async()=>{
    try{
        const res = await api.get("/users");
        return res.data.users;
    } catch(err){
        console.log(err);
    }
};

export const updateUserRole = async(id,role)=>{
    try{
        const res = await api.put(`/users/${id}`, {role});
        return res.data;
    } catch(err){
        console.log(err);
    }
};

export const deleteUser = async (id) => {
    try{
        const res = await api.delete(`/users/${id}`);
        return res.data;
    } catch(err){
        console.log(err);
    }  
};