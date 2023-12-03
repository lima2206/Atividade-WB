import promptSync from 'prompt-sync'

export default class Input {

    public receberTexto(mensagem: string): string {

        let prompt = promptSync()
        let texto = prompt(mensagem)
        return texto
    }

    public receberNumero(mensagem: string): number {
        let prompt = promptSync()
        let numero = parseInt(prompt(mensagem))
        return numero
    }

}

