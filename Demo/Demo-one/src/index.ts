let myName: string = 'CodeGorgeous'

function pr() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(1)
            console.log('Hello Ts')
        }, 1000)
    })
}

pr()
