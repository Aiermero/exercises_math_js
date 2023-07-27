console.log(salarios)

function encontrarPersona(personaEnBusqueda) {
    return salarios.find(persona => persona.name == personaEnBusqueda)
}

function medianaPorPersona(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos

    const salarios = trabajos.map(function(elemento){
        return elemento.salario
    })
    const medianaSalarios = Platzi_math.median(salarios)

    return medianaSalarios
}

function proyeccionPorPersona(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos

    let porcentajesCrecimiento = []

    for (i = 1; i < trabajos.length; i++) {
        const salarioActual = trabajos[i].salario

        const salarioPasado = trabajos[i-1].salario

        const crecimeinto = salarioActual - salarioPasado

        const porcentajeCrecimiento = crecimeinto/salarioPasado

        porcentajesCrecimiento.push(porcentajeCrecimiento)
    }
    console.log(porcentajesCrecimiento)
    const medianaPorcentajeCrecimiento = Platzi_math.median(porcentajesCrecimiento)
    const ultimoSalario = trabajos[trabajos.length -1].salario
    const aumento = ultimoSalario*medianaPorcentajeCrecimiento
    const nuevoSalario = aumento + ultimoSalario
    return nuevoSalario
}
const empresas = {}
salarios.forEach(persona => persona.trabajos.forEach(trabajo => {
    if(!empresas[trabajo.empresa]){
        empresas[trabajo.empresa] = {}
    }
    if(!empresas[trabajo.empresa][trabajo.year]){
        empresas[trabajo.empresa][trabajo.year] =[]
    }
    empresas[trabajo.empresa][trabajo.year].push(trabajo.salario)
    }
))

function encontrarEmpresa(empresaEnBusqueda) {
    return empresas[empresaEnBusqueda]
}
function medianaDeAnio(nombreEmpresa){
    const empresaElegida = Object.entries(encontrarEmpresa(nombreEmpresa))

    console.log(empresaElegida)
    const medianasEmpresa = []
    empresaElegida.forEach(element => medianasEmpresa.push(Platzi_math.median(element[1])))

    let porcentajesCrecimiento = []

    for (i = 1; i < medianasEmpresa.length; i++) {
        const salarioActual = medianasEmpresa[i]

        const salarioPasado = medianasEmpresa[i-1]

        const crecimeinto = salarioActual - salarioPasado

        const porcentajeCrecimiento = crecimeinto/salarioPasado

        porcentajesCrecimiento.push(porcentajeCrecimiento)
    }
    const medianaPorcentajeCrecimiento = Platzi_math.median(porcentajesCrecimiento)
    const ultimoSalario = medianasEmpresa[medianasEmpresa.length -1] 
    const aumento = ultimoSalario*medianaPorcentajeCrecimiento
    const nuevoSalario = aumento + ultimoSalario
    return nuevoSalario
}

function medianaGeneral () {
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name))
    
    const mediana = Platzi_math.median(listaMedianas)
    
    return mediana
}

function TopMedianas () {
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name))

    const medianasOrdenadas = listaMedianas.sort((a,b) => a-b)
    const cantidad = listaMedianas.length / 10
    const topDiez = []
    for (i = 0; i < cantidad; i++){
        topDiez.push(medianasOrdenadas.sort((a,b) => b-a)[i])
    } 

    const medianaTopDiez = Platzi_math.median(topDiez)
    return medianaTopDiez
}