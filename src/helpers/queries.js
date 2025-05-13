
export const listarClases = async ()=> {
    try{
        const respuesta = await fetch ('http://localhost:3000/personas');
        return respuesta;
    }catch(error){
        console.error(error)
    }
}


export const crearClase = async(claseNueva)=>{
    try{
        const respuesta = await fetch ('http://localhost:3000/personas',{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(claseNueva)
        });
        return respuesta;
    }catch(error){
        console.error(error)
    }
};

