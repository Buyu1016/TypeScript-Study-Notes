const compoutedSize = (size: number, data: any) => {
    let arr: any[] = [];
    
    for (let i = 0; i < size; i++) {
        if (typeof data !== 'object') {
            arr = [...arr, data]
        } else {
            const val: any[] = [...data]
            arr = [...arr, val]
        }
    }
    return arr;
};

export default compoutedSize;