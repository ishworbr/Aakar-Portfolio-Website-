
export const isEmail = (val) => /\S+@\S+\.\S+/.test(val);
export const isPhone = (val) => /^[0-9+\-()\s]{6,}$/.test(val);
