
export  const onChange = (setter:(value: string) => void) => {

    return (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        
                setter(value ? parseFloat(value) : 0)
    }
}