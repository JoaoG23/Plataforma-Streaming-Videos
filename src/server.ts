import app from './app';

app.listen(process.env.PORT_SERVER || 3210, () => {
    console.info(`API Streaming rodando ambiente de ${process.env.NODE_ENV} rodando na porta : ${process.env.PORT_SERVER}`)
});