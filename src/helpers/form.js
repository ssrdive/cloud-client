import { apiAuth } from '../basara-api';

export const loadDropdownGeneric = async (type, name, setForm) => {
    try {
        const response = await apiAuth.get(`/dropdown/${type}`);
        setForm(prevForm => {
            const updatedForm = {
                ...prevForm,
                [name]: { ...prevForm[name], options: response.data, value: response.data[0].id },
            };
            return updatedForm;
        });
    } catch (err) {
        console.log(err);
    }
};

export const loadDropdownAccountGeneric = async (type, name, where, value, setForm) => {
    try {
      //  const response = await apiAuth.get(`/dropdown/condition/accounts/${type}/${where}/${value}`);
      const response = await apiAuth.get(`/dropdown/condition/marksale/${type}/${where}/${value}`);
        setForm(prevForm => {
            const updatedForm = {
                ...prevForm,
                [name]: { ...prevForm[name], options: response.data, value: response.data[0].id },
            };
            return updatedForm;
        });
    } catch (err) {
        console.log(err);
    }
};

export const loadDropdownConditionalGeneric = async (type, name, where, value, setForm) => {
    try {
        const response = await apiAuth.get(`/dropdown/condition/${type}/${where}/${value}`);
        setForm(prevForm => {
            const updatedForm = {
                ...prevForm,
                [name]: { ...prevForm[name], options: response.data, value: response.data[0].id },
            };
            return updatedForm;
        });
    } catch (err) {
        console.log(err);
    }
};

export const loadDropdownAccountWithChildGeneric = async (type, name, child_type, child_name, child_where, where, value, setForm) => {
    try {
        const response = await apiAuth.get(`/dropdown/condition/accounts/${type}/${where}/${value}`);
        setForm(prevForm => {
            const updatedForm = {
                ...prevForm,
                [name]: { ...prevForm[name], options: response.data, value: response.data[0].id },
            };
            return updatedForm;
        });
        loadDropdownAccountGeneric(child_type, child_name, child_where, response.data[0].id, setForm);
    } catch (err) {
        console.log(err);
    }
};

export const loadOptionalDropdownGeneric = async (type, name, label, setForm) => {
    try {
        const response = await apiAuth.get(`/dropdown/${type}`);
        setForm(prevForm => {
            const updatedForm = {
                ...prevForm,
                [name]: { ...prevForm[name], options: [{ id: "", name: `Select ${label}`},...response.data], value: "" },
            };
            return updatedForm;
        });
    } catch (err) {
        console.log(err);
    }
};
