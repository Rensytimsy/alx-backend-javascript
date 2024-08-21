const displayMessage = (mssg) => {
    process.stdout.write(mssg, '\n')
    return mssg
}


displayMessage("Hello world");