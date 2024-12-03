const { startServer } = require('./server');

const start = async () => {
    await startServer();
};

start()
    .then(() => {
        console.log('Done');
    })
    .catch((error) => {
        console.error(error);
    });
