export default class FormatarData {

    public formatarData = (data: string): Date => {

        let dataF = data.split('/')
        let dia = parseInt(dataF[0])
        let mes = parseInt(dataF[1])
        let ano = parseInt(dataF[2])
        let date = new Date(ano, mes-1, dia)

        return date

    }

    public dateToString = (data: Date): string => {

        let dia = data.getDate()
        let mes = data.getMonth()
        let ano = data.getFullYear()
        let date = `${dia}/${mes + 1}/${ano}`
        
        return date
        
    }

}