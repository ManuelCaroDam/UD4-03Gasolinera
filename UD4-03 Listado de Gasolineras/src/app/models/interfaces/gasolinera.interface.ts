export interface GasolinerasListResponse {
    fecha:             string;
    listaEESSPrecio:   Gasolinera[];
    nota:              string;
    resultadoConsulta: string;
}

export interface Gasolinera {
    cP:                             string;
    direccion:                      string;
    horario:                        string;
    municipio:                      string;
    precioGasoleoA:                 string;
    precioGasolina95E5:             string;
    precioGasolina98E5:             string;
    provincia:                      string;
    rotulo:                         string;
    ideess:                         string;
    idMunicipio:                    string;
    idProvincia:                    string;
    idccaa:                         string;
}