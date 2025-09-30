import printers from '../data/printersdb'
// import filaments from '../data/filamentsdb'

export const getPrinters = () => {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(printers) }, 500)
    })
}

// export const getFilaments = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => { resolve(filaments) }, 500)
//     })
// }

export const getPrintersByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(printers.filter(printer => printer.category === categoryId))
        }, 500)
    })
}

// export const getFilamentsByCategory = (categoryId) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(filaments.filter(filament => filament.category === categoryId))
//         }, 500)
//     })
// }


export const getPrinterById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(printers.find(printer => printer.id === parseInt(id)))
        }, 500)
    })
}
