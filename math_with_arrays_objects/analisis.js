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
    console.log(salarios)
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