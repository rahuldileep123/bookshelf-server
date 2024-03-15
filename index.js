BSServer.use(middleware)
BSServer.use(router)

BSServer.listen(PORT,()=>{
    console.log(`Book shelf server started at port ${PORT}`);
})