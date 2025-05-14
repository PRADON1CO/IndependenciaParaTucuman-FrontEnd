
export const listarPrsonas = async ()=> {
    try{
        const respuesta = await fetch ('http://localhost:3000/personas');
        return respuesta;
    }catch(error){
        console.error(error)
    }
}


export const crearPersona = async(personaNueva)=>{
    try{
        const respuesta = await fetch ('http://localhost:3000/personas',{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(personaNueva)
        });
        return respuesta;
    }catch(error){
        console.error(error)
    }
};

