import {Server} from 'socket.io';

const port = 8000;

const io = new Server(port,{
    cors:{
        origin:'http://localhost:3000',
        methods: ['GET','POST']
    }
});
io.on('connection',socket=>{
    socket.on('get-document',document=>{
        const data="";
        socket.join(document);
        socket.emit('load-document',data)
        socket.on('send-changes',delta=>{
            socket.broadcast.to(document).emit('receive-changes',delta);
        })
    })
    
    
});