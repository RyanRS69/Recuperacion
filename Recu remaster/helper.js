class helper{
    static setToLocalStorage(parameter,data){
        localStorage.setItem(parameter,JSON.stringify(data));
    }

    static getToLocalStorage(parameter="pokemonesLocal"){
        let pokRecu=[];
        let data;
        if(localStorage.getItem(parameter)!=undefined){
            data=JSON.parse(localStorage.getItem(parameter));
            for(let i =0 ; i<data.length;i++){
                let listaLocal=new Pokemon(data[i].nombre,data[i].tipo,data[i].tipoComb);
                pokRecu.push(listaLocal);

            }
        }

        return listaLocal 
    }
}


