function eventLoop() {
    console.log("A")

    setTimeout(()=> {
        console.log("B")
    }, 1000)

    console.log("C")
}

eventLoop()