function getName():string | number {
    if (Math.random() < 0.5) {
        return "CodeGorgeous"
    }
    return 500
}

console.log(getName())