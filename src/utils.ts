export const fakeFetchApi = (delay: number = 1000, dummyData: any | undefined) => {
    const prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!dummyData) {
                reject({ message: '[fakeFetchApi] reject promise (no dummy data)'});
            } else {
                resolve(dummyData);
            }
        }, delay);
    });

    return prom;
};

export function wrapPromise(promise: Promise<any>): {
    read: () => any;
} {
    let status = 'pending';
    let response: any;

    const suspender = promise.then(
        res => {
            status = 'success';
            response = res;
        },
        err => {
            status = 'error';
            response = err;
        },
    );

    return {
        read() {
            if (status === "pending") {
                throw suspender;
            } else if (status === "error") {
                throw response;
            } else if (status === "success") {
                return response;
            }
        },
    };
}