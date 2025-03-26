

export const updateClick = (clicksCount:number) => {
    return new Promise((resolve) => {

        setTimeout(() => {
            resolve({
                success: true,
                clicksCount
            })
        }, 1000);

    })
}