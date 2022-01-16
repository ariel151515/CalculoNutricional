/*
Factor de actividad
---------------------
Poco o ningun ejercicio 1.2
Ejercicio ligero (1-3 d/sem) 1.4
Ejercicio Moderado (3-5 d/sem) 1.6
Ejercicio Fuerte (6-7 d/sem) 1.8
Ejercicio Muy Fuerte (doble) 2

*/

class CalculoNutricional {
    constructor (nombre, edad, peso, factorDeActividad, porcentaje) {
      this.nombre = nombre;
      this.edad = edad;
      this.peso = peso;
      this.actividad = factorDeActividad;
      this.porcentaje = porcentaje
    }
    
    
    tmb() { // Calcula tu taza metabolica basal, consumo minimo calorico
      return this.peso * 22 * this.actividad
    }
    
    superHabitCalorico() { // Aumento de calorias
      let tmb = this.peso * 22 * this.actividad;
      let sumaDeCalorias =  tmb * this.porcentaje / 100;
      return tmb + sumaDeCalorias;
    }
    
    deficitCalorico() { // Disminuye calorias
      let tmb = this.peso * 22 * this.actividad;
      let sumaDeCalorias =  tmb * this.porcentaje / 100;
      return  tmb - sumaDeCalorias;
    }
    
    // Recibe porcentaje y devuelve cantidad en gramos de nutrientes
    nutricionEnPorcentajes(calorias,porcentajePro,porcentajeGras,porcentajeCar) {
       let macros = {
         proteinas: 4,
         carbohidratos: 4,
         grasas: 9
    }
    
      let recibo = {
        calorias:calorias,
        porcentajePro:porcentajePro,
        porcentajeGras:porcentajeGras,
        porcentajeCar:porcentajeCar
      }
    
      let devuelto = {
        calorias:calorias,
        proteinas: calorias * porcentajePro / 100 / macros.proteinas,
        carbohidratos: calorias * porcentajeCar / 100 / macros.carbohidratos,
        grasas: calorias * porcentajeGras / 100 / macros.grasas
      }
    
      return devuelto;
  
    }
    
  }
  
  // nombre, edad, peso, factorDeActividad, porcentaje de calorias que queres aumentar o disminuir
  const ariel = new CalculoNutricional('nombre', 33, 66, 1.6, 20) 
  
  ariel.tmb()
  ariel.superHabitCalorico()
  ariel.deficitCalorico()
  ariel.nutricionEnPorcentajes(2787,25,35,40) // calorias,porcentajePro,porcentajeGras,porcentajeCar
  
