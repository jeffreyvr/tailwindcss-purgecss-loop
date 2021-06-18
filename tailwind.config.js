module.exports = {
    mode: 'jit',
    purge: {
        content: ['./*.php'], // infinite loop
        // content: ['./partials/*.php'], // works
    }
}