const model = {

    getElemByClass: className => document.querySelector(`.${className}`),
    getElemById: id => document.getElementById(id)
}

export default model;