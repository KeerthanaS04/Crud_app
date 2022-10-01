import axios from "axios";

export const getNames = async () => {
    return await axions.get('${process.env.REACT_APP_API}');
};

export const createName=async(name) => {
    return await axios.post('${process.env.REACT_APP_API}',name)
};

export const getName = async(id) => {
    return await axios.get('${process.env.REACT_APP_API}/${id}');
};

export const removeName = async(id) => {
    return await axios.delete('${process.env.REACT_APP_API}/${id}');
};

export const updateName =async(id,name) => {
    return await axios.delete('${process.env.REACT_APP_API}/${id}', name);
};