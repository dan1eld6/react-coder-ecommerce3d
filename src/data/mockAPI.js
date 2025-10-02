import printers from '../data/printersdb'
// import filaments from '../data/filamentsdb'

export const getPrinters = () => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve(printers);
            }, 500);
        } catch (error) {
            reject("Error al obtener las impresoras");
        }
    });
}

// export const getFilaments = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => { resolve(filaments) }, 500)
//     })
// }

export const getPrintersByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                const filtered = printers.filter(
                    (p) => p.category === categoryId
                );
                resolve(filtered);
            }, 500);
        } catch (error) {
            reject("Error al filtrar por categoría");
        }
    });
}

// export const getFilamentsByCategory = (categoryId) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(filaments.filter(filament => filament.category === categoryId))
//         }, 500)
//     })
// }


export const getPrinterById = (id) => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                const printer = printers.find((p) => String(p.id) === String(id));
                if (printer) {
                    resolve(printer);
                } else {
                    reject(`No se encontró la impresora con id ${id}`);
                }
            }, 500);
        } catch (error) {
            reject("Error al buscar la impresora");
        }
    });
}
