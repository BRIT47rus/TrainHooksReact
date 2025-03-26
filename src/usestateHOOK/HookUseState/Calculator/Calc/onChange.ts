
export  const onChange = (setter:(value: number) => void) => {

    return (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        
                setter(value ? parseFloat(value) : 0)
    }
}